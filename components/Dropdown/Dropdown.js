class Dropdown {
  constructor(element) {
    this.element = $(element);// 
    // Select button and content from the element
    this.button = this.element;
    this.content = this.element;
    // Add a click handler to the button
    this.button.click(() => {
      this.toggleContent();
    });
  }

  toggleContent() {
    // Add/remove class to/from content
    let dropdownContent = $(".dropdown-content");
    dropdownContent.toggleClass("dropdown-hidden");
  }

}

let $dropdown = $('.dropdown');
$dropdown = new Dropdown($dropdown);