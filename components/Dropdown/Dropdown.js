class Dropdown {
  constructor($element) {
    this.element = $($element);
    // Select button and content from the element
    this.button = $(".dropdown-button");
    this.content = $(".dropdown-content");
    // Add a click handler to the button
    this.button.click(() => {
      this.content.slideToggle(200, this.toggleContent);
    })
  }

  toggleContent() {
    // Add/remove class to/from content
    $(".dropdown-content").toggleClass("dropdown-hidden");
  }
}

let $dropdown = $('.dropdown');
$dropdown = new Dropdown($dropdown);