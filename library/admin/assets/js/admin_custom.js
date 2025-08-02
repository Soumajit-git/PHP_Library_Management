/**
 * Modern custom JS for Library Management System
 * Handles:
 *  - Carousel / DataTables initialization (existing features)
 *  - Dark/Light theme toggle with localStorage persistence
 *  - Utility helpers (toast notifications, confirmation modals)
 *  - Reserved area for page-specific scripts (compatible with old class names)
 *  - Uses vanilla JS & jQuery only (no external dependency updates needed)
 */

(function ($) {
  'use strict';

  /**
   * ==========================
   * THEME TOGGLE MODULE
   * ==========================
   */
  const THEME_KEY = 'lms-preferred-theme';
  const docElm = document.documentElement;

  // Apply theme from localStorage on page load
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === 'dark') {
    docElm.setAttribute('data-theme', 'dark');
  }

  // Toggle handler
  function toggleTheme() {
    const current = docElm.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    if (newTheme === 'dark') {
      docElm.setAttribute('data-theme', 'dark');
    } else {
      docElm.removeAttribute('data-theme');
    }
    localStorage.setItem(THEME_KEY, newTheme);
  }

  // Attach listener to any element with .theme-toggle class
  $(document).on('click', '.theme-toggle', toggleTheme);

  /**
   * ==========================
   * COMPONENT INITIALIZATIONS
   * ==========================
   */
  function initCarousel() {
    $('#carousel-example').carousel({
      interval: 3500,
      ride: 'carousel'
    });
  }

  function initDataTables() {
    if ($.fn.dataTable) {
      $('#dataTables-example').DataTable({
        responsive: true,
        language: {
          searchPlaceholder: 'Search records',
          sSearch: '',
        }
      });
    }
  }

  /**
   * ==========================
   * PAGE-SPECIFIC PLACEHOLDER
   * ==========================
   * Write additional page-specific scripts below inside the customFun function.
   * This keeps compatibility with the old file structure.
   */
  function customFun() {
    // ===== WRITE YOUR SCRIPTS BELOW =====


  }

  // Document ready
  $(function () {
    initCarousel();
    initDataTables();
    customFun();
  });

})(jQuery);
