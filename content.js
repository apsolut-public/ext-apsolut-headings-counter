const countElements = () => {
  const h1Count = document.querySelectorAll('h1').length;
  const h2Count = document.querySelectorAll('h2').length;
  const h3Count = document.querySelectorAll('h3').length;
  const h4Count = document.querySelectorAll('h4').length;
  return { h1Count, h2Count, h3Count, h4Count };
};

const counts = countElements();

chrome.runtime.sendMessage(counts, (response) => {
  if (chrome.runtime.lastError) {
    console.error('Error sending message:', chrome.runtime.lastError.message);
  } else {
    console.log('Message sent successfully:', response);
  }
});
