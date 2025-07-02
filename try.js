// === DOM Element Checks ===
const portfolioGrid = document.getElementById("portfolioGrid");
const projectGrid = document.getElementById("project-grid");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const navMenu = document.getElementById("navMenu");
const projectsToggle = document.getElementById("projectsToggle");
const dropdown = document.getElementById("dropdown");
const toggleBtn = document.getElementById('theme-toggle');
const pricingModal = document.getElementById('pricingModal');
const modalText = document.getElementById('modalText');

// === Pricing Modal ===
const pricingData = {
  logo: `
    <h3>Logo Design Pricing</h3>
    <ul style="text-align:left">
      <li><strong>$50</strong> – 2 design concepts, 2-day delivery, no revisions</li>
      <li><strong>$100</strong> – 4 designs, 4-day delivery, 1 revision</li>
      <li><strong>$200</strong> – 5 designs, 4-day delivery, 3 revisions</li>
      <li><strong>$300</strong> – 7 designs, 5-day delivery, unlimited revisions</li>
    </ul>`,
  brochure: `
    <h3>Brochure Design Pricing</h3>
    <ul style="text-align:left">
      <li><strong>$50</strong> – Single page, 3-day delivery</li>
      <li><strong>$100</strong> – Bi-fold, 2-day delivery</li>
      <li><strong>$200</strong> – Tri-fold, 2-day delivery, includes print files</li>
      <li><strong>$300</strong> – Multi-page, priority delivery</li>
    </ul>`,
  landing: `
    <h3>Landing Page Design Pricing</h3>
    <ul style="text-align:left">
      <li><strong>$100</strong> – Basic layout, 3-day delivery</li>
      <li><strong>$200</strong> – Interactive layout, 3-day delivery</li>
      <li><strong>$300</strong> – Full branded experience, 5-day delivery</li>
    </ul>`,
  uiux: `
    <h3>UI/UX Design Pricing</h3>
    <ul style="text-align:left">
      <li><strong>$100</strong> – 3 wireframes, no revisions</li>
      <li><strong>$200</strong> – 5 wireframes, 2 revisions</li>
      <li><strong>$300</strong> – Complete UI Kit, unlimited revisions</li>
    </ul>`
};

function openModal(service) {
  if (modalText && pricingModal) {
    modalText.innerHTML = pricingData[service];
    pricingModal.style.display = 'block';
  }
}

function closeModal() {
  if (pricingModal) pricingModal.style.display = 'none';
}

window.addEventListener("click", function (event) {
  if (pricingModal && event.target === pricingModal) {
    closeModal();
  }
});

// === Menu Toggle ===
function toggleMenu() {
  if (navMenu) navMenu.classList.toggle("active");
}

if (projectsToggle && dropdown) {
  projectsToggle.addEventListener("click", function (e) {
    e.preventDefault();
    dropdown.classList.toggle("open");
  });

  document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target) && !projectsToggle.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });
}

// === Dark Mode ===
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  });
}

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

// === Web Projects Grid (lightbox preview) ===
const webProjects = [
  { title: "Broadhead capital Logo", bigImage: "toWEBP/bc1.webp" },
      { title: "The Boardroom Africa", bigImage: "toWEBP/BF1.webp" },
      { title: "Body fit gym logo", bigImage: "toWEBP/bfg1.webp" },
      { title: "CloakBit logo", bigImage: "toWEBP/cb1.webp" },
      { title: "CityEye logo", bigImage: "toWEBP/CE.webp" },
      { title: "CityEye logo 2", bigImage: "toWEBP/ce2.webp" },
      { title: "City Grill logo", bigImage: "toWEBP/CG1.webp" },
      { title: "CGLUXE logo", bigImage: "toWEBP/CGLUXEDESIGN1.webp" },
      { title: "Costello fitout logo", bigImage: "toWEBP/costello1.webp" },
      { title: "Terra Trade logo", bigImage: "toWEBP/2gbglass.webp" },
      { title: "Ace place logo", bigImage: "toWEBP/acegd.webp" },
      { title: "Aurora consumer finance logo", bigImage: "toWEBP/ACF2.webp" },
      { title: "American Health logo", bigImage: "toWEBP/AHF1.webp" },
      { title: "A&L Gutter logo", bigImage: "toWEBP/AL1.webp" },
      { title: "Advent Mission logo", bigImage: "toWEBP/am1.webp" },
      { title: "April Mc Logo", bigImage: "toWEBP/AMC1.webp" },
      { title: "x", bigImage: "toWEBP/hb.webp" },
      { title: "Capstan logo", bigImage: "toWEBP/CP1.webp" },
      { title: "Camelot logo", bigImage: "toWEBP/cs.webp" },
      { title: "Cart-Thena logo", bigImage: "toWEBP/CT1.webp" },
      { title: "Diamond Equipment logo", bigImage: "toWEBP/D1.webp" },
      { title: "Dream Homes logo", bigImage: "toWEBP/dh1.webp" },
      { title: "ELWA logo", bigImage: "toWEBP/Elwa1.webp" },
      { title: "Fragrances.io logo", bigImage: "toWEBP/FI1.webp" },
      { title: "Frank & CO logo", bigImage: "toWEBP/FS1.webp" },
      { title: "The Voodoo Rabbit logo", bigImage: "toWEBP/glassvrw.webp" },
      { title: "Centurions logo", bigImage: "toWEBP/goldcent.webp" },
      { title: "Gadgex logo", bigImage: "toWEBP/gx1.webp" },
      { title: "Rustic Jack Logo", bigImage: "toWEBP/hvaclog1.webp" },
      { title: "Iron Hand Capital Logo", bigImage: "toWEBP/IH1.webp" },
      { title: "Intelligent Living Logo", bigImage: "toWEBP/intelligent living.webp" },
      { title: "Jm Equipment Logo", bigImage: "toWEBP/JM!.webp" },
      { title: "KC Electrical Logo", bigImage: "toWEBP/Kc1.webp" },
      { title: "Legacy Dance logo  ", bigImage: "toWEBP/ldc1.webp" },
       { title: "Leonard O'Neil Logo", bigImage: "toWEBP/leonardO.webp" },
      { title: "Lpm Logo", bigImage: "toWEBP/LPM1.webp" },
      { title: "Luminacri Jewerly Logo", bigImage: "toWEBP/luminacri.webp" },
      { title: "Mainspring Logo", bigImage: "toWEBP/mainspring.webp" },
      { title: "McGrath Landworks Logo", bigImage: "toWEBP/mcg.webp" },
      { title: "MFS Logo", bigImage: "toWEBP/mfs1.webp" },
      { title: "Mako Metal works Logo", bigImage: "toWEBP/mmw1.webp" },
      { title: "Parramatta conveyancing Logo", bigImage: "toWEBP/PC2.webp" },
      { title: "Parramatta conveyancing Logo", bigImage: "toWEBP/pmc1.webp" },
      { title: "Pinnacle Pool Logo", bigImage: "toWEBP/PPB1.webp" },
      { title: "Ralle Time Logo", bigImage: "toWEBP/ralletime.webp" },
      { title: "RiverGrille Logo", bigImage: "toWEBP/Rg1red.webp" },
      { title: "RiverGrille Logo", bigImage: "toWEBP/rg2gold.webp" },
      { title: "Sun Elavaite Logo", bigImage: "toWEBP/sun elavaite1.webp" },
      { title: "The Voodoo Rabbit Logo", bigImage: "toWEBP/vr complete.webp" },
      { title: "Venous Ventures Logo", bigImage: "toWEBP/VV1.webp" },
      { title: "Walsh Capital Logo", bigImage: "toWEBP/WC1.webp" },
      { title: "Walsh Capital Logo", bigImage: "toWEBP/WC2.webp" },
      { title: "Walsh Capital Logo", bigImage: "toWEBP/WC3.webp" },
      { title: "Walsh Capital Logo", bigImage: "toWEBP/WC4.webp" },
       { title: "Wake Force Logo", bigImage: "toWEBP/wf1.webp" },
      { title: "Wake Force Logo", bigImage: "toWEBP/wf2.webp" },
      { title: "Wake Force Logo", bigImage: "toWEBP/WF3.webp" },
      { title: "Wake Force Logo", bigImage: "toWEBP/wf16.webp" },
      { title: "Wake Force Logo", bigImage: "toWEBP/wf36.webp" },
      { title: "Wake Force Logo", bigImage: "toWEBP/wf46.webp" },
      { title: "Yaakov Zimmerman Logo", bigImage: "toWEBP/yzmckpap.webp" }
];

if (projectGrid && lightbox && lightboxImg) {
  webProjects.forEach(project => {
    const item = document.createElement('div');
    item.className = 'grid-item';

    item.innerHTML = `
      <img src="${project.bigImage}" alt="${project.title}">
      <div class="content">
        <h3>${project.title}</h3>
      </div>
    `;

    item.addEventListener('click', () => {
      lightboxImg.src = project.bigImage;
      lightbox.style.display = 'flex';
    });

    projectGrid.appendChild(item);
  });

  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
  });
}

// === Logo Projects Grid ===
const logoProjects = [
  { title: "April McClalen", images: ["assets/aprilmcclalen.webp"], link: "Projects.html" },
  { title: "Devalle Construction", images: ["assets/boardArtboard 1CONS1.webp"], link: "Projects.html" },
  { title: "Lassen Construction", images: ["assets/lassenlogo1Artboard 1.webp"], link: "Projects.html" },
  { title: "JM Equipment repair", images: ["assets/JM Equipment repairlogArtboard 1.webp"], link: "Projects.html" },
  {
        title: "April McClalen",
        images: ["assets/aprilmcclalen.webp"],
        link: "Projects.html"
      },
      {
        title: "Devalle Construction",
        images: ["assets/boardArtboard 1CONS1.webp"],
        link: "Projects.html"
      },
      {
        title: "Lassen Construction",
        images: ["assets/lassenlogo1Artboard 1.webp"],
        link: "Projects.html"
      },
      {
        title: "JM Equipment repair",
        images: ["assets/JM Equipment repairlogArtboard 1.webp"],
        link: "Projects.html"
      },
      {
        title: "Parramatta Consultancy",
        images: ["assets/PARRAMATTA2Artboard 1@2x.webp"],
        link: "Projects.html"
      },
      {
        title: "MFS",
        images: ["assets/MFSlogo1Artboard 1.webp"],
        link: "Projects.html"
      },
      {
        title: "River Grille",
        images: ["assets/RG01Artboard 1.webp"],
        link: "Projects.html"
      },
      {
        title: "Walsh Capital",
        images: ["assets/Walsh2Artboard 1@3x.webp"],
        link: "Projects.html"
      },
      {
        title: "City Grill",
        images: ["assets/CITYGRILLArtboard 1.svg"],
        link: "Projects.html"
      },
      {
        title: "Capstan Software solutions",
        images: ["assets/CAPSTANArtboard 1.webp"],
        link: "Projects.html"
      },
      {
        title: "The Boardroom Africa",
        images: ["assets/boardArtboard 1board2.webp"],
        link: "Projects.html"
      },
      {
        title: "Edmonton Church",
        images: ["assets/boardArtboard 11.webp"],
        link: "Projects.html"
      },
      {
        title: "Iron Hand",
        images: ["assets/ironhandArtboard 1@2x.webp"],
        link: "Projects.html"
      },
      {
        title: "Advent Mission",
        images: ["assets/adventArtboard 1@2x.webp"],
        link: "Projects.html"
      },
      {
        title: "River Grille 2",
        images: ["assets/RIVERGRILLE1Artboard 1@2x.webp"],
        link: "Projects.html"
      },
      {
        title: "River Grille 3",
        images: ["assets/RIVERGRILLE2Artboard 1.webp"],
        link: "Projects.html"
      },
      {
        title: "Parramatta Consultancy 2",
        images: ["assets/PARRAMATTA3Artboard 1-100.jpg"],
        link: "Projects.html"
      },
      {
        title: "Venous Ventures",
        images: ["assets/venousvArtboard 1.webp"],
        link: "Projects.html"
      },
      {
        title: "CAR-Thena",
        images: ["assets/CAR-TArtboard 1.svg"],
        link: "Projects.html"
      },
       {
        title: "Body-Fit Gym",
        images: ["assets/GymL1Artboard 1.svg"],
        link: "Projects.html"
      },
      {
        title: "Camelot studios",
        images: ["assets/camelotpnArtboard 1.webp"],
        link: "Projects.html"
      },
  // ...add the rest
];

if (portfolioGrid) {
  logoProjects.forEach(project => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => window.location.href = project.link;

    project.images.forEach(imgSrc => {
      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = project.title;
      card.appendChild(img);
    });

    const title = document.createElement("div");
    title.className = "card-title";
    title.textContent = project.title;
    card.appendChild(title);

    portfolioGrid.appendChild(card);
  });
}

// webdesign js
const projects = [
  {
    image: 'assets/Group 18.webp',
    description: 'Noir Label — E-commerce clothing store',
    category: 'E-commerce'
  },
  {
    image: 'assets/DESIGN 2.webp',
    description: 'Modern sneaker store homepage with bold CTAs, product grid, and featured pick.',
    category: 'store'
  },
  // Add more projects here...
];

const webportfolioGrid = document.getElementById('webportfolioGrid');

const searchInput = document.getElementById('searchInput');


function renderProjects(filter = "") {
  webportfolioGrid.innerHTML = "";

  projects
    .filter(p => p.category.toLowerCase().includes(filter.toLowerCase()))
    .forEach(project => {
      const item = document.createElement('div');
      item.className = 'portfolio-item';
      item.innerHTML = `
        <img src="${project.image}" alt="Design preview" />
        <div class="portfolio-desc">${project.description}</div>
      `;
      
      item.addEventListener('click', () => {
        lightboxImg.src = project.image;
        lightbox.style.display = 'flex';
      });

      webportfolioGrid.appendChild(item);
    });

    lightbox.addEventListener('click', () => {
      lightbox.style.display = 'none';
      lightboxImg.src = '';
    });
    
}

// Initial render
renderProjects();

// Search event
searchInput.addEventListener("input", (e) => {
  renderProjects(e.target.value);
});
