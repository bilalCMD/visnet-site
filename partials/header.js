/* =====================================================
   VIS Networks — HEADER partial (separate file)
   Exposes the header markup; injected by js/main.js into
   any element with data-include="header".
   Implemented as JS so the site also works when opened
   directly from disk (file://) without a web server.
   ===================================================== */
window.VIS_HEADER = /* html */ `
<header class="site-header" id="siteHeader">
  <div class="topbar">
    <div class="topbar-inner">
      <span class="tb-left">
        <a class="braiin-mark" href="https://braiin.com/" target="_blank" rel="noopener" aria-label="Braiin Limited"><img src="images/braiin-logo.webp" alt="Braiin"></a>
        <span class="tb-sub">A subsidiary of <strong>Braiin Limited</strong></span>
        <a class="tb-nasdaq" href="https://braiin.com/" target="_blank" rel="noopener">Nasdaq: BRAI</a>
      </span>
      <span class="tb-right">
        <a href="contact">Contact Us</a>
        <span class="tb-loc"><svg class="tb-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>India · Australia · UAE · Saudi Arabia</span>
      </span>
    </div>
  </div>
  <nav class="nav">
    <a href="/" class="nav-logo" aria-label="VIS Networks home">
      <img src="images/logo.png" alt="VIS Networks">
    </a>

    <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>

    <ul class="nav-menu" id="navMenu">
      <li class="nav-dropdown">
        <a class="nav-link" data-nav="radius" href="radius">CX Agentic AI <span class="caret">&#9662;</span></a>
        <div class="dropdown-menu">
          <a href="radius">Radius Platform <small>Proprietary Agentic AI engine</small></a>
          <div class="dd-group">
            <span class="dd-label">Our Core AI Agents</span>
            <a href="ai-engage">AI Engage <small>Autonomous query resolution</small></a>
            <a href="ai-assist">AI Assist <small>Real-time agent guidance</small></a>
            <a href="ai-insight">AI Insights <small>Behavioral CX intelligence</small></a>
          </div>
        </div>
      </li>
      <li><a class="nav-link" data-nav="proprietary" href="flamingo">Patented AI Technology</a></li>
      <li class="nav-dropdown">
        <a class="nav-link" data-nav="products" href="products">Products <span class="caret">&#9662;</span></a>
        <div class="dropdown-menu">
          <a href="products#digon">DiGON <small>CRM integration</small></a>
          <a href="products#cube">Cube <small>Emergency response system</small></a>
        </div>
      </li>
      <li class="nav-dropdown">
        <a class="nav-link" data-nav="services" href="services">Other Services <span class="caret">&#9662;</span></a>
        <div class="dropdown-menu">
          <a href="service-collaboration">Collaboration &amp; CX <small>Unified comms &amp; contact centre</small></a>
          <a href="service-network">Network &amp; Security <small>Connectivity, hardened</small></a>
          <a href="service-av">Audio &amp; Video <small>AV integrations</small></a>
          <a href="service-automation">Automation <small>RPA &amp; workflows</small></a>
          <a href="service-managed">Managed Services <small>Run &amp; optimise</small></a>
          <a href="/#services">Professional Services <small>Consulting, implementation &amp; training</small></a>
        </div>
      </li>
      <li class="nav-dropdown">
        <a class="nav-link" data-nav="about" href="about">Company <span class="caret">&#9662;</span></a>
        <div class="dropdown-menu">
          <a href="about">About Us <small>Our story &amp; team</small></a>
          <a href="global-presence">Global Presence <small>Where we operate</small></a>
          <a href="insights">Insights <small>Case studies &amp; awards</small></a>
          <a href="contact">Contact <small>Get in touch</small></a>
        </div>
      </li>
      <li class="nav-cta-mobile"><a class="btn btn-primary" href="contact">Book a Demo</a></li>
      <li class="nav-extra">
        <div class="nx-contact">
          <a href="tel:+918045453355"><span>&#9742;</span> +91 80 4545 3355</a>
          <a href="mailto:salesenquiry@visnet.in"><span>&#9993;</span> salesenquiry@visnet.in</a>
        </div>
        <div class="nx-social">
          <a href="https://www.linkedin.com/company/vis-networks" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg></a>
          <a href="https://www.facebook.com/people/VIS-Networks/100057724807364/" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.08 24 18.09 24 12.07z"/></svg></a>
          <a href="https://twitter.com/VISNETWORKS" target="_blank" rel="noopener" aria-label="X (Twitter)"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.82-5.96 6.82H1.69l7.73-8.84L1.25 2.25h6.82l4.71 6.23 5.46-6.23zm-1.16 17.52h1.83L7.01 4.13H5.05l12.03 15.64z"/></svg></a>
        </div>
        <p class="nx-note">A subsidiary of <strong>Braiin Limited</strong> &middot; Nasdaq: BRAI</p>
      </li>
    </ul>

    <div class="nav-cta">
      <a class="btn btn-primary" href="contact">Book a Demo</a>
    </div>
  </nav>
</header>`;
