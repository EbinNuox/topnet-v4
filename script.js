const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const servicesButton = document.querySelector('.services-link');
const servicesMenu = document.querySelector('.services-menu');
const languageButton = document.querySelector('.language-button');
const languageMenu = document.querySelector('.language-menu');
const languageOptions = document.querySelectorAll('.language-option');
const siteCursor = document.querySelector('.site-cursor');

if (siteCursor && window.matchMedia('(hover:hover) and (pointer:fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let cursorX = window.innerWidth / 2;
  let cursorY = window.innerHeight / 2;
  let renderedX = cursorX;
  let renderedY = cursorY;
  let cursorFrame = null;

  const renderCursor = () => {
    renderedX += (cursorX - renderedX) * 0.22;
    renderedY += (cursorY - renderedY) * 0.22;
    siteCursor.style.left = `${renderedX.toFixed(2)}px`;
    siteCursor.style.top = `${renderedY.toFixed(2)}px`;
    cursorFrame = requestAnimationFrame(renderCursor);
  };

  const startCursor = () => {
    siteCursor.classList.add('is-visible');
    if (cursorFrame === null) cursorFrame = requestAnimationFrame(renderCursor);
  };

  document.addEventListener('mousemove', (event) => {
    cursorX = event.clientX;
    cursorY = event.clientY;
    startCursor();
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    siteCursor.classList.remove('is-visible');
  });

  document.addEventListener('mouseover', (event) => {
    siteCursor.classList.toggle('is-hovering', Boolean(event.target.closest('a, button, input, textarea, .service-icon, .cloud-node, .feature-card, .insight-card')));
  });
}

const serviceContent = {
  connectivity: ['Connectivity Services', 'Internet Connectivity', 'Data Connectivity', 'SD-WAN Connectivity', 'VPN Connectivity'],
  clouding: ['Clouding Services', 'Rayadah Cloud', 'Public Clouds'],
  hosting: ['Hosting Services', 'Web Hosting', 'Email Hosting', 'DNS Hosting', 'Saudi Domain Registration'],
  colocation: ['Co-Location Services', 'Secured Cage', 'Dedicated Rack', 'Shared Rack', 'Bare Metal Servers'],
  cybersecurity: ['Cybersecurity Services', 'Managed Security', 'Security Consulting'],
  security: ['Security Services', 'Network Security', 'Endpoint Security', 'Identity Security', 'Data Security'],
  professional: ['Professional Services', 'Collaboration', 'Low Current', 'IT Consulting', 'Infrastructure Projects'],
  managed: ['Managed Services', 'Infrastructure', 'Cybersecurity', 'Service Desk'],
};

const setServicesMenu = (open) => {
  servicesButton?.setAttribute('aria-expanded', String(open));
  servicesMenu?.setAttribute('aria-hidden', String(!open));
  servicesMenu?.classList.toggle('open', open);
};

const setLanguageMenu = (open) => {
  languageButton?.setAttribute('aria-expanded', String(open));
  languageMenu?.setAttribute('aria-hidden', String(!open));
  languageMenu?.classList.toggle('open', open);
};

servicesButton?.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  setServicesMenu(servicesButton.getAttribute('aria-expanded') !== 'true');
});

servicesButton?.addEventListener('mouseenter', () => {
  if (window.innerWidth > 1000) setServicesMenu(true);
});

document.querySelector('.site-header')?.addEventListener('mouseleave', () => {
  if (window.innerWidth > 1000) setServicesMenu(false);
});

languageButton?.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  setLanguageMenu(languageButton.getAttribute('aria-expanded') !== 'true');
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.services-menu') && !event.target.closest('.services-link')) setServicesMenu(false);
  if (!event.target.closest('.language-dropdown')) setLanguageMenu(false);
});

languageOptions.forEach((option) => {
  option.addEventListener('click', () => {
    languageOptions.forEach((item) => item.classList.toggle('active', item === option));
    languageButton.childNodes[0].textContent = `${option.dataset.lang.toUpperCase()} `;
    document.documentElement.lang = option.dataset.lang;
    setLanguageMenu(false);
  });
});

document.querySelectorAll('.service-category').forEach((category) => {
  const activateCategory = () => {
    const content = serviceContent[category.dataset.service];
    if (!content) return;
    document.querySelectorAll('.service-category').forEach((item) => {
      const selected = item === category;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
    });
    const detail = servicesMenu.querySelector('.service-detail');
    detail.querySelector('h2').textContent = content[0];
    detail.querySelectorAll('.service-capabilities a').forEach((link, index) => {
      const capability = content[index + 1];
      link.style.display = capability ? '' : 'none';
      if (capability) link.childNodes[0].textContent = `${capability} `;
    });
  };
  category.addEventListener('click', activateCategory);
  category.addEventListener('mouseenter', activateCategory);
});

document.querySelectorAll('.service-directory-toggle').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const item = toggle.closest('.service-directory-item');
    const panel = item?.querySelector('.service-directory-panel');
    if (!item || !panel) return;

    const shouldOpen = toggle.getAttribute('aria-expanded') !== 'true';
    document.querySelectorAll('.service-directory-item').forEach((otherItem) => {
      const otherToggle = otherItem.querySelector('.service-directory-toggle');
      const otherPanel = otherItem.querySelector('.service-directory-panel');
      const isCurrent = otherItem === item;
      const open = isCurrent && shouldOpen;
      otherItem.classList.toggle('is-open', open);
      otherToggle?.setAttribute('aria-expanded', String(open));
      otherPanel?.toggleAttribute('hidden', !open);
      const state = otherToggle?.querySelector('.service-directory-state');
      if (state) state.textContent = open ? '−' : '+';
    });
  });
});

document.querySelectorAll('.contact-select-field').forEach((field) => {
  const trigger = field.querySelector('.contact-select-trigger');
  const menu = field.querySelector('.contact-select-menu');
  const input = field.querySelector('input[type="hidden"]');
  const valueLabel = field.querySelector('.contact-select-value');
  const options = field.querySelectorAll('.contact-select-menu button');

  const setOpen = (open) => {
    field.classList.toggle('is-open', open);
    trigger?.setAttribute('aria-expanded', String(open));
    menu?.setAttribute('aria-hidden', String(!open));
  };

  trigger?.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    setOpen(!field.classList.contains('is-open'));
  });

  options.forEach((option) => {
    option.addEventListener('click', (event) => {
      event.preventDefault();
      const value = option.dataset.value;
      input.value = value;
      valueLabel.textContent = value;
      options.forEach((item) => item.classList.toggle('active', item === option));
      setOpen(false);
    });
  });

  document.addEventListener('click', (event) => {
    if (!field.contains(event.target)) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
});

const closeMenu = () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
  nav.classList.remove('open');
};

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  nav.classList.toggle('open', !isOpen);
});

nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    closeMenu();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
    setServicesMenu(false);
    setLanguageMenu(false);
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1000) closeMenu();
  setServicesMenu(false);
  setLanguageMenu(false);
});

const enquiryForm = document.querySelector('.contact-form');

enquiryForm?.addEventListener('submit', (event) => {
  event.preventDefault();
});

document.querySelector('.newsletter-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
});

const partnersSection = document.querySelector('.partners');

if (partnersSection && 'IntersectionObserver' in window) {
  partnersSection.classList.add('orbit-ready');
  const partnerObserver = new IntersectionObserver(([entry], observer) => {
    if (!entry.isIntersecting) return;
    partnersSection.classList.add('is-visible');
    observer.unobserve(partnersSection);
  }, { threshold: 0.2 });

  partnerObserver.observe(partnersSection);
}

const statisticNumbers = document.querySelectorAll('.stat-card strong');
const performanceSection = document.querySelector('.performance');
const performanceCards = document.querySelectorAll('.performance .stat-card');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const aboutDirectionSection = document.querySelector('.about-direction-section');
if (aboutDirectionSection) {
  let directionFrame = null;
  const updateDirectionSequence = () => {
    directionFrame = null;
    const rect = aboutDirectionSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const travel = Math.max(1, aboutDirectionSection.offsetHeight - viewportHeight);
    const progress = Math.max(0, Math.min(1, -rect.top / travel));
    const crossfade = Math.max(0, Math.min(1, (progress - 0.34) / 0.32));
    const eased = crossfade * crossfade * (3 - (2 * crossfade));
    aboutDirectionSection.style.setProperty('--direction-crossfade', eased.toFixed(3));
    aboutDirectionSection.classList.toggle('is-mission', eased >= 0.5);
  };
  const scheduleDirectionUpdate = () => {
    if (directionFrame !== null) return;
    directionFrame = requestAnimationFrame(updateDirectionSequence);
  };

  if (reducedMotion || !('IntersectionObserver' in window)) {
    aboutDirectionSection.classList.add('is-visible');
  } else {
    const directionObserver = new IntersectionObserver(([entry], observer) => {
      if (!entry.isIntersecting) return;
      aboutDirectionSection.classList.add('is-visible');
      observer.unobserve(aboutDirectionSection);
    }, { threshold: 0.2 });
    directionObserver.observe(aboutDirectionSection);
  }

  scheduleDirectionUpdate();
  window.addEventListener('scroll', scheduleDirectionUpdate, { passive: true });
  window.addEventListener('resize', scheduleDirectionUpdate);
}

performanceCards.forEach((card, index) => {
  card.style.setProperty('--stat-delay', `${index * 110}ms`);
});

const animateStatistic = (element) => {
  const numberNode = Array.from(element.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
  if (!numberNode) return;

  const original = numberNode.textContent.trim();
  const target = Number(original.replace(/,/g, ''));
  if (!Number.isFinite(target)) return;

  const decimals = original.includes('.') ? original.split('.')[1].length : 0;
  const integerWidth = original.split('.')[0].replace(/,/g, '').length;
  const duration = 1800;
  const startedAt = performance.now();
  element.setAttribute('aria-label', element.textContent.trim());

  const render = (value) => {
    const fixed = value.toFixed(decimals);
    const [integerPart, decimalPart] = fixed.split('.');
    const paddedInteger = integerPart.padStart(integerWidth, '0');
    const groupedInteger = paddedInteger.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    numberNode.textContent = decimalPart === undefined
      ? groupedInteger
      : `${groupedInteger}.${decimalPart}`;
  };

  if (reducedMotion) {
    render(target);
    return;
  }

  render(0);
  const tick = (now) => {
    const progress = Math.min((now - startedAt) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    render(target * eased);
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

if ('IntersectionObserver' in window) {
  const statisticsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateStatistic(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.45 });

  statisticNumbers.forEach((number) => statisticsObserver.observe(number));
} else {
  statisticNumbers.forEach(animateStatistic);
}

if (!reducedMotion && performanceSection && 'IntersectionObserver' in window) {
  const performanceObserver = new IntersectionObserver(([entry], observer) => {
    if (!entry.isIntersecting) return;
    performanceSection.classList.add('is-visible');
    observer.unobserve(performanceSection);
  }, { threshold: 0.22 });

  performanceObserver.observe(performanceSection);
} else {
  performanceSection?.classList.add('is-visible');
}

const aboutValuesSection = document.querySelector('.about-values-section');
const aboutValueCards = Array.from(aboutValuesSection?.querySelectorAll('.about-value-card') || []);

if (aboutValuesSection && aboutValueCards.length && !reducedMotion) {
  aboutValuesSection.classList.add('has-scroll-values');

  const activateValue = (activeCard) => {
    aboutValueCards.forEach((card) => card.classList.toggle('is-active', card === activeCard));
  };

  let valuesFrame = null;
  const updateActiveValue = () => {
    valuesFrame = null;
    const sectionBounds = aboutValuesSection.getBoundingClientRect();
    if (sectionBounds.bottom <= 0 || sectionBounds.top >= window.innerHeight) return;
    // Activate the value whose content is centered in the viewport so the
    // sticky statement and the scrolling card remain synchronized.
    const activeLine = window.innerHeight * 0.5;
    const currentCard = aboutValueCards.reduce((nearest, card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const nearestRect = nearest.getBoundingClientRect();
      const nearestCenter = nearestRect.top + nearestRect.height / 2;
      return Math.abs(cardCenter - activeLine) < Math.abs(nearestCenter - activeLine) ? card : nearest;
    }, aboutValueCards[0]);

    activateValue(currentCard);
  };

  const scheduleValuesUpdate = () => {
    if (valuesFrame !== null) return;
    valuesFrame = requestAnimationFrame(updateActiveValue);
  };

  scheduleValuesUpdate();
  window.addEventListener('scroll', scheduleValuesUpdate, { passive: true });
  window.addEventListener('resize', scheduleValuesUpdate);
}

const aboutHistoryItems = Array.from(document.querySelectorAll('.about-history-item'));
const aboutHistorySection = document.querySelector('.about-history-section');
if (aboutHistoryItems.length && aboutHistorySection && !reducedMotion) {
  aboutHistorySection.classList.add('has-scroll-history');
  let historyIndex = 0;
  let historyWheelDelta = 0;
  let historyWheelLockUntil = 0;
  let historySectionVisible = false;

  const activateHistoryItem = (index) => {
    historyIndex = index;
    aboutHistoryItems.forEach((item, itemIndex) => {
      item.classList.toggle('is-active', itemIndex === historyIndex);
      item.classList.toggle('is-before-active', itemIndex < historyIndex);
      item.classList.toggle('is-after-active', itemIndex > historyIndex);
    });
  };

  const handleHistoryWheel = (event) => {
    const sectionBounds = aboutHistorySection.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    if (sectionBounds.bottom <= 0 || sectionBounds.top >= viewportHeight || Math.abs(event.deltaY) < 2) return;

    const now = performance.now();
    if (now < historyWheelLockUntil) return;

    historyWheelDelta += event.deltaY;
    if (Math.abs(historyWheelDelta) < 36) return;

    const direction = historyWheelDelta > 0 ? 1 : -1;
    historyWheelDelta = 0;
    historyWheelLockUntil = now + 520;
    activateHistoryItem(Math.max(0, Math.min(aboutHistoryItems.length - 1, historyIndex + direction)));
  };

  // Set the initial milestone immediately, then let mouse-wheel scrolling
  // advance exactly one point at a time.
  activateHistoryItem(0);
  window.addEventListener('wheel', handleHistoryWheel, { passive: true });

  if ('IntersectionObserver' in window) {
    const historyEntryObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !historySectionVisible) {
        historySectionVisible = true;
        historyWheelDelta = 0;
        historyWheelLockUntil = 0;
        activateHistoryItem(0);
      } else if (!entry.isIntersecting) {
        historySectionVisible = false;
      }
    }, { threshold: 0.01 });

    historyEntryObserver.observe(aboutHistorySection);
  }
}

const heroGraph = document.querySelector('.infrastructure');
const heroCloud = document.querySelector('.cloud-art');

if (!reducedMotion && heroGraph && heroCloud) {
  let depthFrame = null;

  const updateHeroDepth = () => {
    depthFrame = null;
    const rect = heroGraph.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
    const clamped = Math.max(0, Math.min(1, progress));
    const depthY = (clamped - 0.5) * 34;
    heroCloud.style.setProperty('--hero-depth-y', `${depthY.toFixed(2)}px`);
  };

  const requestHeroDepth = () => {
    if (depthFrame !== null) return;
    depthFrame = requestAnimationFrame(updateHeroDepth);
  };

  updateHeroDepth();
  window.addEventListener('scroll', requestHeroDepth, { passive: true });
  window.addEventListener('resize', requestHeroDepth);
}

// Keep every ambient loop tied to the section currently on screen. This mirrors
// the prototype playback and prevents later scenes from completing off canvas.
if (!reducedMotion && 'IntersectionObserver' in window) {
  const motionScenes = document.querySelectorAll('.hero, .about, .cloud-platform, .clients, .partners, .contact');
  const sceneMotionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('motion-paused', !entry.isIntersecting);
    });
  }, { rootMargin: '12% 0px 12% 0px', threshold: 0.01 });

  motionScenes.forEach((scene) => sceneMotionObserver.observe(scene));
}

const revealMotionDisabled = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!revealMotionDisabled && 'IntersectionObserver' in window) {
  const revealSelectors = [
    '.performance', '.about', '.why', '.cloud-platform', '.clients', '.partners', '.insights', '.contact',
    '.site-header', '.hero-copy',
    '.section-heading .pill', '.section-heading h2', '.section-heading p', '.section-heading .section-cta',
    '.stat-card',
    '.about-copy .pill', '.about-copy h2', '.about-copy p', '.about-copy .mini-cta',
    '.feature-card',
    '.cloud-heading .pill', '.cloud-heading h2', '.cloud-heading p', '.cloud-button',
    '.footer-brand', '.footer-column', '.footer-connect', '.footer-bottom',
    '.client-marquee',
    '.insight-card',
    '.partner-copy .pill', '.partner-copy h2', '.partner-copy p',
    '.contact-wrap .pill', '.contact-wrap h2', '.contact-wrap > p', '.contact-form', '.site-footer',
  ];
  const fadeSelectors = ['.infrastructure', '.about-molecule-single', '.cloud-network', '.partner-orbits'];
  const revealItems = document.querySelectorAll(revealSelectors.join(','));
  const fadeItems = document.querySelectorAll(fadeSelectors.join(','));

  revealItems.forEach((item, index) => {
    item.classList.add('reveal-item');
    if (item.matches('.performance, .about, .why, .cloud-platform, .clients, .partners, .insights, .contact')) {
      item.classList.add('section-enter');
    }
    if (item.matches('.pill')) item.classList.add('reveal-step-1');
    else if (item.matches('h2')) item.classList.add('reveal-step-2');
    else if (item.matches('p')) item.classList.add('reveal-step-3');
    else if (item.matches('.mini-cta, .section-cta, .button')) item.classList.add('reveal-step-4');
    else if (item.matches('.stat-card, .feature-card, .insight-card')) item.classList.add('reveal-step-card');
    else if (item.matches('.infrastructure, .cloud-network, .client-marquee, .partner-orbits, .partner-copy, .contact-form')) item.classList.add('reveal-step-visual');
  });
  fadeItems.forEach((item) => item.classList.add('reveal-item', 'reveal-fade', 'reveal-step-visual'));

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });

  [...revealItems, ...fadeItems].forEach((item) => revealObserver.observe(item));
}
