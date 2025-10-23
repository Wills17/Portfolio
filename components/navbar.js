class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
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
            background: rgba(17, 24, 39, 0.95);
            padding: 1rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
        }
      </style>
      <nav>
        <a href="/Portfolio" class="logo">
          <i data-feather="cpu" class="logo-icon"></i>
          Williams Odunayo
        </a>
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        <ul id="nav-links">
          <li><a href="#skills" class="nav-link"><i data-feather="tool"></i> Skills</a></li>
          <li><a href="#projects" class="nav-link"><i data-feather="code"></i> Projects</a></li>
          <li><a href="#contact" class="nav-link"><i data-feather="mail"></i> Contact</a></li>
        </ul>
      </nav>
    `;

    // Mobile menu toggle
    const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const navLinks = this.shadowRoot.querySelector('#nav-links');

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

    // Update active link on scroll
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 100)) {
          current = section.getAttribute('id');
        }
      });

      const links = this.shadowRoot.querySelectorAll('.nav-link');
      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);