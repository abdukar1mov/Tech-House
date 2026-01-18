// 1. Mahsulotlar ro'yxati (Array)
var products = [
    {
        id: 1,
        name: "SmartFridge Pro 500L",
        category: "Kitchen Appliances",
        categorySlug: "kitchen",
        image: "assets/images/product-1.png",
        rating: 4.8,
        reviews: 245,
        price: 899,
        oldPrice: 1199,
        discount: "-25%",
        energyClass: "A+++",
        description: "Advanced smart refrigerator with a 500L capacity, featuring a touchscreen interface, internal cameras, and energy-efficient cooling technology.",
        features: ["Touchscreen Display", "Internal Cameras", "Energy Class A+++", "Frost Free Tech", "5-year Warranty"],
        stock: "Mavjud",
        specs: {
            "Capacity": "500 Liters",
            "Cooling Type": "No Frost",
            "Dimensions": "180 x 70 x 75 cm",
            "Weight": "85 kg",
            "Color": "Stainless Steel"
        },
        warranty: "5-yil rasmiy zavod kafolati mavjud."
    },
    {
        id: 2,
        name: "UltraClean Vacuum 3000",
        category: "Cleaning Appliances",
        categorySlug: "cleaning",
        image: "assets/images/product-2.png",
        rating: 4.6,
        reviews: 189,
        price: 299,
        oldPrice: 399,
        discount: "-25%",
        energyClass: "",
        description: "Powerful bagless vacuum cleaner with HEPA filtration and smart navigation for effortless cleaning on all floor types.",
        features: ["HEPA filtration system", "Bagless design", "Multiple attachments", "Quiet operation", "5-year motor warranty"],
        stock: "Mavjud",
        specs: {
            "Power": "2000W",
            "Dust Capacity": "2.5L",
            "Noise Level": "68dB",
            "Weight": "6.5 kg",
            "Cord Length": "8m"
        },
        warranty: "2-yil motor va 1-yil umumiy kafolat."
    },
    {
        id: 3,
        name: "ClimateControl AC 12000 BTU",
        category: "Heating & Cooling",
        categorySlug: "cooling",
        image: "assets/images/product-3.png",
        rating: 4.7,
        reviews: 156,
        price: 599,
        oldPrice: 0,
        discount: "",
        energyClass: "A++",
        description: "Efficient air conditioner with 12000 BTU cooling capacity, featuring smart WiFi control and ultra-quiet night mode.",
        features: ["12000 BTU Cooling", "WiFi Smart Control", "Energy Class A++", "Turbo Cooling Mode", "Self-Cleaning Function"],
        stock: "Mavjud",
        specs: {
            "Cooling Capacity": "12000 BTU",
            "Heating Capacity": "13000 BTU",
            "Inverter Mode": "Ha",
            "Area Covered": "35-40 sqm",
            "Energy Rating": "A++"
        },
        warranty: "3-yil kompressor uchun va 1-yil umumiy kafolat."
    },
    {
        id: 4,
        name: "ChefMaster Air Fryer XL",
        category: "Kitchen Appliances",
        categorySlug: "kitchen",
        image: "assets/images/product-4.png",
        rating: 4.9,
        reviews: 312,
        price: 149,
        oldPrice: 0,
        discount: "",
        energyClass: "",
        description: "Large capacity air fryer that uses 85% less oil than traditional deep frying, perfect for healthy family meals.",
        features: ["5.8 Quart Capacity", "One-Touch Presets", "Non-stick Basket", "Dishwasher Safe", "Includes Recipe Book"],
        stock: "Mavjud",
        specs: {
            "Capacity": "5.5L",
            "Power": "1700W",
            "Temp Range": "80°C - 200°C",
            "Presets": "11 functions",
            "Display": "LED Digital"
        },
        warranty: "1-yil rasmiy kafolat."
    },
    {
        id: 5,
        name: "Personal Care Pro Shaver",
        category: "Personal Care",
        categorySlug: "personal",
        image: "assets/images/product-5.png",
        rating: 4.4,
        reviews: 98,
        price: 89,
        oldPrice: 129,
        discount: "-30%",
        energyClass: "",
        description: "Professional grade electric shaver with flexible heads and waterproof design for a smooth dry or wet shave.",
        features: ["Wet & Dry Usage", "Flexible Heads", "Cordless Operation", "Travel Lock", "Fast Charging"],
        stock: "Mavjud"
    },
    {
        id: 6,
        name: "SmartHub Home Center",
        category: "Smart Home",
        categorySlug: "smart",
        image: "assets/images/product-6.png",
        rating: 4.8,
        reviews: 420,
        price: 199,
        oldPrice: 0,
        discount: "",
        energyClass: "",
        description: "The brain of your smart home. Connect and control all your devices from one secure and easy-to-use hub.",
        features: ["WiFi & Zigbee Support", "Voice Control Ready", "Mobile App Access", "Secure Encryption", "Compact Design"],
        stock: "Mavjud"
    },
    {
        id: 7,
        name: "QuietSteam Iron Pro",
        category: "Cleaning Appliances",
        categorySlug: "cleaning",
        image: "assets/images/product-7.png",
        rating: 4.5,
        reviews: 142,
        price: 120,
        oldPrice: 150,
        discount: "-20%",
        energyClass: "A",
        description: "Powerful steam iron with a ceramic soleplate and adjustable steam settings for crisp, professional results.",
        features: ["Ceramic Soleplate", "Continuous Steam", "Anti-Drip System", "Auto Shut-Off", "Self-Cleaning"],
        stock: "Mavjud"
    },
    {
        id: 8,
        name: "CompactDish Washer mini",
        category: "Kitchen Appliances",
        categorySlug: "kitchen",
        image: "assets/images/product-8.png",
        rating: 4.7,
        reviews: 86,
        price: 450,
        oldPrice: 500,
        discount: "-10%",
        energyClass: "A++",
        description: "Space-saving countertop dishwasher, ideal for smaller kitchens or office spaces, with 6 flexible wash cycles.",
        features: ["Compact Design", "6 Wash Cycles", "Low Water Usage", "Delayed Start", "Easy Installation"],
        stock: "Mavjud"
    }
];

//================ AUTH LOGIC ================
const MEMBERSHIP_TIERS = {
    'Bronze': { discount: 0, perks: ['membership.perk.base_price', 'membership.perk.std_delivery'] },
    'Silver': { discount: 0.05, perks: ['membership.perk.5_discount', 'membership.perk.free_delivery'] },
    'Gold': { discount: 0.10, perks: ['membership.perk.10_discount', 'membership.perk.fast_delivery', 'membership.perk.247_support'] },
    'Business': { discount: 0.15, perks: ['membership.perk.15_discount', 'membership.perk.manager', 'membership.perk.5y_warranty'] }
};

function getTieredPrice(basePrice) {
    if (!currentUser) return { price: basePrice, discount: 0, tier: 'Bronze' };
    const tier = currentUser.tier || 'Bronze';
    const tierInfo = MEMBERSHIP_TIERS[tier];
    const discountedPrice = Math.round(basePrice * (1 - tierInfo.discount));
    return {
        price: discountedPrice,
        discount: tierInfo.discount,
        tierName: tier,
        hasDiscount: tierInfo.discount > 0
    };
}


let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
if (currentUser && !currentUser.tier) currentUser.tier = 'Bronze';

function saveUser(user) {
    currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    updateAuthUI();
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateAuthUI();
    window.location.href = 'index.html';
}

function showCustomAlert(message, callback) {
    let overlay = document.querySelector('.modal-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = `
            <div class="modal-container">
                <div class="modal__icon">
                    <i data-lucide="bell"></i>
                </div>
                <h2 class="modal__title">Eslatma</h2>
                <p class="modal__message"></p>
                <button class="btn btn--primary modal__btn">OK</button>
            </div>
        `;
        document.body.appendChild(overlay);
        if (window.lucide) window.lucide.createIcons();
    }

    const messageEl = overlay.querySelector('.modal__message');
    const okBtn = overlay.querySelector('.modal__btn');

    messageEl.textContent = message;
    overlay.classList.add('active');

    okBtn.onclick = () => {
        overlay.classList.add('closing');
        setTimeout(() => {
            overlay.classList.remove('active');
            overlay.classList.remove('closing');
            if (callback) callback();
        }, 300);
    };
}

function updateAuthUI() {
    const userActions = document.querySelectorAll('.header__user-actions');
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    userActions.forEach(container => {
        let authHtml = '';
        if (currentUser) {
            authHtml = `
                <div class="user-profile">
                    <div class="user-info">
                        <span class="user-name">${currentUser.firstName}</span>
                        <button onclick="handleLogout()" class="logout-btn">${t('auth.logout')}</button>
                    </div>
                </div>
                <a href="cart.html" class="user-action-btn">
                    <i data-lucide="shopping-cart"></i>
                    <span class="nav__badge" style="display: ${totalCount > 0 ? 'flex' : 'none'}">${totalCount}</span>
                </a>
            `;
        } else {
            authHtml = `
                <a href="auth.html" class="user-action-btn"><i data-lucide="user"></i></a>
                <a href="cart.html" class="user-action-btn">
                    <i data-lucide="shopping-cart"></i>
                    <span class="nav__badge" style="display: ${totalCount > 0 ? 'flex' : 'none'}">${totalCount}</span>
                </a>
            `;
        }

        // Only replace the parts BEFORE the nav-toggle if it exists
        const toggleBtn = container.querySelector('#nav-toggle');
        if (toggleBtn) {
            // Remove previous content but keep the toggle
            const children = Array.from(container.childNodes);
            children.forEach(child => {
                if (child !== toggleBtn) container.removeChild(child);
            });
            // Insert new auth buttons before toggle
            const div = document.createElement('div');
            div.style.display = 'contents';
            div.innerHTML = authHtml;
            while (div.firstChild) {
                container.insertBefore(div.firstChild, toggleBtn);
            }
        } else {
            container.innerHTML = authHtml;
        }
    });

    // Protect checkout button on cart page
    const checkoutBtn = document.querySelector('.cart-summary .btn--primary');
    if (checkoutBtn) {
        checkoutBtn.onclick = function () {
            if (!currentUser) {
                showCustomAlert(t('cart.login_required'), () => {
                    window.location.href = 'auth.html';
                });
            } else {
                showCustomAlert(t('cart.order_success'), () => {
                    cart = [];
                    saveCart();
                    window.location.href = 'index.html';
                });
            }
        };
    }

    if (window.lucide) window.lucide.createIcons();
}

// Auth Form Listeners
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            saveUser({ firstName: 'Foydalanuvchi', email: email });
            window.location.href = 'index.html';
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const firstName = document.getElementById('reg-firstname').value;
            const email = document.getElementById('reg-email').value;

            saveUser({ firstName, email });
            window.location.href = 'index.html';
        });
    }
});

//================ CART LOGIC ================
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
    }
}

function updateCartUI() {
    // Update badge counters across all pages
    const badges = document.querySelectorAll('.nav__badge');
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    badges.forEach(badge => {
        badge.textContent = totalCount;
        badge.style.display = totalCount > 0 ? 'flex' : 'none';
    });

    // Refresh dynamic sections if they exist
    if (document.getElementById("categories-products-grid")) drawProducts();
    if (document.getElementById("home-recommended-grid")) {
        drawProducts(products.slice(0, 4), "home-recommended-grid");
    }
    if (document.getElementById("home-popular-grid")) {
        drawProducts(products.slice(4, 8), "home-popular-grid");
    }
    if (document.getElementById("product-detail-container")) loadProductDetail();
}

// Global state for filters
var filters = {
    search: "",
    categories: [],
    minPrice: 0,
    maxPrice: 1000,
    view: "grid", // "grid" or "list"
    sort: "popular"
};

// 2. Mahsulotlarni ekranga chiqarish funksiyasi
function drawProducts(filteredProducts, containerId) {
    var container = document.getElementById(containerId || "home-products-grid");
    var catContainer = document.getElementById("categories-products-grid");

    var targetContainer = container || catContainer;
    if (!targetContainer) return;

    // Apply sorting before drawing
    let listToDraw = [...(filteredProducts || products)];
    listToDraw = sortProducts(listToDraw);

    var allHtml = "";

    if (listToDraw.length === 0) {
        targetContainer.innerHTML = `<div class="no-results">${t('filters.found').replace('products found', '').replace('mahsulot topildi', '')} Topilmadi</div>`; // Simplified fallthrough
        return;
    }

    // Toggle container class for list view
    if (targetContainer.id === "categories-products-grid") {
        targetContainer.className = filters.view === "list" ? "products__list" : "products__grid";
    }

    for (var i = 0; i < listToDraw.length; i++) {
        var p = listToDraw[i];
        const cartItem = cart.find(item => item.id === p.id);

        // Cart button or quantity controls
        let actionButtons = `
            <button class="btn btn--primary w-100 mt-auto" onclick="addToCart(${p.id})">
                <i data-lucide="shopping-cart" class="icon-sm"></i> ${t('product.add_to_cart')}
            </button>
        `;

        if (cartItem) {
            actionButtons = `
                <div class="qty-control mt-auto">
                    <button class="qty-btn" onclick="updateQuantity(${p.id}, -1)">
                        <i data-lucide="minus"></i>
                    </button>
                    <span class="qty-val">${cartItem.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${p.id}, 1)">
                        <i data-lucide="plus"></i>
                    </button>
                </div>
            `;
        }

        allHtml += `
            <article class="product-card">
                <a href="product-detail.html?id=${p.id}" class="product-card__image-link">
                    <div class="product-card__image-box">
                        ${p.discount ? `<span class="badge badge--discount">${p.discount}</span>` : ""}
                        ${p.energyClass ? `<span class="badge badge--energy">${p.energyClass}</span>` : ""}
                        <img src="${p.image}" alt="${p.name}" class="product-card__img">
                    </div>
                </a>
                <div class="product-card__content">
                    <a href="product-detail.html?id=${p.id}" class="product-card__title-link">
                        <h3 class="product-card__title">${p.name}</h3>
                    </a>
                    <div class="product-card__rating">
                        <i data-lucide="star" class="star-icon"></i>
                        <span class="rating-value">${p.rating}</span>
                        <span class="rating-count">(${p.reviews})</span>
                    </div>
                    ${filters.view === "list" ? `<p class="product-card__description">${p.description}</p>` : ""}
                    <div class="product-card__price">
                        ${(() => {
                const priceInfo = getTieredPrice(p.price);
                if (priceInfo.hasDiscount) {
                    return `
                                <span class="current-price">$${priceInfo.price}</span>
                                <span class="old-price">$${p.price}</span>
                                <span class="tier-badge">${priceInfo.tierName}</span>
                            `;
                } else {
                    return `<span class="current-price">$${p.price}</span>`;
                }
            })()}
                        ${p.oldPrice > 0 && !getTieredPrice(p.price).hasDiscount ? `<span class="old-price">$${p.oldPrice}</span>` : ""}
                    </div>
                    <div class="product-card__actions">
                        ${actionButtons}
                    </div>
                </div>
            </article>
        `;
    }

    targetContainer.innerHTML = allHtml;
    if (window.lucide) window.lucide.createIcons();

    // Update count if elements exist
    const countSpan = document.querySelector(".products-count");
    if (countSpan) countSpan.textContent = `${listToDraw.length} ${t('filters.found')}`;
}

// 3. Filterlash logikasi
function applyFilters() {
    var filtered = products.filter(function (p) {
        // Search filter
        var matchesSearch = p.name.toLowerCase().includes(filters.search.toLowerCase());

        // Category filter
        var matchesCategory = filters.categories.length === 0 || filters.categories.includes(p.category);

        // Price filter
        var matchesPrice = p.price >= filters.minPrice && p.price <= filters.maxPrice;

        return matchesSearch && matchesCategory && matchesPrice;
    });

    drawProducts(filtered);
}

function showSearchResults(query, resultsContainer) {
    if (!resultsContainer) return;

    if (query.length === 0) {
        resultsContainer.classList.remove('active');
        return;
    }

    const matched = products.filter(p => p.name.toLowerCase().includes(query)).slice(0, 5);

    if (matched.length === 0) {
        resultsContainer.innerHTML = `<div class="search-no-results">"${query}" ${t('search.no_results')}</div>`;
    } else {
        resultsContainer.innerHTML = matched.map(p => {
            const priceInfo = getTieredPrice(p.price);
            return `
                <div class="search-item" onclick="window.location.href='product-detail.html?id=${p.id}'">
                    <img src="${p.image}" alt="${p.name}" class="search-item__img">
                    <div class="search-item__info">
                        <span class="search-item__name">${p.name}</span>
                        <span class="search-item__price">$${priceInfo.price}</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    resultsContainer.classList.add('active');
}

function sortProducts(list) {
    const sorted = [...list];
    switch (filters.sort) {
        case "price-asc":
            return sorted.sort((a, b) => a.price - b.price);
        case "price-desc":
            return sorted.sort((a, b) => b.price - a.price);
        case "new":
            return sorted.sort((a, b) => b.id - a.id);
        case "popular":
        default:
            return sorted.sort((a, b) => b.rating - a.rating);
    }
}

// 4. Inputlar uchun listenerlar
function initFilterListeners() {
    // Sort Select
    var sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function (e) {
            filters.sort = e.target.value;
            applyFilters();
        });
    }

    // View Toggle
    var btnGrid = document.getElementById('view-grid');
    var btnList = document.getElementById('view-list');
    if (btnGrid && btnList) {
        btnGrid.addEventListener('click', function () {
            filters.view = 'grid';
            btnGrid.classList.add('active');
            btnList.classList.remove('active');
            applyFilters();
        });
        btnList.addEventListener('click', function () {
            filters.view = 'list';
            btnList.classList.add('active');
            btnGrid.classList.remove('active');
            applyFilters();
        });
    }

    // Search input
    var searchInputs = document.querySelectorAll('input[placeholder="Mahsulotlarni qidiring..."]');
    searchInputs.forEach(function (input) {
        const searchContainer = input.closest('.header__search');
        if (searchContainer && !searchContainer.querySelector('.search-results')) {
            const resultsDiv = document.createElement('div');
            resultsDiv.className = 'search-results';
            searchContainer.appendChild(resultsDiv);
        }

        input.addEventListener("input", function (e) {
            const query = e.target.value.trim().toLowerCase();
            filters.search = query;

            if (document.getElementById("categories-products-grid")) {
                applyFilters();
            }

            if (searchContainer) {
                showSearchResults(query, searchContainer.querySelector('.search-results'));
            }
        });

        // Show results when focusing back if query exists
        input.addEventListener("focus", function (e) {
            const query = e.target.value.trim().toLowerCase();
            if (query.length > 0 && searchContainer) {
                showSearchResults(query, searchContainer.querySelector('.search-results'));
            }
        });
    });

    // Close results on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header__search')) {
            document.querySelectorAll('.search-results').forEach(res => res.classList.remove('active'));
        }
    });

    // Category checkboxes
    var checkboxes = document.querySelectorAll(".sidebar__list input[type='checkbox']");
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            var catName = this.value;
            if (this.checked) {
                filters.categories.push(catName);
            } else {
                filters.categories = filters.categories.filter(c => c !== catName);
            }
            applyFilters();
        });
    });

    // Price range
    var rangeMin = document.querySelector(".range-min");
    var rangeMax = document.querySelector(".range-max");
    var priceMinVal = document.querySelector(".price-values span:first-child");
    var priceMaxVal = document.querySelector(".price-values span:last-child");

    const minGap = 50;
    const sliderTrack = document.querySelector(".slider-track");
    const sliderMaxValue = rangeMin ? rangeMin.max : 1000;

    function fillColor() {
        if (!rangeMin || !rangeMax || !sliderTrack) return;
        const percent1 = (rangeMin.value / sliderMaxValue) * 100;
        const percent2 = (rangeMax.value / sliderMaxValue) * 100;
        sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #2563eb ${percent1}%, #2563eb ${percent2}%, #dadae5 ${percent2}%)`;
    }

    if (rangeMin && rangeMax) {
        rangeMin.addEventListener("input", function () {
            if (parseInt(rangeMax.value) - parseInt(rangeMin.value) <= minGap) {
                rangeMin.value = parseInt(rangeMax.value) - minGap;
            }
            filters.minPrice = parseInt(this.value);
            if (priceMinVal) priceMinVal.textContent = "$" + this.value;
            fillColor();
            applyFilters();
        });
        rangeMax.addEventListener("input", function () {
            if (parseInt(rangeMax.value) - parseInt(rangeMin.value) <= minGap) {
                rangeMax.value = parseInt(rangeMin.value) + minGap;
            }
            filters.maxPrice = parseInt(this.value);
            if (priceMaxVal) priceMaxVal.textContent = "$" + this.value;
            fillColor();
            applyFilters();
        });
        fillColor(); // Init
    }

    // Reset button
    var resetBtn = document.querySelector(".sidebar .btn--outline-primary");
    if (resetBtn) {
        resetBtn.addEventListener("click", function () {
            filters = { search: "", categories: [], minPrice: 0, maxPrice: 1000 };
            checkboxes.forEach(cb => cb.checked = false);
            if (rangeMin) rangeMin.value = 0;
            if (rangeMax) rangeMax.value = 1000;
            if (priceMinVal) priceMinVal.textContent = "$0";
            if (priceMaxVal) priceMaxVal.textContent = "$1000";
            applyFilters();
        });
    }
}

// 5. FAQ Accordion
function initFAQ() {
    var faqItems = document.querySelectorAll('.faq__item');
    if (!faqItems.length) return;

    faqItems.forEach(function (item) {
        var header = item.querySelector('.faq__header');
        if (!header) return;

        header.addEventListener('click', function () {
            var isActive = item.classList.contains('active');

            // Close all items
            faqItems.forEach(function (faq) {
                faq.classList.remove('active');
            });

            // Toggle current if not active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// 6. Product Detail Sahifasini yuklash
function loadProductDetail() {
    var container = document.getElementById("product-detail-container");
    if (!container) return;

    // URL dan ID ni olish
    var urlParams = new URLSearchParams(window.location.search);
    var productId = parseInt(urlParams.get('id'));

    if (!productId) {
        container.innerHTML = `<div class="error">${t('filters.found').replace('products found', '').replace('mahsulot topildi', '')} Topilmadi</div>`;
        return;
    }

    var product = products.find(p => p.id === productId);
    if (!product) {
        container.innerHTML = `<div class="error">${t('filters.found').replace('products found', '').replace('mahsulot topildi', '')} Topilmadi</div>`;
        return;
    }

    // HTML ni hosil qilish
    var featuresHtml = product.features.map(f => `
        <div class="feature-item">
            <i data-lucide="check"></i>
            <span>${f}</span>
        </div>
    `).join('');

    // Texnik xususiyatlar HTML
    var specsHtml = '';
    if (product.specs) {
        specsHtml = Object.entries(product.specs).map(([label, value]) => `
            <div class="spec-item">
                <span class="spec-label">${label}:</span>
                <span class="spec-value">${value}</span>
            </div>
        `).join('');
    }

    var detailHtml = `
        <div class="product-detail">
            <div class="product-detail__gallery">
                <div class="product-detail__badges">
                    ${product.discount ? `<span class="badge badge--discount">${product.discount}</span>` : ""}
                    ${product.energyClass ? `<span class="badge badge--energy">${product.energyClass}</span>` : ""}
                </div>
                <img src="${product.image}" alt="${product.name}" class="product-detail__img">
            </div>
            
            <div class="product-detail__info-col">
                <span class="product-detail__cat">${t('category.' + product.categorySlug) || product.categorySlug || 'tech'}</span>
                <h1 class="product-detail__title">${product.name}</h1>
                
                <div class="product-detail__rating">
                    <i data-lucide="star"></i>
                    <i data-lucide="star"></i>
                    <i data-lucide="star"></i>
                    <i data-lucide="star"></i>
                    <i data-lucide="star" style="fill: none; color: #cbd5e1;"></i>
                    <span class="rating-val">${product.rating}</span>
                    <span class="rating-count">(${product.reviews} ${t('product.reviews')})</span>
                </div>
                
                <div class="product-detail__price-box">
                    ${(() => {
            const priceInfo = getTieredPrice(product.price);
            if (priceInfo.hasDiscount) {
                return `
                                <span class="product-detail__current-price">$${priceInfo.price}</span>
                                <span class="product-detail__old-price">$${product.price}</span>
                                <span class="tier-label">(${priceInfo.tierName} ${t('membership.discount_label')})</span>
                            `;
            } else {
                return `
                                <span class="product-detail__current-price">$${product.price}</span>
                                ${product.oldPrice ? `<span class="product-detail__old-price">$${product.oldPrice}</span>` : ""}
                            `;
            }
        })()}
                </div>
                
                <p class="product-detail__desc">${product.description}</p>
                
                <div class="product-detail__stock">
                    <span class="dot"></span>
                    ${product.stock === 'Mavjud' || !product.stock ? t('product.stock') : product.stock}
                </div>
                
                <div class="product-detail__actions">
                    ${(() => {
            const cartItem = cart.find(item => item.id === product.id);
            if (cartItem) {
                return `
                                <div class="qty-control">
                                    <button class="qty-btn" onclick="updateQuantity(${product.id}, -1)">
                                        <i data-lucide="minus"></i>
                                    </button>
                                    <span class="qty-val">${cartItem.quantity}</span>
                                    <button class="qty-btn" onclick="updateQuantity(${product.id}, 1)">
                                        <i data-lucide="plus"></i>
                                    </button>
                                </div>
                            `;
            } else {
                return `
                                <button class="btn btn--primary" onclick="addToCart(${product.id})">
                                    <i data-lucide="shopping-cart"></i> ${t('product.add_to_cart')}
                                </button>
                            `;
            }
        })()}
                </div>
                
                <div class="product-detail__features">
                    <h4>${t('product.specs_title')}</h4>
                    <div class="features-list">
                        ${featuresHtml}
                    </div>
                </div>
            </div>
        </div>
    `;

    var tabsHtml = `
        <div class="product-tabs">
            <div class="tab-buttons">
                <button class="tab-btn active" onclick="switchTab(event, 'specs')">${t('tabs.specs')}</button>
                <button class="tab-btn" onclick="switchTab(event, 'warranty')">${t('tabs.warranty')}</button>
                <button class="tab-btn" onclick="switchTab(event, 'delivery')">${t('tabs.delivery')}</button>
            </div>
            <div class="tab-content-box">
                <div id="specs" class="tab-pane active">
                    <div class="specs-grid">
                        ${specsHtml}
                    </div>
                </div>
                <div id="warranty" class="tab-pane">
                    <p class="product-detail__desc">${product.warranty || t('warranty.text')}</p>
                </div>
                <div id="delivery" class="tab-pane">
                    <p class="product-detail__desc">${t('delivery.text')}</p>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = detailHtml;
    var tabsContainer = document.getElementById("product-tabs-container");
    if (tabsContainer) {
        tabsContainer.innerHTML = tabsHtml;
    }

    if (window.lucide) window.lucide.createIcons();
}

// 7. Mobile Navigation Toggle
function initNav() {
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.querySelector('.nav');
    const navOverlay = document.getElementById('nav-overlay');
    const navLinks = document.querySelectorAll('.nav__link');

    if (!navToggle || !nav || !navOverlay) return;

    function toggleMenu() {
        const isOpen = nav.classList.contains('active');

        if (isOpen) {
            nav.classList.remove('active');
            navOverlay.classList.remove('active');
            navToggle.innerHTML = '<i data-lucide="menu"></i>';
            document.body.style.overflow = '';
        } else {
            nav.classList.add('active');
            navOverlay.classList.add('active');
            navToggle.innerHTML = '<i data-lucide="x"></i>';
            document.body.style.overflow = 'hidden';
        }

        if (window.lucide) window.lucide.createIcons();
    }

    navToggle.addEventListener('click', toggleMenu);
    navOverlay.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
}

// 8. Tabs Logic
function switchTab(event, tabId) {
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Remove active class from all panes
    const panes = document.querySelectorAll('.tab-pane');
    panes.forEach(pane => pane.classList.remove('active'));

    // Add active class to clicked button
    event.currentTarget.classList.add('active');

    // Add active class to target pane
    const targetPane = document.getElementById(tabId);
    if (targetPane) {
        targetPane.classList.add('active');
    }
}

// 9. Localization Logic
let currentLang = localStorage.getItem('lang') || 'en';

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    updateContent();
    updateActiveLangButton();
}

function updateActiveLangButton() {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function t(key) {
    if (typeof translations === 'undefined') return key;
    return translations[currentLang][key] || key;
}

function updateContent() {
    // Static content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (element.tagName === 'INPUT') {
            element.placeholder = t(key);
        } else {
            element.textContent = t(key);
        }
    });

    // Update document title
    const pageKey = document.body.dataset.titleKey;
    if (pageKey) {
        document.title = t(pageKey);
    }

    updateActiveLangButton();
    updateCartUI(); // Refresh cart UI which might have text

    // Refresh products if they are on screen (to update button text etc)
    if (document.getElementById("categories-products-grid")) applyFilters();
    if (document.getElementById("product-detail-container")) loadProductDetail();
}


// Sahifa yuklanganda ishga tushiruvchi kod
window.onload = function () {
    // Categories page products container
    if (document.getElementById("categories-products-grid")) {
        drawProducts();
    }

    // Home page Recommended Products (Top 4)
    if (document.getElementById("home-recommended-grid")) {
        drawProducts(products.slice(0, 4), "home-recommended-grid");
    }

    // Home page Popular Brands Products (Next 4)
    if (document.getElementById("home-popular-grid")) {
        drawProducts(products.slice(4, 8), "home-popular-grid");
    }

    // Product Detail Page
    loadProductDetail();

    // Cart UI initialization
    updateCartUI();
    updateAuthUI();

    initFilterListeners();
    initFAQ();
    initNav();

    // Initialize Localization
    updateContent();
};