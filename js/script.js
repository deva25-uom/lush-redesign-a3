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
      detailPage: "relaxation-massage.html"
    },

    {
      category: "Nails",
      name: "Shellac Nails",
      description: "Choose manicure, pedicure, or both with a longer-lasting shellac finish.",
      priceNumber: 65,
      price: "From $65",
      duration: "45-75 min",
      imageClass: "treatment-shellac-nails",
      detailPage: "shellac-nails.html"
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
      detailPage: "anti-aging-facial.html"
    },
    {
      category: "Facials",
      name: "Microdermabrasion Facial",
      description: "A resurfacing facial designed to refresh dull or uneven skin texture.",
      priceNumber: 120,
      price: "From $120",
      duration: "45 min",
      imageClass: "treatment-microdermabrasion",
      detailPage: "microdermabrasion-facial.html"
    },
    {
      category: "Facials",
      name: "Peel Facial",
      description: "A skin-renewing facial to support brightness and clarity.",
      priceNumber: 110,
      price: "From $110",
      duration: "45 min",
      imageClass: "treatment-peel",
      detailPage: "peel-facial.html"
    },
    {
      category: "Facials",
      name: "Acne Treatment Facial",
      description: "A clarifying facial focused on congestion and blemish-prone skin.",
      priceNumber: 125,
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
      priceNumber: 115,
      price: "From $115",
      duration: "45 min",
      imageClass: "treatment-back-facial",
      detailPage: "bespoke-back-facial.html"
    },
    {
      category: "Body",
      name: "Body Sculpting",
      description: "A contour-focused treatment for body care and maintenance.",
      priceNumber: 160,
      price: "From $160",
      duration: "60 min",
      imageClass: "treatment-body-sculpting",
      detailPage: "body-sculpting.html"
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
      detailPage: "cellulite-treatment.html"
    },
    {
      category: "Body",
      name: "Full Body Exfoliation",
      description: "A polishing body treatment for smoother, softer-feeling skin.",
      priceNumber: 130,
      price: "From $130",
      duration: "60 min",
      imageClass: "treatment-exfoliation",
      detailPage: "full-body-exfoliation.html"
    },
    {
      category: "Body",
      name: "Skin Tightening",
      description: "A body-focused treatment supporting firmer-looking skin.",
      priceNumber: 155,
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
      priceNumber: 129,
      price: "From $129",
      duration: "60 min",
      imageClass: "treatment-relaxation-massage",
      detailPage: "relaxation-massage.html"
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
      detailPage: "aromatherapy-massage.html"
    },
    {
      category: "Massage",
      name: "Myofascial Release",
      description: "A focused treatment for tension, tightness and body restriction.",
      priceNumber: 145,
      price: "From $145",
      duration: "60 min",
      imageClass: "treatment-myofascial",
      detailPage: "myofascial-release.html"
    },
    {
      category: "Massage",
      name: "Pregnancy Massage",
      description: "A supportive massage designed for comfort and relaxation.",
      priceNumber: 135,
      price: "From $135",
      duration: "60 min",
      imageClass: "treatment-pregnancy",
      detailPage: "pregnancy-massage.html"
    },
    {
      category: "Massage",
      name: "Head, Neck & Shoulder Massage",
      description: "A shorter massage focused on common areas of tension.",
      priceNumber: 75,
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
      priceNumber: 45,
      price: "From $45",
      duration: "30-60 min",
      imageClass: "treatment-classic-nails",
      detailPage: "classic-nails.html"
    },
    {
      category: "Nails",
      name: "Shellac Nails",
      description: "Choose manicure, pedicure, or both with a longer-lasting shellac finish.",
      priceNumber: 65,
      price: "From $65",
      duration: "45-75 min",
      imageClass: "treatment-shellac-nails",
      detailPage: "shellac-nails.html"
    },
    {
      category: "Nails",
      name: "Gel Nails",
      description: "A glossy gel finish available for manicure, pedicure, or both.",
      priceNumber: 75,
      price: "From $75",
      duration: "50-80 min",
      imageClass: "treatment-gel-nails",
      detailPage: "gel-nails.html"
    },
    {
      category: "Nails",
      name: "Builder Gel",
      description: "Structured nail support for users wanting strength, shape and a polished finish.",
      priceNumber: 85,
      price: "From $85",
      duration: "60-90 min",
      imageClass: "treatment-builder-gel",
      detailPage: "builder-gel.html"
    },
    {
      category: "Nails",
      name: "Acrylic Nails",
      description: "Acrylic nail services with optional extensions for added length and shape.",
      priceNumber: 95,
      price: "From $95",
      duration: "75-100 min",
      imageClass: "treatment-acrylic-nails",
      detailPage: "acrylic-nails.html"
    },
    {
      category: "Nails",
      name: "Nail Add-ons",
      description: "Add extensions, removal of previous work, or upgrade your nail service.",
      priceNumber: 15,
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
      priceNumber: 120,
      price: "From $120",
      duration: "75 min",
      imageClass: "treatment-full-body-wax",
      detailPage: "full-body-wax.html"
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
      detailPage: "brazilian-wax.html"
    },
    {
      category: "Beauty",
      name: "Full Body Spray Tan",
      description: "A full body tanning service for an even bronzed finish.",
      priceNumber: 55,
      price: "From $55",
      duration: "30 min",
      imageClass: "treatment-spray-tan",
      detailPage: "spray-tan.html"
    },
    {
      category: "Beauty",
      name: "Lash Lift",
      description: "A lash treatment designed to lift and open the eye area.",
      priceNumber: 85,
      price: "From $85",
      duration: "45 min",
      imageClass: "treatment-lash-lift",
      detailPage: "lash-lift.html"
    },
    {
      category: "Beauty",
      name: "Full Arms / Legs",
      description: "Waxing for arms or legs with a clean, smooth finish.",
      priceNumber: 70,
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
      >
        ${alreadyAdded ? "Added" : "Add to cart"}
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
  if (!event.target.classList.contains("add-cart-btn")) return;

  const button = event.target;

  if (!button.dataset.name) return;

  const cartItems = getCartItems();

  const existingItem = cartItems.find(function (item) {
    return item.name === button.dataset.name;
  });

  if (existingItem) {
    if (existingItem.type === "product") {
      existingItem.quantity = Number(existingItem.quantity || 1) + 1;
      saveCartItems(cartItems);
      showCartToast(existingItem.name);
      updateCartCount();

      if (cartItemsContainer) {
        renderCartPage();
      }

      return;
    }

    button.textContent = "Added";
    button.classList.add("is-added");
    return;
  }

  const item = {
    name: button.dataset.name,
    category: button.dataset.category,
    price: button.dataset.price,
    priceNumber: Number(button.dataset.priceNumber),
    duration: button.dataset.duration,
    type: button.dataset.type || "service",
    quantity: 1,
    imageClass: button.dataset.imageClass
  };

  cartItems.push(item);
  saveCartItems(cartItems);

  button.textContent = "Added";
  button.classList.add("is-added");

  updateCartCount();
  showCartToast(item.name);

  if (cartItemsContainer) {
    renderCartPage();
  }
});

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
    const itemType = button.dataset.type || "service";

    if (!itemName) return;

    if (itemType === "product") {
      button.textContent = "Add to cart";
      button.classList.remove("is-added");
      return;
    }

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

  const deliveryFee = hasProducts && !hasServices ? 14 : 0;
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
  cartCount.textContent = cartItems.length;

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
                  ×
                </button>
              </div>
            </div>

            <div class="cart-item-details">
              <p>${item.type === "product" ? "Skincare product" : item.duration}</p>
              <p>${item.price}</p>
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
    `;

    productGrid.appendChild(card);
  });

  updateAddButtonStates();
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


// ---------------------------------------------------------------------------------------------------------------
// PAYMENT PAGE //

const paymentForm = document.querySelector("#payment-form");
const paymentProductList = document.querySelector("#payment-product-list");

function renderPaymentProductList() {
  if (!paymentProductList) return;

  const cartItems = getCartItems();

  const productItems = cartItems.filter(function (item) {
    return item.type === "product";
  });

  paymentProductList.innerHTML = "";

  if (productItems.length === 0) {
    paymentProductList.innerHTML = `
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
      <div>
        <strong>${item.name}</strong>
        <p>${item.category} · Qty ${quantity}</p>
      </div>

      <strong>$${lineTotal.toFixed(2)}</strong>
    `;

    paymentProductList.appendChild(productItem);
  });
}

if (paymentProductList) {
  renderPaymentProductList();
}

if (paymentForm) {
  paymentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const paymentData = {
      name: document.querySelector("#payment-name").value,
      email: document.querySelector("#payment-email").value,
      phone: document.querySelector("#payment-phone").value,
      delivery: document.querySelector("#payment-delivery").value,
      cardholder: document.querySelector("#card-name").value
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
  const deliveryFee = hasProducts && !hasServices ? 14 : 0;
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