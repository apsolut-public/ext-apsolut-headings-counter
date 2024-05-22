let countsByTabId = {};

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.h1Count !== undefined && message.h2Count !== undefined && message.h3Count !== undefined && message.h4Count !== undefined) {
    countsByTabId[sender.tab.id] = {
      h1Count: message.h1Count,
      h2Count: message.h2Count,
      h3Count: message.h3Count,
      h4Count: message.h4Count
    };
    chrome.storage.local.set({ countsByTabId }, () => {
      console.log(`Counts stored for tab ${sender.tab.id}:`, countsByTabId[sender.tab.id]);
      sendResponse({ status: "success" });
    });
    return true;  // Indicates we want to send a response asynchronously
  }
});
