// SEARCH INTERACTION //

const searchForm = document.querySelector(".search-form");
const searchButton = document.querySelector(".search-toggle");
const searchInput = document.querySelector("#site-search");

let searchResultsPanel = null;

function createSearchResultsPanel() {
  if (!searchForm || searchResultsPanel) return;

  searchResultsPanel = document.createElement("div");
  searchResultsPanel.className = "search-results-panel";
  searchResultsPanel.setAttribute("aria-live", "polite");

  searchForm.appendChild(searchResultsPanel);
}

function getUniqueSearchItems(sourceObject, type) {
  const seen = new Set();
  const results = [];

  Object.values(sourceObject).forEach(function (group) {
    group.forEach(function (item) {
      const key = `${type}-${item.name}`;

      if (seen.has(key)) return;

      seen.add(key);

      results.push({
        type: type,
        name: item.name,
        category: item.category,
        description: item.description,
        price: item.price,
        imageClass: item.imageClass,
        link:
          type === "service"
            ? item.detailPage || `services.html?category=${item.category.toLowerCase()}`
            : "shop.html#shop-products"
      });
    });
  });

  return results;
}

function getSearchItems() {
  const serviceItems = getUniqueSearchItems(services, "service");
  const productItems = getUniqueSearchItems(products, "product");

  return {
    services: serviceItems,
    products: productItems
  };
}

function itemMatchesSearch(item, query) {
  const searchableText = `
    ${item.name}
    ${item.category}
    ${item.description}
  `.toLowerCase();

  return searchableText.includes(query);
}

function renderSearchGroup(title, items) {
  if (items.length === 0) return "";

  const resultCards = items
    .map(function (item) {
      return `
        <a class="search-result-item" href="${item.link}">
          <span class="search-result-thumb ${item.imageClass || ""}"></span>

          <span>
            <strong>${item.name}</strong>
            <small>${item.type === "service" ? "Service" : "Product"} · ${item.category}</small>
            <em>${item.price}</em>
          </span>
        </a>
      `;
    })
    .join("");

  return `
    <div class="search-result-group">
      <p>${title}</p>
      ${resultCards}
    </div>
  `;
}

function renderSearchResults() {
  if (!searchResultsPanel || !searchInput) return;

  const query = searchInput.value.trim().toLowerCase();
  const searchItems = getSearchItems();

  let matchingServices = [];
  let matchingProducts = [];

  if (query.length === 0) {
    matchingServices = searchItems.services.slice(0, 4);
    matchingProducts = searchItems.products.slice(0, 4);
  } else {
    matchingServices = searchItems.services
      .filter(function (item) {
        return itemMatchesSearch(item, query);
      })
      .slice(0, 5);

    matchingProducts = searchItems.products
      .filter(function (item) {
        return itemMatchesSearch(item, query);
      })
      .slice(0, 5);
  }

  if (matchingServices.length === 0 && matchingProducts.length === 0) {
    searchResultsPanel.innerHTML = `
      <div class="search-empty">
        No results found. Try searching for facials, nails, massage, serum or moisturiser.
      </div>
    `;
  } else {
    searchResultsPanel.innerHTML = `
      ${query.length === 0 ? `<div class="search-featured-label">Featured results</div>` : ""}
      ${renderSearchGroup("Services", matchingServices)}
      ${renderSearchGroup("Products", matchingProducts)}
    `;
  }

  searchResultsPanel.classList.add("is-visible");
}

if (searchForm && searchButton && searchInput) {
  createSearchResultsPanel();

  searchButton.addEventListener("click", function () {
    searchForm.classList.add("is-open");
    searchInput.focus();
    renderSearchResults();
  });

  searchInput.addEventListener("input", function () {
    searchForm.classList.add("is-open");
    renderSearchResults();
  });

  searchInput.addEventListener("focus", function () {
    if (searchForm.classList.contains("is-open")) {
      renderSearchResults();
    }
  });

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstResult = searchResultsPanel.querySelector(".search-result-item");

    if (firstResult) {
      window.location.href = firstResult.href;
    }
  });

  document.addEventListener("click", function (event) {
    if (!searchForm.contains(event.target)) {
      searchResultsPanel.classList.remove("is-visible");

      if (searchInput.value.trim() === "") {
        searchForm.classList.remove("is-open");
      }
    }
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
      priceNumber: 149,
      duration: "60 min",
      imageClass: "treatment-hydrafacial",
      detailPage: "hydrafacial.html"
    },
    {
      category: "Facials",
      name: "Dermalblading",
      description: "Smooths texture and removes fine facial hair for a brighter finish.",
      price: "From $130",
      priceNumber: 130,
      duration: "45 min",
      imageClass: "treatment-dermablading",
      detailPage: "dermablading.html"
    },
    {
      category: "Body",
      name: "Lymphatic Drainage",
      description: "A calming body treatment supporting lightness and relaxation.",
      price: "From $120",
      priceNumber: 120,
      duration: "60 min",
      imageClass: "treatment-lymphatic",
      detailPage: "body-treatment.html"
    },
    {
      category: "Massage",
      name: "Hot Stone Massage",
      description: "Warm stone therapy designed to ease tension and support deep relaxation.",
      priceNumber: 139,
      price: "From $139",
      duration: "75 min",
      imageClass: "treatment-hot-stone",
      detailPage: "hot-stone-massage.html"
    },

    {
      category: "Nails",
      name: "Shellac Nails",
      description: "Choose manicure, pedicure, or both with a longer-lasting shellac finish.",
      priceNumber: 65,
      price: "From $65",
      duration: "45-75 min",
      imageClass: "treatment-shellac-nails",
      detailPage: "shellac-nails.html",
      hasAddons: true

    },

    {
      category: "Beauty",
      name: "Eyebrow Wax + Shape",
      description: "A quick brow shaping service for a clean, polished finish.",
      priceNumber: 45,
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
      priceNumber: 149,
      price: "From $149",
      duration: "60 min",
      imageClass: "treatment-hydrafacial",
      detailPage: "hydrafacial.html"
    },
    {
      category: "Facials",
      name: "Dermalblading",
      description: "Smooths texture and removes fine facial hair for a brighter finish.",
      priceNumber: 130,
      price: "From $130",
      duration: "45 min",
      imageClass: "treatment-dermablading",
      detailPage: "dermablading.html"
    },
    {
      category: "Facials",
      name: "Anti Aging Facial",
      description: "A targeted facial to support smoother, firmer-looking skin.",
      priceNumber: 135,
      price: "From $135",
      duration: "60 min",
      imageClass: "treatment-anti-aging",
      detailPage: ""
    },
    {
      category: "Facials",
      name: "Microdermabrasion Facial",
      description: "A resurfacing facial designed to refresh dull or uneven skin texture.",
      priceNumber: 120,
      price: "From $120",
      duration: "45 min",
      imageClass: "treatment-microdermabrasion",
      detailPage: ""
    },
    {
      category: "Facials",
      name: "Peel Facial",
      description: "A skin-renewing facial to support brightness and clarity.",
      priceNumber: 110,
      price: "From $110",
      duration: "45 min",
      imageClass: "treatment-peel",
      detailPage: ""
    },
    {
      category: "Facials",
      name: "Acne Treatment Facial",
      description: "A clarifying facial focused on congestion and blemish-prone skin.",
      priceNumber: 125,
      price: "From $125",
      duration: "60 min",
      imageClass: "treatment-acne",
      detailPage: ""
    }
  ],

  body: [
    {
      category: "Body",
      name: "Bespoke Back Facial",
      description: "A targeted back treatment for congestion, texture and skin maintenance.",
      priceNumber: 115,
      price: "From $115",
      duration: "45 min",
      imageClass: "treatment-back-facial",
      detailPage: ""
    },
    {
      category: "Body",
      name: "Body Sculpting",
      description: "A contour-focused treatment for body care and maintenance.",
      priceNumber: 160,
      price: "From $160",
      duration: "60 min",
      imageClass: "treatment-body-sculpting",
      detailPage: ""
    },
    {
      category: "Body",
      name: "Lymphatic Drainage",
      description: "A calming body treatment supporting lightness and relaxation.",
      priceNumber: 120,
      price: "From $120",
      duration: "60 min",
      imageClass: "treatment-lymphatic",
      detailPage: "body-treatment.html"
    },
    {
      category: "Body",
      name: "Cellulite Treatment",
      description: "A targeted body treatment focused on skin texture and appearance.",
      priceNumber: 145,
      price: "From $145",
      duration: "60 min",
      imageClass: "treatment-cellulite",
      detailPage: ""
    },
    {
      category: "Body",
      name: "Full Body Exfoliation",
      description: "A polishing body treatment for smoother, softer-feeling skin.",
      priceNumber: 130,
      price: "From $130",
      duration: "60 min",
      imageClass: "treatment-exfoliation",
      detailPage: ""
    },
    {
      category: "Body",
      name: "Skin Tightening",
      description: "A body-focused treatment supporting firmer-looking skin.",
      priceNumber: 155,
      price: "From $155",
      duration: "60 min",
      imageClass: "treatment-skin-tightening",
      detailPage: ""
    }
  ],

  massage: [
    {
      category: "Massage",
      name: "Relaxation Massage",
      description: "A restorative massage for stress relief and whole-body reset.",
      priceNumber: 129,
      price: "From $129",
      duration: "60 min",
      imageClass: "treatment-relaxation-massage",
      detailPage: ""
    },
    {
      category: "Massage",
      name: "Hot Stone Massage",
      description: "Warm stone therapy designed to ease tension and support deep relaxation.",
      priceNumber: 139,
      price: "From $139",
      duration: "75 min",
      imageClass: "treatment-hot-stone",
      detailPage: "hot-stone-massage.html"
    },
    {
      category: "Massage",
      name: "Aromatherapy Massage",
      description: "A relaxing massage experience supported by aromatic oils.",
      priceNumber: 135,
      price: "From $135",
      duration: "60 min",
      imageClass: "treatment-aromatherapy",
      detailPage: ""
    },
    {
      category: "Massage",
      name: "Myofascial Release",
      description: "A focused treatment for tension, tightness and body restriction.",
      priceNumber: 145,
      price: "From $145",
      duration: "60 min",
      imageClass: "treatment-myofascial",
      detailPage: ""
    },
    {
      category: "Massage",
      name: "Pregnancy Massage",
      description: "A supportive massage designed for comfort and relaxation.",
      priceNumber: 135,
      price: "From $135",
      duration: "60 min",
      imageClass: "treatment-pregnancy",
      detailPage: ""
    },
    {
      category: "Massage",
      name: "Head, Neck & Shoulder Massage",
      description: "A shorter massage focused on common areas of tension.",
      priceNumber: 75,
      price: "From $75",
      duration: "30 min",
      imageClass: "treatment-head-neck",
      detailPage: ""
    }
  ],

  nails: [
    {
      category: "Nails",
      name: "Classic Nails",
      description: "Choose manicure, pedicure, or both with cut, file, buff and polish.",
      priceNumber: 45,
      price: "From $45",
      duration: "30-60 min",
      imageClass: "treatment-classic-nails",
      detailPage: ""
    },
    {
      category: "Nails",
      name: "Shellac Nails",
      description: "Choose manicure, pedicure, or both with a longer-lasting shellac finish.",
      priceNumber: 65,
      price: "From $65",
      duration: "45-75 min",
      imageClass: "treatment-shellac-nails",
      detailPage: "shellac-nails.html",
      hasAddons: true
    },
    {
      category: "Nails",
      name: "Gel Nails",
      description: "A glossy gel finish available for manicure, pedicure, or both.",
      priceNumber: 75,
      price: "From $75",
      duration: "50-80 min",
      imageClass: "treatment-gel-nails",
      detailPage: ""
    },
    {
      category: "Nails",
      name: "Builder Gel",
      description: "Structured nail support for users wanting strength, shape and a polished finish.",
      priceNumber: 85,
      price: "From $85",
      duration: "60-90 min",
      imageClass: "treatment-builder-gel",
      detailPage: ""
    },
    {
      category: "Nails",
      name: "Acrylic Nails",
      description: "Acrylic nail services with optional extensions for added length and shape.",
      priceNumber: 95,
      price: "From $95",
      duration: "75-100 min",
      imageClass: "treatment-acrylic-nails",
      detailPage: ""
    },
    {
      category: "Nails",
      name: "Nail Add-ons",
      description: "Add extensions, removal of previous work, or upgrade your nail service.",
      priceNumber: 15,
      price: "From $15",
      duration: "15-45 min",
      imageClass: "treatment-nail-addons",
      detailPage: ""
    }
  ],

  beauty: [
    {
      category: "Beauty",
      name: "Full Body Wax",
      description: "A full body waxing service for smooth skin maintenance.",
      priceNumber: 120,
      price: "From $120",
      duration: "75 min",
      imageClass: "treatment-full-body-wax",
      detailPage: ""
    },
    {
      category: "Beauty",
      name: "Eyebrow Wax + Shape",
      description: "A quick brow shaping service for a clean, polished finish.",
      priceNumber: 45,
      price: "From $45",
      duration: "30 min",
      imageClass: "treatment-eyebrow-shape",
      detailPage: "brow-sculpt.html"
    },
    {
      category: "Beauty",
      name: "Brazilian Wax",
      description: "A focused waxing service delivered as a quick beauty treatment.",
      priceNumber: 65,
      price: "From $65",
      duration: "35 min",
      imageClass: "treatment-brazilian",
      detailPage: ""
    },
    {
      category: "Beauty",
      name: "Full Body Spray Tan",
      description: "A full body tanning service for an even bronzed finish.",
      priceNumber: 55,
      price: "From $55",
      duration: "30 min",
      imageClass: "treatment-spray-tan",
      detailPage: ""
    },
    {
      category: "Beauty",
      name: "Lash Lift",
      description: "A lash treatment designed to lift and open the eye area.",
      priceNumber: 85,
      price: "From $85",
      duration: "45 min",
      imageClass: "treatment-lash-lift",
      detailPage: ""
    },
    {
      category: "Beauty",
      name: "Full Arms / Legs",
      description: "Waxing for arms or legs with a clean, smooth finish.",
      priceNumber: 70,
      price: "From $70",
      duration: "45 min",
      imageClass: "treatment-arms-legs",
      detailPage: ""
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

    const alreadyAdded = isItemInCart(service.name);

    const addButton = ` 
      <button 
        class="add-cart-btn ${alreadyAdded ? "is-added" : ""}" 
        type="button"
        data-name="${service.name}"
        data-category="${service.category}"
        data-price="${service.price || "$" + service.priceNumber}"
        data-price-number="${service.priceNumber}"
        data-duration="${service.duration}"
        data-type="service"
        data-image-class="${service.imageClass}"
        ${service.hasAddons ? 'data-has-addons="true"' : ""}
      >
        ${alreadyAdded ? "Added" : "Add to cart"}
      </button>
    `;


    const detailLink = service.detailPage
      ? `<a href="${service.detailPage}" class="text-link">View details</a>`
      : "";

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
  const params = new URLSearchParams(window.location.search);
  const selectedCategory = params.get("category") || "all";

  renderServices(selectedCategory);

  filterChips.forEach(function (chip) {
    chip.classList.remove("active");

    if (chip.dataset.category === selectedCategory) {
      chip.classList.add("active");
    }
  });
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
    const itemCount = cartItems.reduce(function (total, item) {
      return total + Number(item.quantity || 1);
    }, 0);

    countElement.textContent = itemCount;
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
  const button = event.target.closest(".add-cart-btn");

  if (!button) return;

  if (button.dataset.hasAddons === "true") {
    openAddonModal(button);
    return;
  }

  if (!button.dataset.name) return;

  const cartItems = getCartItems();

  if (cartItems.length === 0) {
    localStorage.removeItem("lushBooking");
    localStorage.removeItem("lushPayment");
    localStorage.removeItem("lushConfirmedCart");
  }

  const existingItem = cartItems.find(function (item) {
    return item.name === button.dataset.name;
  });

  if (existingItem) {
    if (existingItem.type === "product") {
      const selectedQuantity = Number(selectedProductQuantities[button.dataset.name] || existingItem.quantity || 1);

      existingItem.quantity = selectedQuantity;
      saveCartItems(cartItems);

      button.textContent = "Added";
      button.classList.add("is-added");

      updateCartCount();
      updateProductQuantityControls();
      showCartToast(existingItem.name);

      if (cartItemsContainer) {
        renderCartPage();
      }

      return;
    }

    button.textContent = "Added";
    button.classList.add("is-added");
    return;
  }

  const selectedQuantity =
    button.dataset.type === "product"
      ? Number(selectedProductQuantities[button.dataset.name] || 1)
      : 1;

  const item = {
    name: button.dataset.name,
    category: button.dataset.category,
    price: button.dataset.price,
    priceNumber: Number(button.dataset.priceNumber),
    duration: button.dataset.duration,
    type: button.dataset.type || "service",
    quantity: selectedQuantity,
    imageClass: button.dataset.imageClass
  };

  cartItems.push(item);
  saveCartItems(cartItems);

  button.textContent = "Added";
  button.classList.add("is-added");

  updateCartCount();
  updateAddButtonStates();
  showCartToast(item.name);

  if (cartItemsContainer) {
    renderCartPage();
  }
});


// NAIL ADD ON MODAL //

let pendingAddonButton = null;

const addonModal = document.querySelector("#addon-modal");
const addonCloseButton = document.querySelector("#addon-close");
const addonConfirmButton = document.querySelector("#addon-confirm");

function openAddonModal(button) {
  pendingAddonButton = button;

  if (!addonModal) return;

  addonModal.classList.add("is-open");
  addonModal.setAttribute("aria-hidden", "false");
}

function closeAddonModal() {
  if (!addonModal) return;

  addonModal.classList.remove("is-open");
  addonModal.setAttribute("aria-hidden", "true");

  const addonCheckboxes = document.querySelectorAll(".addon-option input");
  addonCheckboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });

  pendingAddonButton = null;
}

if (addonCloseButton) {
  addonCloseButton.addEventListener("click", closeAddonModal);
}

if (addonModal) {
  addonModal.addEventListener("click", function (event) {
    if (event.target === addonModal) {
      closeAddonModal();
    }
  });
}

if (addonConfirmButton) {
  addonConfirmButton.addEventListener("click", function () {
    if (!pendingAddonButton) return;

    const addonCheckboxes = document.querySelectorAll(".addon-option input:checked");

    const selectedAddons = Array.from(addonCheckboxes).map(function (checkbox) {
      return {
        name: checkbox.value,
        priceNumber: Number(checkbox.dataset.priceNumber)
      };
    });

    const addonTotal = selectedAddons.reduce(function (total, addon) {
      return total + addon.priceNumber;
    }, 0);

    const basePriceNumber = Number(pendingAddonButton.dataset.priceNumber);
    const finalPriceNumber = basePriceNumber + addonTotal;

    const cartItems = getCartItems();

    const existingItem = cartItems.find(function (item) {
      return item.name === pendingAddonButton.dataset.name;
    });

    if (existingItem) {
      existingItem.addons = selectedAddons;
      existingItem.priceNumber = finalPriceNumber;
      existingItem.price = `From $${finalPriceNumber}`;
    } else {
      const item = {
        name: pendingAddonButton.dataset.name,
        category: pendingAddonButton.dataset.category,
        price: `From $${finalPriceNumber}`,
        priceNumber: finalPriceNumber,
        duration: pendingAddonButton.dataset.duration,
        type: pendingAddonButton.dataset.type || "service",
        quantity: 1,
        imageClass: pendingAddonButton.dataset.imageClass,
        addons: selectedAddons
      };

      cartItems.push(item);
    }

    saveCartItems(cartItems);

    pendingAddonButton.textContent = "Added";
    pendingAddonButton.classList.add("is-added");

    updateCartCount();
    updateAddButtonStates();
    showCartToast(pendingAddonButton.dataset.name);

    closeAddonModal();
  });
}

document.addEventListener("click", function (event) {
  if (!event.target.classList.contains("quantity-btn")) return;

  const index = Number(event.target.dataset.index);
  const action = event.target.dataset.action;
  const cartItems = getCartItems();

  if (!cartItems[index]) return;

  if (action === "increase") {
    cartItems[index].quantity = Number(cartItems[index].quantity || 1) + 1;
  }

  if (action === "decrease") {
    cartItems[index].quantity = Number(cartItems[index].quantity || 1) - 1;

    if (cartItems[index].quantity <= 0) {
      cartItems.splice(index, 1);
    }
  }

  saveCartItems(cartItems);
  renderCartPage();
  updateCartCount();
  updateAddButtonStates();
});

function isItemInCart(serviceName) {
  const cartItems = getCartItems();

  return cartItems.some(function (item) {
    return item.name === serviceName;
  });
}

function updateAddButtonStates() {
  const addButtons = document.querySelectorAll(".add-cart-btn");

  addButtons.forEach(function (button) {
    const itemName = button.dataset.name;

    if (!itemName) return;

    if (isItemInCart(itemName)) {
      button.textContent = "Added";
      button.classList.add("is-added");
    } else {
      button.textContent = "Add to cart";
      button.classList.remove("is-added");
    }
  });
}

updateCartCount();
updateAddButtonStates();


// CART PAGE DISPLAY //

const cartItemsContainer = document.querySelector("#cart-items");
const cartCount = document.querySelector("#cart-count");
const clearCartButton = document.querySelector("#clear-cart");
const cartSubtotal = document.querySelector("#cart-subtotal");
const cartDelivery = document.querySelector("#cart-delivery");
const deliveryRow = document.querySelector("#delivery-row");
const cartGst = document.querySelector("#cart-gst");
const cartTotal = document.querySelector("#cart-total");
const cartCheckoutLink = document.querySelector("#cart-checkout-link");

function renderCartPage() {
  if (!cartItemsContainer || !cartCount) return;

  const cartItems = getCartItems();

  const hasServices = cartItems.some(function (item) {
    return item.type === "service";
  });

  const hasProducts = cartItems.some(function (item) {
    return item.type === "product";
  });

  const subtotal = cartItems.reduce(function (total, item) {
    const quantity = Number(item.quantity || 1);
    return total + Number(item.priceNumber || 0) * quantity;
  }, 0);

  const deliveryFee = hasProducts ? 14 : 0;
  const gst = subtotal * 0.02;
  const totalPrice = subtotal + deliveryFee + gst;

  if (cartCheckoutLink) {
    if (hasServices) {
      cartCheckoutLink.href = "booking.html";
      cartCheckoutLink.textContent = "Continue to booking";
    } else {
      cartCheckoutLink.href = "payment.html";
      cartCheckoutLink.textContent = "Continue to checkout";
    }
  }

  cartItemsContainer.innerHTML = "";
  const totalItemCount = cartItems.reduce(function (total, item) {
    return total + Number(item.quantity || 1);
  }, 0);

  cartCount.textContent = totalItemCount;

  if (cartSubtotal) {
    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  }

  if (cartDelivery) {
    cartDelivery.textContent = `$${deliveryFee.toFixed(2)}`;
  }

  if (deliveryRow) {
    deliveryRow.style.display = deliveryFee > 0 ? "flex" : "none";
  }

  if (cartGst) {
    cartGst.textContent = `$${gst.toFixed(2)}`;
  }

  if (cartTotal) {
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
  }

  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = `
      <p class="empty-cart-message">
        Your cart is empty. Start by exploring services or skincare products.
      </p>
    `;
    return;
  }

  cartItems.forEach(function (item, index) {
    const cartItem = document.createElement("article");
    cartItem.className = "cart-item";

    const itemQuantity = Number(item.quantity || 1);
    const lineTotal = Number(item.priceNumber || 0) * itemQuantity;

    const quantityControls = item.type === "product"
      ? `
        <div class="quantity-control">
          <button class="quantity-btn" type="button" data-index="${index}" data-action="decrease">−</button>
          <span>${itemQuantity}</span>
          <button class="quantity-btn" type="button" data-index="${index}" data-action="increase">+</button>
        </div>
      `
      : "";

      cartItem.innerHTML = `
        <div class="cart-item-main">
          <div class="cart-thumb ${item.imageClass || ""}"></div>

          <div class="cart-item-content">
            <div class="cart-item-top">
              <div>
                <p class="treatment-category">${item.category}</p>
                <h3>${item.name}</h3>
              </div>

              <div class="cart-item-controls">
                ${quantityControls}

                <button class="remove-item-btn" type="button" data-index="${index}" aria-label="Remove ${item.name}">
                  x
                </button>
              </div>
            </div>

            <div class="cart-item-details">
              <p>${item.type === "product" ? "Skincare product" : item.duration}</p>
              <p>${item.price}</p>

              ${
                item.addons && item.addons.length > 0
                  ? `<p>Add-ons: ${item.addons.map(function (addon) {
                      return addon.name;
                    }).join(", ")}</p>`
                  : ""
              }

              <strong>$${lineTotal.toFixed(2)}</strong>
            </div>
          </div>
        </div>
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
  updateCartCount();
  updateAddButtonStates();
});

if (clearCartButton) {
  clearCartButton.addEventListener("click", function () {
    localStorage.removeItem("lushCart");
    localStorage.removeItem("lushBooking");
    localStorage.removeItem("lushPayment");
    localStorage.removeItem("lushConfirmedCart");

    renderCartPage();
    updateCartCount();
    updateAddButtonStates();
  });
}
// ----------------------------------------------------------------------------------------------------------------//
// BOOKING FORM //

const serviceBookingList = document.querySelector("#service-booking-list");
const bookingForm = document.querySelector("#booking-form");
const bookingProductList = document.querySelector("#booking-product-list");

const staffOptions = [
  "No preference - Match me with your best fit",
  "Leah Hamilton - Lead Skin Therapist",
  "Maya Chen - Senior Beauty Therapist",
  "Amara Singh - Massage Therapist",
  "Sophie Walker - Nail Technician"
];

function renderBookingProductList() {
  if (!bookingProductList) return;

  const cartItems = getCartItems();

  const productItems = cartItems.filter(function (item) {
    return item.type === "product";
  });

  bookingProductList.innerHTML = "";

  if (productItems.length === 0) {
    bookingProductList.innerHTML = `
      <p class="empty-cart-message">
        No skincare products selected.
      </p>
    `;
    return;
  }

  productItems.forEach(function (item) {
    const quantity = Number(item.quantity || 1);
    const lineTotal = Number(item.priceNumber || 0) * quantity;

    const productItem = document.createElement("article");
    productItem.className = "booking-product-item";

    productItem.innerHTML = `
      <div class="booking-item-left">
        <div class="booking-thumb ${item.imageClass || ""}"></div>

        <div>
          <strong>${item.name}</strong>
          <p>${item.category} · Qty ${quantity}</p>
        </div>
      </div>

      <strong>$${lineTotal.toFixed(2)}</strong>
    `;
    bookingProductList.appendChild(productItem);
  });
}

function renderServiceBookingFields() {
  if (!serviceBookingList) return;

  const cartItems = getCartItems();

  const serviceItems = cartItems.filter(function (item) {
    return item.type === "service";
  });

  serviceBookingList.innerHTML = "";

  if (cartItems.length === 0) {
    serviceBookingList.innerHTML = `
      <p class="empty-cart-message">
        Your cart is empty. Add a service or product before continuing.
      </p>
    `;
    return;
  }

  if (serviceItems.length === 0) {
    serviceBookingList.innerHTML = `
      <p class="empty-cart-message">
        No services need scheduling. Your skincare products will be included in your order summary.
      </p>
    `;
    return;
  }

  serviceItems.forEach(function (item, index) {
    const staffSelectOptions = staffOptions
      .map(function (staff) {
        return `<option value="${staff}">${staff}</option>`;
      })
      .join("");

    const bookingCard = document.createElement("article");
    bookingCard.className = "service-booking-card";


    bookingCard.innerHTML = `
      <div class="booking-service-head">
        <div class="booking-thumb ${item.imageClass || ""}"></div>

        <div>
          <p class="treatment-category">${item.category}</p>
          <h3>${item.name}</h3>
        </div>
      </div>

      <div class="form-grid">
        <div class="form-group">
          <label for="service-date-${index}">Preferred date</label>
          <input id="service-date-${index}" type="date" required>
        </div>

        <div class="form-group">
          <label for="service-time-${index}">Preferred time</label>
          <select id="service-time-${index}" required>
            <option value="">Select a time</option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="10:30 AM">10:30 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="3:30 PM">3:30 PM</option>
          </select>
        </div>

        <div class="form-group form-group-full">
          <label for="service-staff-${index}">Preferred staff member</label>
          <select id="service-staff-${index}" required>
            <option value="">Select a preference</option>
            ${staffSelectOptions}
          </select>
        </div>
      </div>
    `;

    serviceBookingList.appendChild(bookingCard);
  });
}


if (bookingProductList) {
  renderBookingProductList();
}

if (serviceBookingList) {
  renderServiceBookingFields();
}

if (bookingForm) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();


    const cartItems = getCartItems();

    const serviceItems = cartItems.filter(function (item) {
      return item.type === "service";
    });

    const productItems = cartItems.filter(function (item) {
      return item.type === "product";
    });

    const scheduledServices = serviceItems.map(function (item, index) {
      return {
        name: item.name,
        category: item.category,
        price: item.price,
        duration: item.duration,
        date: document.querySelector(`#service-date-${index}`).value,
        time: document.querySelector(`#service-time-${index}`).value,
        staff: document.querySelector(`#service-staff-${index}`).value
      };
    });

    const bookingData = {
      name: document.querySelector("#booking-name").value,
      email: document.querySelector("#booking-email").value,
      phone: document.querySelector("#booking-phone").value,
      location: document.querySelector("#booking-location").value,
      notes: document.querySelector("#booking-notes").value,
      services: scheduledServices,
      products: productItems
    };

    localStorage.setItem("lushBooking", JSON.stringify(bookingData));

    window.location.href = "payment.html";

  });
}




// -----------------------------------------------------------------------------------------------------------
// SHOP PRODUCTS //

const products = {
  all: [
    {
      category: "Cleansers",
      name: "Cream Cleanser",
      description: "A soft daily cleanser for calm, comfortable skin.",
      price: "$42",
      priceNumber: 42,
      imageClass: "product-cream-cleanser"
    },
    {
      category: "Cleansers",
      name: "Gel Cleanser",
      description: "A lightweight gel cleanse for a fresh, clean finish.",
      price: "$38",
      priceNumber: 38,
      imageClass: "product-gel-cleanser"
    },
    {
      category: "Serums",
      name: "Hydrating Serum",
      description: "A moisture-supporting serum for a plump, dewy look.",
      price: "$56",
      priceNumber: 56,
      imageClass: "product-hydrating-serum"
    },
    {
      category: "Serums",
      name: "Vitamin C Serum",
      description: "A brightening serum for dullness and uneven tone.",
      price: "$62",
      priceNumber: 62,
      imageClass: "product-vitamin-c-serum"
    },
    {
      category: "Moisturisers",
      name: "Daily Moisturiser",
      description: "A simple everyday moisturiser for soft, balanced skin.",
      price: "$48",
      priceNumber: 48,
      imageClass: "product-daily-moisturiser"
    },
    {
      category: "Moisturisers",
      name: "Barrier Repair Cream",
      description: "A richer cream for comfort, softness and barrier support.",
      price: "$58",
      priceNumber: 58,
      imageClass: "product-barrier-cream"
    },
    {
      category: "Masks",
      name: "Clay Mask",
      description: "A clarifying mask for congestion and excess shine.",
      price: "$44",
      priceNumber: 44,
      imageClass: "product-clay-mask"
    },
    {
      category: "Masks",
      name: "Hydrating Mask",
      description: "A softening mask for dry or tired-looking skin.",
      price: "$46",
      priceNumber: 46,
      imageClass: "product-hydrating-mask"
    },
    {
      category: "Body care",
      name: "Body Oil",
      description: "A silky body oil for smooth, nourished-feeling skin.",
      price: "$52",
      priceNumber: 52,
      imageClass: "product-body-oil"
    },
    {
      category: "Body care",
      name: "Body Lotion",
      description: "An everyday body moisturiser for lasting softness.",
      price: "$40",
      priceNumber: 40,
      imageClass: "product-body-lotion"
    }
  ],

  cleansers: [
    {
      category: "Cleansers",
      name: "Cream Cleanser",
      description: "A soft daily cleanser for calm, comfortable skin.",
      price: "$42",
      priceNumber: 42,
      imageClass: "product-cream-cleanser"
    },
    {
      category: "Cleansers",
      name: "Gel Cleanser",
      description: "A lightweight gel cleanse for a fresh, clean finish.",
      price: "$38",
      priceNumber: 38,
      imageClass: "product-gel-cleanser"
    }
  ],

  serums: [
    {
      category: "Serums",
      name: "Hydrating Serum",
      description: "A moisture-supporting serum for a plump, dewy look.",
      price: "$56",
      priceNumber: 56,
      imageClass: "product-hydrating-serum"
    },
    {
      category: "Serums",
      name: "Vitamin C Serum",
      description: "A brightening serum for dullness and uneven tone.",
      price: "$62",
      priceNumber: 62,
      imageClass: "product-vitamin-c-serum"
    }
  ],

  moisturisers: [
    {
      category: "Moisturisers",
      name: "Daily Moisturiser",
      description: "A simple everyday moisturiser for soft, balanced skin.",
      price: "$48",
      priceNumber: 48,
      imageClass: "product-daily-moisturiser"
    },
    {
      category: "Moisturisers",
      name: "Barrier Repair Cream",
      description: "A richer cream for comfort, softness and barrier support.",
      price: "$58",
      priceNumber: 58,
      imageClass: "product-barrier-cream"
    }
  ],

  masks: [
    {
      category: "Masks",
      name: "Clay Mask",
      description: "A clarifying mask for congestion and excess shine.",
      price: "$44",
      priceNumber: 44,
      imageClass: "product-clay-mask"
    },
    {
      category: "Masks",
      name: "Hydrating Mask",
      description: "A softening mask for dry or tired-looking skin.",
      price: "$46",
      priceNumber: 46,
      imageClass: "product-hydrating-mask"
    }
  ],

  body: [
    {
      category: "Body care",
      name: "Body Oil",
      description: "A silky body oil for smooth, nourished-feeling skin.",
      price: "$52",
      priceNumber: 52,
      imageClass: "product-body-oil"
    },
    {
      category: "Body care",
      name: "Body Lotion",
      description: "An everyday body moisturiser for lasting softness.",
      price: "$40",
      priceNumber: 40,
      imageClass: "product-body-lotion"
    }
  ]
};

const productGrid = document.querySelector("#product-grid");
const productFilterChips = document.querySelectorAll(".product-filter-chip");

const selectedProductQuantities = {};

function renderProducts(category) {
  if (!productGrid || !products[category]) return;

  productGrid.innerHTML = "";

  products[category].forEach(function (product) {
    const card = document.createElement("article");
    card.className = "product-card";

    card.innerHTML = `
      <div class="product-image ${product.imageClass}"></div>

      <p class="product-category">${product.category}</p>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="product-price">${product.price}</p>

      <div class="product-purchase-row">
        <div class="product-quantity-control">
          <button class="product-quantity-btn" type="button" data-product-name="${product.name}" data-action="decrease">−</button>
          <span class="product-quantity-value" data-product-name="${product.name}">1</span>
          <button class="product-quantity-btn" type="button" data-product-name="${product.name}" data-action="increase">+</button>
        </div>

        <button
          class="add-cart-btn"
          type="button"
          data-name="${product.name}"
          data-category="${product.category}"
          data-price="${product.price}"
          data-price-number="${product.priceNumber}"
          data-duration=""
          data-type="product"
          data-image-class="${product.imageClass}"
        >
          Add to cart
        </button>
      </div>


    `;

    productGrid.appendChild(card);
  });

  updateProductQuantityControls();
  updateAddButtonStates();
}

function updateProductQuantityControls() {
  const quantityValues = document.querySelectorAll(".product-quantity-value");

  quantityValues.forEach(function (quantityValue) {
    const productName = quantityValue.dataset.productName;
    const cartItems = getCartItems();

    const cartItem = cartItems.find(function (item) {
      return item.name === productName && item.type === "product";
    });

    if (cartItem) {
      quantityValue.textContent = Number(cartItem.quantity || 1);
      selectedProductQuantities[productName] = Number(cartItem.quantity || 1);
    } else {
      quantityValue.textContent = selectedProductQuantities[productName] || 1;
    }
  });
}

if (productGrid) {
  renderProducts("all");
}

productFilterChips.forEach(function (chip) {
  chip.addEventListener("click", function () {
    productFilterChips.forEach(function (item) {
      item.classList.remove("active");
    });

    chip.classList.add("active");

    const selectedCategory = chip.dataset.productCategory;
    renderProducts(selectedCategory);
  });
});

document.addEventListener("click", function (event) {
  const quantityButton = event.target.closest(".product-quantity-btn");

  if (!quantityButton) return;

  const productName = quantityButton.dataset.productName;
  const action = quantityButton.dataset.action;

  const cartItems = getCartItems();

  const cartItem = cartItems.find(function (item) {
    return item.name === productName && item.type === "product";
  });

  const currentQuantity = cartItem
    ? Number(cartItem.quantity || 1)
    : Number(selectedProductQuantities[productName] || 1);

  let newQuantity = currentQuantity;

  if (action === "increase") {
    newQuantity = currentQuantity + 1;
  }

  if (action === "decrease") {
    newQuantity = Math.max(1, currentQuantity - 1);
  }

  selectedProductQuantities[productName] = newQuantity;

  if (cartItem) {
    cartItem.quantity = newQuantity;
    saveCartItems(cartItems);
    updateCartCount();

    if (cartItemsContainer) {
      renderCartPage();
    }
  }

  updateProductQuantityControls();
});


// ---------------------------------------------------------------------------------------------------------------
// PAYMENT PAGE //

const paymentForm = document.querySelector("#payment-form");
const paymentContactSection = document.querySelector("#payment-contact-section");
const paymentDeliverySection = document.querySelector("#payment-delivery-section");
const paymentServiceList = document.querySelector("#payment-service-list");
const paymentProductList = document.querySelector("#payment-product-list");
const paymentTotal = document.querySelector("#payment-total");

function setRequiredFields(container, isRequired) {
  if (!container) return;

  const fields = container.querySelectorAll("input, select, textarea");

  fields.forEach(function (field) {
    field.required = isRequired;
  });
}

function renderPaymentPageSummary() {
  if (!paymentForm) return;

  const bookingData = JSON.parse(localStorage.getItem("lushBooking"));
  const cartItems = getCartItems();

  const serviceItems = cartItems.filter(function (item) {
    return item.type === "service";
  });

  const productItems = cartItems.filter(function (item) {
    return item.type === "product";
  });

  const hasBookingDetails = Boolean(bookingData);
  const hasProducts = productItems.length > 0;

  if (paymentContactSection) {
    paymentContactSection.style.display = hasBookingDetails ? "none" : "block";
    setRequiredFields(paymentContactSection, !hasBookingDetails);
  }

  if (paymentDeliverySection) {
    paymentDeliverySection.style.display = hasProducts ? "block" : "none";
    setRequiredFields(paymentDeliverySection, hasProducts);
  }

  if (paymentServiceList) {
    paymentServiceList.innerHTML = "";

    if (serviceItems.length === 0) {
      paymentServiceList.innerHTML = `
        <p class="empty-cart-message">
          No services selected.
        </p>
      `;
    } else {
      serviceItems.forEach(function (item) {
        const serviceItem = document.createElement("article");
        serviceItem.className = "booking-product-item";

        serviceItem.innerHTML = `
          <div class="booking-item-left">
            <div class="booking-thumb ${item.imageClass || ""}"></div>

            <div>
              <strong>${item.name}</strong>
              <p>${item.category} · ${item.duration}</p>
            </div>
          </div>

          <strong>$${Number(item.priceNumber || 0).toFixed(2)}</strong>
        `;

        paymentServiceList.appendChild(serviceItem);
      });
    }
  }

  if (paymentProductList) {
    paymentProductList.innerHTML = "";

    if (productItems.length === 0) {
      paymentProductList.innerHTML = `
        <p class="empty-cart-message">
          No skincare products selected.
        </p>
      `;
    } else {
      productItems.forEach(function (item) {
        const quantity = Number(item.quantity || 1);
        const lineTotal = Number(item.priceNumber || 0) * quantity;

        const productItem = document.createElement("article");
        productItem.className = "booking-product-item";

        productItem.innerHTML = `
          <div class="booking-item-left">
            <div class="booking-thumb ${item.imageClass || ""}"></div>

            <div>
              <strong>${item.name}</strong>
              <p>${item.category} · Qty ${quantity}</p>
            </div>
          </div>

          <strong>$${lineTotal.toFixed(2)}</strong>
        `;

        paymentProductList.appendChild(productItem);
      });
    }
  }

  const subtotal = cartItems.reduce(function (total, item) {
    const quantity = Number(item.quantity || 1);
    return total + Number(item.priceNumber || 0) * quantity;
  }, 0);

  const deliveryFee = hasProducts ? 14 : 0;
  const gst = subtotal * 0.02;
  const totalPrice = subtotal + deliveryFee + gst;

  if (paymentTotal) {
    paymentTotal.innerHTML = `
      <div class="confirmation-row">
        <span>Subtotal</span>
        <strong>$${subtotal.toFixed(2)}</strong>
      </div>

      ${
        deliveryFee > 0
          ? `
            <div class="confirmation-row">
              <span>Delivery fee</span>
              <strong>$${deliveryFee.toFixed(2)}</strong>
            </div>
          `
          : ""
      }

      <div class="confirmation-row">
        <span>GST fee</span>
        <strong>$${gst.toFixed(2)}</strong>
      </div>

      <div class="confirmation-row total">
        <span>Total</span>
        <strong>$${totalPrice.toFixed(2)}</strong>
      </div>
    `;
  }
}

if (paymentForm) {
  renderPaymentPageSummary();

  paymentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const bookingData = JSON.parse(localStorage.getItem("lushBooking"));
    const cartItems = getCartItems();

    const productItems = cartItems.filter(function (item) {
      return item.type === "product";
    });

    const hasProducts = productItems.length > 0;

    const paymentData = {
      name: bookingData ? bookingData.name : document.querySelector("#payment-name").value,
      email: bookingData ? bookingData.email : document.querySelector("#payment-email").value,
      phone: bookingData ? bookingData.phone : document.querySelector("#payment-phone").value,
      cardholder: document.querySelector("#card-name").value,
      delivery: hasProducts ? document.querySelector("#payment-delivery").value : "",
      address: hasProducts
        ? {
            street: document.querySelector("#payment-address").value,
            suburb: document.querySelector("#payment-suburb").value,
            state: document.querySelector("#payment-state").value,
            postcode: document.querySelector("#payment-postcode").value
          }
        : null
    };

    localStorage.setItem("lushPayment", JSON.stringify(paymentData));

    window.location.href = "confirmation.html";
  });
}

// --------------------------------------------------------------------------------------------------------------
// CONFIRMATION PAGE //

const confirmationCustomer = document.querySelector("#confirmation-customer");
const confirmationServices = document.querySelector("#confirmation-services");
const confirmationProducts = document.querySelector("#confirmation-products");
const confirmationTotal = document.querySelector("#confirmation-total");

function renderConfirmationPage() {
  if (!confirmationCustomer) return;

  const bookingData = JSON.parse(localStorage.getItem("lushBooking"));
  const paymentData = JSON.parse(localStorage.getItem("lushPayment"));
  let cartItems = getCartItems();

  if (cartItems.length > 0) {
    localStorage.setItem("lushConfirmedCart", JSON.stringify(cartItems));
  } else {
    cartItems = JSON.parse(localStorage.getItem("lushConfirmedCart")) || [];
  }
  const serviceItems = cartItems.filter(function (item) {
    return item.type === "service";
  });

  const productItems = cartItems.filter(function (item) {
    return item.type === "product";
  });

  const subtotal = cartItems.reduce(function (total, item) {
    const quantity = Number(item.quantity || 1);
    return total + Number(item.priceNumber || 0) * quantity;
  }, 0);

  const hasServices = serviceItems.length > 0;
  const hasProducts = productItems.length > 0;
  const deliveryFee = hasProducts ? 14 : 0;
  const gst = subtotal * 0.02;
  const totalPrice = subtotal + deliveryFee + gst;

  const customerData = bookingData || paymentData;

  if (!customerData) {
    confirmationCustomer.innerHTML = `
      <p class="empty-cart-message">
        No confirmation details available.
      </p>
    `;
    return;
  }

  confirmationCustomer.innerHTML = `
    <div class="confirmation-item">
      <p><strong>Name:</strong> ${customerData.name}</p>
      <p><strong>Email:</strong> ${customerData.email}</p>
      <p><strong>Phone:</strong> ${customerData.phone}</p>
      ${
        customerData.location
          ? `<p><strong>Store:</strong> ${customerData.location}</p>`
          : ""
      }
      ${
        customerData.delivery
          ? `<p><strong>Delivery:</strong> ${customerData.delivery}</p>`
          : ""
      }
      ${
        paymentData && paymentData.address
          ? `<p><strong>Address:</strong> ${paymentData.address.street}, ${paymentData.address.suburb}, ${paymentData.address.state} ${paymentData.address.postcode}</p>`
          : ""
      }
      ${
        customerData.notes
          ? `<p><strong>Notes:</strong> ${customerData.notes}</p>`
          : ""
      }
    </div>
  `;

  if (confirmationServices) {
    if (bookingData && bookingData.services && bookingData.services.length > 0) {
      confirmationServices.innerHTML = bookingData.services
        .map(function (service) {
          return `
            <article class="confirmation-item">
              <h3>${service.name}</h3>
              <p>${service.category}</p>
              <p><strong>Date:</strong> ${service.date}</p>
              <p><strong>Time:</strong> ${service.time}</p>
              <p><strong>Staff:</strong> ${service.staff}</p>
              <p><strong>Price:</strong> ${service.price}</p>
            </article>
          `;
        })
        .join("");
    } else {
      confirmationServices.innerHTML = `
        <p class="empty-cart-message">
          No services selected.
        </p>
      `;
    }
  }

  if (confirmationProducts) {
    if (productItems.length > 0) {
      confirmationProducts.innerHTML = productItems
        .map(function (product) {
          const quantity = Number(product.quantity || 1);
          const lineTotal = Number(product.priceNumber || 0) * quantity;

          return `
            <article class="confirmation-item">
              <h3>${product.name}</h3>
              <p>${product.category}</p>
              <p><strong>Quantity:</strong> ${quantity}</p>
              <p><strong>Item price:</strong> ${product.price}</p>
              <p><strong>Line total:</strong> $${lineTotal.toFixed(2)}</p>
            </article>
          `;
        })
        .join("");
    } else {
      confirmationProducts.innerHTML = `
        <p class="empty-cart-message">
          No products selected.
        </p>
      `;
    }
  }

  if (confirmationTotal) {
    confirmationTotal.innerHTML = `
      <div class="confirmation-row">
        <span>Subtotal</span>
        <strong>$${subtotal.toFixed(2)}</strong>
      </div>

      ${
        deliveryFee > 0
          ? `
            <div class="confirmation-row">
              <span>Delivery fee</span>
              <strong>$${deliveryFee.toFixed(2)}</strong>
            </div>
          `
          : ""
      }

      <div class="confirmation-row">
        <span>GST fee</span>
        <strong>$${gst.toFixed(2)}</strong>
      </div>

      <div class="confirmation-row total">
        <span>Total</span>
        <strong>$${totalPrice.toFixed(2)}</strong>
      </div>
    `;
  }

  localStorage.removeItem("lushCart");
  updateCartCount();
  updateAddButtonStates();
}

renderConfirmationPage();