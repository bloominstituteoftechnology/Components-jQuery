class Dropdown {
  constructor($element) {
    this.element = $element;
    this.button = this.element.find('.dropdown-button');
    this.content = this.element.find('.dropdown-content');
    this.button.click(() => {this.toggleContent()});
    this.init();
  }

  // Stretch goal: Refactor LESS using jQuery; got rid of display: none on dropdown content
  init(){
    this.content.hide();
  }

  toggleContent() {
    // Stretch: Slide up/down animation
    if(this.content.is(':hidden')){
      this.content.slideDown();
    } else {
      this.content.slideUp();
    }
  }
}

let $dropdown = $('.dropdown');
$dropdown = new Dropdown($dropdown);