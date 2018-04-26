class Dropdown {
  constructor($element) {
    this.element = $element;
    this.button = this.element.find('.dropdown-button');
    this.content = this.element.find('.dropdown-content');
    this.button.click(() => {this.toggleContent()});
  }

  toggleContent() {
    this.content.toggleClass('dropdown-hidden'); // Add/remove class to/from content
  }
}

let $dropdown = $('.dropdown');
$dropdown = new Dropdown($dropdown);