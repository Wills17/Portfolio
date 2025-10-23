class CustomNavbar extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        nav {
          background: rgba(17, 24, 39, 0.9);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
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
          transition: color 0.2s;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        a:hover {
          color: #10b981;
        }
        .nav-link.active {
          color: #10b981;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
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
            padding: 1rem 2rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            animation: fadeIn 0.3s ease-in-out;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      </style>

      <nav>
        <a href="/" class="logo">
          <i data-feather="cpu" class="logo-icon"></i>
          Williams Odunayo
        </a>

        <button class="mobile-menu-btn" aria-label="Toggle Menu">
          <i data-feather="menu"></i>
        </button>

        <ul id="nav-links">
          <li><a href="#skills" class="nav-link"><i data-feather="tool"></i> Skills</a></li>
          <li><a href="#projects" class="nav-link"><i data-feather="code"></i> Projects</a></li>
          <li><a href="#contact" class="nav-link"><i data-feather="mail"></i> Contact</a></li>
          <li><a href="docs/Williams_Odunayo_CV.pdf" target="_blank"><i data-feather="file-text"></i> CV</a></li>
        </ul>
      </nav>
    `;

    // Feather icons inside shadow DOM
    const featherScript = document.createElement('script');
    featherScript.src = "https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js";
    featherScript.onload = () => feather.replace({ class: 'icon', 'stroke-width': 1.5 });
    shadow.appendChild(featherScript);

    const menuBtn = shadow.querySelector('.mobile-menu-btn');
    const navLinks = shadow.querySelector('#nav-links');

    // Toggle mobile menu
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      const icon = menuBtn.querySelector('i');
      if (navLinks.classList.contains('mobile-open')) {
        icon.setAttribute('data-feather', 'x');
      } else {
        icon.setAttribute('data-feather', 'menu');
      }
      feather.replace();
    });

    // Active section highlight
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach(section => {
        const top = section.offsetTop - 100;
        if (scrollY >= top) current = section.getAttribute('id');
      });
      shadow.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
      });
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
