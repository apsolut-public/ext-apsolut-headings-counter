// Count H1 and H2 elements
const countElements = () => {
	const h1Count = document.querySelectorAll('h1').length;
	const h2Count = document.querySelectorAll('h2').length;
	return { h1Count, h2Count };
  };
  
  // Send the counts to the background script
  const counts = countElements();
  chrome.runtime.sendMessage(counts);
  