import "./style.css";

const modules = [
  { name: "Portal", desc: "Customer access and connected services.", href: "https://portal.ipharmegy.com" },
  { name: "Gateway", desc: "Secure connection with pharmacy systems.", href: "https://portal.ipharmegy.com" },
  { name: "Operations", desc: "Sales, inventory and daily activity.", href: "https://portal.ipharmegy.com" },
  { name: "Intelligence", desc: "Data insights for smarter growth.", href: "https://portal.ipharmegy.com" },
];

document.querySelector("#app").innerHTML = `
  <main class="site-shell">
    <header class="site-header">
      <a class="brand" href="https://www.ipharmegy.com">
        <img class="brand-logo" src="/assets/brand/logo.png" alt="iPharmEGY" />
        <div>
          <strong>iPharmEGY</strong>
          <span>Pharmacy Intelligence Platform</span>
        </div>
      </a>

      <nav class="site-nav">
        <a href="https://www.ipharmegy.com">Home</a>
        <a href="https://portal.ipharmegy.com">Portal</a>
        <a href="#platform">Platform</a>
      </nav>
    </header>

    <section class="hero">
      <img class="hero-logo" src="/assets/brand/logo.png" alt="iPharmEGY" />

      <p class="eyebrow">Unified Pharmacy Platform</p>

      <h1>
        iPharmEGY
        <span>Pharmacy Intelligence Platform</span>
      </h1>

      <p class="hero-lead">
        One professional platform connecting pharmacy operations, customers and digital services.
      </p>

      <div class="hero-actions">
        <a class="btn primary" href="https://portal.ipharmegy.com">Open Portal</a>
        <a class="btn secondary" href="#platform">Explore Platform</a>
      </div>
    </section>

    <section id="platform" class="platform">
      ${modules.map((item) => `
        <a class="module-card" href="${item.href}">
          <h2>${item.name}</h2>
          <p>${item.desc}</p>
        </a>
      `).join("")}
    </section>

    <footer class="site-footer">
      <strong>iPharmEGY</strong>
      <span>Pharmacy Intelligence Platform</span>
    </footer>
  </main>
`;
