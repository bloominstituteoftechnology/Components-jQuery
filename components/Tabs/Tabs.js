
class TabsItem {
  constructor($element) {
    this.element = $element;
    this.init();
  }

  select() {
    // this.element.show(); // Stretch goal: use a built in jQuery method to show the item
    this.element.fadeIn(); // Stretch goal: Get tab text to fade in
  }

  deselect() {
    this.element.hide(); // Stretch goal: use a built in jQuery method to hide the item
  }

  // Stretch goal: Refactor LESS using jQuery; got rid of display: none on tab items
  init(){
    this.element.hide();
  }
}

class TabsLink {
  constructor($element, parent) {
    this.element = $element;
    this.tabs = parent; // Attach Tabs to this instance of tab links
    this.tabsItem = parent.getTab(this.element.data('tab'));
    this.tabsItem = new TabsItem(this.tabsItem); // Use tabsItem selector to create a new instance of TabsItem
    this.element.click( () => { // Click event calls parent's method to update active tab
      this.tabs.updateActive(this);
    });
  };

  select() {
    this.element.addClass('tabs-link-selected');
    this.tabsItem.select();
  }

  deselect() {
    this.element.removeClass('tabs-link-selected');
    this.tabsItem.deselect();
  }
}

class Tabs {
  constructor($element) {
    this.element = $element;
    this.links = this.element.find('.tabs-link');
    this.links = this.links.map((index, link) => { // Create a TabsLink instance for each tab link in this instance of tabs
      return new TabsLink($(link), this);
    });
    this.activeLink = this.links[0];
    this.init();
  }

  init() {
    this.activeLink.select(); // Select the first link and tab init
  }

  updateActive(newActive) {
    this.activeLink.deselect();
    this.activeLink = newActive;
    this.activeLink.select();
  }

  getTab(data) {
    return $(`.tabs-item[data-tab="${data}"]`); // Select and return proper tab item
  }
}

let tabs = $('.tabs');
tabs = tabs.map((index, tabs) => new Tabs($(tabs)));

