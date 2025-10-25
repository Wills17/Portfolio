class CustomFooter extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        footer {
          background: rgba(17, 24, 39, 0.9);
          backdrop-filter: blur(10px);
          color: white;
          padding: 2rem 1rem;
          text-align: center;
          margin-top: auto;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.25s ease;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 500;
        }

        .footer-links a:hover {
          color: #10b981;
        }

        .footer-links i {
          width: 18px;
          height: 18px;
        }

        .copyright {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.875rem;
        }

        @media (max-width: 640px) {
          footer {
            padding: 1.5rem 1rem;
          }
          .footer-links {
            gap: 1rem;
          }
          .footer-links a {
            font-size: 0.9rem;
          }
        }
      </style>

      <footer>
        <div class="footer-content">
          <p class="copyright">&copy; ${new Date().getFullYear()} Williams Odunayo. All rights reserved.</p>
        </div>
      </footer>
    `;

    // Load Feather icons inside shadow DOM
    const featherScript = document.createElement('script');
    featherScript.src = "https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js";
    featherScript.onload = () => feather.replace();
    shadow.appendChild(featherScript);
  }
}

customElements.define('custom-footer', CustomFooter);
