const hostname = window.location.hostname;
const deals = [];

if (hostname.includes("flipkart")) {
} else if (hostname.includes("amazon")) {
    try {
        // Home Page Banner Images
        const bannerImages = [];
        const bannerItems = document.querySelectorAll("#pageContent #desktop-banner ol.a-carousel li");
        if (typeof bannerItems != "undefined" || bannerItems != null) {
            Object.keys(bannerItems).forEach((key) => {
                const img = bannerItems[key].querySelectorAll("img")[0];
                if (typeof img != "undefined" || img != null) {
                    const src = img.getAttribute("src");
                    if (typeof src != "undefined" || src != null) {
                        bannerImages.push(src);
                    }
                }
            });
        }
        console.log(bannerImages);

        // Deals Page Products
        const products = [];
        document.addEventListener("scroll", function () {
            console.log("Scrolling...");
            const dealItems = document.querySelectorAll("#dealsGridLinkAnchor div[data-testid='virtuoso-item-list']");
            if (typeof dealItems != "undefined" || dealItems != null) {
                let rows = dealItems[0].childNodes;
                for (let i = 0; i < rows.length; i++) {
                    let list = rows[i].querySelectorAll(".GridRow-module__container_q6XsDi4clqdE6jhYFSBW")[0].childNodes;
                    for (let j = 0; j < list.length; j++) {
                        const product = list[j];
                        const id = product.getAttribute("data-testid");
                        const name = product.querySelectorAll('a[data-testid="product-card-link"] p')[0].textContent
                        products.push(
                            {
                                id: id,
                                name: name,
                                url: 'https://www.amazon.in/' + name + '/dp/' + id,
                                image: product.querySelectorAll('picture source')[0].getAttribute("srcset"),
                            }
                        );
                    }
                }
            }
            // if products have a product then the same product should not be added again
            const uniqueProducts = products.filter((product, index, self) =>
                index === self.findIndex((p) => (
                    p.id === product.id
                ))
            );
            products.splice(0, products.length);
            uniqueProducts.forEach(product => (
                products.push(product)
            ));
            console.log(products);
        });

        fetch("https://shashwat.weblytechnolab.com/api/platform/deals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Amazon",
                data: {
                    // home_page_banner_images: bannerImages,
                    home_page_banner_images: [
                        "https://c.media-amazon.com/images/G/31/img21/Raghu/MayART/HEROmayART/rtyuio/TCL_55_PC_Hero_Lifestyle_1500x600._CB795174641_.jpg",
                        "https://c.media-amazon.com/images/G/31/IMG15/dharshini/PC_Hero_Asin_3000x1200_AC_1x-Day1._CB794828883_.jpg",
                        "https://c.media-amazon.com/images/G/31/img23/PB/2025/Kishore/MayArt-25_PC_Hero_1500x600_2._CB795248066_.jpg",
                        "https://c.media-amazon.com/images/G/31/IN-Events/Shankhadip/MayART25/MAY25_GW_PC_Hero_H1_8PM_Ends-Midnight_1x._CB794858882_.jpg",
                        "https://c.media-amazon.com/images/G/31/BISS_2024/2025/May/Art/GW/ATF/D1/PC_1500x600_2._CB794820878_.jpg",
                        "https://c.media-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/MayART25/Hero/Clean_Main_event_Rec_PC._CB794884745_.jpg",
                        "https://c.media-amazon.com/images/G/31/img21/2025/MayART25/GW/ATF/PC/81_1._CB794852751_.jpg",
                        "https://c.media-amazon.com/images/G/31/img24/thomsoja/Grocery/2025/ART/MayART25/GW/Event/Event_PC_Hero_1500x600_Rec._CB794912035_.jpg"
                    ],
                    // products: products,
                    products: [
                        {
                            "id": "B0DTB3JSVV",
                            "name": "Fire-Boltt Ninja Call Pro Plus Fusion Smart Watch 1.83 inch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution (Wine)Fire-Boltt Ninja Call Pro Plus Fusion Smart Watch 1.83 inch with Blue…",
                            "url": "https://www.amazon.in/Fire-Boltt Ninja Call Pro Plus Fusion Smart Watch 1.83 inch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution (Wine)Fire-Boltt Ninja Call Pro Plus Fusion Smart Watch 1.83 inch with Blue…/dp/B0DTB3JSVV",
                            "image": "https://m.media-amazon.com/images/I/61PtYFh3dLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61PtYFh3dLL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61PtYFh3dLL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0DPWL48Z5",
                            "name": "boAt Airdopes 91 Prime, 45HRS Battery, 13mm Drivers, Metallic Finish, Low Latency,ENx Tech, Fast Charge, v5.3 Bluetooth TWS in Ear Earbuds Wireless Earphones with mic (Midnight Black)boAt Airdopes 91 Prime, 45HRS Battery, 13mm Drivers, Metallic F…",
                            "url": "https://www.amazon.in/boAt Airdopes 91 Prime, 45HRS Battery, 13mm Drivers, Metallic Finish, Low Latency,ENx Tech, Fast Charge, v5.3 Bluetooth TWS in Ear Earbuds Wireless Earphones with mic (Midnight Black)boAt Airdopes 91 Prime, 45HRS Battery, 13mm Drivers, Metallic F…/dp/B0DPWL48Z5",
                            "image": "https://m.media-amazon.com/images/I/713Lr2oNWaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/713Lr2oNWaL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/713Lr2oNWaL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B08TV2P1N8",
                            "name": "Boat Rockerz 255 Pro+, 60HRS Battery, Fast Charge, IPX7, Dual Pairing, Low Latency, Magnetic Earbuds, Bluetooth Neckband, Wireless with Mic Earphones (Active Black)Boat Rockerz 255 Pro+, 60HRS Battery, Fast Charge, IPX7, Dual P…",
                            "url": "https://www.amazon.in/Boat Rockerz 255 Pro+, 60HRS Battery, Fast Charge, IPX7, Dual Pairing, Low Latency, Magnetic Earbuds, Bluetooth Neckband, Wireless with Mic Earphones (Active Black)Boat Rockerz 255 Pro+, 60HRS Battery, Fast Charge, IPX7, Dual P…/dp/B08TV2P1N8",
                            "image": "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B07WH38Z6Z",
                            "name": "Hit Flying Insect Killer - Mosquito & Fly Killer Spray (700Ml) | Instant Kill | Protection From Dengue & Malaria, Pack Of 1Hit Flying Insect Killer - Mosquito & Fly Killer Spray (700Ml) | Instant…",
                            "url": "https://www.amazon.in/Hit Flying Insect Killer - Mosquito & Fly Killer Spray (700Ml) | Instant Kill | Protection From Dengue & Malaria, Pack Of 1Hit Flying Insect Killer - Mosquito & Fly Killer Spray (700Ml) | Instant…/dp/B07WH38Z6Z",
                            "image": "https://m.media-amazon.com/images/I/614DLezHjaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/614DLezHjaL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/614DLezHjaL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0D2R2MXXJ",
                            "name": "Samsung Original 25W Type-C Travel Adaptor Without Cable, WhiteSamsung Original 25W Type-C Travel Adaptor Without Cable, W…",
                            "url": "https://www.amazon.in/Samsung Original 25W Type-C Travel Adaptor Without Cable, WhiteSamsung Original 25W Type-C Travel Adaptor Without Cable, W…/dp/B0D2R2MXXJ",
                            "image": "https://m.media-amazon.com/images/I/512UVkoMMEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/512UVkoMMEL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/512UVkoMMEL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B01CCGW4OE",
                            "name": "Cetaphil Paraben, Sulphate-Free Gentle Skin Hydrating Face Wash Cleanser with Niacinamide, Vitamin B5 for Dry to Normal, Sensitive Skin - 125 mlCetaphil Paraben, Sulphate-Free Gentle Skin Hydrating Face Wash…",
                            "url": "https://www.amazon.in/Cetaphil Paraben, Sulphate-Free Gentle Skin Hydrating Face Wash Cleanser with Niacinamide, Vitamin B5 for Dry to Normal, Sensitive Skin - 125 mlCetaphil Paraben, Sulphate-Free Gentle Skin Hydrating Face Wash…/dp/B01CCGW4OE",
                            "image": "https://m.media-amazon.com/images/I/51O+J5jnXcL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/51O+J5jnXcL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/51O+J5jnXcL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B09S6M7JQJ",
                            "name": "Ghar Soaps Sandalwood & Saffron Magic Soaps For Bath (300 Gms Pack Of 3) | Paraben Free | Chandan & Kesar Bath Soap | Handmade Soaps For Glowing | Skin Brightening Soap For Men & WomenGhar Soaps Sandalwood & Saffron Magic Soaps For Bath (300 Gms P…",
                            "url": "https://www.amazon.in/Ghar Soaps Sandalwood & Saffron Magic Soaps For Bath (300 Gms Pack Of 3) | Paraben Free | Chandan & Kesar Bath Soap | Handmade Soaps For Glowing | Skin Brightening Soap For Men & WomenGhar Soaps Sandalwood & Saffron Magic Soaps For Bath (300 Gms P…/dp/B09S6M7JQJ",
                            "image": "https://m.media-amazon.com/images/I/71A7tvxJXPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71A7tvxJXPL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71A7tvxJXPL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0BBV83YF9",
                            "name": "CP PLUS 2MP Full HD Smart Wi-Fi CCTV Home Security Camera | 360° with Pan Tilt | View & Talk | Motion Alert | Night Vision | SD Card (Upto 128 GB), Alexa & Google Support | IR Distance 10mtr | CP-E25ACP PLUS 2MP Full HD Smart Wi-Fi CCTV Home Security Camera | 36…",
                            "url": "https://www.amazon.in/CP PLUS 2MP Full HD Smart Wi-Fi CCTV Home Security Camera | 360° with Pan Tilt | View & Talk | Motion Alert | Night Vision | SD Card (Upto 128 GB), Alexa & Google Support | IR Distance 10mtr | CP-E25ACP PLUS 2MP Full HD Smart Wi-Fi CCTV Home Security Camera | 36…/dp/B0BBV83YF9",
                            "image": "https://m.media-amazon.com/images/I/51gmjKtWUGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/51gmjKtWUGL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/51gmjKtWUGL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0CC8VF47L",
                            "name": "Boat Rockerz 245 v2 Pro, 30HRS Battery, ENx Tech, Fast Charge, Low Latency, Dual Pairing, Magnetic Ear Buds, IPX5, Type-C Interface, Bluetooth Neckband, Wireless with Mic Earphones (Active Black)Boat Rockerz 245 v2 Pro, 30HRS Battery, ENx Tech, Fast Charge, L…",
                            "url": "https://www.amazon.in/Boat Rockerz 245 v2 Pro, 30HRS Battery, ENx Tech, Fast Charge, Low Latency, Dual Pairing, Magnetic Ear Buds, IPX5, Type-C Interface, Bluetooth Neckband, Wireless with Mic Earphones (Active Black)Boat Rockerz 245 v2 Pro, 30HRS Battery, ENx Tech, Fast Charge, L…/dp/B0CC8VF47L",
                            "image": "https://m.media-amazon.com/images/I/61T1Z4mwdgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61T1Z4mwdgL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61T1Z4mwdgL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0DZXTVL6V",
                            "name": "boAt New Launch Airdopes Plus 311, Glass Design, Dual Mics ENx, Fast Charge, 50 Hrs Battery, Low Latency, IPX4, Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Charcoal Black)boAt New Launch Airdopes Plus 311, Glass Design, Dual Mics ENx,…",
                            "url": "https://www.amazon.in/boAt New Launch Airdopes Plus 311, Glass Design, Dual Mics ENx, Fast Charge, 50 Hrs Battery, Low Latency, IPX4, Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Charcoal Black)boAt New Launch Airdopes Plus 311, Glass Design, Dual Mics ENx,…/dp/B0DZXTVL6V",
                            "image": "https://m.media-amazon.com/images/I/61c3+AAop3L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61c3+AAop3L._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61c3+AAop3L._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0B573QW21",
                            "name": "WishCare Hair Growth Serum Concentrate - 3% Redensyl, 4% Anagain, 2% Baicapil, Caffeine, Biotin & Rice Water - Advanced Hair Growth Serum for Hair Fall Control & Hair Growth 30mlWishCare Hair Growth Serum Concentrate - 3% Redensyl, 4%…",
                            "url": "https://www.amazon.in/WishCare Hair Growth Serum Concentrate - 3% Redensyl, 4% Anagain, 2% Baicapil, Caffeine, Biotin & Rice Water - Advanced Hair Growth Serum for Hair Fall Control & Hair Growth 30mlWishCare Hair Growth Serum Concentrate - 3% Redensyl, 4%…/dp/B0B573QW21",
                            "image": "https://m.media-amazon.com/images/I/61PA2P4KDCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61PA2P4KDCL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61PA2P4KDCL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0C1S894S3",
                            "name": "Wakefit 100% Waterproof Premium Cotton Mattress Protector | Breathable and Hypoallergenic Ultra Soft Fitted Bed Protector 78\"x72\" - King, GreyWakefit 100% Waterproof Premium Cotton Mattress Protec…",
                            "url": "https://www.amazon.in/Wakefit 100% Waterproof Premium Cotton Mattress Protector | Breathable and Hypoallergenic Ultra Soft Fitted Bed Protector 78\"x72\" - King, GreyWakefit 100% Waterproof Premium Cotton Mattress Protec…/dp/B0C1S894S3",
                            "image": "https://m.media-amazon.com/images/I/61sRf7oDELL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61sRf7oDELL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61sRf7oDELL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B09ZV233RH",
                            "name": "Caresmith Revive Scalp Massager | 96 Silicon Kneading Points with Detachable Heads | Scalp, Body & Head Massager for Hair Growth (Green)Caresmith Revive Scalp Massager | 96 Silicon Kneading Points with…",
                            "url": "https://www.amazon.in/Caresmith Revive Scalp Massager | 96 Silicon Kneading Points with Detachable Heads | Scalp, Body & Head Massager for Hair Growth (Green)Caresmith Revive Scalp Massager | 96 Silicon Kneading Points with…/dp/B09ZV233RH",
                            "image": "https://m.media-amazon.com/images/I/61QiQ0Df23L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61QiQ0Df23L._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61QiQ0Df23L._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0C862R9VF",
                            "name": "Lifelong LLKS03 Foldable Kick Skating Cycle| Skate Scooter for Kids(Max User Weight: 50Kg) Kids Scooter (Pink, Blue)Lifelong LLKS03 Foldable Kick Skating Cycle| Skate Scooter for…",
                            "url": "https://www.amazon.in/Lifelong LLKS03 Foldable Kick Skating Cycle| Skate Scooter for Kids(Max User Weight: 50Kg) Kids Scooter (Pink, Blue)Lifelong LLKS03 Foldable Kick Skating Cycle| Skate Scooter for…/dp/B0C862R9VF",
                            "image": "https://m.media-amazon.com/images/I/61xr-fzqcxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61xr-fzqcxL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61xr-fzqcxL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B097JJ2CK6",
                            "name": "Safari Omega Pro 35L Laptop Backpack with Raincover, 3 compartments, bottle holder, organizer, school bag for boys and girls, college bag for women and men, office bag, travel bagSafari Omega Pro 35L Laptop Backpack with Raincover, 3 comp…",
                            "url": "https://www.amazon.in/Safari Omega Pro 35L Laptop Backpack with Raincover, 3 compartments, bottle holder, organizer, school bag for boys and girls, college bag for women and men, office bag, travel bagSafari Omega Pro 35L Laptop Backpack with Raincover, 3 comp…/dp/B097JJ2CK6",
                            "image": "https://m.media-amazon.com/images/I/71maWXZscfL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71maWXZscfL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71maWXZscfL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B071Z8M4KX",
                            "name": "Boat BassHeads 100 in-Ear Headphones with Mic (Black)Boat BassHeads 100 in-Ear Headphones with Mic (Black)",
                            "url": "https://www.amazon.in/Boat BassHeads 100 in-Ear Headphones with Mic (Black)Boat BassHeads 100 in-Ear Headphones with Mic (Black)/dp/B071Z8M4KX",
                            "image": "https://m.media-amazon.com/images/I/513ugd16C6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/513ugd16C6L._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/513ugd16C6L._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B09SFTL78F",
                            "name": "SMAN Men's Polo T-Shirt Regular Fit Half Sleeves with Pocket and Bottom Neck Collar for Casual and Daily Use.SMAN Men's Polo T-Shirt Regular Fit Half Sleeves with Pocket and…",
                            "url": "https://www.amazon.in/SMAN Men's Polo T-Shirt Regular Fit Half Sleeves with Pocket and Bottom Neck Collar for Casual and Daily Use.SMAN Men's Polo T-Shirt Regular Fit Half Sleeves with Pocket and…/dp/B09SFTL78F",
                            "image": "https://m.media-amazon.com/images/I/51p5FQLn8-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/51p5FQLn8-L._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/51p5FQLn8-L._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B07SLLXZHP",
                            "name": "Amazon Brand - Supples Premium Baby Diaper Pants | 108 Baby Diapers | XL | 12-17 Kg | 54 x 2 Packs | 12 Hrs Absorption | Cushiony Cotton Soft Fabric | Phthalates-Free | Triple Leak GuardAmazon Brand - Supples Premium Baby Diaper Pants | 108 Baby Dia…",
                            "url": "https://www.amazon.in/Amazon Brand - Supples Premium Baby Diaper Pants | 108 Baby Diapers | XL | 12-17 Kg | 54 x 2 Packs | 12 Hrs Absorption | Cushiony Cotton Soft Fabric | Phthalates-Free | Triple Leak GuardAmazon Brand - Supples Premium Baby Diaper Pants | 108 Baby Dia…/dp/B07SLLXZHP",
                            "image": "https://m.media-amazon.com/images/I/71VUXHN+wOL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71VUXHN+wOL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71VUXHN+wOL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B006QHBBVI",
                            "name": "L'Oréal Paris Semi-Permanent Hair Colour, Ammonia-Free Formula & Honey-Infused Conditioner, Glossy Finish, Casting Crème Gloss, Dark Brown 400, 87.5g+72mlL'Oréal Paris Semi-Permanent Hair Colour, Ammonia-Free Formula &…",
                            "url": "https://www.amazon.in/L'Oréal Paris Semi-Permanent Hair Colour, Ammonia-Free Formula & Honey-Infused Conditioner, Glossy Finish, Casting Crème Gloss, Dark Brown 400, 87.5g+72mlL'Oréal Paris Semi-Permanent Hair Colour, Ammonia-Free Formula &…/dp/B006QHBBVI",
                            "image": "https://m.media-amazon.com/images/I/61jaQAARpwL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61jaQAARpwL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61jaQAARpwL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B07L6GZYDV",
                            "name": "Wakefit Height Adjustable Hollow Fiber Sleeping Pillow with Zip |(White and Grey, Standard, Set of 2, Microfiber) 3 Months WarrantyWakefit Height Adjustable Hollow Fiber Sleeping Pillow with Zip |(W…",
                            "url": "https://www.amazon.in/Wakefit Height Adjustable Hollow Fiber Sleeping Pillow with Zip |(White and Grey, Standard, Set of 2, Microfiber) 3 Months WarrantyWakefit Height Adjustable Hollow Fiber Sleeping Pillow with Zip |(W…/dp/B07L6GZYDV",
                            "image": "https://m.media-amazon.com/images/I/51oityumVSL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/51oityumVSL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/51oityumVSL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0CV7J49TQ",
                            "name": "Amazon Brand - Presto! Active Wash Detergent Powder | 8 Kg | Tough On Stains | Gentle On Fabrics | Colour-Safe | Refreshing Fragrance | Machine And Hand WashAmazon Brand - Presto! Active Wash Detergent Powder | 8 Kg | T…",
                            "url": "https://www.amazon.in/Amazon Brand - Presto! Active Wash Detergent Powder | 8 Kg | Tough On Stains | Gentle On Fabrics | Colour-Safe | Refreshing Fragrance | Machine And Hand WashAmazon Brand - Presto! Active Wash Detergent Powder | 8 Kg | T…/dp/B0CV7J49TQ",
                            "image": "https://m.media-amazon.com/images/I/61hx-ExBRhL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61hx-ExBRhL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61hx-ExBRhL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B01CCGW732",
                            "name": "Cetaphil Oily Skin Cleanser , Daily Face Wash for Oily, Acne prone Skin , Gentle Foaming, 125mlCetaphil Oily Skin Cleanser , Daily Face Wash for Oily, Acne prone S…",
                            "url": "https://www.amazon.in/Cetaphil Oily Skin Cleanser , Daily Face Wash for Oily, Acne prone Skin , Gentle Foaming, 125mlCetaphil Oily Skin Cleanser , Daily Face Wash for Oily, Acne prone S…/dp/B01CCGW732",
                            "image": "https://m.media-amazon.com/images/I/51RZjGsfF5L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/51RZjGsfF5L._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/51RZjGsfF5L._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0CQJWMMG7",
                            "name": "Noise Buds N1 in-Ear True Wireless Earbuds with Chrome Finish, 40H of Playtime, Quad Mic with ENC, Ultra Low Latency(Up to 40 Ms), Instacharge(10 Min=120 Min), BT V5.3(Carbon Black)Noise Buds N1 in-Ear True Wireless Earbuds with Chrome Finish, 40H…",
                            "url": "https://www.amazon.in/Noise Buds N1 in-Ear True Wireless Earbuds with Chrome Finish, 40H of Playtime, Quad Mic with ENC, Ultra Low Latency(Up to 40 Ms), Instacharge(10 Min=120 Min), BT V5.3(Carbon Black)Noise Buds N1 in-Ear True Wireless Earbuds with Chrome Finish, 40H…/dp/B0CQJWMMG7",
                            "image": "https://m.media-amazon.com/images/I/519N06XC1SL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/519N06XC1SL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/519N06XC1SL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0D9CW9XBQ",
                            "name": "Trance Cotton Feel Terry Ultra Soft Waterproof Mattress Protector |Hypoallergenic Mattresses Cover (75x60 inch | 6.25x5 feet, Classic Blue - Pack of 1)Trance Cotton Feel Terry Ultra Soft Waterproof Mattress Protector |H…",
                            "url": "https://www.amazon.in/Trance Cotton Feel Terry Ultra Soft Waterproof Mattress Protector |Hypoallergenic Mattresses Cover (75x60 inch | 6.25x5 feet, Classic Blue - Pack of 1)Trance Cotton Feel Terry Ultra Soft Waterproof Mattress Protector |H…/dp/B0D9CW9XBQ",
                            "image": "https://m.media-amazon.com/images/I/71xcRGgGYnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71xcRGgGYnL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71xcRGgGYnL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B01CCGW4LC",
                            "name": "Cetaphil Paraben, Sulphate-Free Gentle Skin Hydrating Face Wash Cleanser with Niacinamide, Vitamin B5 for Dry to Normal, Sensitive Skin - 250 mlCetaphil Paraben, Sulphate-Free Gentle Skin Hydrating Face Wash…",
                            "url": "https://www.amazon.in/Cetaphil Paraben, Sulphate-Free Gentle Skin Hydrating Face Wash Cleanser with Niacinamide, Vitamin B5 for Dry to Normal, Sensitive Skin - 250 mlCetaphil Paraben, Sulphate-Free Gentle Skin Hydrating Face Wash…/dp/B01CCGW4LC",
                            "image": "https://m.media-amazon.com/images/I/51qf9buO8zL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/51qf9buO8zL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/51qf9buO8zL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0B45RB1RV",
                            "name": "Deconstruct Face Gel Sunscreen SPF 50 + and PA+++ | Gel based sunscreen for oily, combination skin, normal skin | Broad spectrum sunscreen, No White Cast, Lightweight - 50gDeconstruct Face Gel Sunscreen SPF 50 + and PA+++ | Gel based s…",
                            "url": "https://www.amazon.in/Deconstruct Face Gel Sunscreen SPF 50 + and PA+++ | Gel based sunscreen for oily, combination skin, normal skin | Broad spectrum sunscreen, No White Cast, Lightweight - 50gDeconstruct Face Gel Sunscreen SPF 50 + and PA+++ | Gel based s…/dp/B0B45RB1RV",
                            "image": "https://m.media-amazon.com/images/I/51qgywShKTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/51qgywShKTL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/51qgywShKTL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0C9DX5RFY",
                            "name": "Lifelong Gun Massager Machine for Pain Relief - Body, Neck, Shoulders, Back, Arms & Feet Massager - 6 Speed Settings -7 Heads Attachment (LLGM109, Black)Lifelong Gun Massager Machine for Pain Relief - Body, Neck, Shoulde…",
                            "url": "https://www.amazon.in/Lifelong Gun Massager Machine for Pain Relief - Body, Neck, Shoulders, Back, Arms & Feet Massager - 6 Speed Settings -7 Heads Attachment (LLGM109, Black)Lifelong Gun Massager Machine for Pain Relief - Body, Neck, Shoulde…/dp/B0C9DX5RFY",
                            "image": "https://m.media-amazon.com/images/I/51djzsG+dqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/51djzsG+dqL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/51djzsG+dqL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B00VK5MJ1W",
                            "name": "Pigeon by Stovekraft Favourite Non-induction Base Aluminium Outer Lid Pressure Cooker, 5 Litres, SilverPigeon by Stovekraft Favourite Non-induction Base Aluminium O…",
                            "url": "https://www.amazon.in/Pigeon by Stovekraft Favourite Non-induction Base Aluminium Outer Lid Pressure Cooker, 5 Litres, SilverPigeon by Stovekraft Favourite Non-induction Base Aluminium O…/dp/B00VK5MJ1W",
                            "image": "https://m.media-amazon.com/images/I/51qxl7UZFhL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/51qxl7UZFhL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/51qxl7UZFhL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0DKTKTVJ8",
                            "name": "Boldfit Weight Machine for Body Weight Weighing Machine Digital Bathroom Scale for Human Body Weight Measurement Extra Thick Weighing Scale for Large LCD Display 36 Months Warranty -Magnum, BlackBoldfit Weight Machine for Body Weight Weighing Machine Digital…",
                            "url": "https://www.amazon.in/Boldfit Weight Machine for Body Weight Weighing Machine Digital Bathroom Scale for Human Body Weight Measurement Extra Thick Weighing Scale for Large LCD Display 36 Months Warranty -Magnum, BlackBoldfit Weight Machine for Body Weight Weighing Machine Digital…/dp/B0DKTKTVJ8",
                            "image": "https://m.media-amazon.com/images/I/61HVSIcUjsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61HVSIcUjsL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61HVSIcUjsL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0D9BHX9MZ",
                            "name": "Wellcore - Pure Micronised Creatine Monohydrate,Tropical Tango (122g, 33 Servings), Rapid Absorption, Enhanced Muscle Strength & Power, Fast Recovery,Increased Muscle MassWellcore - Pure Micronised Creatine Monohydrate,Tropical Tango (122…",
                            "url": "https://www.amazon.in/Wellcore - Pure Micronised Creatine Monohydrate,Tropical Tango (122g, 33 Servings), Rapid Absorption, Enhanced Muscle Strength & Power, Fast Recovery,Increased Muscle MassWellcore - Pure Micronised Creatine Monohydrate,Tropical Tango (122…/dp/B0D9BHX9MZ",
                            "image": "https://m.media-amazon.com/images/I/61WPimSVSEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61WPimSVSEL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61WPimSVSEL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B09FSMN8QS",
                            "name": "SOPL-OLIVEWARE Teso Pro Lunch Box with Cutlery, 3 Microwave Safe Inside Containers with BPA Free Lids(290ml, 450ml & 600ml), Plastic Pickle Box(130ml), Steel Water Bottle(750ml) - BlueSOPL-OLIVEWARE Teso Pro Lunch Box with Cutlery, 3 Microwave Sa…",
                            "url": "https://www.amazon.in/SOPL-OLIVEWARE Teso Pro Lunch Box with Cutlery, 3 Microwave Safe Inside Containers with BPA Free Lids(290ml, 450ml & 600ml), Plastic Pickle Box(130ml), Steel Water Bottle(750ml) - BlueSOPL-OLIVEWARE Teso Pro Lunch Box with Cutlery, 3 Microwave Sa…/dp/B09FSMN8QS",
                            "image": "https://m.media-amazon.com/images/I/71zj7ULiR+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71zj7ULiR+L._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71zj7ULiR+L._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B00JD8EA1U",
                            "name": "Classic Mosquito Net for Double Bed | King Size Foldable Machardani | Polyester 30GSM Strong Net | PVC Coated Corrosion Resistant Steel Wire - BlueClassic Mosquito Net for Double Bed | King Size Foldable Machard…",
                            "url": "https://www.amazon.in/Classic Mosquito Net for Double Bed | King Size Foldable Machardani | Polyester 30GSM Strong Net | PVC Coated Corrosion Resistant Steel Wire - BlueClassic Mosquito Net for Double Bed | King Size Foldable Machard…/dp/B00JD8EA1U",
                            "image": "https://m.media-amazon.com/images/I/61IOb4Nu6AL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61IOb4Nu6AL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61IOb4Nu6AL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0D3HWJ8LB",
                            "name": "realme Buds Wireless 3 Neo in Ear Bluetooth Neckband with 13.4 Mm Dynamic Bass Boost Driver,Upto 32 Hours Playback,Fast Charge,Ai Enc,45Ms Low Latency,Ip55 Dust&Water Resistannt&Bluetooth V 5.4 Blackrealme Buds Wireless 3 Neo in Ear Bluetooth Neckband with 13.4 M…",
                            "url": "https://www.amazon.in/realme Buds Wireless 3 Neo in Ear Bluetooth Neckband with 13.4 Mm Dynamic Bass Boost Driver,Upto 32 Hours Playback,Fast Charge,Ai Enc,45Ms Low Latency,Ip55 Dust&Water Resistannt&Bluetooth V 5.4 Blackrealme Buds Wireless 3 Neo in Ear Bluetooth Neckband with 13.4 M…/dp/B0D3HWJ8LB",
                            "image": "https://m.media-amazon.com/images/I/61+esOKPDVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61+esOKPDVL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61+esOKPDVL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0D9CWRVSP",
                            "name": "Trance Waterproof Terry Fabric Ultra Soft Mattress Protector | Breathable | Hypoallergenic Bed Protector | Mattresses Cover (75x48 inch | 6.25x4 feet_ Turquoise)Trance Waterproof Terry Fabric Ultra Soft Mattress Protector | Br…",
                            "url": "https://www.amazon.in/Trance Waterproof Terry Fabric Ultra Soft Mattress Protector | Breathable | Hypoallergenic Bed Protector | Mattresses Cover (75x48 inch | 6.25x4 feet_ Turquoise)Trance Waterproof Terry Fabric Ultra Soft Mattress Protector | Br…/dp/B0D9CWRVSP",
                            "image": "https://m.media-amazon.com/images/I/61O3h4g7WxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61O3h4g7WxL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61O3h4g7WxL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0DGTT1NGW",
                            "name": "boAt Airdopes 141 Pro Buds, 13mm Drivers, Metallic Finish, 60HRS Battery, 4Mics ENx, Fast Charge, IPX5, v5.3 Bluetooth TWS in Ear Earbuds Wireless Earphones with mic (Obsidian Black)boAt Airdopes 141 Pro Buds, 13mm Drivers, Metallic Finish, 60HRS Ba…",
                            "url": "https://www.amazon.in/boAt Airdopes 141 Pro Buds, 13mm Drivers, Metallic Finish, 60HRS Battery, 4Mics ENx, Fast Charge, IPX5, v5.3 Bluetooth TWS in Ear Earbuds Wireless Earphones with mic (Obsidian Black)boAt Airdopes 141 Pro Buds, 13mm Drivers, Metallic Finish, 60HRS Ba…/dp/B0DGTT1NGW",
                            "image": "https://m.media-amazon.com/images/I/71pWLFLJIVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71pWLFLJIVL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71pWLFLJIVL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0B4S11QCC",
                            "name": "Milton Aura 500 Thermosteel Water Bottle 520 ml, 24 Hr Hot and Cold I Leak Proof Lid, ISI Certified I Vacuum Insulated I for Office, Gym, School I Dark BlueMilton Aura 500 Thermosteel Water Bottle 520 ml, 24 Hr Hot a…",
                            "url": "https://www.amazon.in/Milton Aura 500 Thermosteel Water Bottle 520 ml, 24 Hr Hot and Cold I Leak Proof Lid, ISI Certified I Vacuum Insulated I for Office, Gym, School I Dark BlueMilton Aura 500 Thermosteel Water Bottle 520 ml, 24 Hr Hot a…/dp/B0B4S11QCC",
                            "image": "https://m.media-amazon.com/images/I/61bivUb5uQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61bivUb5uQL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61bivUb5uQL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B006LX9K92",
                            "name": "Garnier Skin Naturals, Facewash, Cleansing and Brightening, Bright Complete, 100 gGarnier Skin Naturals, Facewash, Cleansing and Brightening, Brigh…",
                            "url": "https://www.amazon.in/Garnier Skin Naturals, Facewash, Cleansing and Brightening, Bright Complete, 100 gGarnier Skin Naturals, Facewash, Cleansing and Brightening, Brigh…/dp/B006LX9K92",
                            "image": "https://m.media-amazon.com/images/I/61Vp0-XHx2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61Vp0-XHx2L._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61Vp0-XHx2L._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0D78W8K62",
                            "name": "Cetaphil Oily Skin Cleanser, Daily Face Wash For Oily, Acne Prone Skin, Gentle Foaming, 250MlCetaphil Oily Skin Cleanser, Daily Face Wash For Oily, Acne Prone S…",
                            "url": "https://www.amazon.in/Cetaphil Oily Skin Cleanser, Daily Face Wash For Oily, Acne Prone Skin, Gentle Foaming, 250MlCetaphil Oily Skin Cleanser, Daily Face Wash For Oily, Acne Prone S…/dp/B0D78W8K62",
                            "image": "https://m.media-amazon.com/images/I/51Ge6+ihfhL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/51Ge6+ihfhL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/51Ge6+ihfhL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B06XDP2C1S",
                            "name": "Story@Home Blackout Door Curtains 7 Feet Set of 2 | Plain Design | 70% Room Darkening | Thermal Insulated Curtains | Curtain for Living Room | (116 x 215 cm, Beige) | Perfect for Home DecorStory@Home Blackout Door Curtains 7 Feet Set of 2 | Plain De…",
                            "url": "https://www.amazon.in/Story@Home Blackout Door Curtains 7 Feet Set of 2 | Plain Design | 70% Room Darkening | Thermal Insulated Curtains | Curtain for Living Room | (116 x 215 cm, Beige) | Perfect for Home DecorStory@Home Blackout Door Curtains 7 Feet Set of 2 | Plain De…/dp/B06XDP2C1S",
                            "image": "https://m.media-amazon.com/images/I/716+UebbjgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/716+UebbjgL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/716+UebbjgL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0DD76X72T",
                            "name": "GoSriKi Women's Rayon Viscose Printed Anarkali Kurta with Palazzo & DupattaGoSriKi Women's Rayon Viscose Printed Anarkali Kurta with Palaz…",
                            "url": "https://www.amazon.in/GoSriKi Women's Rayon Viscose Printed Anarkali Kurta with Palazzo & DupattaGoSriKi Women's Rayon Viscose Printed Anarkali Kurta with Palaz…/dp/B0DD76X72T",
                            "image": "https://m.media-amazon.com/images/I/71mX4WATh-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71mX4WATh-L._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71mX4WATh-L._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B09MVWPC23",
                            "name": "LuvLap Pant Style Baby Diapers, X-Large (XL), 54 Count, For babies of Upto 12-17Kg with Aloe Vera Lotion for rash protection, with upto 12hr protection, DiapersLuvLap Pant Style Baby Diapers, X-Large (XL), 54 Count, For babies…",
                            "url": "https://www.amazon.in/LuvLap Pant Style Baby Diapers, X-Large (XL), 54 Count, For babies of Upto 12-17Kg with Aloe Vera Lotion for rash protection, with upto 12hr protection, DiapersLuvLap Pant Style Baby Diapers, X-Large (XL), 54 Count, For babies…/dp/B09MVWPC23",
                            "image": "https://m.media-amazon.com/images/I/61RTSPooOtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61RTSPooOtL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61RTSPooOtL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B07LDKFM2Y",
                            "name": "Scotch-Brite 2-in-1 Bucket Spin Mop (Green, 2 Refills), 4 PcsScotch-Brite 2-in-1 Bucket Spin Mop (Green, 2 Refills), 4 Pcs",
                            "url": "https://www.amazon.in/Scotch-Brite 2-in-1 Bucket Spin Mop (Green, 2 Refills), 4 PcsScotch-Brite 2-in-1 Bucket Spin Mop (Green, 2 Refills), 4 Pcs/dp/B07LDKFM2Y",
                            "image": "https://m.media-amazon.com/images/I/61ITlnte9uL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61ITlnte9uL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61ITlnte9uL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0821PN8L4",
                            "name": "Amazon Brand - Presto! Garbage Bags, Medium -(19 x 21 inches) - 30 bags/roll (Pack of 6, Black)Amazon Brand - Presto! Garbage Bags, Medium -(19 x 21 inches) -…",
                            "url": "https://www.amazon.in/Amazon Brand - Presto! Garbage Bags, Medium -(19 x 21 inches) - 30 bags/roll (Pack of 6, Black)Amazon Brand - Presto! Garbage Bags, Medium -(19 x 21 inches) -…/dp/B0821PN8L4",
                            "image": "https://m.media-amazon.com/images/I/71T2M3bz77L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71T2M3bz77L._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71T2M3bz77L._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0D4DZ7WL2",
                            "name": "Kidsmate Cruiser Kick Scooter for Kids with Broad Wheels | 3-Wheel Skate Scooter for Boys & Girls of Ages 2-12 Years | 5-Level Adjustable Height, and Easy Fold Design Scooter for Kids (Black)Kidsmate Cruiser Kick Scooter for Kids with Broad Wheels | 3-Whee…",
                            "url": "https://www.amazon.in/Kidsmate Cruiser Kick Scooter for Kids with Broad Wheels | 3-Wheel Skate Scooter for Boys & Girls of Ages 2-12 Years | 5-Level Adjustable Height, and Easy Fold Design Scooter for Kids (Black)Kidsmate Cruiser Kick Scooter for Kids with Broad Wheels | 3-Whee…/dp/B0D4DZ7WL2",
                            "image": "https://m.media-amazon.com/images/I/718LadDLSCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/718LadDLSCL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/718LadDLSCL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0DRFN3SBV",
                            "name": "Lymio Men Shorts || Men Shorts Cotton || Men Shorts Casual (Short 09-12)Lymio Men Shorts || Men Shorts Cotton || Men Shorts Casual (Sho…",
                            "url": "https://www.amazon.in/Lymio Men Shorts || Men Shorts Cotton || Men Shorts Casual (Short 09-12)Lymio Men Shorts || Men Shorts Cotton || Men Shorts Casual (Sho…/dp/B0DRFN3SBV",
                            "image": "https://m.media-amazon.com/images/I/71qJNrZhd1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71qJNrZhd1L._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71qJNrZhd1L._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0DN1RWNSQ",
                            "name": "One94store Astronaut Galaxy Projector Night Light – 360° Rotating Nebula Star Projector with Remote Control, Timer & Adjustable Head – LED Space Lamp for Kids’ Bedroom, Gaming Room, Home & Party DécorOne94store Astronaut Galaxy Projector Night Light – 360° Rota…",
                            "url": "https://www.amazon.in/One94store Astronaut Galaxy Projector Night Light – 360° Rotating Nebula Star Projector with Remote Control, Timer & Adjustable Head – LED Space Lamp for Kids’ Bedroom, Gaming Room, Home & Party DécorOne94store Astronaut Galaxy Projector Night Light – 360° Rota…/dp/B0DN1RWNSQ",
                            "image": "https://m.media-amazon.com/images/I/81r6tIbS1cL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/81r6tIbS1cL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/81r6tIbS1cL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B07YWZMJFP",
                            "name": "LifeKrafts Polyester Magnetic Mosquito Net for Door | Mosquito Curtain for All Door Types & Sizes | Auto-Closing Insect Screen to Keep Mosquito Out (200x100 cm, Brown)LifeKrafts Polyester Magnetic Mosquito Net for Door | Mosquit…",
                            "url": "https://www.amazon.in/LifeKrafts Polyester Magnetic Mosquito Net for Door | Mosquito Curtain for All Door Types & Sizes | Auto-Closing Insect Screen to Keep Mosquito Out (200x100 cm, Brown)LifeKrafts Polyester Magnetic Mosquito Net for Door | Mosquit…/dp/B07YWZMJFP",
                            "image": "https://m.media-amazon.com/images/I/71cRik9djML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71cRik9djML._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71cRik9djML._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0F63HJXSR",
                            "name": "Go Vegan Healthy Nutmix 500gm, Dried Almonds, Black Raisins, Cashewnuts, Cranberries, Black Dates & Many More. (Jar Pack)Go Vegan Healthy Nutmix 500gm, Dried Almonds, Black Raisins, Cas…",
                            "url": "https://www.amazon.in/Go Vegan Healthy Nutmix 500gm, Dried Almonds, Black Raisins, Cashewnuts, Cranberries, Black Dates & Many More. (Jar Pack)Go Vegan Healthy Nutmix 500gm, Dried Almonds, Black Raisins, Cas…/dp/B0F63HJXSR",
                            "image": "https://m.media-amazon.com/images/I/71R4+og8k+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71R4+og8k+L._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71R4+og8k+L._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B07Q2F37JN",
                            "name": "Amazon Brand - Supples Premium Baby Diaper Pants | 72 Baby Diapers | Medium | 7-12 Kg | 12 Hrs Absorption | Cushiony Cotton Soft Fabric | Phthalates-Free | Triple Leak GuardAmazon Brand - Supples Premium Baby Diaper Pants | 72 Baby Diap…",
                            "url": "https://www.amazon.in/Amazon Brand - Supples Premium Baby Diaper Pants | 72 Baby Diapers | Medium | 7-12 Kg | 12 Hrs Absorption | Cushiony Cotton Soft Fabric | Phthalates-Free | Triple Leak GuardAmazon Brand - Supples Premium Baby Diaper Pants | 72 Baby Diap…/dp/B07Q2F37JN",
                            "image": "https://m.media-amazon.com/images/I/61uzZbwlqZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61uzZbwlqZL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61uzZbwlqZL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0C8VB73WC",
                            "name": "Hipkoo Washing Machine Trolley with Wheels & Anti Vibration Grips - Adjustable Metal Stand for All Semi or Front or Top Load Washing Machine, Fridge, Dishwasher Stand, etc. (Stands up to 170Kg, Black)Hipkoo Washing Machine Trolley with Wheels & Anti Vibration Gri…",
                            "url": "https://www.amazon.in/Hipkoo Washing Machine Trolley with Wheels & Anti Vibration Grips - Adjustable Metal Stand for All Semi or Front or Top Load Washing Machine, Fridge, Dishwasher Stand, etc. (Stands up to 170Kg, Black)Hipkoo Washing Machine Trolley with Wheels & Anti Vibration Gri…/dp/B0C8VB73WC",
                            "image": "https://m.media-amazon.com/images/I/51-109qgiDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/51-109qgiDL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/51-109qgiDL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0CG8T58N7",
                            "name": "Story@Home Blackout Window Curtains 5 Feet Set of 2 | Solid Print | 96% Room Darkening | Thermal Insulated Curtains | Curtain for Living Room | (116 x 152 cm, Dark Teal Blue) | Perfect for Home DecorStory@Home Blackout Window Curtains 5 Feet Set of 2 | Solid Pri…",
                            "url": "https://www.amazon.in/Story@Home Blackout Window Curtains 5 Feet Set of 2 | Solid Print | 96% Room Darkening | Thermal Insulated Curtains | Curtain for Living Room | (116 x 152 cm, Dark Teal Blue) | Perfect for Home DecorStory@Home Blackout Window Curtains 5 Feet Set of 2 | Solid Pri…/dp/B0CG8T58N7",
                            "image": "https://m.media-amazon.com/images/I/71RlTIzz0pL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71RlTIzz0pL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71RlTIzz0pL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B09W5PSTBP",
                            "name": "Lifelong PVC Hex Dumbbells Pack of 2 (5kg*2) Black Color for Home Gym Equipment Fitness Barbell|Gym Exercise|Home Workout, Gym Dumbbells|Dumbbells Weights for Men & Women (6 Months Warranty)Lifelong PVC Hex Dumbbells Pack of 2 (5kg*2) Black Color for Hom…",
                            "url": "https://www.amazon.in/Lifelong PVC Hex Dumbbells Pack of 2 (5kg*2) Black Color for Home Gym Equipment Fitness Barbell|Gym Exercise|Home Workout, Gym Dumbbells|Dumbbells Weights for Men & Women (6 Months Warranty)Lifelong PVC Hex Dumbbells Pack of 2 (5kg*2) Black Color for Hom…/dp/B09W5PSTBP",
                            "image": "https://m.media-amazon.com/images/I/710SxepIfiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/710SxepIfiL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/710SxepIfiL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B083C6XMKQ",
                            "name": "Atom 10Kg Kitchen Weight Machine 6 Months Warranty, Digital Scale with LCD Display, Scale for Home Baking, Cooking & Balance Diet. Weighing Machine with capacity 10Kg, SF400/A121,Color May VaryAtom 10Kg Kitchen Weight Machine 6 Months Warranty, Digi…",
                            "url": "https://www.amazon.in/Atom 10Kg Kitchen Weight Machine 6 Months Warranty, Digital Scale with LCD Display, Scale for Home Baking, Cooking & Balance Diet. Weighing Machine with capacity 10Kg, SF400/A121,Color May VaryAtom 10Kg Kitchen Weight Machine 6 Months Warranty, Digi…/dp/B083C6XMKQ",
                            "image": "https://m.media-amazon.com/images/I/71775fRr+gL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71775fRr+gL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71775fRr+gL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0DF794BDK",
                            "name": "Lymio Reguler Fit Cotton Cargo Pants for Men (Cargo-46-49)Lymio Reguler Fit Cotton Cargo Pants for Men (Cargo-46-49)",
                            "url": "https://www.amazon.in/Lymio Reguler Fit Cotton Cargo Pants for Men (Cargo-46-49)Lymio Reguler Fit Cotton Cargo Pants for Men (Cargo-46-49)/dp/B0DF794BDK",
                            "image": "https://m.media-amazon.com/images/I/61u5oAftaeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61u5oAftaeL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61u5oAftaeL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0DC5B84VL",
                            "name": "ANNI DESIGNER Women's Rayon Blend Solid Straight Kurta with Pant & DupattaANNI DESIGNER Women's Rayon Blend Solid Straight Kurta with P…",
                            "url": "https://www.amazon.in/ANNI DESIGNER Women's Rayon Blend Solid Straight Kurta with Pant & DupattaANNI DESIGNER Women's Rayon Blend Solid Straight Kurta with P…/dp/B0DC5B84VL",
                            "image": "https://m.media-amazon.com/images/I/51suEsggRLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/51suEsggRLL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/51suEsggRLL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B096PJMGPL",
                            "name": "Minimalist Anti-Acne Salicylic Acid 2% Face Wash with LHA for Pore Cleansing, Oil Control & Sebum Regulation | Sulfate-Free Formula with Zinc for Gentle Exfoliation | Suitable for Oily, Combination, and Acne-Prone Skin| For Women & Men| 100 mlMinimalist Anti-Acne Salicylic Acid 2% Face Wash with LHA for Pore…",
                            "url": "https://www.amazon.in/Minimalist Anti-Acne Salicylic Acid 2% Face Wash with LHA for Pore Cleansing, Oil Control & Sebum Regulation | Sulfate-Free Formula with Zinc for Gentle Exfoliation | Suitable for Oily, Combination, and Acne-Prone Skin| For Women & Men| 100 mlMinimalist Anti-Acne Salicylic Acid 2% Face Wash with LHA for Pore…/dp/B096PJMGPL",
                            "image": "https://m.media-amazon.com/images/I/514PVblwPdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/514PVblwPdL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/514PVblwPdL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0C8TGDLNT",
                            "name": "Amazon Brand - Solimo Adult Diapers Pant Style | Medium Size | 60 Count | (30 x Pack of 2) | Waist 24-45 Inch (60-115 cm) | Fast Absorption | Leak Proof | Unisex | For Men & WomenAmazon Brand - Solimo Adult Diapers Pant Style | Medium Size…",
                            "url": "https://www.amazon.in/Amazon Brand - Solimo Adult Diapers Pant Style | Medium Size | 60 Count | (30 x Pack of 2) | Waist 24-45 Inch (60-115 cm) | Fast Absorption | Leak Proof | Unisex | For Men & WomenAmazon Brand - Solimo Adult Diapers Pant Style | Medium Size…/dp/B0C8TGDLNT",
                            "image": "https://m.media-amazon.com/images/I/71sg4rBkprL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71sg4rBkprL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71sg4rBkprL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0B77X44MX",
                            "name": "Boldfit Adjustable Hand Grip Strengthener, Hand Gripper for Men & Women for Gym Workout Hand Exercise Equipment to Use in Home for Forearm Exercise, Finger Exercise Power GripperBoldfit Adjustable Hand Grip Strengthener, Hand Gripper for…",
                            "url": "https://www.amazon.in/Boldfit Adjustable Hand Grip Strengthener, Hand Gripper for Men & Women for Gym Workout Hand Exercise Equipment to Use in Home for Forearm Exercise, Finger Exercise Power GripperBoldfit Adjustable Hand Grip Strengthener, Hand Gripper for…/dp/B0B77X44MX",
                            "image": "https://m.media-amazon.com/images/I/61Av1lptLkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61Av1lptLkL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61Av1lptLkL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B00V4L6JC2",
                            "name": "Garnier Men, Face Wash, Brightening & Anti-Pollution, TurboBright Double Action, 100 gGarnier Men, Face Wash, Brightening & Anti-Pollution, Tur…",
                            "url": "https://www.amazon.in/Garnier Men, Face Wash, Brightening & Anti-Pollution, TurboBright Double Action, 100 gGarnier Men, Face Wash, Brightening & Anti-Pollution, Tur…/dp/B00V4L6JC2",
                            "image": "https://m.media-amazon.com/images/I/615gCt+GzCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/615gCt+GzCL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/615gCt+GzCL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B01ER4HR4Q",
                            "name": "Cetaphil Moisturizing Lotion for Dry to Normal, Sensitive Skin| 100 ml| Moisturizer with Niacinamide, Panthenol| Non-greasy, Won t Clog Pores| Dermatologist Recommended| Paraben, Sulphate FreeCetaphil Moisturizing Lotion for Dry to Normal, Sensitive Skin| 10…",
                            "url": "https://www.amazon.in/Cetaphil Moisturizing Lotion for Dry to Normal, Sensitive Skin| 100 ml| Moisturizer with Niacinamide, Panthenol| Non-greasy, Won t Clog Pores| Dermatologist Recommended| Paraben, Sulphate FreeCetaphil Moisturizing Lotion for Dry to Normal, Sensitive Skin| 10…/dp/B01ER4HR4Q",
                            "image": "https://m.media-amazon.com/images/I/51+85ZcXkjL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/51+85ZcXkjL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/51+85ZcXkjL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0DG2SJYC2",
                            "name": "Alvami Women Anarkali Kurta and Pant Set with DupattaAlvami Women Anarkali Kurta and Pant Set with Dupatta",
                            "url": "https://www.amazon.in/Alvami Women Anarkali Kurta and Pant Set with DupattaAlvami Women Anarkali Kurta and Pant Set with Dupatta/dp/B0DG2SJYC2",
                            "image": "https://m.media-amazon.com/images/I/61IhrjrcrLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61IhrjrcrLL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61IhrjrcrLL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0D6NBHSY7",
                            "name": "Dr Trust USA Legend BMI Weight Scale & Body Fat Analyzer with IOS/Android App Sync, 14 Essential Composition Metrics Weighing Machine -526 for Home Health Monitoring (Black)Dr Trust USA Legend BMI Weight Scale & Body Fat Analyzer with I…",
                            "url": "https://www.amazon.in/Dr Trust USA Legend BMI Weight Scale & Body Fat Analyzer with IOS/Android App Sync, 14 Essential Composition Metrics Weighing Machine -526 for Home Health Monitoring (Black)Dr Trust USA Legend BMI Weight Scale & Body Fat Analyzer with I…/dp/B0D6NBHSY7",
                            "image": "https://m.media-amazon.com/images/I/715EoMoeR6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/715EoMoeR6L._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/715EoMoeR6L._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B01HMLB0LW",
                            "name": "Cetaphil Moisturising Cream for Face & Body , Dry to Normal skin, 80 gmCetaphil Moisturising Cream for Face & Body , Dry to Normal skin,…",
                            "url": "https://www.amazon.in/Cetaphil Moisturising Cream for Face & Body , Dry to Normal skin, 80 gmCetaphil Moisturising Cream for Face & Body , Dry to Normal skin,…/dp/B01HMLB0LW",
                            "image": "https://m.media-amazon.com/images/I/61pK4c7UNiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61pK4c7UNiL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61pK4c7UNiL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0756DXV8M",
                            "name": "AmazonBasics Velvet Suit Hangers - 30-Pack, GreyAmazonBasics Velvet Suit Hangers - 30-Pack, Grey",
                            "url": "https://www.amazon.in/AmazonBasics Velvet Suit Hangers - 30-Pack, GreyAmazonBasics Velvet Suit Hangers - 30-Pack, Grey/dp/B0756DXV8M",
                            "image": "https://m.media-amazon.com/images/I/81yeSy2PbtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/81yeSy2PbtL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/81yeSy2PbtL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B09VTDMRY7",
                            "name": "FUR JADEN Anti Theft Number Lock Backpack Bag with 15.6 Inch Laptop Compartment, USB Charging Port & Organizer Pocket for Men Women Boys GirlsFUR JADEN Anti Theft Number Lock Backpack Bag with 15.6 Inc…",
                            "url": "https://www.amazon.in/FUR JADEN Anti Theft Number Lock Backpack Bag with 15.6 Inch Laptop Compartment, USB Charging Port & Organizer Pocket for Men Women Boys GirlsFUR JADEN Anti Theft Number Lock Backpack Bag with 15.6 Inc…/dp/B09VTDMRY7",
                            "image": "https://m.media-amazon.com/images/I/61egMfcDWlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61egMfcDWlL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61egMfcDWlL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0D772K8X8",
                            "name": "pTron Newly Launched Fusion Tunes 10W Mini Bluetooth Speaker with Wireless Karaoke Mic, 8Hrs Playtime, Vivid RGB Lights, Voice Effects, Multi-Play Modes BT5.1/TF Card & Type-C Charging Port (Black)pTron Newly Launched Fusion Tunes 10W Mini Bluetooth Speak…",
                            "url": "https://www.amazon.in/pTron Newly Launched Fusion Tunes 10W Mini Bluetooth Speaker with Wireless Karaoke Mic, 8Hrs Playtime, Vivid RGB Lights, Voice Effects, Multi-Play Modes BT5.1/TF Card & Type-C Charging Port (Black)pTron Newly Launched Fusion Tunes 10W Mini Bluetooth Speak…/dp/B0D772K8X8",
                            "image": "https://m.media-amazon.com/images/I/61Lgfcc+o-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61Lgfcc+o-L._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61Lgfcc+o-L._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0BZVZYXV5",
                            "name": "SJeware 12 Pairs Solid Cotton Ankle Length Socks for Men & Women, Multicolor, Pack of 12, Free SizeSJeware 12 Pairs Solid Cotton Ankle Length Socks for Men & W…",
                            "url": "https://www.amazon.in/SJeware 12 Pairs Solid Cotton Ankle Length Socks for Men & Women, Multicolor, Pack of 12, Free SizeSJeware 12 Pairs Solid Cotton Ankle Length Socks for Men & W…/dp/B0BZVZYXV5",
                            "image": "https://m.media-amazon.com/images/I/81TRdxk1wnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/81TRdxk1wnL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/81TRdxk1wnL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0C2Z4W3D3",
                            "name": "Nivia Flash 2.0 Badminton Shoes for Men | Your Go-to Shoe for Pickleball, Padel, and All Court Sports | Badminton Sports Shoes | (Blue/White/Sky Blue)Nivia Flash 2.0 Badminton Shoes for Men | Your Go-to Shoe for Pic…",
                            "url": "https://www.amazon.in/Nivia Flash 2.0 Badminton Shoes for Men | Your Go-to Shoe for Pickleball, Padel, and All Court Sports | Badminton Sports Shoes | (Blue/White/Sky Blue)Nivia Flash 2.0 Badminton Shoes for Men | Your Go-to Shoe for Pic…/dp/B0C2Z4W3D3",
                            "image": "https://m.media-amazon.com/images/I/71lqmpE-2gL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71lqmpE-2gL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71lqmpE-2gL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0D6BHGMD9",
                            "name": "Dr Physio USA Dynamo 1034 Percussion Gun Massager for Full Body Pain Relief, Rechargeable Cordless Deep Tissue Massage Machine for Legs & Arms, Use at Home, Gym & During TravelDr Physio USA Dynamo 1034 Percussion Gun Massager for Full…",
                            "url": "https://www.amazon.in/Dr Physio USA Dynamo 1034 Percussion Gun Massager for Full Body Pain Relief, Rechargeable Cordless Deep Tissue Massage Machine for Legs & Arms, Use at Home, Gym & During TravelDr Physio USA Dynamo 1034 Percussion Gun Massager for Full…/dp/B0D6BHGMD9",
                            "image": "https://m.media-amazon.com/images/I/61GVBRIb7NL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61GVBRIb7NL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61GVBRIb7NL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B077BFH786",
                            "name": "SOFTSPUN Microfiber Cloth - 4 pcs - 40x40 cms - 340 GSM Grey! Thick Lint & Streak-Free Multipurpose Cloths - Automotive Microfibre Towels for Car Bike Cleaning Polishing Washing & Detailing.SOFTSPUN Microfiber Cloth - 4 pcs - 40x40 cms - 340 GSM Grey! Thi…",
                            "url": "https://www.amazon.in/SOFTSPUN Microfiber Cloth - 4 pcs - 40x40 cms - 340 GSM Grey! Thick Lint & Streak-Free Multipurpose Cloths - Automotive Microfibre Towels for Car Bike Cleaning Polishing Washing & Detailing.SOFTSPUN Microfiber Cloth - 4 pcs - 40x40 cms - 340 GSM Grey! Thi…/dp/B077BFH786",
                            "image": "https://m.media-amazon.com/images/I/81dsWgzXLrL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/81dsWgzXLrL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/81dsWgzXLrL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0DSLP1VCM",
                            "name": "L’Oréal Paris Hyaluron Pure 72H Purifying Shampoo, For oily scalp & dry hair with salicylic and hyaluronic acid, 800 mlL’Oréal Paris Hyaluron Pure 72H Purifying Shampoo, For oily scalp…",
                            "url": "https://www.amazon.in/L’Oréal Paris Hyaluron Pure 72H Purifying Shampoo, For oily scalp & dry hair with salicylic and hyaluronic acid, 800 mlL’Oréal Paris Hyaluron Pure 72H Purifying Shampoo, For oily scalp…/dp/B0DSLP1VCM",
                            "image": "https://m.media-amazon.com/images/I/51LM0j4JpFL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/51LM0j4JpFL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/51LM0j4JpFL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0BXNVPRGS",
                            "name": "Philips Battery Powered SkinProtect Beard Trimmer for Men - Lasts 4x Longer, DuraPower Technology, Cordless Rechargeable with USB Charging, Charging Indicator, Travel Lock, No Oil Needed BT1232/18Philips Battery Powered SkinProtect Beard Trimmer for M…",
                            "url": "https://www.amazon.in/Philips Battery Powered SkinProtect Beard Trimmer for Men - Lasts 4x Longer, DuraPower Technology, Cordless Rechargeable with USB Charging, Charging Indicator, Travel Lock, No Oil Needed BT1232/18Philips Battery Powered SkinProtect Beard Trimmer for M…/dp/B0BXNVPRGS",
                            "image": "https://m.media-amazon.com/images/I/61VRH0jQrRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61VRH0jQrRL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61VRH0jQrRL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0748HQW6C",
                            "name": "WOW Life Science Omega-3 Fish Oil 1300 Mg Triple Strength 550Mg Epa 350Mg Dha,Burpless,Mercury Free,Ideal For Keto Diet,1 CountWOW Life Science Omega-3 Fish Oil 1300 Mg Triple Strength 550…",
                            "url": "https://www.amazon.in/WOW Life Science Omega-3 Fish Oil 1300 Mg Triple Strength 550Mg Epa 350Mg Dha,Burpless,Mercury Free,Ideal For Keto Diet,1 CountWOW Life Science Omega-3 Fish Oil 1300 Mg Triple Strength 550…/dp/B0748HQW6C",
                            "image": "https://m.media-amazon.com/images/I/61K0nwBpK6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61K0nwBpK6L._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61K0nwBpK6L._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B09Y5MK1KB",
                            "name": "Noise Buds VS104 Truly Wireless Earbuds with 45H of Playtime, Quad Mic with ENC, Instacharge(10 min=200 min), 13mm Driver,Low Latency, BT v5.2 (Mint Green)Noise Buds VS104 Truly Wireless Earbuds with 45H of Playtime, Q…",
                            "url": "https://www.amazon.in/Noise Buds VS104 Truly Wireless Earbuds with 45H of Playtime, Quad Mic with ENC, Instacharge(10 min=200 min), 13mm Driver,Low Latency, BT v5.2 (Mint Green)Noise Buds VS104 Truly Wireless Earbuds with 45H of Playtime, Q…/dp/B09Y5MK1KB",
                            "image": "https://m.media-amazon.com/images/I/51+e7yrgPpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/51+e7yrgPpL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/51+e7yrgPpL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0DHX5QSM2",
                            "name": "Qlect Portable Blender For Smoothie And Juices : Powerful 40 Watts Juicer Blender that Can Crush Ice too | Juicer Machine With 1800 Mah Rechargeable Battery-Smoothie Blender With Built In 400 ML JarQlect Portable Blender For Smoothie And Juices : Powerful 4…",
                            "url": "https://www.amazon.in/Qlect Portable Blender For Smoothie And Juices : Powerful 40 Watts Juicer Blender that Can Crush Ice too | Juicer Machine With 1800 Mah Rechargeable Battery-Smoothie Blender With Built In 400 ML JarQlect Portable Blender For Smoothie And Juices : Powerful 4…/dp/B0DHX5QSM2",
                            "image": "https://m.media-amazon.com/images/I/71QvpeisutL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71QvpeisutL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71QvpeisutL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0CLD1S699",
                            "name": "Tarkan Extra Large Reversible Baby Play Mat, BPA Free Learning & Crawling Foldable Foam Mat (6.5x5 ft, 0.6cm Thickness) Alphanumeric-GiraffeTarkan Extra Large Reversible Baby Play Mat, BPA Free Learning & Cr…",
                            "url": "https://www.amazon.in/Tarkan Extra Large Reversible Baby Play Mat, BPA Free Learning & Crawling Foldable Foam Mat (6.5x5 ft, 0.6cm Thickness) Alphanumeric-GiraffeTarkan Extra Large Reversible Baby Play Mat, BPA Free Learning & Cr…/dp/B0CLD1S699",
                            "image": "https://m.media-amazon.com/images/I/81eP36syB7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/81eP36syB7L._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/81eP36syB7L._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0895WH7H6",
                            "name": "Two Brothers Organic Farms - Khapli Wheat Flour (5kg) | Wheat Flour | High Dietary Fiber for Easy Digestion | Stoneground Emmer Wheat Flour | Khapli AttaTwo Brothers Organic Farms - Khapli Wheat Flour (5kg) | Wheat…",
                            "url": "https://www.amazon.in/Two Brothers Organic Farms - Khapli Wheat Flour (5kg) | Wheat Flour | High Dietary Fiber for Easy Digestion | Stoneground Emmer Wheat Flour | Khapli AttaTwo Brothers Organic Farms - Khapli Wheat Flour (5kg) | Wheat…/dp/B0895WH7H6",
                            "image": "https://m.media-amazon.com/images/I/71xzRmVTtIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71xzRmVTtIL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71xzRmVTtIL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B086H6LMBM",
                            "name": "Savlon Moisturizing Glycerin soap bar with germ protection, Pack of 5-125g eachSavlon Moisturizing Glycerin soap bar with germ protection, Pack of…",
                            "url": "https://www.amazon.in/Savlon Moisturizing Glycerin soap bar with germ protection, Pack of 5-125g eachSavlon Moisturizing Glycerin soap bar with germ protection, Pack of…/dp/B086H6LMBM",
                            "image": "https://m.media-amazon.com/images/I/71VBuPUbXcL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71VBuPUbXcL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71VBuPUbXcL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0DRFMXC2H",
                            "name": "Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-117-120)Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton |…",
                            "url": "https://www.amazon.in/Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-117-120)Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton |…/dp/B0DRFMXC2H",
                            "image": "https://m.media-amazon.com/images/I/61oYWs35bJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61oYWs35bJL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61oYWs35bJL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0DQ4Q8SGG",
                            "name": "URBN Power Bank 20000mAh Fast Charging | 22.5W Super Fast Power Delivery (PD) Portable Charger | Triple Output | USB Type C Input & Output | Pass Through Charging | (Blue)URBN Power Bank 20000mAh Fast Charging | 22.5W Super Fast Pow…",
                            "url": "https://www.amazon.in/URBN Power Bank 20000mAh Fast Charging | 22.5W Super Fast Power Delivery (PD) Portable Charger | Triple Output | USB Type C Input & Output | Pass Through Charging | (Blue)URBN Power Bank 20000mAh Fast Charging | 22.5W Super Fast Pow…/dp/B0DQ4Q8SGG",
                            "image": "https://m.media-amazon.com/images/I/71covh0tftL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71covh0tftL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71covh0tftL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B07N42JB4S",
                            "name": "Syvo WT 3130 Aluminum Tripod (133CM), Universal Lightweight Tripod with Mobile Phone Holder Mount & Carry Bag for All Smart Phones, Gopro, CamerasSyvo WT 3130 Aluminum Tripod (133CM), Universal Lightweight T…",
                            "url": "https://www.amazon.in/Syvo WT 3130 Aluminum Tripod (133CM), Universal Lightweight Tripod with Mobile Phone Holder Mount & Carry Bag for All Smart Phones, Gopro, CamerasSyvo WT 3130 Aluminum Tripod (133CM), Universal Lightweight T…/dp/B07N42JB4S",
                            "image": "https://m.media-amazon.com/images/I/61H1dMNTSnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/61H1dMNTSnL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/61H1dMNTSnL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B07WLYG7GT",
                            "name": "FABTEC Waterproof Car Body Cover for Maruti Baleno with Mirror and Antenna Pocket, Soft Cotton Lining, Triple Stitched (Heat Resistant Metallic Silver with Black Piping)FABTEC Waterproof Car Body Cover for Maruti Baleno with Mirror and…",
                            "url": "https://www.amazon.in/FABTEC Waterproof Car Body Cover for Maruti Baleno with Mirror and Antenna Pocket, Soft Cotton Lining, Triple Stitched (Heat Resistant Metallic Silver with Black Piping)FABTEC Waterproof Car Body Cover for Maruti Baleno with Mirror and…/dp/B07WLYG7GT",
                            "image": "https://m.media-amazon.com/images/I/71skiRfsCcL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71skiRfsCcL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71skiRfsCcL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B08MVBF4P8",
                            "name": "Minimalist Dull Skin, Dark Spots & Uneven Tone Treatment 10% Vitamin C Face Serum | Formulated & Tested for Sensitive Skin with Ethyl Ascorbic Acid & Pha | All Skin Types|For Men & Women | 30MlMinimalist Dull Skin, Dark Spots & Uneven Tone Treatment 10% Vit…",
                            "url": "https://www.amazon.in/Minimalist Dull Skin, Dark Spots & Uneven Tone Treatment 10% Vitamin C Face Serum | Formulated & Tested for Sensitive Skin with Ethyl Ascorbic Acid & Pha | All Skin Types|For Men & Women | 30MlMinimalist Dull Skin, Dark Spots & Uneven Tone Treatment 10% Vit…/dp/B08MVBF4P8",
                            "image": "https://m.media-amazon.com/images/I/717Kb7GUFyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/717Kb7GUFyL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/717Kb7GUFyL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B083SMXD1Z",
                            "name": "Muuchstac Ocean Face Wash for Men | Fight Acne & Pimples, Brighten Skin, Clears Dirt, Oil Control, Refreshing Feel - Multi-Action Formula (2x100 ml)Muuchstac Ocean Face Wash for Men | Fight Acne & Pimples, Brig…",
                            "url": "https://www.amazon.in/Muuchstac Ocean Face Wash for Men | Fight Acne & Pimples, Brighten Skin, Clears Dirt, Oil Control, Refreshing Feel - Multi-Action Formula (2x100 ml)Muuchstac Ocean Face Wash for Men | Fight Acne & Pimples, Brig…/dp/B083SMXD1Z",
                            "image": "https://m.media-amazon.com/images/I/71M33O0-KyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71M33O0-KyL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71M33O0-KyL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B082WYMTWF",
                            "name": "rts Universal Travel Adapter, International All in One Worldwide Travel Adapter and Wall Charger with USB Ports with Multi Type Power Outlet USB 2.1A,100-250 Voltage Travel Charger (Black)",
                            "url": "https://www.amazon.in/rts Universal Travel Adapter, International All in One Worldwide Travel Adapter and Wall Charger with USB Ports with Multi Type Power Outlet USB 2.1A,100-250 Voltage Travel Charger (Black)/dp/B082WYMTWF",
                            "image": "https://m.media-amazon.com/images/I/611RCy1XjsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/611RCy1XjsL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/611RCy1XjsL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B08F9MF314",
                            "name": "Minimalist Oil Control & Anti-Acne 10% Niacinamide Face Serum with Zinc | Skin Clarifying,Blemishes & Pore Care for All Skin Types | 30ml (Pack of 1)",
                            "url": "https://www.amazon.in/Minimalist Oil Control & Anti-Acne 10% Niacinamide Face Serum with Zinc | Skin Clarifying,Blemishes & Pore Care for All Skin Types | 30ml (Pack of 1)/dp/B08F9MF314",
                            "image": "https://m.media-amazon.com/images/I/51fo5Cdx4YL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/51fo5Cdx4YL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/51fo5Cdx4YL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0CHWLSVGL",
                            "name": "HealthSense Bluetooth BMI Weight Machine For Body Weight, Digital Body Fat Analyzer & Smart Body Composition Scale With Mobile App, 12 Body Parameters, LED Display & 1 Year Warranty-BS161, 150Kg",
                            "url": "https://www.amazon.in/HealthSense Bluetooth BMI Weight Machine For Body Weight, Digital Body Fat Analyzer & Smart Body Composition Scale With Mobile App, 12 Body Parameters, LED Display & 1 Year Warranty-BS161, 150Kg/dp/B0CHWLSVGL",
                            "image": "https://m.media-amazon.com/images/I/71H13b5cWnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71H13b5cWnL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71H13b5cWnL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B07WLYG7GT",
                            "name": "FABTEC Waterproof Car Body Cover for Maruti Baleno with Mirror and Antenna Pocket, Soft Cotton Lining, Triple Stitched (Heat Resistant Metallic Silver with Black Piping)FABTEC Waterproof Car Body Cover for Maruti Baleno with Mirror and…",
                            "url": "https://www.amazon.in/FABTEC Waterproof Car Body Cover for Maruti Baleno with Mirror and Antenna Pocket, Soft Cotton Lining, Triple Stitched (Heat Resistant Metallic Silver with Black Piping)FABTEC Waterproof Car Body Cover for Maruti Baleno with Mirror and…/dp/B07WLYG7GT",
                            "image": "https://m.media-amazon.com/images/I/71skiRfsCcL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71skiRfsCcL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71skiRfsCcL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B08MVBF4P8",
                            "name": "Minimalist Dull Skin, Dark Spots & Uneven Tone Treatment 10% Vitamin C Face Serum | Formulated & Tested for Sensitive Skin with Ethyl Ascorbic Acid & Pha | All Skin Types|For Men & Women | 30MlMinimalist Dull Skin, Dark Spots & Uneven Tone Treatment 10% Vit…",
                            "url": "https://www.amazon.in/Minimalist Dull Skin, Dark Spots & Uneven Tone Treatment 10% Vitamin C Face Serum | Formulated & Tested for Sensitive Skin with Ethyl Ascorbic Acid & Pha | All Skin Types|For Men & Women | 30MlMinimalist Dull Skin, Dark Spots & Uneven Tone Treatment 10% Vit…/dp/B08MVBF4P8",
                            "image": "https://m.media-amazon.com/images/I/717Kb7GUFyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/717Kb7GUFyL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/717Kb7GUFyL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B083SMXD1Z",
                            "name": "Muuchstac Ocean Face Wash for Men | Fight Acne & Pimples, Brighten Skin, Clears Dirt, Oil Control, Refreshing Feel - Multi-Action Formula (2x100 ml)Muuchstac Ocean Face Wash for Men | Fight Acne & Pimples, Brig…",
                            "url": "https://www.amazon.in/Muuchstac Ocean Face Wash for Men | Fight Acne & Pimples, Brighten Skin, Clears Dirt, Oil Control, Refreshing Feel - Multi-Action Formula (2x100 ml)Muuchstac Ocean Face Wash for Men | Fight Acne & Pimples, Brig…/dp/B083SMXD1Z",
                            "image": "https://m.media-amazon.com/images/I/71M33O0-KyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71M33O0-KyL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71M33O0-KyL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B082WYMTWF",
                            "name": "rts Universal Travel Adapter, International All in One Worldwide Travel Adapter and Wall Charger with USB Ports with Multi Type Power Outlet USB 2.1A,100-250 Voltage Travel Charger (Black)rts Universal Travel Adapter, International All in One Worldwi…",
                            "url": "https://www.amazon.in/rts Universal Travel Adapter, International All in One Worldwide Travel Adapter and Wall Charger with USB Ports with Multi Type Power Outlet USB 2.1A,100-250 Voltage Travel Charger (Black)rts Universal Travel Adapter, International All in One Worldwi…/dp/B082WYMTWF",
                            "image": "https://m.media-amazon.com/images/I/611RCy1XjsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/611RCy1XjsL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/611RCy1XjsL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B08F9MF314",
                            "name": "Minimalist Oil Control & Anti-Acne 10% Niacinamide Face Serum with Zinc | Skin Clarifying,Blemishes & Pore Care for All Skin Types | 30ml (Pack of 1)Minimalist Oil Control & Anti-Acne 10% Niacinamide Face Serum wit…",
                            "url": "https://www.amazon.in/Minimalist Oil Control & Anti-Acne 10% Niacinamide Face Serum with Zinc | Skin Clarifying,Blemishes & Pore Care for All Skin Types | 30ml (Pack of 1)Minimalist Oil Control & Anti-Acne 10% Niacinamide Face Serum wit…/dp/B08F9MF314",
                            "image": "https://m.media-amazon.com/images/I/51fo5Cdx4YL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/51fo5Cdx4YL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/51fo5Cdx4YL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0CHWLSVGL",
                            "name": "HealthSense Bluetooth BMI Weight Machine For Body Weight, Digital Body Fat Analyzer & Smart Body Composition Scale With Mobile App, 12 Body Parameters, LED Display & 1 Year Warranty-BS161, 150KgHealthSense Bluetooth BMI Weight Machine For Body Weight, Digital…",
                            "url": "https://www.amazon.in/HealthSense Bluetooth BMI Weight Machine For Body Weight, Digital Body Fat Analyzer & Smart Body Composition Scale With Mobile App, 12 Body Parameters, LED Display & 1 Year Warranty-BS161, 150KgHealthSense Bluetooth BMI Weight Machine For Body Weight, Digital…/dp/B0CHWLSVGL",
                            "image": "https://m.media-amazon.com/images/I/71H13b5cWnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71H13b5cWnL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71H13b5cWnL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B07WLYG7GT",
                            "name": "FABTEC Waterproof Car Body Cover for Maruti Baleno with Mirror and Antenna Pocket, Soft Cotton Lining, Triple Stitched (Heat Resistant Metallic Silver with Black Piping)FABTEC Waterproof Car Body Cover for Maruti Baleno with Mirror and…",
                            "url": "https://www.amazon.in/FABTEC Waterproof Car Body Cover for Maruti Baleno with Mirror and Antenna Pocket, Soft Cotton Lining, Triple Stitched (Heat Resistant Metallic Silver with Black Piping)FABTEC Waterproof Car Body Cover for Maruti Baleno with Mirror and…/dp/B07WLYG7GT",
                            "image": "https://m.media-amazon.com/images/I/71skiRfsCcL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71skiRfsCcL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71skiRfsCcL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B08MVBF4P8",
                            "name": "Minimalist Dull Skin, Dark Spots & Uneven Tone Treatment 10% Vitamin C Face Serum | Formulated & Tested for Sensitive Skin with Ethyl Ascorbic Acid & Pha | All Skin Types|For Men & Women | 30MlMinimalist Dull Skin, Dark Spots & Uneven Tone Treatment 10% Vit…",
                            "url": "https://www.amazon.in/Minimalist Dull Skin, Dark Spots & Uneven Tone Treatment 10% Vitamin C Face Serum | Formulated & Tested for Sensitive Skin with Ethyl Ascorbic Acid & Pha | All Skin Types|For Men & Women | 30MlMinimalist Dull Skin, Dark Spots & Uneven Tone Treatment 10% Vit…/dp/B08MVBF4P8",
                            "image": "https://m.media-amazon.com/images/I/717Kb7GUFyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/717Kb7GUFyL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/717Kb7GUFyL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B083SMXD1Z",
                            "name": "Muuchstac Ocean Face Wash for Men | Fight Acne & Pimples, Brighten Skin, Clears Dirt, Oil Control, Refreshing Feel - Multi-Action Formula (2x100 ml)Muuchstac Ocean Face Wash for Men | Fight Acne & Pimples, Brig…",
                            "url": "https://www.amazon.in/Muuchstac Ocean Face Wash for Men | Fight Acne & Pimples, Brighten Skin, Clears Dirt, Oil Control, Refreshing Feel - Multi-Action Formula (2x100 ml)Muuchstac Ocean Face Wash for Men | Fight Acne & Pimples, Brig…/dp/B083SMXD1Z",
                            "image": "https://m.media-amazon.com/images/I/71M33O0-KyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71M33O0-KyL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71M33O0-KyL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B082WYMTWF",
                            "name": "rts Universal Travel Adapter, International All in One Worldwide Travel Adapter and Wall Charger with USB Ports with Multi Type Power Outlet USB 2.1A,100-250 Voltage Travel Charger (Black)rts Universal Travel Adapter, International All in One Worldwi…",
                            "url": "https://www.amazon.in/rts Universal Travel Adapter, International All in One Worldwide Travel Adapter and Wall Charger with USB Ports with Multi Type Power Outlet USB 2.1A,100-250 Voltage Travel Charger (Black)rts Universal Travel Adapter, International All in One Worldwi…/dp/B082WYMTWF",
                            "image": "https://m.media-amazon.com/images/I/611RCy1XjsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/611RCy1XjsL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/611RCy1XjsL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B08F9MF314",
                            "name": "Minimalist Oil Control & Anti-Acne 10% Niacinamide Face Serum with Zinc | Skin Clarifying,Blemishes & Pore Care for All Skin Types | 30ml (Pack of 1)Minimalist Oil Control & Anti-Acne 10% Niacinamide Face Serum wit…",
                            "url": "https://www.amazon.in/Minimalist Oil Control & Anti-Acne 10% Niacinamide Face Serum with Zinc | Skin Clarifying,Blemishes & Pore Care for All Skin Types | 30ml (Pack of 1)Minimalist Oil Control & Anti-Acne 10% Niacinamide Face Serum wit…/dp/B08F9MF314",
                            "image": "https://m.media-amazon.com/images/I/51fo5Cdx4YL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/51fo5Cdx4YL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/51fo5Cdx4YL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        },
                        {
                            "id": "B0CHWLSVGL",
                            "name": "HealthSense Bluetooth BMI Weight Machine For Body Weight, Digital Body Fat Analyzer & Smart Body Composition Scale With Mobile App, 12 Body Parameters, LED Display & 1 Year Warranty-BS161, 150KgHealthSense Bluetooth BMI Weight Machine For Body Weight, Digital…",
                            "url": "https://www.amazon.in/HealthSense Bluetooth BMI Weight Machine For Body Weight, Digital Body Fat Analyzer & Smart Body Composition Scale With Mobile App, 12 Body Parameters, LED Display & 1 Year Warranty-BS161, 150KgHealthSense Bluetooth BMI Weight Machine For Body Weight, Digital…/dp/B0CHWLSVGL",
                            "image": "https://m.media-amazon.com/images/I/71H13b5cWnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte 1x,\n                https://m.media-amazon.com/images/I/71H13b5cWnL._AC_FMavif_SF339,339_QL58_.jpg?aicid=discounts-widgets-horizonte 1.5x,\n                https://m.media-amazon.com/images/I/71H13b5cWnL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte 2x"
                        }
                    ],
                }
            })
        }).then(res => res.json()).then(response => {
            console.log("✅ Sent successfully:", response);
        }).catch(err => {
            console.log("❌ Error sending data:", err);
        });

    } catch (error) {
        console.log("Error: ", error);
    }
} else if (hostname.includes("meesho")) {
} else if (hostname.includes("ajio")) {
} else if (hostname.includes("myntra")) {
}

chrome.runtime.sendMessage({ type: "deals", data: deals });