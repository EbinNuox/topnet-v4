const hostingPackages = document.querySelector('.hosting-packages');

if (hostingPackages) {
  const hostingTabs = Array.from(hostingPackages.querySelectorAll('[data-hosting-tab]'));
  const hostingPanels = Array.from(hostingPackages.querySelectorAll('[data-hosting-panel]'));

  const activateHostingPackage = (packageName, shouldFocus = false) => {
    hostingTabs.forEach((tab) => {
      const isActive = tab.dataset.hostingTab === packageName;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
      if (isActive && shouldFocus) tab.focus();
    });

    hostingPanels.forEach((panel) => {
      const isActive = panel.dataset.hostingPanel === packageName;
      panel.hidden = !isActive;
      panel.classList.toggle('is-active', isActive);
    });
    window.AOS?.refresh();
  };

  hostingTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateHostingPackage(tab.dataset.hostingTab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? hostingTabs.length - 1
          : (index + (event.key === 'ArrowRight' ? 1 : -1) + hostingTabs.length) % hostingTabs.length;
      activateHostingPackage(hostingTabs[nextIndex].dataset.hostingTab, true);
    });
  });

  activateHostingPackage(hostingTabs.find((tab) => tab.classList.contains('is-active'))?.dataset.hostingTab || hostingTabs[0]?.dataset.hostingTab);

  hostingPackages.querySelectorAll('[data-hosting-plan]').forEach((link) => {
    link.addEventListener('click', () => {
      const requirement = document.querySelector('#enquiry textarea[name="requirement"]');
      if (requirement && !requirement.value.trim()) requirement.value = 'Please provide a quotation for ' + link.dataset.hostingPlan + '.';
    });
  });

  const controlPanelOptions = Array.from(hostingPackages.querySelectorAll('[data-control-panel]'));
  const controlPanelContents = Array.from(hostingPackages.querySelectorAll('[data-control-panel-content]'));

  const activateControlPanel = (panelName) => {
    controlPanelOptions.forEach((option) => {
      const isActive = option.dataset.controlPanel === panelName;
      option.classList.toggle('is-active', isActive);
      option.setAttribute('aria-pressed', String(isActive));
    });
    controlPanelContents.forEach((content) => {
      content.hidden = content.dataset.controlPanelContent !== panelName;
    });
  };

  controlPanelOptions.forEach((option) => {
    option.addEventListener('click', () => activateControlPanel(option.dataset.controlPanel));
  });

  activateControlPanel(controlPanelOptions.find((option) => option.classList.contains('is-active'))?.dataset.controlPanel || 'none');
}

