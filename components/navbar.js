class CustomNavbar extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <style>
        :host {
          display: block;
          position: relative;
          z-index: 100;
        }

        nav {
          background: rgba(17, 24, 39, 0.9);
          backdrop-filter: blur(10px);
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;             
          width: 100%;
          box-sizing: border-box;
          overflow-x: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        }

        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }

        .logo-icon {
          color: #6366f1;
        }

        ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          transition: color 0.2s ease;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        a:hover {
          color: #10b981;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          z-index: 101;
        }

        .mobile-menu-btn svg {
          width: 28px;
          height: 28px;
          stroke: white;
          stroke-width: 2;
          fill: none;
          transition: all 0.2s ease;
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }

          ul {
            display: none;
          }

          ul.mobile-open {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(17, 24, 39, 0.98);
            padding: 1rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            animation: fadeDown 0.25s ease;
          }

          @keyframes fadeDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        }
      </style>

      <nav>
        <a href="/" class="logo">
          <svg class="logo-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <rect x="9" y="9" width="6" height="6"/>
          </svg>
          Williams Odunayo
        </a>

        <button class="mobile-menu-btn" aria-label="Toggle menu">
          <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <ul id="nav-links">
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#skills" class="nav-link">Skills</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
      </nav>
    `;

    const menuBtn = shadow.querySelector(".mobile-menu-btn");
    const navLinks = shadow.querySelector("#nav-links");
    const menuIcon = shadow.querySelector(".menu-icon");

    menuBtn.addEventListener("click", () => {
      const open = navLinks.classList.toggle("mobile-open");
      // Toggle between hamburger and X
      menuIcon.innerHTML = open
        ? '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'
        : '<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>';
    });
  }
}

customElements.define("custom-navbar", CustomNavbar);
