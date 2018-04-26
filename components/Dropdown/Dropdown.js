let dropDown = $('.dropdown');

class Dropdown {
  constructor(element) {
    this.element = $(element);
    // Select button and content from the element
    this.button = element.button;
    this.content = element.content;
    // Add a click handler to the button
    this.element.click(() => { this.dropdown }};

  toggleContent() {
    // Add/remove class to/from content
  }
}

let $dropdown = $('.dropdown');
$dropdown = new Dropdown($dropdown);