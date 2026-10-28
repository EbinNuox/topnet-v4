const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const listeners = {};
const calls = [];
const frames = new Map();
let clock = 0;
let frameId = 0;
let reduced = false;
class Element { constructor() { this.parentElement = null; this.scrollHeight = 0; this.clientHeight = 0; } }
const root = new Element();
root.scrollHeight = 3000;
const window = {
  scrollY: 500, innerHeight: 800,
  matchMedia: () => ({ get matches() { return reduced; } }),
  addEventListener: (name, handler) => { listeners[name] = handler; },
  scrollTo: options => { calls.push(options); window.scrollY = Math.round(options.top); },
};
vm.runInNewContext(fs.readFileSync('wheel-scroll.js', 'utf8'), {
  window, document: {documentElement: root, scrollingElement: root}, Element,
  getComputedStyle: e => ({overflowY: e.overflow || 'visible'}),
  performance: {now: () => clock},
  requestAnimationFrame: cb => { frames.set(++frameId, cb); return frameId; },
  cancelAnimationFrame: id => frames.delete(id),
});
const settle = () => {
  let count = 0;
  while (frames.size && count++ < 100) {
    clock += 16;
    const batch = [...frames.values()]; frames.clear();
    batch.forEach(cb => cb(clock));
  }
  assert.equal(frames.size, 0, 'animation terminates with integer scroll positions');
};
const wheel = (overrides = {}) => {
  const e = {deltaY: 100, deltaX: 0, deltaMode: 0, cancelable: true,
    target: root, preventDefault() { this.prevented = true; }, ...overrides};
  listeners.wheel(e);
  return e;
};
assert.equal(wheel().prevented, true);
wheel();
assert.equal(frames.size, 1, 'rapid input uses one continuous animator');
settle();
assert.equal(window.scrollY, 700, 'rapid wheel input accumulates');
assert.ok(calls.length > 2, 'movement is spread across frames');
assert.ok(calls.every(call => call.behavior === 'instant'), 'native smooth scrolling is not restarted per notch');
const current = window.scrollY;
wheel({deltaY: -100});
settle();
assert.equal(window.scrollY, current - 100, 'reversing starts from current position');
wheel({deltaY: 100.5});
settle();
assert.equal(window.scrollY, 701, 'fractional wheel deltas do not stall');
assert.equal(wheel({deltaY: 3.5}).prevented, undefined, 'trackpad stays native');
assert.equal(wheel({ctrlKey: true}).prevented, undefined, 'zoom stays native');
reduced = true;
assert.equal(wheel().prevented, undefined, 'respects reduced motion');
reduced = false;
const menu = new Element();
Object.assign(menu, {scrollHeight: 600, clientHeight: 200, scrollTop: 0, overflow: 'auto', parentElement: root});
assert.equal(wheel({target: menu}).prevented, undefined, 'nested panels scroll normally');
listeners.pointerdown();
window.scrollY = 2200;
assert.equal(wheel().prevented, undefined, 'page boundary does not capture input');
window.scrollY = 500;
wheel();
listeners.pointerdown();
assert.equal(frames.size, 0, 'pointer input cancels pending animation');
console.log('Wheel easing checks passed');
