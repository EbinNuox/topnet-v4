if (!document.querySelector('link[href*="fonts.googleapis.com/css2?family=Manrope"]')) {
  const manrope = document.createElement('link');
  manrope.rel = 'stylesheet';
  manrope.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap';
  document.head.appendChild(manrope);
}

const compactServicesNav = document.querySelector('.services-nav');
if (compactServicesNav && !compactServicesNav.querySelector('.services-menu-toggle')) {
  const toggle = document.createElement('button');
  toggle.className = 'services-menu-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-label', 'Open services menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'services-menu');
  toggle.innerHTML = '<span aria-hidden="true">⌄</span>';
  compactServicesNav.appendChild(toggle);
  const header = compactServicesNav.closest('.site-header');
  const menu = document.createElement('div');
  menu.className = 'services-menu';
  menu.id = 'services-menu';
  menu.setAttribute('aria-hidden', 'true');
  menu.innerHTML = '<div class="services-intro"><span>Integrated ecosystem</span><h2>Find the right capability</h2><p>Browse TopNet’s connected service<br>categories and their specialist capabilities.</p></div><div class="service-categories" role="navigation" aria-label="Service categories"><a class="service-category active" href="professional-services.html" data-service="professional">Professional Services <span>→</span></a></div><div class="service-detail" aria-live="polite"><h2>Professional Services</h2><div class="service-capabilities"><a href="Collaboration.html">Collaboration <span>→</span></a><a href="Low Current.html">Low Current <span>→</span></a><a href="IT Consulting.html">IT Consulting <span>→</span></a><a href="Infrastructure Projects.html">Infrastructure Projects <span>→</span></a><a href="Cloud Projects.html">Cloud Projects <span>→</span></a><a href="Security Projects.html">Security Projects <span>→</span></a><a href="Business Continuity.html">Business Continuity <span>→</span></a><a href="Datacenter Services.html">Datacenter Services <span>→</span></a></div><a class="category-overview" href="professional-services.html">View category <span>→</span></a></div>';
  header?.appendChild(menu);
}

const professionalDetailPage = document.querySelector('.internet-connectivity-page-body');
if (professionalDetailPage && !document.querySelector('.internet-service-facts')) {
  const hero = document.querySelector('.internet-connectivity-hero');
  const serviceName = document.querySelector('.internet-connectivity-hero-copy h1')?.textContent.trim() || 'Professional Services';
  const facts = document.createElement('div');
  facts.className = 'internet-service-facts';
  facts.setAttribute('aria-label', `${serviceName} service facts`);
  facts.innerHTML = '<div><img src="assets/icons/availability.svg" alt="" aria-hidden="true"><div class="internet-service-fact-copy"><span>AVAILABILITY</span><strong>99.95% service target</strong></div></div><div><img src="assets/icons/operations.svg" alt="" aria-hidden="true"><div class="internet-service-fact-copy"><span>OPERATIONS</span><strong>24/7 monitoring options</strong></div></div><div><img src="assets/icons/security.svg" alt="" aria-hidden="true"><div class="internet-service-fact-copy"><span>SECURITY</span><strong>Controls mapped during design</strong></div></div><div><img src="assets/icons/governance.svg" alt="" aria-hidden="true"><div class="internet-service-fact-copy"><span>GOVERNANCE</span><strong>Defined reporting and escalation</strong></div></div>';
  hero?.after(facts);

  const contact = document.querySelector('.internet-connectivity-contact');
  if (contact && !contact.querySelector('.contact-form')) {
    const copy = contact.querySelector('.contact-wrap');
    copy?.querySelectorAll(':scope > .button').forEach((button) => button.remove());
    const form = document.createElement('form');
    form.className = 'contact-form';
    form.innerHTML = `<label>Work email<input type="email" name="email" placeholder="name@organization.sa"></label><label class="contact-select-field">Area of interest<input type="hidden" name="interest"><button class="contact-select-trigger" type="button" aria-expanded="false"><span class="contact-select-value">Select a service</span><span class="contact-select-arrow" aria-hidden="true"></span></button><span class="contact-select-menu" aria-hidden="true"><button type="button" data-value="Connectivity Services">Connectivity Services</button><button type="button" data-value="Clouding Services">Clouding Services</button><button type="button" data-value="Hosting Services">Hosting Services</button><button type="button" data-value="Co-Location Services">Co-Location Services</button><button type="button" data-value="Cybersecurity Services">Cybersecurity Services</button><button type="button" data-value="Security Services">Security Services</button><button type="button" data-value="Professional Services">Professional Services</button><button type="button" data-value="Managed Services">Managed Services</button></span></label><label>Brief requirement<textarea name="requirement" rows="3" placeholder="What outcome or challenge should we understand?"></textarea></label><button class="button button-primary" type="submit">Request consultation <span class="arrow" aria-hidden="true"></span></button><p class="services-form-note">Your details are used only to respond to this prototype enquiry.</p>`;
    copy?.appendChild(form);
  }
}

if (professionalDetailPage) {
  const header = document.querySelector('.site-header');
  const nav = header?.querySelector('.nav');
  const servicesAnchor = nav && Array.from(nav.querySelectorAll(':scope > a')).find((link) => link.textContent.trim().toLowerCase() === 'services');
  if (nav && servicesAnchor && !nav.querySelector('.services-nav')) {
    const servicesNav = document.createElement('div');
    servicesNav.className = 'services-nav';
    servicesNav.innerHTML = `<a class="services-link active" href="services.html">Services</a><button class="services-menu-toggle" type="button" aria-label="Open services menu" aria-expanded="false" aria-controls="services-menu"><span aria-hidden="true">⌄</span></button>`;
    servicesAnchor.replaceWith(servicesNav);
  }
  if (header && !header.querySelector('.header-tools')) {
    header.insertAdjacentHTML('beforeend', '<div class="header-tools"><button class="search-button" type="button" aria-label="Search"><span></span></button><div class="language-dropdown"><button class="language-button" type="button" aria-expanded="false" aria-controls="language-menu">EN <span aria-hidden="true">⌄</span></button><div class="language-menu" id="language-menu" aria-hidden="true"><button class="language-option active" type="button" data-lang="en">English</button><button class="language-option" type="button" data-lang="ar">Arabic</button></div></div><a class="rayadah-nav-link" href="rayadah-cloud.html">Rayadah Cloud</a><a class="header-cta" href="contact.html#enquiry">Request consultation <span aria-hidden="true"></span></a></div>');
  }
  header?.querySelectorAll('.header-cta').forEach((cta) => {
    if (!cta.closest('.header-tools')) cta.remove();
  });
  if (header && !header.querySelector('.services-menu')) {
    header.insertAdjacentHTML('beforeend', '<div class="services-menu" id="services-menu" aria-hidden="true"><div class="services-intro"><span>Integrated ecosystem</span><h2>Find the right capability</h2><p>Browse TopNet’s connected service<br>categories and their specialist capabilities.</p></div><div class="service-categories" role="navigation" aria-label="Service categories"><a class="service-category active" href="professional-services.html" data-service="professional">Professional Services <span>→</span></a></div><div class="service-detail" aria-live="polite"><h2>Professional Services</h2><div class="service-capabilities"><a href="Collaboration.html">Collaboration <span>→</span></a><a href="Low Current.html">Low Current <span>→</span></a><a href="IT Consulting.html">IT Consulting <span>→</span></a><a href="Infrastructure Projects.html">Infrastructure Projects <span>→</span></a><a href="Cloud Projects.html">Cloud Projects <span>→</span></a><a href="Security Projects.html">Security Projects <span>→</span></a><a href="Business Continuity.html">Business Continuity <span>→</span></a><a href="Datacenter Services.html">Datacenter Services <span>→</span></a></div><a class="category-overview" href="professional-services.html">View category <span>→</span></a></div></div>');
  }
  const serviceCategories = header?.querySelector('.services-menu .service-categories');
  if (serviceCategories && serviceCategories.children.length === 1) {
    serviceCategories.innerHTML = '<a class="service-category" href="connectivity-services.html" data-service="connectivity">Connectivity Services <span>→</span></a><a class="service-category" href="clouding-services.html" data-service="clouding">Clouding Services <span>→</span></a><a class="service-category" href="hosting-services.html" data-service="hosting">Hosting Services <span>→</span></a><a class="service-category" href="co-location-services.html" data-service="colocation">Co-Location Services <span>→</span></a><a class="service-category" href="cybersecurity-services.html" data-service="cybersecurity">Cybersecurity Services <span>→</span></a><a class="service-category" href="security-services.html" data-service="security">Security Services <span>→</span></a><a class="service-category active" href="professional-services.html" data-service="professional">Professional Services <span>→</span></a><a class="service-category" href="managed-services.html" data-service="managed">Managed Services <span>→</span></a>';
  }
  const heroCopy = document.querySelector('.internet-connectivity-hero-copy');
  if (heroCopy && !heroCopy.querySelector('.internet-connectivity-actions')) {
    const primary = heroCopy.querySelector('.button-primary');
    if (primary) {
      const secondaryButtons = Array.from(heroCopy.querySelectorAll('.button-secondary[href="#capabilities"]'));
      const existingSecondary = secondaryButtons[0];
      secondaryButtons.slice(1).forEach((button) => button.remove());
      const actions = document.createElement('div');
      actions.className = 'internet-connectivity-actions';
      primary.replaceWith(actions);
      actions.append(primary);
      if (existingSecondary) {
        actions.append(existingSecondary);
      } else {
        actions.insertAdjacentHTML('beforeend', '<a class="button button-secondary" href="#capabilities">Explore capabilities</a>');
      }
    }
  }

  document.querySelectorAll('.internet-connectivity-page-body .button-primary').forEach((button) => {
    if (!button.querySelector('.arrow')) {
      const arrow = document.createElement('span');
      arrow.className = 'arrow';
      arrow.setAttribute('aria-hidden', 'true');
      button.append(arrow);
    }
    const arrow = button.querySelector('.arrow');
    arrow.style.backgroundColor = 'var(--lime)';
    arrow.style.backgroundImage = 'url("assets/frame-arrow.png")';
  });

  const hero = document.querySelector('.internet-connectivity-hero');
  if (hero && !hero.querySelector('.internet-connectivity-hero-art')) {
    const art = document.createElement('img');
    art.className = 'internet-connectivity-hero-art';
    art.src = 'assets/about-banner-mark.png';
    art.alt = '';
    art.setAttribute('aria-hidden', 'true');
    hero.prepend(art);
  }

  const model = document.querySelector('.internet-service-model');
  if (model && !model.querySelector('.internet-model-axis-horizontal')) {
    model.insertAdjacentHTML('beforeend', '<span class="internet-model-axis internet-model-axis-horizontal" aria-hidden="true"></span><span class="internet-model-axis internet-model-axis-vertical" aria-hidden="true"></span><span class="internet-model-tag internet-model-tag-design">DESIGN</span><span class="internet-model-tag internet-model-tag-activate">ACTIVATE</span><span class="internet-model-tag internet-model-tag-operate">OPERATE</span>');
  }

  const outcomes = document.querySelector('.internet-outcomes');
  const outcomesGrid = outcomes?.querySelector('.internet-outcomes-grid');
  if (outcomes && outcomesGrid && !outcomes.querySelector('.internet-outcomes-stage')) {
    const stage = document.createElement('div');
    stage.className = 'internet-outcomes-stage';
    stage.setAttribute('aria-label', 'Service outcomes');
    stage.innerHTML = '<div class="about-orbits internet-outcomes-orbits" aria-hidden="true"><i></i><i></i><i></i><span class="orbit-dot dot-one"></span><span class="orbit-dot dot-two"></span><span class="orbit-dot dot-three"></span></div><img class="about-molecule-single internet-outcomes-molecule" src="assets/about-molecule.png" alt="" aria-hidden="true">';
    outcomesGrid.before(stage);
    stage.appendChild(outcomesGrid);
  }
  const outcomeCardsGrid = document.querySelector('.internet-outcomes-grid');
  outcomeCardsGrid?.querySelectorAll(':scope > .internet-outcome-card').forEach((card, index) => {
    if (card.querySelector('.internet-card-index')) return;
    const existingIndex = card.firstElementChild;
    if (existingIndex?.tagName === 'SPAN' && /^\d{2}$/.test(existingIndex.textContent.trim())) {
      existingIndex.className = 'internet-card-index';
      return;
    }
    const indexLabel = document.createElement('span');
    indexLabel.className = 'internet-card-index';
    indexLabel.textContent = String(index + 1).padStart(2, '0');
    card.prepend(indexLabel);
  });

  const faq = document.querySelector('.internet-faq');
  const faqIntro = faq?.querySelector('.internet-faq-intro');
  const faqList = faq?.querySelector('.internet-faq-list');
  if (faq && faqIntro && faqList) {
    faqIntro.querySelector('.pill')?.replaceChildren(document.createTextNode('FAQS'));
    const faqTitle = faqIntro.querySelector('h2');
    faqTitle?.setAttribute('id', 'faq-title');
    faq?.setAttribute('aria-labelledby', 'faq-title');
    const faqAction = faqIntro.querySelector('a.button');
    faqAction?.classList.add('internet-faq-action');
    faqList.querySelectorAll(':scope > .internet-faq-item').forEach((item, index) => {
      if (item.querySelector(':scope > .internet-faq-question')) return;
      const heading = item.querySelector(':scope > h3');
      const answer = item.querySelector(':scope > p');
      if (!heading) return;
      const question = document.createElement('button');
      question.className = 'internet-faq-question';
      question.type = 'button';
      question.setAttribute('aria-expanded', index === 0 ? 'true' : 'false');
      question.innerHTML = `${heading.textContent.trim()} <span aria-hidden="true">${index === 0 ? '−' : '+'}</span>`;
      heading.remove();
      item.insertBefore(question, item.firstChild);
      if (answer) {
        const answerWrap = document.createElement('div');
        answerWrap.className = 'internet-faq-answer';
        answerWrap.append(answer);
        item.append(answerWrap);
      }
      if (index === 0) item.classList.add('is-open');
    });
    faqList.querySelectorAll(':scope > .internet-faq-item > .internet-faq-question').forEach((question) => {
      const item = question.closest('.internet-faq-item');
      question.setAttribute('aria-expanded', String(item.classList.contains('is-open')));
      if (!question.querySelector('span')) {
        const marker = document.createElement('span');
        marker.setAttribute('aria-hidden', 'true');
        marker.textContent = item.classList.contains('is-open') ? '−' : '+';
        question.append(' ', marker);
      }
    });
  }

  const delivery = document.querySelector('.internet-delivery');
  const deliveryIntro = delivery?.querySelector('.internet-section-intro');
  const deliveryList = delivery?.querySelector('.rayadah-journey-list');
  if (delivery && deliveryIntro && deliveryList && !delivery.querySelector('.internet-delivery-layout')) {
    deliveryList.setAttribute('aria-label', 'Delivery model steps');
    deliveryList.querySelectorAll('li > button > span:first-child').forEach((step) => step.classList.add('rayadah-journey-list-index'));
    const layout = document.createElement('div');
    layout.className = 'internet-delivery-layout';
    const visual = document.createElement('div');
    visual.className = 'internet-delivery-visual internet-delivery-network rayadah-journey-preview';
    visual.setAttribute('aria-hidden', 'true');
    visual.innerHTML = '<div class="cloud-network"><svg class="cloud-network-lines" viewBox="0 0 1286 470" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="delivery-cloud-line-glow" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#77d9ec" stop-opacity=".25"></stop><stop offset=".42" stop-color="#bcefff" stop-opacity=".98"></stop><stop offset="1" stop-color="#6e8b9c" stop-opacity=".2"></stop></linearGradient></defs><path class="cloud-connector-base" d="M0 218H458 M1286 218H828"></path><g transform="translate(0 124) scale(1 -1)"><image href="assets/Vector.svg" width="535" height="93" preserveAspectRatio="none"></image><path class="cloud-connector-flow flow-a" pathLength="1000" d="M535 .5H291C233 .5 233 65.5 199 83.5C177 95.5 131 91.5 0 91.5"></path></g><g transform="translate(1286 124) scale(-1 -1)"><image href="assets/Vector.svg" width="535" height="93" preserveAspectRatio="none"></image><path class="cloud-connector-flow flow-b" pathLength="1000" d="M535 .5H291C233 .5 233 65.5 199 83.5C177 95.5 131 91.5 0 91.5"></path></g><path class="cloud-connector-flow flow-c" pathLength="1000" d="M0 218H458"></path><path class="cloud-connector-flow flow-d" pathLength="1000" d="M1286 218H828"></path><g transform="translate(0 286)"><image href="assets/Vector.svg" width="535" height="93" preserveAspectRatio="none"></image><path class="cloud-connector-flow flow-e" pathLength="1000" d="M535 .5H291C233 .5 233 65.5 199 83.5C177 95.5 131 91.5 0 91.5"></path></g><g transform="translate(1286 286) scale(-1 1)"><image href="assets/Vector.svg" width="535" height="93" preserveAspectRatio="none"></image><path class="cloud-connector-flow flow-f" pathLength="1000" d="M535 .5H291C233 .5 233 65.5 199 83.5C177 95.5 131 91.5 0 91.5"></path></g></svg><span class="cloud-node node-a"><img src="assets/icons/storage.svg" alt=""></span><span class="cloud-node node-b"><img src="assets/icons/servers.svg" alt=""></span><span class="cloud-node node-c"><img src="assets/icons/security.svg" alt=""></span><div class="cloud-visual"><img src="assets/delivery-model-center.png" alt="Delivery Model"></div><span class="cloud-node node-d"><img src="assets/icons/database-sync.svg" alt=""></span><span class="cloud-node node-e"><img src="assets/icons/cloud-operations.svg" alt=""></span><span class="cloud-node node-f"><img src="assets/icons/operations.svg" alt=""></span></div>';
    deliveryIntro.classList.add('internet-delivery-copy', 'rayadah-journey-editorial-heading');
    deliveryIntro.appendChild(visual);
    const detail = document.createElement('div');
    detail.className = 'internet-delivery-detail rayadah-journey-editorial-content';
    const lead = document.createElement('p');
    lead.className = 'rayadah-journey-lead';
    lead.textContent = 'One accountable journey connects business intent, technical implementation and ongoing operations.';
    detail.append(lead, deliveryList);
    layout.append(deliveryIntro, detail);
    delivery.appendChild(layout);
  }
  const deliveryStepsList = document.querySelector('.internet-delivery .rayadah-journey-list');
  if (deliveryStepsList) {
    deliveryStepsList.setAttribute('role', 'list');
    deliveryStepsList.setAttribute('aria-label', 'Delivery model steps');
    deliveryStepsList.querySelectorAll(':scope > li').forEach((item, index) => {
      if (item.querySelector(':scope > button')) return;
      const number = item.querySelector(':scope > span');
      const title = item.querySelector(':scope > strong');
      if (!number || !title) return;
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');
      if (index === 0) button.className = 'is-active';
      number.className = 'rayadah-journey-list-index';
      const titleText = document.createElement('span');
      titleText.textContent = title.textContent;
      button.append(number, titleText);
      title.remove();
      item.insertBefore(button, item.firstChild);
    });
  }
  const deliveryTitle = document.querySelector('.internet-delivery-copy h2');
  if (deliveryTitle && !deliveryTitle.querySelector('.internet-delivery-title-break')) {
    deliveryTitle.innerHTML = 'From requirement to<span class="internet-delivery-title-break" aria-hidden="true"><br></span>steady-state service';
  }

  const capabilityIcons = ['availability.svg', 'operations.svg', 'security.svg', 'governance.svg'];
  document.querySelectorAll('.internet-capability-card').forEach((card, index) => {
    if (!card.querySelector('.internet-capability-icon')) {
      const icon = document.createElement('span');
      icon.className = 'internet-capability-icon';
      icon.innerHTML = `<img src="assets/icons/${capabilityIcons[index % capabilityIcons.length]}" alt="" aria-hidden="true">`;
      card.prepend(icon);
    }
  });

  document.querySelectorAll('.internet-related-card').forEach((card, index) => {
    if (!card.querySelector('.internet-related-card-media')) {
      const media = document.createElement('span');
      media.className = 'internet-related-card-media';
      const relatedImageByRoute = {
        'Cloud Projects.html': 'assets/service-clouding-approved.png',
      };
      const image = relatedImageByRoute[card.getAttribute('href')] || ['assets/card-rayadah-cloud.png', 'assets/operating-model-resilience.png', 'assets/operating-model-platform.png', 'assets/card-infrastructure.png'][index % 4];
      media.innerHTML = `<img src="${image}" alt="">`;
      card.prepend(media);
    }
    let content = card.querySelector('.internet-related-card-content');
    if (!content) {
      content = document.createElement('span');
      content.className = 'internet-related-card-content';
      Array.from(card.children).slice(1).forEach((child) => content.append(child));
      card.append(content);
    }
    const existingAction = content.querySelector('.internet-related-action, .button-secondary');
    if (existingAction) existingAction.classList.add('internet-related-action');
    if (card.getAttribute('href') === 'Security Consulting.html' || card.getAttribute('href') === 'Managed Security.html') {
      const image = card.querySelector('.internet-related-card-media img');
      if (image) {
        const isManagedSecurity = card.getAttribute('href') === 'Managed Security.html';
        image.src = isManagedSecurity ? 'assets/service-cybersecurity-approved.png' : 'assets/service-security-approved-v2.png';
        image.alt = isManagedSecurity ? 'Managed cybersecurity infrastructure protection' : 'Security Consulting infrastructure protection';
      }
    }
    if (!existingAction) {
      const action = document.createElement('em');
      action.className = 'button button-secondary internet-related-action';
      action.textContent = 'Explore service';
      content.append(action);
    }
  });

  document.querySelectorAll('.internet-related-grid:has(.internet-related-card[href="Cloud Projects.html"]), .internet-related-grid:has(.internet-related-card[href="Infrastructure Projects.html"]), .internet-related-grid:has(.internet-related-card[href="Datacenter Services.html"]), .internet-related-grid:has(.internet-related-card[href="Email Security.html"]), .internet-related-grid:has(.internet-related-card[href="Data Security.html"])').forEach((grid) => {
    if (grid.nextElementSibling?.classList.contains('internet-related-controls')) return;
    const controls = document.createElement('div');
    controls.className = 'internet-related-controls';
    controls.innerHTML = '<button type="button" class="internet-related-arrow" data-direction="prev" aria-label="Show previous services">‹</button><button type="button" class="internet-related-arrow" data-direction="next" aria-label="Show next services">›</button>';
    controls.querySelector('[data-direction="prev"]').addEventListener('click', () => grid.scrollBy({ left: -grid.clientWidth, behavior: 'smooth' }));
    controls.querySelector('[data-direction="next"]').addEventListener('click', () => grid.scrollBy({ left: grid.clientWidth, behavior: 'smooth' }));
    grid.parentElement.append(controls);
  });

  const footer = document.querySelector('.site-footer');
  if (footer) {
    footer.classList.add('internet-reference-footer');
    if (!document.querySelector('#professional-footer-grid-fix')) {
      const footerGridFix = document.createElement('style');
      footerGridFix.id = 'professional-footer-grid-fix';
      footerGridFix.textContent = '.internet-reference-footer .footer-brand{grid-column:1;grid-row:1}.internet-reference-footer .footer-services{grid-column:2;grid-row:1}.internet-reference-footer .footer-explore{grid-column:3;grid-row:1}.internet-reference-footer .footer-connect{grid-column:4;grid-row:1}.internet-reference-footer .footer-bottom{grid-column:1/-1;grid-row:2}@media (max-width:1000px){.internet-reference-footer .footer-brand,.internet-reference-footer .footer-column,.internet-reference-footer .footer-connect,.internet-reference-footer .footer-bottom{grid-column:auto;grid-row:auto}}';
      document.head.appendChild(footerGridFix);
    }
    const footerBrand = footer.querySelector('.footer-brand');
    if (footerBrand && !footerBrand.querySelector('p')) {
      footerBrand.insertAdjacentHTML('beforeend', '<p>One accountable digital infrastructure ecosystem<br>for Saudi enterprises and government<br>organizations. TopNet Digital Infrastructure<br>Services · Riyadh, Saudi Arabia</p>');
    }
    if (!footer.querySelector('.footer-column')) {
      footer.insertAdjacentHTML('beforeend', '<nav class="footer-column footer-services" aria-label="Footer services"><h3>Services</h3><a href="connectivity-services.html">Connectivity Services</a><a href="clouding-services.html">Clouding Services</a><a href="hosting-services.html">Hosting Services</a><a href="co-location-services.html">Co-Location Services</a><a href="cybersecurity-services.html">Cybersecurity Services</a></nav><nav class="footer-column footer-explore" aria-label="Footer navigation"><h3>Explore</h3><a href="rayadah-cloud.html">Rayadah Cloud</a><a href="resources.html">Resources</a><a href="about.html">About TopNet</a><a href="careers.html">Careers</a><a href="contact.html">Contact Us</a></nav><div class="footer-connect"><h3>Connect</h3><div class="social-links" aria-label="Social media"><span>in</span><span>𝕏</span><span class="youtube-link"><span></span></span></div><strong>Stay informed</strong><form class="newsletter-form"><label class="sr-only" for="professional-newsletter-email">Email address</label><input id="professional-newsletter-email" type="email" placeholder="name@company.sa"><button class="footer-submit" type="submit" aria-label="Subscribe"><span class="footer-arrow" aria-hidden="true"></span></button></form></div>');
    }
    if (!footer.querySelector('.footer-connect')) {
      footer.insertAdjacentHTML('beforeend', '<div class="footer-connect"><h3>Connect</h3><div class="social-links" aria-label="Social media"><span>in</span><span>𝕏</span><span class="youtube-link"><span></span></span></div><strong>Stay informed</strong><form class="newsletter-form"><label class="sr-only" for="footer-newsletter-email">Email address</label><input id="footer-newsletter-email" type="email" placeholder="name@company.sa"><button class="footer-submit" type="submit" aria-label="Subscribe"><span class="footer-arrow" aria-hidden="true"></span></button></form></div>');
    }
    const footerBottom = footer.querySelector('.footer-bottom');
    if (footerBottom && !footerBottom.querySelector('.footer-legal')) {
      footerBottom.insertAdjacentHTML('beforeend', '<nav class="footer-legal" aria-label="Legal"><span title="Privacy policy page not provided">Privacy policy</span><span title="Terms page not provided">Terms</span><span title="Sitemap page not provided">Sitemap</span></nav>');
    }
  }
}

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const servicesButton = document.querySelector('.services-menu-toggle');
const servicesMenu = document.querySelector('.services-menu');

const professionalContact = document.querySelector('.internet-connectivity-contact');
const professionalContactWrap = professionalContact?.querySelector('.contact-wrap');
if (professionalContactWrap && !professionalContactWrap.querySelector('.contact-form')) {
  professionalContactWrap.querySelectorAll(':scope > .button').forEach((button) => button.remove());
  professionalContactWrap.insertAdjacentHTML('beforeend', '<form class="contact-form"><label>Work email<input type="email" name="email" placeholder="name@organization.sa"></label><label class="contact-select-field">Area of interest<input type="hidden" name="interest"><button class="contact-select-trigger" type="button" aria-expanded="false"><span class="contact-select-value">Select a service</span><span class="contact-select-arrow" aria-hidden="true"></span></button><span class="contact-select-menu" aria-hidden="true"><button type="button" data-value="Connectivity Services">Connectivity Services</button><button type="button" data-value="Clouding Services">Clouding Services</button><button type="button" data-value="Hosting Services">Hosting Services</button><button type="button" data-value="Co-Location Services">Co-Location Services</button><button type="button" data-value="Cybersecurity Services">Cybersecurity Services</button><button type="button" data-value="Security Services">Security Services</button><button type="button" data-value="Professional Services">Professional Services</button><button type="button" data-value="Managed Services">Managed Services</button></span></label><label>Brief requirement<textarea name="requirement" rows="3" placeholder="What outcome or challenge should we understand?"></textarea></label><button class="button button-primary" type="submit">Request consultation <span class="arrow" aria-hidden="true"></span></button><p class="services-form-note">Your details are used only to respond to this prototype enquiry.</p></form>');
}
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
    if (Math.abs(cursorX - renderedX) > 0.2 || Math.abs(cursorY - renderedY) > 0.2) {
      cursorFrame = requestAnimationFrame(renderCursor);
    } else {
      cursorFrame = null;
    }
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
  hosting: ['Hosting Services', 'Web Hosting', 'Saudi Domain Registration'],
  colocation: ['Co-Location Services', 'Secured Cage', 'Dedicated Rack', 'Shared Rack', 'Bare Metal Servers'],
  cybersecurity: ['Cybersecurity Services', 'Managed Security', 'Security Consulting'],
  security: ['Security Services', 'Network Security', 'Endpoint Security', 'Identity Security', 'Data Security', 'Email Security', 'Cloud Security'],
  professional: ['Professional Services', 'Collaboration', 'Low Current', 'IT Consulting', 'Infrastructure Projects', 'Cloud Projects', 'Security Projects', 'Business Continuity', 'Datacenter Services'],
  managed: ['Managed Services', 'Infrastructure', 'Cybersecurity', 'Service Desk'],
};

const servicePageRoutes = {
  connectivity: 'connectivity-services.html',
  clouding: 'clouding-services.html',
  hosting: 'hosting-services.html',
  colocation: 'co-location-services.html',
  cybersecurity: 'cybersecurity-services.html',
  security: 'security-services.html',
  professional: 'professional-services.html',
  managed: 'managed-services.html',
};

const serviceRoutes = {
  'Internet Connectivity': 'internet-connectivity.html',
  'Data Connectivity': 'data-connectivity.html',
  'Rayadah Cloud': 'rayadah-cloud.html',
  'Public Clouds': 'public-clouds.html',
  'Web Hosting': 'web-hosting.html',
  'Saudi Domain Registration': 'saudi-domain-registration.html',
  'Secured Cage': 'secured-cage.html',
  'Dedicated Rack': 'dedicated-rack.html',
  'Shared Rack': 'shared-rack.html',
  'Bare Metal Servers': 'bare-metal-servers.html',
  'Network Security': 'Network Security.html',
  'Endpoint Security': 'Endpoint Security.html',
  'Identity Security': 'Identity Security.html',
  'Data Security': 'Data Security.html',
  'Email Security': 'Email Security.html',
  'Cloud Security': 'Cloud Security.html',
  'Managed Security': 'Managed Security.html',
  'Security Consulting': 'Security Consulting.html',
  'SD-WAN Connectivity': 'sd-wan-connectivity.html',
  'VPN Connectivity': 'vpn-connectivity.html',
  'Collaboration': 'Collaboration.html',
  'Low Current': 'Low Current.html',
  'IT Consulting': 'IT Consulting.html',
  'Infrastructure Projects': 'Infrastructure Projects.html',
  'Cloud Projects': 'Cloud Projects.html',
  'Security Projects': 'Security Projects.html',
  'Business Continuity': 'Business Continuity.html',
  'Datacenter Services': 'Datacenter Services.html',
  'Infrastructure': 'Infrastructure.html',
  'Cybersecurity': 'Cybersecurity.html',
  'Service Desk': 'Service Desk.html',
};

// Detail-page visuals for the two cybersecurity pages use the same icon/card
// treatment as the existing Internet Connectivity page.
const cybersecurityDetailPage = document.body?.querySelector('.internet-connectivity-page') &&
  ['Managed Security', 'Security Consulting'].includes(document.querySelector('.internet-connectivity-hero-copy h1')?.textContent.trim());
if (cybersecurityDetailPage) {
  document.body.classList.add('cybersecurity-detail-page-body');
  const capabilityIcons = ['security.svg', 'operations.svg', 'governance.svg', 'secure.svg'];
  document.querySelectorAll('.internet-capability-card').forEach((card, index) => {
    if (!card.querySelector('.internet-capability-icon')) {
      const icon = document.createElement('span');
      icon.className = 'internet-capability-icon';
      icon.innerHTML = `<img src="assets/icons/${capabilityIcons[index % capabilityIcons.length]}" alt="" aria-hidden="true">`;
      card.prepend(icon);
    }
  });
  document.querySelectorAll('.internet-related-card').forEach((card, index) => {
    if (!card.querySelector('.internet-related-card-media')) {
      const media = document.createElement('span');
      media.className = 'internet-related-card-media';
      media.innerHTML = `<img src="assets/${index ? 'operating-model-platform.png' : 'insight-security.png'}" alt="" aria-hidden="true">`;
      card.prepend(media);
    }
    card.classList.add('internet-related-card--cybersecurity');
    card.querySelector('.button-secondary')?.classList.add('internet-related-action');
  });
}

const fitServicesMenu = () => {
  if (!servicesMenu) return;
  const header = document.querySelector('.site-header');
  const top = window.innerWidth > 1000 ? header.getBoundingClientRect().bottom : 96;
  servicesMenu.style.setProperty('--services-menu-top', Math.max(0, top) + 'px');
};
window.addEventListener('resize', fitServicesMenu, { passive: true });
const setServicesMenu = (open) => {
  if (open) fitServicesMenu();
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

document.querySelector('.services-nav')?.addEventListener('mouseenter', () => {
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
  if (!event.target.closest('.services-menu') && !event.target.closest('.services-nav')) setServicesMenu(false);
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
    });
    const detail = servicesMenu.querySelector('.service-detail');
    detail.querySelector('h2').textContent = content[0];
    const categoryLink = detail.querySelector('.category-overview');
    if (categoryLink) {
      categoryLink.href = servicePageRoutes[category.dataset.service] || 'services.html';
      categoryLink.textContent = 'View ' + content[0] + ' ';
      const arrow = document.createElement('span');
      arrow.textContent = '→';
      categoryLink.appendChild(arrow);
    }
    const capabilities = detail.querySelector('.service-capabilities');
    if (capabilities) {
      capabilities.innerHTML = content.slice(1).map((capability) => {
        const href = serviceRoutes[capability] || '#';
        return `<a href="${href}">${capability} <span aria-hidden="true">→</span></a>`;
      }).join('');
    }
  };
  category.addEventListener('mouseenter', activateCategory);
  category.addEventListener('focus', activateCategory);
  if (category.classList.contains('active')) activateCategory();
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

const rayadahCalculator = document.querySelector('.rayadah-calculator');

if (rayadahCalculator) {
  const billingButtons = rayadahCalculator.querySelectorAll('[data-billing]');
  const priceFields = rayadahCalculator.querySelectorAll('[data-price-field]');
  const priceOutput = rayadahCalculator.querySelector('[data-price-output]');
  const equivalentOutput = rayadahCalculator.querySelector('[data-equivalent-output]');
  const billingOutput = rayadahCalculator.querySelector('[data-billing-output]');
  const basePrice = Number(rayadahCalculator.dataset.basePrice || 0);
  let billingPeriod = 'monthly';

  const formatPrice = (value) => Math.round(value).toLocaleString('en-US');

  const updateRayadahEstimate = () => {
    const configuredPrice = basePrice + Array.from(priceFields).reduce((total, field) => total + Number(field.value || 0), 0);
    const equivalentMonthly = billingPeriod === 'annual' ? configuredPrice * 0.9 : configuredPrice;
    priceOutput.textContent = formatPrice(equivalentMonthly);
    equivalentOutput.textContent = formatPrice(equivalentMonthly);
    billingOutput.textContent = billingPeriod === 'annual' ? 'Annual' : 'Monthly';
  };

  billingButtons.forEach((button) => {
    button.addEventListener('click', () => {
      billingPeriod = button.dataset.billing;
      billingButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle('active', isActive);
        item.setAttribute('aria-pressed', String(isActive));
      });
      updateRayadahEstimate();
    });
  });

  priceFields.forEach((field) => field.addEventListener('change', updateRayadahEstimate));
  updateRayadahEstimate();
}

document.querySelectorAll('.rayadah-faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const item = question.closest('.rayadah-faq');
    const shouldOpen = !item.classList.contains('is-open');
    const list = item.closest('.rayadah-faq-list');
    list.querySelectorAll('.rayadah-faq').forEach((faq) => {
      const isOpen = faq === item && shouldOpen;
      faq.classList.toggle('is-open', isOpen);
      const button = faq.querySelector('.rayadah-faq-question');
      button.setAttribute('aria-expanded', String(isOpen));
      const marker = button.querySelector('span');
      if (marker) marker.textContent = isOpen ? '−' : '+';
    });
  });
});

document.querySelectorAll('.internet-faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const item = question.closest('.internet-faq-item');
    const isOpen = item.classList.toggle('is-open');
    question.setAttribute('aria-expanded', String(isOpen));
    const marker = question.querySelector('span');
    if (marker) marker.textContent = isOpen ? '−' : '+';
  });
});

const securedRelatedGrid = document.querySelector('.secured-cage-related-grid');

if (securedRelatedGrid) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scrollAmount = () => Math.max(280, Math.round(securedRelatedGrid.clientWidth * 0.72));

  securedRelatedGrid.closest('.internet-related')?.querySelectorAll('[data-related-scroll]').forEach((button) => {
    button.addEventListener('click', () => {
      const direction = button.dataset.relatedScroll === 'previous' ? -1 : 1;
      securedRelatedGrid.scrollBy({
        left: direction * scrollAmount(),
        behavior: reducedMotion ? 'auto' : 'smooth',
      });
    });
  });
}

const rayadahJourney = document.querySelector('[data-journey]');

if (rayadahJourney) {
  const journeyTabs = Array.from(rayadahJourney.querySelectorAll('[data-journey-step]'));
  const journeyPanels = Array.from(rayadahJourney.querySelectorAll('[data-journey-panel]'));
  const journeyImages = Array.from(rayadahJourney.querySelectorAll('[data-journey-image]'));

  const activateJourneyStep = (step, shouldFocus = false) => {
    journeyTabs.forEach((tab) => {
      const isActive = tab.dataset.journeyStep === step;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
      tab.setAttribute('aria-pressed', String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
      if (isActive && shouldFocus) tab.focus();
    });

    journeyPanels.forEach((panel) => {
      const isActive = panel.dataset.journeyPanel === step;
      panel.hidden = !isActive;
      panel.classList.toggle('is-active', isActive);
    });

    journeyImages.forEach((image) => {
      const isActive = image.dataset.journeyImage === step;
      image.hidden = !isActive;
      image.classList.toggle('is-active', isActive);
    });
  };

  journeyTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateJourneyStep(tab.dataset.journeyStep));
    tab.addEventListener('mouseenter', () => activateJourneyStep(tab.dataset.journeyStep));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? journeyTabs.length - 1
          : (index + (event.key === 'ArrowRight' ? 1 : -1) + journeyTabs.length) % journeyTabs.length;
      activateJourneyStep(journeyTabs[nextIndex].dataset.journeyStep, true);
    });
  });

  activateJourneyStep(journeyTabs.find((tab) => tab.classList.contains('is-active'))?.dataset.journeyStep || journeyTabs[0]?.dataset.journeyStep);
}

const partnersSection = document.querySelector('.partners');
const journeyPreviews = document.querySelectorAll('.rayadah-journey-preview');
journeyPreviews.forEach((preview) => {
  const fitJourneyPreview = () => {
    preview.style.setProperty('--journey-preview-scale', String(preview.clientWidth / 1286));
  };
  fitJourneyPreview();
  if ('ResizeObserver' in window) {
    new ResizeObserver(fitJourneyPreview).observe(preview);
  } else {
    window.addEventListener('resize', fitJourneyPreview, { passive: true });
  }
});

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
const aboutValuesRailMark = aboutValuesSection?.querySelector('.about-values-rail-mark');

const syncAboutValuesRailIcon = (activeCard) => {
  const sourceIcon = activeCard?.querySelector('.about-value-icon');
  if (!aboutValuesRailMark || !sourceIcon) return;

  const railIcon = sourceIcon.cloneNode(true);
  railIcon.classList.add('about-values-active-icon');
  aboutValuesRailMark.replaceChildren(railIcon);
};

syncAboutValuesRailIcon(aboutValueCards.find((card) => card.classList.contains('is-active')) || aboutValueCards[0]);

if (aboutValuesSection && aboutValueCards.length && !reducedMotion) {
  aboutValuesSection.classList.add('has-scroll-values');
  let activeValueCard = aboutValueCards.find((card) => card.classList.contains('is-active')) || aboutValueCards[0];

  const activateValue = (activeCard) => {
    if (activeCard === activeValueCard) return;
    activeValueCard = activeCard;
    aboutValueCards.forEach((card) => card.classList.toggle('is-active', card === activeCard));
    syncAboutValuesRailIcon(activeCard);
  };

  let valuesFrame = null;
  const updateActiveValue = () => {
    valuesFrame = null;
    const sectionBounds = aboutValuesSection.getBoundingClientRect();
    if (sectionBounds.bottom <= 0 || sectionBounds.top >= window.innerHeight) return;
    // Enter the section on the first value before the centered-card tracking
    // takes over as the visitor continues scrolling.
    if (sectionBounds.top > 8) {
      activateValue(aboutValueCards[0]);
      return;
    }
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
  const historyMarkers = Array.from(aboutHistorySection.querySelectorAll('.about-history-rail > span'));
  const pinnedHistory = window.matchMedia('(min-width: 1001px) and (min-height: 700px)');
  let historyIndex = -1;
  let historyFrame = null;
  const activateHistoryItem = (index) => {
    if (index === historyIndex) return;
    historyIndex = index;
    aboutHistoryItems.forEach((item, itemIndex) => {
      item.classList.toggle('is-active', itemIndex === index);
      item.classList.toggle('is-before-active', itemIndex < index);
      item.classList.toggle('is-after-active', itemIndex > index);
    });
    historyMarkers.forEach((marker, markerIndex) => marker.classList.toggle('is-active', markerIndex === index));
  };
  const syncHistoryFromScroll = () => {
    historyFrame = null;
    const bounds = aboutHistorySection.getBoundingClientRect();
    const height = window.innerHeight;
    if (pinnedHistory.matches) {
      const travel = Math.max(1, bounds.height - height);
      const progress = Math.min(1, Math.max(0, -bounds.top / travel));
      activateHistoryItem(Math.min(aboutHistoryItems.length - 1, Math.floor(progress * aboutHistoryItems.length)));
    } else {
      const centers = aboutHistoryItems.map(item => {
        const rect = item.getBoundingClientRect();
        return Math.abs(rect.top + rect.height / 2 - height / 2);
      });
      activateHistoryItem(centers.indexOf(Math.min(...centers)));
    }
  };
  const scheduleHistoryUpdate = () => {
    if (historyFrame === null) historyFrame = requestAnimationFrame(syncHistoryFromScroll);
  };
  window.addEventListener('scroll', scheduleHistoryUpdate, { passive: true });
  window.addEventListener('resize', scheduleHistoryUpdate, { passive: true });
  window.addEventListener('hashchange', scheduleHistoryUpdate);
  syncHistoryFromScroll();
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

// Assign AOS dynamically across all pages; prose and list tags stay untouched.
const initScrollReveals = () => {
  if (!window.AOS) return;
  const excluded = 'li, p, ol';
  const headingGroups = document.querySelectorAll('section .section-heading, section .cloud-heading, section .about-section-heading, section .internet-section-intro, section .internet-faq-intro, section .about-copy, section .about-who-copy, section .partner-copy, section .rayadah-journey-editorial-heading, section .internet-delivery-copy, section .contact-enquiry-copy, section .careers-section-heading');
  const subsectionGroups = document.querySelectorAll('.stats-grid, .feature-grid, .insight-grid, .rayadah-model-grid, .rayadah-capability-grid, .internet-capability-grid, .internet-outcomes-grid, .internet-related-grid, .about-certification-grid, .careers-values-grid, .resources-grid, .hosting-package-tabs, .hosting-package-panels, .contact-form, .footer-brand, .footer-column, .footer-connect');
  const zoomTargets = document.querySelectorAll('.client-marquee, .rayadah-trust-grid, .internet-service-facts');
  const fallbackHeadings = document.querySelectorAll('section h2');
  const assign = (elements, animation) => elements.forEach((element) => {
    if (element.matches(excluded) || element.closest('.hero, .site-header, .services-menu, .about-values-section, .about-history-section, .service-stack, [data-aos]')) return;
    element.setAttribute('data-aos', animation);
    if (animation === 'zoom-in') {
      const siblings = Array.from(element.parentElement?.children || []);
      element.setAttribute('data-aos-delay', String(Math.min(2, siblings.indexOf(element)) * 50));
    }
  });
  // Animate groups once; descendants inherit the reveal without extra attributes.
  assign(headingGroups, 'fade-in');
  assign(subsectionGroups, 'fade-in');
  assign(zoomTargets, 'zoom-in');
  assign(fallbackHeadings, 'fade-in');
  window.AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    offset: 70,
    once: true,
    mirror: false,
    disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    disableMutationObserver: true,
    throttleDelay: 99,
  });
  // AOS caches document offsets. Observe real viewport entry as well, so late
  // image/font layout and sticky sections cannot leave visible groups hidden.
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    const revealOnEntry = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target;
        if (!element.classList.contains('aos-animate')) {
          element.classList.add('aos-animate');
          document.dispatchEvent(new CustomEvent('aos:in', { detail: element }));
        }
        observer.unobserve(element);
      });
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('[data-aos]').forEach((element) => revealOnEntry.observe(element));
  }
  window.addEventListener('pageshow', () => window.AOS.refresh());
  document.addEventListener('load', (event) => {
    if (event.target instanceof HTMLImageElement) window.AOS.refresh();
  }, true);
  window.addEventListener('load', () => window.AOS.refresh(), { once: true });
  document.fonts?.ready.then(() => window.AOS.refresh());
  // Recalculate offsets after tabs, accordions and loaded images alter the page.
  let refreshFrame;
  const refreshReveals = () => {
    if (refreshFrame) cancelAnimationFrame(refreshFrame);
    refreshFrame = requestAnimationFrame(() => {
      refreshFrame = null;
      window.AOS.refresh();
    });
  };
  document.addEventListener('toggle', refreshReveals, true);
  document.addEventListener('click', (event) => {
    if (event.target.closest('[role="tab"], [aria-expanded], [data-control-panel]')) refreshReveals();
  });
  if ('ResizeObserver' in window) {
    const layoutObserver = new ResizeObserver(refreshReveals);
    layoutObserver.observe(document.body);
  }

};
initScrollReveals();

const resourceGrid = document.querySelector('#resource-grid');

if (resourceGrid) {
  const resourceCards = Array.from(resourceGrid.querySelectorAll('.resource-card'));
  const resourceSearch = document.querySelector('#resource-search');
  const resourceType = document.querySelector('#resource-type');
  const resourceSort = document.querySelector('#resource-sort');
  const resourceCount = document.querySelector('#resource-count');
  const resourceFilters = {
    search: '',
    type: 'all',
    topic: 'all',
    industry: 'all',
    service: 'all',
  };

  const normalizeResourceValue = (value) => String(value || '').trim().toLowerCase();

  const closeResourceBrowsePanels = () => {
    document.querySelectorAll('.resources-browse-panel').forEach((panel) => {
      panel.hidden = true;
      panel.classList.remove('is-open');
    });
    document.querySelectorAll('.resources-browse-trigger').forEach((trigger) => {
      trigger.setAttribute('aria-expanded', 'false');
    });
  };

  const updateResourceResults = () => {
    const searchValue = normalizeResourceValue(resourceFilters.search);
    const sortedCards = [...resourceCards].sort((first, second) => {
      if (resourceSort?.value === 'az') {
        return first.querySelector('h3').textContent.localeCompare(second.querySelector('h3').textContent);
      }
      return Number(first.dataset.order) - Number(second.dataset.order);
    });

    sortedCards.forEach((card) => resourceGrid.append(card));

    let visibleCount = 0;
    sortedCards.forEach((card) => {
      const searchableText = normalizeResourceValue(card.textContent);
      const matchesSearch = !searchValue || searchableText.includes(searchValue);
      const matchesType = resourceFilters.type === 'all' || card.dataset.type === resourceFilters.type;
      const matchesTopic = resourceFilters.topic === 'all' || card.dataset.topic === resourceFilters.topic;
      const matchesIndustry = resourceFilters.industry === 'all' || card.dataset.industry === resourceFilters.industry;
      const matchesService = resourceFilters.service === 'all' || card.dataset.service === resourceFilters.service;
      const isVisible = matchesSearch && matchesType && matchesTopic && matchesIndustry && matchesService;
      card.classList.toggle('is-filtered', !isVisible);
      if (isVisible) visibleCount += 1;
    });

    if (resourceCount) resourceCount.textContent = `${visibleCount} ${visibleCount === 1 ? 'result' : 'results'}`;
  };

  resourceSearch?.addEventListener('input', () => {
    resourceFilters.search = resourceSearch.value;
    updateResourceResults();
  });

  resourceType?.addEventListener('change', () => {
    resourceFilters.type = resourceType.value;
    document.querySelectorAll('[data-filter-field="type"]').forEach((option) => {
      option.classList.toggle('is-active', option.dataset.filterValue === resourceFilters.type);
    });
    updateResourceResults();
  });

  resourceSort?.addEventListener('change', updateResourceResults);

  document.querySelectorAll('.resources-browse-trigger').forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.stopPropagation();
      const panel = document.querySelector(`[data-browse-panel="${trigger.dataset.browseTrigger}"]`);
      if (!panel) return;
      const willOpen = !panel.classList.contains('is-open');
      closeResourceBrowsePanels();
      panel.hidden = !willOpen;
      panel.classList.toggle('is-open', willOpen);
      trigger.setAttribute('aria-expanded', String(willOpen));
    });
  });

  document.querySelectorAll('[data-filter-field]').forEach((option) => {
    option.addEventListener('click', () => {
      const field = option.dataset.filterField;
      const value = option.dataset.filterValue || 'all';
      if (!Object.prototype.hasOwnProperty.call(resourceFilters, field)) return;
      resourceFilters[field] = value;
      document.querySelectorAll(`[data-filter-field="${field}"]`).forEach((item) => {
        item.classList.toggle('is-active', item === option);
      });
      if (field === 'type' && resourceType) resourceType.value = value;
      closeResourceBrowsePanels();
      updateResourceResults();
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.resources-browse-group')) closeResourceBrowsePanels();
  });

  closeResourceBrowsePanels();
  updateResourceResults();
}

const careerTeamFilter = document.querySelector('#career-team-filter');
const careerLocationFilter = document.querySelector('#career-location-filter');
const careerPositionCards = Array.from(document.querySelectorAll('.careers-position-card'));
const careerEmptyState = document.querySelector('.careers-empty-state');

if (careerTeamFilter && careerLocationFilter && careerPositionCards.length) {
  const updateCareerPositions = () => {
    const selectedTeam = careerTeamFilter.value;
    const selectedLocation = careerLocationFilter.value;
    let visibleCount = 0;

    careerPositionCards.forEach((card) => {
      const matchesTeam = selectedTeam === 'all' || card.dataset.team === selectedTeam;
      const matchesLocation = selectedLocation === 'all' || card.dataset.location === selectedLocation;
      const visible = matchesTeam && matchesLocation;
      card.hidden = !visible;
      card.setAttribute('aria-hidden', String(!visible));
      if (visible) visibleCount += 1;
    });

    if (careerEmptyState) careerEmptyState.hidden = visibleCount > 0;
  };

  careerTeamFilter.addEventListener('change', updateCareerPositions);
  careerLocationFilter.addEventListener('change', updateCareerPositions);
  updateCareerPositions();
}

document.querySelectorAll('[data-career-select]').forEach((field) => {
  const nativeSelect = field.querySelector('.careers-native-select');
  const trigger = field.querySelector('.careers-select-trigger');
  const menu = field.querySelector('.careers-select-menu');
  const valueLabel = field.querySelector('.careers-select-value');
  const options = Array.from(field.querySelectorAll('[role="option"]'));

  if (!nativeSelect || !trigger || !menu || !valueLabel || !options.length) return;

  const setOpen = (open) => {
    document.querySelectorAll('[data-career-select].is-open').forEach((otherField) => {
      if (otherField !== field) {
        otherField.classList.remove('is-open');
        otherField.querySelector('.careers-select-trigger')?.setAttribute('aria-expanded', 'false');
        otherField.querySelector('.careers-select-menu')?.setAttribute('aria-hidden', 'true');
      }
    });

    field.classList.toggle('is-open', open);
    trigger.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
  };

  const setValue = (option) => {
    const value = option.dataset.value || 'all';
    nativeSelect.value = value;
    valueLabel.textContent = option.textContent.trim();
    options.forEach((item) => item.setAttribute('aria-selected', String(item === option)));
    nativeSelect.dispatchEvent(new Event('change', { bubbles: true }));
    setOpen(false);
    trigger.focus();
  };

  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    setOpen(!field.classList.contains('is-open'));
  });

  trigger.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setOpen(true);
      options[0]?.focus();
    }
    if (event.key === 'Escape') setOpen(false);
  });

  options.forEach((option, index) => {
    option.addEventListener('click', (event) => {
      event.preventDefault();
      setValue(option);
    });

    option.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        options[(index + 1) % options.length].focus();
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        options[(index - 1 + options.length) % options.length].focus();
      }
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        trigger.focus();
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (!field.contains(event.target)) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
});

// Use native browser wheel scrolling to avoid animation stalls and input delays.
// Let the browser prioritize scrolling over decorative animation painting.
(() => {
  let idleTimer;
  const finishScrolling = () => {
    clearTimeout(idleTimer);
    document.documentElement.classList.remove('is-scrolling');
  };
  window.addEventListener('scroll', () => {
    document.documentElement.classList.add('is-scrolling');
    clearTimeout(idleTimer);
    idleTimer = setTimeout(finishScrolling, 160);
  }, { passive: true });
  // Resume after an idle gap; frame-driven scrolling may emit scrollend per frame.
})();
