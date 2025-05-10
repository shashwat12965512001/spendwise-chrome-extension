const hostname = window.location.hostname;
const url = window.location.href;
const deals = [];

const sendRequest = (url, provider, data) => {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: provider,
            data: data
        })
    }).then(res => res.json()).then(response => {
        console.log("✅ Sent successfully:", response);
        return response;
    }).catch(err => {
        console.log("❌ Error sending data:", err);
        return err;
    });
};

if (hostname.includes("flipkart")) {
} else if (hostname.includes("amazon")) {
    try {
        // // Home Page Banner Images
        // const bannerImages = [];
        // const bannerItems = document.querySelectorAll("#pageContent #desktop-banner ol.a-carousel li");
        // if (typeof bannerItems != "undefined" || bannerItems != null) {
        //     Object.keys(bannerItems).forEach((key) => {
        //         const url = bannerItems[key].querySelectorAll("a")[0].getAttribute("href");
        //         const img = bannerItems[key].querySelectorAll("img")[0];
        //         if (typeof img != "undefined" || img != null) {
        //             const src = img.getAttribute("src");
        //             if (typeof src != "undefined" || src != null) {
        //                 bannerImages.push({
        //                     img: src,
        //                     url: "https://www.amazon.in" + url,
        //                 });
        //             }
        //         }
        //     });
        // }
        // console.log(bannerImages);

        // // Deals Page Products
        // const products = [];
        // document.addEventListener("scroll", function () {
        //     const dealItems = document.querySelectorAll("#dealsGridLinkAnchor div[data-testid='virtuoso-item-list']");
        //     if (typeof dealItems != "undefined" || dealItems != null) {
        //         let rows = dealItems[0].childNodes;
        //         for (let i = 0; i < rows.length; i++) {
        //             let list = rows[i].querySelectorAll(".GridRow-module__container_q6XsDi4clqdE6jhYFSBW")[0].childNodes;
        //             for (let j = 0; j < list.length; j++) {
        //                 const product = list[j];
        //                 const id = product.getAttribute("data-testid");
        //                 const name = product.querySelectorAll('a[data-testid="product-card-link"] p')[0].textContent
        //                 products.push(
        //                     {
        //                         id: id,
        //                         name: name,
        //                         url: 'https://www.amazon.in/' + name + '/dp/' + id,
        //                         image: product.querySelectorAll('picture source')[0].getAttribute("srcset"),
        //                     }
        //                 );
        //             }
        //         }
        //     }
        //     // if products have a product then the same product should not be added again
        //     const uniqueProducts = products.filter((product, index, self) =>
        //         index === self.findIndex((p) => (
        //             p.id === product.id
        //         ))
        //     );
        //     products.splice(0, products.length);
        //     uniqueProducts.forEach(product => (
        //         products.push(product)
        //     ));
        //     console.log(products);
        // });

        // const searchInput = document.querySelector("#twotabsearchtextbox");
        // const recentSearchHistory = [];
        // if (url.includes("/s?k=")) {
        //     recentSearchHistory.push(URL.parse(url).searchParams.get("k"));
        // }
        // if (searchInput) {
        //     searchInput.addEventListener("click", () => {
        //         setTimeout(() => {
        //             const suggestionElements = document.querySelectorAll(".s-suggestion");
        //             suggestionElements.forEach((el) => {
        //                 const text = el.innerText.trim();
        //                 if (text) {
        //                     recentSearchHistory.push(text);
        //                 }
        //             });
        //             const response = sendRequest("https://shashwat.weblytechnolab.com/api/platform/deals", "Amazon", {
        //                 recentSearchHistory: recentSearchHistory,
        //             });
        //             console.log(response);
        //         }, 500);
        //     });
        // }

    } catch (error) {
        console.log("Error: ", error);
    }
} else if (hostname.includes("meesho")) {
} else if (hostname.includes("ajio")) {
} else if (hostname.includes("myntra")) {
}

chrome.runtime.sendMessage({ type: "deals", data: deals });