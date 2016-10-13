chrome.runtime.onMessage.addListener(function (msg, sender) {
  if ((msg.from === 'content') && (msg.subject === 'spoilerCount')) {
    chrome.browserAction.setBadgeText({text: msg.count, tabId: sender.tab.id});
    chrome.browserAction.setBadgeBackgroundColor({ color: "#a4a4a4"});
  }
});
