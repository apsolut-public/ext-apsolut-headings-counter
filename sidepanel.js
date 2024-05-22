document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTabId = tabs[0].id;
    chrome.storage.local.get(['countsByTabId'], (result) => {
      const countsByTabId = result.countsByTabId || {};
      const counts = countsByTabId[activeTabId] || { h1Count: 0, h2Count: 0, h3Count: 0, h4Count: 0 };

      document.getElementById('h1-count').textContent = `H1 Count: ${counts.h1Count}`;
      document.getElementById('h2-count').textContent = `H2 Count: ${counts.h2Count}`;
      document.getElementById('h3-count').textContent = `H3 Count: ${counts.h3Count}`;
      document.getElementById('h4-count').textContent = `H4 Count: ${counts.h4Count}`;
    });
  });
});
