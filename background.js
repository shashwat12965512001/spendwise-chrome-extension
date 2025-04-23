chrome.runtime.onMessage.addListener((message, sender) => {
    if (message.type === "deals") {
        chrome.storage.local.set({ lastDeals: message.data });
    }
});