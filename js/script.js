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
      detailPage: "hydrafacial.html",
      isClickable: true
    },
    {
      category: "Facials",
      name: "Dermalblading",
      description: "Smooths texture and removes fine facial hair for a brighter finish.",
      price: "From $130",
      duration: "45 min",
      imageClass: "treatment-dermablading",
      detailPage: "dermablading.html",
      isClickable: true
    },
    {
      category: "Body",
      name: "Lymphatic Drainage",
      description: "A calming body treatment supporting lightness and relaxation.",
      price: "From $120",
      duration: "60 min",
      imageClass: "treatment-body",
      detailPage: "body-treatment.html",
      isClickable: true
    },
    {
      category: "Massage",
      name: "Hot Stone Massage",
      description: "Warm stone therapy designed to ease tension and support deep relaxation.",
      price: "From $139",
      duration: "75 min",
      imageClass: "treatment-massage",
      detailPage: "relaxation-massage.html",
      isClickable: true
    },
    {
      category: "Nails",
      name: "Spa Pedicure",
      description: "Foot soak, scrub, cuticle work, massage and polish.",
      price: "From $59",
      duration: "45 min",
      imageClass: "treatment-pedicure",
      detailPage: "spa-pedicure.html",
      isClickable: true
    },
    {
      category: "Beauty",
      name: "Eyebrow Wax + Shape",
      description: "A quick brow shaping service for a clean, polished finish.",
      price: "From $45",
      duration: "30 min",
      imageClass: "treatment-brow",
      detailPage: "brow-sculpt.html",
      isClickable: true
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
      detailPage: "hydrafacial.html",
      isClickable: true
    },
    {
      category: "Facials",
      name: "Dermalblading",
      description: "Smooths texture and removes fine facial hair for a brighter finish.",
      price: "From $130",
      duration: "45 min",
      imageClass: "treatment-dermablading",
      detailPage: "dermablading.html",
      isClickable: true
    },
    {
      category: "Facials",
      name: "Anti Aging Facial",
      description: "A targeted facial to support smoother, firmer-looking skin.",
      price: "From $135",
      duration: "60 min",
      imageClass: "treatment-hydrafacial",
      detailPage: "#",
      isClickable: false
    },
    {
      category: "Facials",
      name: "Microdermabrasion Facial",
      description: "A resurfacing facial designed to refresh dull or uneven skin texture.",
      price: "From $120",
      duration: "45 min",
      imageClass: "treatment-dermablading",
      detailPage: "#",
      isClickable: false
    },
    {
      category: "Facials",
      name: "Peel Facial",
      description: "A skin-renewing facial to support brightness and clarity.",
      price: "From $110",
      duration: "45 min",
      imageClass: "treatment-hydrafacial",
      detailPage: "#",
      isClickable: false
    },
    {
      category: "Facials",
      name: "Acne Treatment Facial",
      description: "A clarifying facial focused on congestion and blemish-prone skin.",
      price: "From $125",
      duration: "60 min",
      imageClass: "treatment-dermablading",
      detailPage: "#",
      isClickable: false
    }
  ],

  body: [
    {
      category: "Body",
      name: "Bespoke Back Facial",
      description: "A targeted back treatment for congestion, texture and skin maintenance.",
      price: "From $115",
      duration: "45 min",
      imageClass: "treatment-body",
      detailPage: "#",
      isClickable: false
    },
    {
      category: "Body",
      name: "Body Sculpting",
      description: "A contour-focused treatment for body care and maintenance.",
      price: "From $160",
      duration: "60 min",
      imageClass: "treatment-body",
      detailPage: "#",
      isClickable: false
    },
    {
      category: "Body",
      name: "Lymphatic Drainage",
      description: "A calming body treatment supporting lightness and relaxation.",
      price: "From $120",
      duration: "60 min",
      imageClass: "treatment-body",
      detailPage: "body-treatment.html",
      isClickable: true
    },
    {
      category: "Body",
      name: "Cellulite Treatment",
      description: "A targeted body treatment focused on skin texture and appearance.",
      price: "From $145",
      duration: "60 min",
      imageClass: "treatment-body",
      detailPage: "#",
      isClickable: false
    },
    {
      category: "Body",
      name: "Full Body Exfoliation",
      description: "A polishing body treatment for smoother, softer-feeling skin.",
      price: "From $130",
      duration: "60 min",
      imageClass: "treatment-body",
      detailPage: "#",
      isClickable: false
    },
    {
      category: "Body",
      name: "Skin Tightening",
      description: "A body-focused treatment supporting firmer-looking skin.",
      price: "From $155",
      duration: "60 min",
      imageClass: "treatment-body",
      detailPage: "#",
      isClickable: false
    }
  ],

  massage: [
    {
      category: "Massage",
      name: "Relaxation Massage",
      description: "A restorative massage for stress relief and whole-body reset.",
      price: "From $129",
      duration: "60 min",
      imageClass: "treatment-massage",
      detailPage: "relaxation-massage.html",
      isClickable: true
    },
    {
      category: "Massage",
      name: "Hot Stone Massage",
      description: "Warm stone therapy designed to ease tension and support deep relaxation.",
      price: "From $139",
      duration: "75 min",
      imageClass: "treatment-massage",
      detailPage: "relaxation-massage.html",
      isClickable: true
    },
    {
      category: "Massage",
      name: "Aromatherapy Massage",
      description: "A relaxing massage experience supported by aromatic oils.",
      price: "From $135",
      duration: "60 min",
      imageClass: "treatment-massage",
      detailPage: "#",
      isClickable: false
    },
    {
      category: "Massage",
      name: "Myofascial Release",
      description: "A focused treatment for tension, tightness and body restriction.",
      price: "From $145",
      duration: "60 min",
      imageClass: "treatment-massage",
      detailPage: "#",
      isClickable: false
    },
    {
      category: "Massage",
      name: "Pregnancy Massage",
      description: "A supportive massage designed for comfort and relaxation.",
      price: "From $135",
      duration: "60 min",
      imageClass: "treatment-massage",
      detailPage: "#",
      isClickable: false
    },
    {
      category: "Massage",
      name: "Head, Neck & Shoulder Massage",
      description: "A shorter massage focused on common areas of tension.",
      price: "From $75",
      duration: "30 min",
      imageClass: "treatment-massage",
      detailPage: "#",
      isClickable: false
    }
  ],

  nails: [
    {
      category: "Nails",
      name: "Classic Pedicure",
      description: "Cut, file, buff and polish for simple foot care maintenance.",
      price: "From $49",
      duration: "35 min",
      imageClass: "treatment-pedicure",
      detailPage: "#",
      isClickable: false
    },
    {
      category: "Nails",
      name: "Classic Manicure",
      description: "Cut, file, buff and polish for clean everyday nails.",
      price: "From $45",
      duration: "30 min",
      imageClass: "treatment-pedicure",
      detailPage: "#",
      isClickable: false
    },
    {
      category: "Nails",
      name: "Pedicure with Shellac",
      description: "Pedicure service finished with long-lasting shellac polish.",
      price: "From $69",
      duration: "50 min",
      imageClass: "treatment-pedicure",
      detailPage: "#",
      isClickable: false
    },
    {
      category: "Nails",
      name: "Manicure with Shellac",
      description: "Manicure service finished with long-lasting shellac polish.",
      price: "From $65",
      duration: "45 min",
      imageClass: "treatment-pedicure",
      detailPage: "#",
      isClickable: false
    },
    {
      category: "Nails",
      name: "Pedicure with Gel",
      description: "A polished pedicure finished with gel for a glossy result.",
      price: "From $75",
      duration: "55 min",
      imageClass: "treatment-pedicure",
      detailPage: "#",
      isClickable: false
    },
    {
      category: "Nails",
      name: "Spa Pedicure",
      description: "Foot soak, scrub, cuticle work, massage and polish.",
      price: "From $59",
      duration: "45 min",
      imageClass: "treatment-pedicure",
      detailPage: "spa-pedicure.html",
      isClickable: true
    }
  ],

  beauty: [
    {
      category: "Beauty",
      name: "Full Body Wax",
      description: "A full body waxing service for smooth skin maintenance.",
      price: "From $120",
      duration: "75 min",
      imageClass: "treatment-brow",
      detailPage: "#",
      isClickable: false
    },
    {
      category: "Beauty",
      name: "Full Arms / Legs",
      description: "Waxing for arms or legs with a clean, smooth finish.",
      price: "From $70",
      duration: "45 min",
      imageClass: "treatment-brow",
      detailPage: "#",
      isClickable: false
    },
    {
      category: "Beauty",
      name: "Brazilian Wax",
      description: "A focused waxing service delivered as a quick beauty treatment.",
      price: "From $65",
      duration: "35 min",
      imageClass: "treatment-brow",
      detailPage: "#",
      isClickable: false
    },
    {
      category: "Beauty",
      name: "Full Body Spray Tan",
      description: "A full body tanning service for an even bronzed finish.",
      price: "From $55",
      duration: "30 min",
      imageClass: "treatment-brow",
      detailPage: "#",
      isClickable: false
    },
    {
      category: "Beauty",
      name: "Eyebrow Wax + Shape",
      description: "A quick brow shaping service for a clean, polished finish.",
      price: "From $45",
      duration: "30 min",
      imageClass: "treatment-brow",
      detailPage: "brow-sculpt.html",
      isClickable: true
    },
    {
      category: "Beauty",
      name: "Lash Lift",
      description: "A lash treatment designed to lift and open the eye area.",
      price: "From $85",
      duration: "45 min",
      imageClass: "treatment-brow",
      detailPage: "#",
      isClickable: false
    }
  ]
};

const serviceGrid = document.querySelector("#service-grid");
const filterChips = document.querySelectorAll(".filter-chip");

function renderServices(category) {
  if (!serviceGrid) return;

  serviceGrid.innerHTML = "";

  services[category].forEach(function (service) {
    const card = document.createElement("article");
    card.className = "treatment-card";

    const detailLink = service.isClickable
      ? `<a href="${service.detailPage}" class="text-link">View details</a>`
      : `<span class="text-link muted-link">Preview only</span>`;

    const addButton = service.isClickable
      ? `<button class="add-cart-btn" type="button">Add to cart</button>`
      : `<button class="add-cart-btn disabled-btn" type="button" disabled>Coming soon</button>`;

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