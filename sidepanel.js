document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTabId = tabs[0].id;
    chrome.storage.local.get(['countsByTabId'], (result) => {
      const counts = result.countsByTabId ? result.countsByTabId[activeTabId] : {};
      document.getElementById('h1-count').textContent = `H1 Count: ${counts.h1Count ?? 0}`;
      document.getElementById('h2-count').textContent = `H2 Count: ${counts.h2Count ?? 0}`;
      document.getElementById('h3-count').textContent = `H3 Count: ${counts.h3Count ?? 0}`;
      document.getElementById('h4-count').textContent = `H4 Count: ${counts.h4Count ?? 0}`;
    });
  });
});
