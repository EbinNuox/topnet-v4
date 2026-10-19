// Keep one time-based animator for a sequence of mouse-wheel notches.
(() => {
  const root = document.scrollingElement;
  if (!root) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let target = null;
  let direction = 0;
  let frame = null;
  let position = 0;
  let previousTime = 0;
  let lastInputTime = 0;
  let maxScroll = 0;
  let scrollContainers = new WeakMap();
  const reset = () => {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    target = null;
    direction = 0;
  };
  const animate = (time) => {
    const elapsed = Math.min(64, Math.max(1, time - previousTime));
    previousTime = time;
    target = Math.min(target, maxScroll);
    position += (target - position) * (1 - Math.exp(-elapsed / 75));
    // Snap the last pixel and stop, even on browsers rounding scroll offsets.
    if (Math.abs(target - position) <= 1 || time - lastInputTime > 450) {
      window.scrollTo({top: target, behavior: 'instant'});
      reset();
      return;
    }
    window.scrollTo({top: position, behavior: 'instant'});
    frame = requestAnimationFrame(animate);
  };

  window.addEventListener('wheel', (event) => {
    if (event.defaultPrevented || !event.cancelable || event.ctrlKey || event.metaKey ||
        reducedMotion.matches || !event.deltaY || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
    // Fine-grained trackpad gestures already have native momentum.
    if (event.deltaMode === 0 && Math.abs(event.deltaY) < 16) {
      reset();
      return;
    }
    const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1);
    let containers = scrollContainers.get(event.target);
    if (!containers) {
      containers = [];
      for (let element = event.target; element instanceof Element && element !== root; element = element.parentElement) {
        if (['auto', 'scroll', 'overlay'].includes(getComputedStyle(element).overflowY)) containers.push(element);
      }
      scrollContainers.set(event.target, containers);
    }
    for (const element of containers) {
      const remaining = delta > 0
        ? element.scrollHeight - element.clientHeight - element.scrollTop
        : element.scrollTop;
      if (remaining > 1) { reset(); return; }
    }
    const current = window.scrollY;
    const nextDirection = Math.sign(delta);
    if (frame === null || nextDirection !== direction) {
      target = current;
      position = current;
    }
    direction = nextDirection;
    maxScroll = Math.max(0, root.scrollHeight - window.innerHeight);
    target = Math.max(0, Math.min(maxScroll, target + delta));
    if (Math.abs(target - current) <= 1) { reset(); return; }
    event.preventDefault();
    lastInputTime = performance.now();
    if (frame === null) {
      previousTime = lastInputTime - 16;
      frame = requestAnimationFrame(animate);
    }
  }, {passive: false});

  // Internal per-frame writes can emit scrollend; only user input cancels.
  window.addEventListener('pointerdown', reset, {passive: true});
  window.addEventListener('touchstart', reset, {passive: true});
  window.addEventListener('keydown', reset);
  window.addEventListener('hashchange', reset);
  window.addEventListener('resize', () => {
    reset();
    scrollContainers = new WeakMap();
  }, {passive: true});
})();
