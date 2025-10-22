class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: rgba(17, 24, 39, 0.9);
          backdrop-filter: blur(10px);
          color: white;
          padding: 2rem;
          text-align: center;
          margin-top: auto;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1rem;
        }
        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .footer-links a:hover {
          color: #10b981;
        }
        .copyright {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.875rem;
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-links">
            <a href="mailto:williamsodunayo70@gmail.com">
              <i data-feather="mail"></i>
              Email
            </a>
            <a href="https://github.com/Wills17" target="_blank">
              <i data-feather="github"></i>
              GitHub
            </a>
            <a href="#" target="_blank">
              <i data-feather="linkedin"></i>
              LinkedIn
            </a>
            <a href="#" target="_blank">
              <i data-feather="twitter"></i>
              Twitter
            </a>
          </div>
          <p class="copyright">&copy; ${new Date().getFullYear()} Williams Odunayo. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);