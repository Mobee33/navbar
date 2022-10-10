// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {

  // if (links.classList.contains('show-links')) {
  //   links.classList.remove('show-links')
  // } else {
  //   links.classList.add('show-links')
  // }

  // Writing the same code with a one-liner. Instead of using add or remove, we use toggle.

  links.classList.toggle('show-links');
})
