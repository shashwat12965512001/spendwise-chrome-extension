chrome.runtime.onMessage.addListener((msg) => {
    if (msg.type === "deals") {
        const list = document.getElementById("deal-list");
        list.innerHTML = "";
        msg.data.forEach(deal => {
            const li = document.createElement("li");
            li.textContent = `[${deal.site}] ${deal.title} - ${deal.price}`;
            list.appendChild(li);
        });
    }
});