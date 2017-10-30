// Mixitup Settings
var containerEl = document.querySelector('#portfolioList');
var mixer;

if (containerEl) {
  mixer = mixitup(containerEl, {
    selectors: {
      control: '[data-mixitup-control]'
    }
  });
}
