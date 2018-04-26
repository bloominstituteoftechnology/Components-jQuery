// const button = $('.dropdown-button');
class Dropdown {
  constructor($element) {
    this.element = $element;
    // Select button and content from the element
    this.button = this.element.find('.dropdown-button');
    this.content = this.element.find('.dropdown-content');
    // Add a click handler to the button
    this.button.click(() => {
      this.toggleContent()
    })
  };

  toggleContent() {
    // Add/remove class to/from content
    this.content.toggleClass('dropdown-hidden');
  }
}

let $dropdown = $('.dropdown');
$dropdown = new Dropdown($dropdown);