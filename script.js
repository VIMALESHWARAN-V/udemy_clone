/* ==========================================================================
   UDEMY HOME PAGE CLONE - INTERACTIVE JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Initialize Interactive Shopping Cart
  let cartCount = 0;
  const cartBadge = document.getElementById('cart-badge-count');
  const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Prevent double adding
      if (button.classList.contains('added')) return;
      
      // Increment cart count
      cartCount++;
      cartBadge.textContent = cartCount;
      
      // Show badge if first item
      if (cartCount === 1) {
        cartBadge.classList.add('active');
      }
      
      // Provide visual feedback on the button
      button.classList.add('added');
      button.textContent = 'Go to cart';
      button.style.backgroundColor = '#1c1d1f';
      
      // Add subtle scale pop animation on cart icon
      const cartIcon = document.querySelector('.nav-cart i');
      cartIcon.style.transform = 'scale(1.2)';
      setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
      }, 200);
    });
  });

  // 2. Tab Switching Logic for Featured Courses
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');
      
      // Deactivate all tabs
      tabButtons.forEach(btn => btn.classList.remove('active'));
      // Activate clicked tab
      button.classList.add('active');
      
      // Hide all panels
      tabPanels.forEach(panel => panel.classList.remove('active'));
      // Show target panel
      const targetPanel = document.getElementById(`tab-${targetTab}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // 3. Header Scroll Effect (Sticky Shadow)
  const header = document.getElementById('main-header');
  
  const handleScroll = () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  // Initial check in case page was refreshed halfway down
  handleScroll();

  // 4. Form Submit Handler (Prevent Refresh)
  const searchForm = document.getElementById('search-bar-form');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('search-input-field');
      console.log(`Searching for: ${input.value}`);
    });
  }

  // 4.5 Hover Toggles for Menus and Popovers (JS Fallback / Automation Helper)
  // Categories Dropdown Hover
  const categoriesContainer = document.getElementById('nav-categories-dropdown');
  if (categoriesContainer) {
    const dropdownMenu = categoriesContainer.querySelector('.dropdown-menu');
    categoriesContainer.addEventListener('mouseenter', () => {
      dropdownMenu.classList.add('show');
    });
    categoriesContainer.addEventListener('mouseleave', () => {
      dropdownMenu.classList.remove('show');
    });

    // Sub-Dropdowns Hover
    const dropdownItems = categoriesContainer.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
      const subMenu = item.querySelector('.sub-dropdown-menu');
      if (subMenu) {
        item.addEventListener('mouseenter', () => {
          subMenu.classList.add('show');
        });
        item.addEventListener('mouseleave', () => {
          subMenu.classList.remove('show');
        });
      }
    });
  }

  // Course Cards Hover Preview Popover
  const courseCards = document.querySelectorAll('.course-card');
  courseCards.forEach(card => {
    const popover = card.querySelector('.course-popover');
    if (popover) {
      card.addEventListener('mouseenter', () => {
        popover.classList.add('show');
      });
      card.addEventListener('mouseleave', () => {
        popover.classList.remove('show');
      });
    }
  });

  // 5. Language Selector Button Toast Demo
  const langButtons = [
    document.getElementById('language-selector-button'),
    document.getElementById('footer-language-button')
  ];

  langButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        alert('Language selection is static in this front-end clone.');
      });
    }
  });

  // 6. Navigation Link Demos
  const demoLinks = document.querySelectorAll('.nav-link, .dropdown-item, .footer-column a, .nav-logo');
  demoLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // If it's a dropdown menu item with child dropdown or a blank link, prevent redirect
      if (link.getAttribute('href') === '#' || link.classList.contains('nav-categories-trigger')) {
        e.preventDefault();
      }
    });
  });
});
