class Dropdown {
  constructor($element) {
    this.element = (element);
    // Select button and content from the element
    this.button = element.button;
    this.content = element.content;
    // Add a click handler to the button
    this.element.click(() => { this.toggleContent() })};

  toggleContent() {
    // Add/remove class to/from content
    this.element.toggleClass('dropdown');
  }
}

let $dropdown = $('.dropdown');
$dropdown = new Dropdown($dropdown);