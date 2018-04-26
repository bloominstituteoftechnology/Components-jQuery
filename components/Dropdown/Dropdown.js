class Dropdown {
  constructor(element) {
    this.element = $(element);
    // Select button and content from the element
    this.button = this.element.find('.dropdown-button');
    this.content = this.element.find('.dropdown-content');
    // Add a click handler to the button
    /** Option-1 */
    // this.button.click( this.toggleContent.bind(this) ); // button.toggleContent()
    /** Option-2 */
    this.button.click( () => {this.toggleContent()} );
  }

  toggleContent() {
    // Add/remove class to/from content
    this.content.toggleClass('dropdown-hidden');
  }
}

let $dropdown = $('.dropdown');
$dropdown = new Dropdown($dropdown);