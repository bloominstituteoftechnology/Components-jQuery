class Dropdown {
  constructor(element) {
      this.element = $(element); 
    // Select button and content from the element
      this.button = $(".dropdown-button");
      this.content = $(".dropdown-content");
      
    // Add a click handler to the button
      this.button.click(() => this.toggleContent());
  }
    toggleContent() {
      // Add/remove class to/from content
	this.content.toggleClass("dropdown-hidden");
	console.log("hello");
    }

}

let $dropdown = $('.dropdown');
$dropdown = new Dropdown($dropdown);

