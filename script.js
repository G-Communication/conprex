
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
    });
  }
  
  // Pricing toggle
  const billingToggle = document.getElementById('billingToggle');
  const priceElements = document.querySelectorAll('.price');
  const pricePeriodsElements = document.querySelectorAll('.price-period');
  const discountText = document.getElementById('discountText');
  
  if (billingToggle) {
    // Save original prices for Pro and Enterprise plans
    const originalPrices = ['15', '39'];
    const monthlyPrices = ['19', '49'];
    
    billingToggle.addEventListener('change', function() {
      const isMonthly = this.checked;
      const toggleOptions = document.querySelectorAll('.toggle-option');
      
      // Update active state for toggle options
      toggleOptions[0].classList.toggle('active', !isMonthly);
      toggleOptions[1].classList.toggle('active', isMonthly);
      
      // Update pricing display
      if (priceElements.length >= 3) { // Skip the Free plan (index 0)
        for (let i = 1; i < Math.min(priceElements.length, 3); i++) {
          priceElements[i].textContent = '$' + (isMonthly ? monthlyPrices[i-1] : originalPrices[i-1]);
        }
      }
      
      // Update billing period text
      if (pricePeriodsElements.length >= 3) {
        for (let i = 1; i < Math.min(pricePeriodsElements.length, 3); i++) {
          pricePeriodsElements[i].textContent = '/mo, billed ' + (isMonthly ? 'monthly' : 'annually');
        }
      }
      
      // Show/hide discount text
      if (discountText) {
        discountText.style.visibility = isMonthly ? 'hidden' : 'visible';
      }
    });
  }
  
  // Add placeholder images if they don't exist
  const placeholderImgs = document.querySelectorAll('img[src="/placeholder.svg"]');
  placeholderImgs.forEach(img => {
    if (img.src.includes('/placeholder.svg')) {
      img.src = 'https://via.placeholder.com/800x450?text=ProcessDoc';
    }
  });
});
