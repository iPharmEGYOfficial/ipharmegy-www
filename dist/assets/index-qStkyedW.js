(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();document.querySelector("#app").innerHTML=`
  <main class="page">
    <section class="hero">
      <div class="badge"> iPharmEGY</div>
      <h1>Pharmacy Intelligence Platform</h1>
      <p class="lead">
        A distributed pharmacy ecosystem connecting operations, inventory,
        cloud workflows, and intelligent control.
      </p>

      <div class="actions">
        <a class="btn primary" href="https://portal.ipharmegy.com">Open Portal</a>
        <a class="btn secondary" href="https://portfolio.ipharmegy.com">View Portfolio</a>
      </div>
    </section>

    <section class="grid">
      <a class="card" href="https://portal.ipharmegy.com">
        <h2> Portal</h2>
        <p>Control center, dashboard, routing and monitoring.</p>
      </a>

      <a class="card" href="https://inventory.ipharmegy.com">
        <h2> Inventory</h2>
        <p>Stock control, expiry tracking and warehouse logic.</p>
      </a>

      <a class="card" href="https://pos.ipharmegy.com">
        <h2> POS</h2>
        <p>Sales engine and pharmacy transaction workflows.</p>
      </a>

      <a class="card" href="https://cloud.ipharmegy.com">
        <h2> Cloud</h2>
        <p>Cloud synchronization, integrations and branch connectivity.</p>
      </a>

      <a class="card" href="https://academy.ipharmegy.com">
        <h2> Academy</h2>
        <p>Learning, training and pharmaceutical knowledge delivery.</p>
      </a>

      <a class="card" href="https://alnour.ipharmegy.com">
        <h2> AlNour</h2>
        <p>Knowledge, intelligence and specialized pharmacy assistance.</p>
      </a>
    </section>

    <footer class="footer">
      Founder: Haitham Osama Abdelghaffar
    </footer>
  </main>
`;
