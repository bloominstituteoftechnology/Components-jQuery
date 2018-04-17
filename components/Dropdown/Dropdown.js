class Dropdown {
  constructor($element) {
    this.element = $element;
    this.button = this.element.find(".dropdown-button");
    this.content = this.element.find(".dropdown-content");
    this.button.click( () => {
      this.toggleContent();
    });
  }

  toggleContent() {
    // this.content.toggleClass('dropdown-hidden')
    this.content.slideToggle(500)
  }
}

let $dropdown = $('.dropdown');
$dropdown = new Dropdown($dropdown);