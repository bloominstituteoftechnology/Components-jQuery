
class Dropdown {
  constructor($element) {
    this.element =$element
    // Select button and content from the element
    this.button = $element.find('.dropdown-button')
    this.content = $element.find('.dropdown-content')
    // Add a click handler to the button
    this.button.click(() =>{
      this.toggleContent()
    })
  }

  toggleContent() {
    // Add/remove class to/from content
    this.toggleContent('.dropdown-content')
  }
}

let $dropdown = $('.dropdown');
$dropdown = new Dropdown($dropdown);