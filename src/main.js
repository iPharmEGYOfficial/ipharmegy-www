import "./style.css";

const modules = [
  {
    name: "Portal",
    desc: "Control & visibility",
    href: "https://portal.ipharmegy.com",
    pos: "top",
  },
  {
    name: "Inventory",
    desc: "Stock & expiry",
    href: "https://inventory.ipharmegy.com",
    pos: "top-right",
  },
  {
    name: "POS",
    desc: "Sales & transactions",
    href: "https://pos.ipharmegy.com",
    pos: "bottom-right",
  },
  {
    name: "Cloud",
    desc: "Sync & connectivity",
    href: "https://cloud.ipharmegy.com",
    pos: "bottom",
  },
  {
    name: "Academy",
    desc: "Training & learning",
    href: "https://academy.ipharmegy.com",
    pos: "bottom-left",
  },
  {
    name: "AlNour",
    desc: "Offers & campaigns",
    href: "https://alnour.ipharmegy.com",
    pos: "top-left",
  },
];

document.querySelector("#app").innerHTML = `
  <main class="site-shell">
    
    <header class="site-header">
      <div class="brand">
        <img class="brand-logo" src="/assets/brand/logo.svg" alt="iPharmEGY logo" />
        <div class="brand-text">
          <span class="brand-name">iPharmEGY</span>
          <span class="brand-subtitle">Pharmacy Intelligence Platform</span>
        </div>
      </div>

      <nav class="site-nav">
        <a href="https://www.ipharmegy.com">Home</a>
        <a href="https://portal.ipharmegy.com">Portal</a>
        <a href="https://academy.ipharmegy.com">Academy</a>
      </nav>
    </header>

    <section class="hero">
      <div class="hero-badge">Unified Platform</div>

      <h1>
        Pharmacy Intelligence
        <span class="accent-text">Connected</span>
      </h1>

      <p class="hero-lead">
        Operations, inventory, sales and growth — in one platform.
      </p>

      <div class="hero-actions">
        <a class="btn btn-primary" href="https://portal.ipharmegy.com">Open Portal</a>
        <a class="btn btn-secondary" href="https://portfolio.ipharmegy.com">View Portfolio</a>
      </div>
    </section>

    <section class="hexa-section">
      <div class="section-heading">
        <h2>Platform Modules</h2>
        <p>Core systems powering operations.</p>
      </div>

      <div class="hexa-orbit">

        ${modules.map(item => `
          <a class="hexa-card ${item.pos}" href="${item.href}">
            <div class="hexa-inner">
              <h3>${item.name}</h3>
              <p>${item.desc}</p>
            </div>
          </a>
        `).join("")}

        <div class="center-core">
          <div class="core-glow"></div>
          <div class="core-shell">
            <img class="core-logo" src="/assets/brand/logo.svg" />
            <div class="core-title">iPharmEGY</div>
            <div class="core-subtitle">Core Platform</div>
          </div>
        </div>

      </div>
    </section>

    <footer class="site-footer">
      <div class="footer-left">
        <strong>iPharmEGY</strong>
        <span>Pharmacy Intelligence Platform</span>
      </div>

      <div class="footer-right">
        <span>Founder: Haitham Osama Abdelghaffar</span>
      </div>
    </footer>

  </main>
`;