import "./style.css";

document.querySelector("#app").innerHTML = `
  <main class="site-shell">
    <header class="site-header">
      <div class="brand">
        <img class="brand-logo" src="/logo.png" alt="iPharmEGY logo" />
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
      <div class="hero-badge">Digital Pharmacy Ecosystem</div>

      <h1>
        Modern pharmacy infrastructure,
        <span class="accent-text">elegantly connected</span>
      </h1>

      <p class="hero-lead">
        iPharmEGY unifies pharmacy operations, inventory intelligence, point of
        sale workflows, cloud connectivity, training, and promotional delivery
        into one refined ecosystem.
      </p>

      <div class="hero-actions">
        <a class="btn btn-primary" href="https://portal.ipharmegy.com">Open Portal</a>
        <a class="btn btn-secondary" href="https://portfolio.ipharmegy.com">View Portfolio</a>
      </div>
    </section>

    <section class="modules-section">
      <div class="section-heading">
        <h2>Platform Modules</h2>
        <p>Designed as a connected architecture, not isolated applications.</p>
      </div>

      <div class="modules-grid">
        <a class="module-card" href="https://portal.ipharmegy.com">
          <h3>Portal</h3>
          <p>Control center, routing, monitoring and executive visibility.</p>
        </a>

        <a class="module-card" href="https://inventory.ipharmegy.com">
          <h3>Inventory</h3>
          <p>Stock control, expiry tracking, warehouse logic and item flow.</p>
        </a>

        <a class="module-card" href="https://pos.ipharmegy.com">
          <h3>POS</h3>
          <p>Sales engine, transactions, pharmacy workflows and execution.</p>
        </a>

        <a class="module-card" href="https://cloud.ipharmegy.com">
          <h3>Cloud</h3>
          <p>Branch connectivity, synchronization, integration and continuity.</p>
        </a>

        <a class="module-card" href="https://academy.ipharmegy.com">
          <h3>Academy</h3>
          <p>Training, pharmaceutical learning and structured knowledge delivery.</p>
        </a>

        <a class="module-card" href="https://alnour.ipharmegy.com">
          <h3>AlNour</h3>
          <p>Offers, promotions, highlighted products and pharmacy campaigns.</p>
        </a>
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