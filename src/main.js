import "./style.css";

const modules = [
  { name: "Portal", desc: "Customer access, invoices and connected services.", href: "https://portal.ipharmegy.com" },
  { name: "Gateway", desc: "Secure connection with live pharmacy systems.", href: "https://portal.ipharmegy.com" },
  { name: "Operations", desc: "Sales, inventory and daily pharmacy activity.", href: "https://portal.ipharmegy.com" },
  { name: "Intelligence", desc: "Insights for better decisions and growth.", href: "https://portal.ipharmegy.com" },
];

document.querySelector("#app").innerHTML = `
  <main class="site-shell">
    <header class="site-header">
      <a class="brand" href="/">
        <img src="/assets/brand/logo.png" alt="iPharmEGY" />
        <div>
          <strong>iPharmEGY</strong>
          <span>Pharmacy Intelligence Platform</span>
        </div>
      </a>

      <nav class="site-nav">
        <a href="/">Home</a>
        <a class="portal-link" href="https://portal.ipharmegy.com">Portal</a>
        <a href="#platform">Platform</a>
      </nav>
    </header>

    <section class="hero">
      <p class="eyebrow">Unified Pharmacy Platform</p>
      <h1>iPharmEGY</h1>
      <h2>Pharmacy Intelligence Platform</h2>
      <p class="hero-lead">
        Connected pharmacy operations, customers and intelligence — in one platform.
      </p>

      <div class="hero-actions">
        <a class="btn primary" href="https://portal.ipharmegy.com">Open Portal</a>
        <a class="btn secondary" href="#platform">Explore Platform</a>
      </div>
    </section>

    <section id="platform" class="platform">
      ${modules.map((item) => `
        <a class="module-card" href="${item.href}">
          <h3>${item.name}</h3>
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
