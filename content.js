const hostname = window.location.hostname;
const deals = [];

if (hostname.includes("flipkart")) {
    document.querySelectorAll("._1AtVbE").forEach(card => {
        const title = card.querySelector("._4rR01T")?.innerText;
        const price = card.querySelector("._30jeq3")?.innerText;
        if (title && price) deals.push({ site: 'Flipkart', title, price });
    });
} else if (hostname.includes("amazon")) {
    document.querySelectorAll(".s-main-slot .s-result-item").forEach(item => {
        const title = item.querySelector("h2 span")?.innerText;
        const price = item.querySelector(".a-price .a-offscreen")?.innerText;
        if (title && price) deals.push({ site: 'Amazon', title, price });
    });
} else if (hostname.includes("meesho")) {
    document.querySelectorAll(".Card__BaseCard-sc-b3n78k-0").forEach(card => {
        const title = card.querySelector(".Card__ProductName-sc-b3n78k-17")?.innerText;
        const price = card.querySelector(".Card__PriceContainer-sc-b3n78k-18")?.innerText;
        if (title && price) deals.push({ site: 'Meesho', title, price });
    });
} else if (hostname.includes("ajio")) {
    document.querySelectorAll(".item").forEach(card => {
        const title = card.querySelector(".brand")?.innerText;
        const price = card.querySelector(".price")?.innerText;
        if (title && price) deals.push({ site: 'Ajio', title, price });
    });
} else if (hostname.includes("myntra")) {
    document.querySelectorAll(".product-base").forEach(card => {
        const title = card.querySelector(".product-brand")?.innerText;
        const price = card.querySelector(".product-discountedPrice")?.innerText;
        if (title && price) deals.push({ site: 'Myntra', title, price });
    });
}

chrome.runtime.sendMessage({ type: "deals", data: deals });