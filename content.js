const hostname = window.location.hostname;

if (hostname.includes("flipkart")) {
} else if (hostname.includes("amazon")) {
    try {
        const bannerImages = [];
        const bannerItems = document.querySelectorAll("#pageContent #desktop-banner ol.a-carousel li");
        if (typeof bannerItems != "undefined" || bannerItems != null) {
            Object.keys(bannerItems).forEach((key) => {
                bannerImages.push(bannerItems[key].querySelectorAll("img")[0].getAttribute("src"));
            });
        }

        const products = [];
        const dealItems = document.getElementById("dealsGridLinkAnchor").querySelectorAll(".DesktopDiscountAsinGrid-module__grid_pi4xEmM7RAHNMG9sGVBJ div.GridItem-module__container_PW2gdkwTj1GQzdwJjejN");
        if (typeof dealItems != "undefined" || dealItems != null) {
            Object.keys(dealItems).forEach((key) => {
                const product = dealItems[key];
                const id = product.getAttribute("data-testid")
                const name = product.querySelectorAll('a[data-testid="product-card-link"] p')[0].textContent;
                products.push({
                    id: id,
                    name: name,
                    url: 'https://www.amazon.in/' + name + '/dp/' + id,
                });
            });
        }

        fetch("https://shashwat.weblytechnolab.com/api/deals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Amazon",
                data: {
                    home_page_banner_images: bannerImages,
                    products: products,
                }
            })
        }).then(res => res.json())
            .then(response => {
                console.log("✅ Sent successfully:", response);
            }).catch(err => {
                console.error("❌ Error sending data:", err);
            });


    } catch (error) {
        console.log("Error: ", error);
    }
} else if (hostname.includes("meesho")) {
} else if (hostname.includes("ajio")) {
} else if (hostname.includes("myntra")) {
}

chrome.runtime.sendMessage({ type: "deals", data: deals });