// SEARCH INTERACTION //

const searchForm = document.querySelector(".search-form");
const searchButton = document.querySelector(".search-toggle");
const searchInput = document.querySelector("#site-search");

if (searchForm && searchButton && searchInput) {
  searchButton.addEventListener("click", function () {
    searchForm.classList.add("is-open");
    searchInput.focus();
  });
}


// SERVICES FILTERING //

const services = {
  all: [
    {
      category: "Facials",
      name: "HydraFacial",
      description: "Deep cleanse, exfoliation and hydration for glowing skin.",
      price: "From $149",
      duration: "60 min",
      imageClass: "treatment-hydrafacial",
      detailPage: "hydrafacial.html"
    },
    {
      category: "Facials",
      name: "Dermalblading",
      description: "Smooths texture and removes fine facial hair for a brighter finish.",
      price: "From $130",
      duration: "45 min",
      imageClass: "treatment-dermablading",
      detailPage: "dermablading.html"
    },
    {
      category: "Body",
      name: "Lymphatic Drainage",
      description: "A calming body treatment supporting lightness and relaxation.",
      price: "From $120",
      duration: "60 min",
      imageClass: "treatment-lymphatic",
      detailPage: "body-treatment.html"
    },
    {
      category: "Massage",
      name: "Hot Stone Massage",
      description: "Warm stone therapy designed to ease tension and support deep relaxation.",
      price: "From $139",
      duration: "75 min",
      imageClass: "treatment-hot-stone",
      detailPage: "relaxation-massage.html"
    },

    {
      category: "Nails",
      name: "Shellac Nails",
      description: "Choose manicure, pedicure, or both with a longer-lasting shellac finish.",
      price: "From $65",
      duration: "45-75 min",
      imageClass: "treatment-shellac-nails",
      detailPage: "shellac-nails.html"
    },

    {
      category: "Beauty",
      name: "Eyebrow Wax + Shape",
      description: "A quick brow shaping service for a clean, polished finish.",
      price: "From $45",
      duration: "30 min",
      imageClass: "treatment-eyebrow-shape",
      detailPage: "brow-sculpt.html"
    }
  ],

  facials: [
    {
      category: "Facials",
      name: "HydraFacial",
      description: "Deep cleanse, exfoliation and hydration for glowing skin.",
      price: "From $149",
      duration: "60 min",
      imageClass: "treatment-hydrafacial",
      detailPage: "hydrafacial.html"
    },
    {
      category: "Facials",
      name: "Dermalblading",
      description: "Smooths texture and removes fine facial hair for a brighter finish.",
      price: "From $130",
      duration: "45 min",
      imageClass: "treatment-dermablading",
      detailPage: "dermablading.html"
    },
    {
      category: "Facials",
      name: "Anti Aging Facial",
      description: "A targeted facial to support smoother, firmer-looking skin.",
      price: "From $135",
      duration: "60 min",
      imageClass: "treatment-anti-aging",
      detailPage: "anti-aging-facial.html"
    },
    {
      category: "Facials",
      name: "Microdermabrasion Facial",
      description: "A resurfacing facial designed to refresh dull or uneven skin texture.",
      price: "From $120",
      duration: "45 min",
      imageClass: "treatment-microdermabrasion",
      detailPage: "microdermabrasion-facial.html"
    },
    {
      category: "Facials",
      name: "Peel Facial",
      description: "A skin-renewing facial to support brightness and clarity.",
      price: "From $110",
      duration: "45 min",
      imageClass: "treatment-peel",
      detailPage: "peel-facial.html"
    },
    {
      category: "Facials",
      name: "Acne Treatment Facial",
      description: "A clarifying facial focused on congestion and blemish-prone skin.",
      price: "From $125",
      duration: "60 min",
      imageClass: "treatment-acne",
      detailPage: "acne-treatment-facial.html"
    }
  ],

  body: [
    {
      category: "Body",
      name: "Bespoke Back Facial",
      description: "A targeted back treatment for congestion, texture and skin maintenance.",
      price: "From $115",
      duration: "45 min",
      imageClass: "treatment-back-facial",
      detailPage: "bespoke-back-facial.html"
    },
    {
      category: "Body",
      name: "Body Sculpting",
      description: "A contour-focused treatment for body care and maintenance.",
      price: "From $160",
      duration: "60 min",
      imageClass: "treatment-body-sculpting",
      detailPage: "body-sculpting.html"
    },
    {
      category: "Body",
      name: "Lymphatic Drainage",
      description: "A calming body treatment supporting lightness and relaxation.",
      price: "From $120",
      duration: "60 min",
      imageClass: "treatment-lymphatic",
      detailPage: "body-treatment.html"
    },
    {
      category: "Body",
      name: "Cellulite Treatment",
      description: "A targeted body treatment focused on skin texture and appearance.",
      price: "From $145",
      duration: "60 min",
      imageClass: "treatment-cellulite",
      detailPage: "cellulite-treatment.html"
    },
    {
      category: "Body",
      name: "Full Body Exfoliation",
      description: "A polishing body treatment for smoother, softer-feeling skin.",
      price: "From $130",
      duration: "60 min",
      imageClass: "treatment-exfoliation",
      detailPage: "full-body-exfoliation.html"
    },
    {
      category: "Body",
      name: "Skin Tightening",
      description: "A body-focused treatment supporting firmer-looking skin.",
      price: "From $155",
      duration: "60 min",
      imageClass: "treatment-skin-tightening",
      detailPage: "skin-tightening.html"
    }
  ],

  massage: [
    {
      category: "Massage",
      name: "Relaxation Massage",
      description: "A restorative massage for stress relief and whole-body reset.",
      price: "From $129",
      duration: "60 min",
      imageClass: "treatment-relaxation-massage",
      detailPage: "relaxation-massage.html"
    },
    {
      category: "Massage",
      name: "Hot Stone Massage",
      description: "Warm stone therapy designed to ease tension and support deep relaxation.",
      price: "From $139",
      duration: "75 min",
      imageClass: "treatment-hot-stone",
      detailPage: "hot-stone-massage.html"
    },
    {
      category: "Massage",
      name: "Aromatherapy Massage",
      description: "A relaxing massage experience supported by aromatic oils.",
      price: "From $135",
      duration: "60 min",
      imageClass: "treatment-aromatherapy",
      detailPage: "aromatherapy-massage.html"
    },
    {
      category: "Massage",
      name: "Myofascial Release",
      description: "A focused treatment for tension, tightness and body restriction.",
      price: "From $145",
      duration: "60 min",
      imageClass: "treatment-myofascial",
      detailPage: "myofascial-release.html"
    },
    {
      category: "Massage",
      name: "Pregnancy Massage",
      description: "A supportive massage designed for comfort and relaxation.",
      price: "From $135",
      duration: "60 min",
      imageClass: "treatment-pregnancy",
      detailPage: "pregnancy-massage.html"
    },
    {
      category: "Massage",
      name: "Head, Neck & Shoulder Massage",
      description: "A shorter massage focused on common areas of tension.",
      price: "From $75",
      duration: "30 min",
      imageClass: "treatment-head-neck",
      detailPage: "head-neck-shoulder-massage.html"
    }
  ],

  nails: [
    {
      category: "Nails",
      name: "Classic Nails",
      description: "Choose manicure, pedicure, or both with cut, file, buff and polish.",
      price: "From $45",
      duration: "30-60 min",
      imageClass: "treatment-classic-nails",
      detailPage: "classic-nails.html"
    },
    {
      category: "Nails",
      name: "Shellac Nails",
      description: "Choose manicure, pedicure, or both with a longer-lasting shellac finish.",
      price: "From $65",
      duration: "45-75 min",
      imageClass: "treatment-shellac-nails",
      detailPage: "shellac-nails.html"
    },
    {
      category: "Nails",
      name: "Gel Nails",
      description: "A glossy gel finish available for manicure, pedicure, or both.",
      price: "From $75",
      duration: "50-80 min",
      imageClass: "treatment-gel-nails",
      detailPage: "gel-nails.html"
    },
    {
      category: "Nails",
      name: "Builder Gel",
      description: "Structured nail support for users wanting strength, shape and a polished finish.",
      price: "From $85",
      duration: "60-90 min",
      imageClass: "treatment-builder-gel",
      detailPage: "builder-gel.html"
    },
    {
      category: "Nails",
      name: "Acrylic Nails",
      description: "Acrylic nail services with optional extensions for added length and shape.",
      price: "From $95",
      duration: "75-100 min",
      imageClass: "treatment-acrylic-nails",
      detailPage: "acrylic-nails.html"
    },
    {
      category: "Nails",
      name: "Nail Add-ons",
      description: "Add extensions, removal of previous work, or upgrade your nail service.",
      price: "From $15",
      duration: "15-45 min",
      imageClass: "treatment-nail-addons",
      detailPage: "nail-addons.html"
    }
  ],

  beauty: [
    {
      category: "Beauty",
      name: "Full Body Wax",
      description: "A full body waxing service for smooth skin maintenance.",
      price: "From $120",
      duration: "75 min",
      imageClass: "treatment-full-body-wax",
      detailPage: "full-body-wax.html"
    },
    {
      category: "Beauty",
      name: "Eyebrow Wax + Shape",
      description: "A quick brow shaping service for a clean, polished finish.",
      price: "From $45",
      duration: "30 min",
      imageClass: "treatment-eyebrow-shape",
      detailPage: "brow-sculpt.html"
    },
    {
      category: "Beauty",
      name: "Brazilian Wax",
      description: "A focused waxing service delivered as a quick beauty treatment.",
      price: "From $65",
      duration: "35 min",
      imageClass: "treatment-brazilian",
      detailPage: "brazilian-wax.html"
    },
    {
      category: "Beauty",
      name: "Full Body Spray Tan",
      description: "A full body tanning service for an even bronzed finish.",
      price: "From $55",
      duration: "30 min",
      imageClass: "treatment-spray-tan",
      detailPage: "spray-tan.html"
    },
    {
      category: "Beauty",
      name: "Lash Lift",
      description: "A lash treatment designed to lift and open the eye area.",
      price: "From $85",
      duration: "45 min",
      imageClass: "treatment-lash-lift",
      detailPage: "lash-lift.html"
    },
    {
      category: "Beauty",
      name: "Full Arms / Legs",
      description: "Waxing for arms or legs with a clean, smooth finish.",
      price: "From $70",
      duration: "45 min",
      imageClass: "treatment-arms-legs",
      detailPage: "arms-legs-wax.html"
    }
  ]
};

const serviceGrid = document.querySelector("#service-grid");
const filterChips = document.querySelectorAll(".filter-chip");

function renderServices(category) {
  if (!serviceGrid || !services[category]) return;

  serviceGrid.innerHTML = "";

  services[category].forEach(function (service) {
    const card = document.createElement("article");
    card.className = "treatment-card";

    const addButton = `
      <button 
        class="add-cart-btn" 
        type="button"
        data-name="${service.name}"
        data-category="${service.category}"
        data-price="${service.price}"
        data-duration="${service.duration}"
      >
        Add to cart
      </button>
    `;
    const detailLink = `<a href="${service.detailPage}" class="text-link">View details</a>`;

    card.innerHTML = `
      <div class="treatment-image ${service.imageClass}"></div>

      <div class="treatment-content">
        <p class="treatment-category">${service.category}</p>
        <h3>${service.name}</h3>
        <p>${service.description}</p>

        <div class="treatment-meta">
          <span>${service.price}</span>
          <span>${service.duration}</span>
        </div>

        <div class="treatment-actions">
          ${addButton}
          ${detailLink}
        </div>
      </div>
    `;

    serviceGrid.appendChild(card);
  });
}

if (serviceGrid) {
  renderServices("all");
}

filterChips.forEach(function (chip) {
  chip.addEventListener("click", function () {
    filterChips.forEach(function (item) {
      item.classList.remove("active");
    });

    chip.classList.add("active");

    const selectedCategory = chip.dataset.category;
    renderServices(selectedCategory);
  });
});

// CART FUNCTIONALITY //

function getCartItems() {
  return JSON.parse(localStorage.getItem("lushCart")) || [];
}

function saveCartItems(items) {
  localStorage.setItem("lushCart", JSON.stringify(items));
}

function updateCartCount() {
  const cartCountElements = document.querySelectorAll(".cart-count");
  const cartItems = getCartItems();

  cartCountElements.forEach(function (countElement) {
    countElement.textContent = cartItems.length;

    countElement.classList.add("is-bumping");

    setTimeout(function () {
      countElement.classList.remove("is-bumping");
    }, 220);
  });
}

function showCartToast(itemName) {
  const toast = document.querySelector("#cart-toast");

  if (!toast) return;

  toast.textContent = `${itemName} added to cart`;
  toast.classList.add("is-visible");

  setTimeout(function () {
    toast.classList.remove("is-visible");
  }, 1800);
}

document.addEventListener("click", function (event) {
  if (!event.target.classList.contains("add-cart-btn")) return;

  const button = event.target;

  const item = {
    name: button.dataset.name,
    category: button.dataset.category,
    price: button.dataset.price,
    duration: button.dataset.duration,
    type: "service"
  };

  const existingCart = getCartItems();

  existingCart.push(item);
  saveCartItems(existingCart);

  button.textContent = "Added";
  updateCartCount();
  showCartToast(item.name);

  setTimeout(function () {
    button.textContent = "Add to cart";
  }, 1200);
});

updateCartCount();


// CART PAGE DISPLAY //

const cartItemsContainer = document.querySelector("#cart-items");
const cartCount = document.querySelector("#cart-count");
const clearCartButton = document.querySelector("#clear-cart");

function getCartItems() {
  return JSON.parse(localStorage.getItem("lushCart")) || [];
}

function saveCartItems(items) {
  localStorage.setItem("lushCart", JSON.stringify(items));
}

function renderCartPage() {
  if (!cartItemsContainer || !cartCount) return;

  const cartItems = getCartItems();

  cartItemsContainer.innerHTML = "";
  cartCount.textContent = cartItems.length;

  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = `
      <p class="empty-cart-message">
        Your cart is empty. Start by exploring services.
      </p>
    `;
    return;
  }

  cartItems.forEach(function (item, index) {
    const cartItem = document.createElement("article");
    cartItem.className = "cart-item";

    cartItem.innerHTML = `
      <div class="cart-item-top">
        <div>
          <p class="treatment-category">${item.category}</p>
          <h3>${item.name}</h3>
        </div>

        <button class="remove-item-btn" type="button" data-index="${index}">
          Remove
        </button>
      </div>

      <p>${item.price}</p>
      <p>${item.duration}</p>
    `;

    cartItemsContainer.appendChild(cartItem);
  });
}

if (cartItemsContainer) {
  renderCartPage();
}

document.addEventListener("click", function (event) {
  if (!event.target.classList.contains("remove-item-btn")) return;

  const indexToRemove = Number(event.target.dataset.index);
  const cartItems = getCartItems();

  cartItems.splice(indexToRemove, 1);
  saveCartItems(cartItems);
  renderCartPage();
});

if (clearCartButton) {
  clearCartButton.addEventListener("click", function () {
    localStorage.removeItem("lushCart");
    renderCartPage();
  });
}