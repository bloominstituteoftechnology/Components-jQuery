class Dropdown {
  constructor (element) {
    this.element = $(element);
    // Select button and content from the element
    this.button = $('.dropdown-button');
    this.content = $('.dropdown-content');
    // Add a click handler to the button
    this.element.click(() => { this.toggleContent() });
  }

  toggleContent() {
    // Add/remove class to/from content
    this.content.toggleClass('dropdown-hidden')
  }
}
let dropdown = $('.dropdown')
dropdown = dropdown.map(function(index, element) {
  new Dropdown(element);
});