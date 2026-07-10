// Myndspark Theme JS
(function() {
  'use strict';

  // Update cart count on page load
  fetch('/cart.js')
    .then(r => r.json())
    .then(cart => {
      var count = document.getElementById('CartCount');
      if (count) count.textContent = cart.item_count;
    })
    .catch(() => {});

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Form enhancement for product page
  var productForm = document.getElementById('product-form');
  if (productForm) {
    productForm.addEventListener('submit', function(e) {
      var btn = this.querySelector('button[type="submit"]');
      if (btn) {
        btn.innerHTML = 'Adding...';
        btn.disabled = true;
      }
    });
  }

  // AJAX cart add (optional enhancement)
  document.querySelectorAll('form[action="/cart/add"]').forEach(function(form) {
    form.addEventListener('submit', function(e) {
      // Allow normal form submission for now (AJAX can be added later)
    });
  });
})();
