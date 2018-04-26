
class TabsItem {
  constructor($element) {
    this.element = $element;
  }

  select() {
    // this.element.addClass('tabs-item-selected');

    // Stretch goal: use a built in jQuery method to show the item
    this.element.show();
  }

  deselect() {
    // this.element.removeClass('tabs-item-selected');

    // Stretch goal: use a built in jQuery method to hide the item
    this.element.hide();
  }
}

class TabsLink {
  constructor($element, parent) {
    this.element = $element;
    this.tabs = parent; // Attach Tabs to this instance of tab links
    this.tabsItem = parent.getTab(this.element.data('tab')); // Get jQuery selector for corresponding tab item
    this.tabsItem = new TabsItem(this.tabsItem); // Use tabsItem selector to create a new instance of TabsItem
    this.element.click( () => { // Click event calls parent's method to update active tab
      this.tabs.updateActive(this);
    });
  };

  select() {
    this.element.addClass('tabs-link-selected'); // Add selected class to tab link
    this.tabsItem.select(); // Select associated tab item
  }

  deselect() {
    this.element.removeClass('tabs-link-selected'); // Remove selected class from tab link
    this.tabsItem.deselect(); // Deselect associated tab item
  }
}

class Tabs {
  constructor($element) {
    this.element = $element;
    this.links = this.element.find('.tabs-link'); // Get all tab links in this instance of tabs
    this.links = this.links.map((index, link) => { // Create a TabsLink instance for each tab link in this instance of tabs
      return new TabsLink($(link), this);
    });
    this.activeLink = this.links[0]; // Set first tab link to activeLink
    this.init();
  }

  init() {
    this.activeLink.select(); // Select the first link and tab init
  }

  updateActive(newActive) {
    this.activeLink.deselect(); // Deselect old active link
    this.activeLink = newActive; // Track new active link
    this.activeLink.select(); // Select new active link
  }

  getTab(data) {
    return $(`.tabs-item[data-tab="${data}"]`); // Select and return proper tab item
  }
}

/* Using jQuery, select all instances of the class tabs, map over it and create new instances 
   of the Tabs class with the element */
let tabs = $('.tabs');
tabs = tabs.map((index, tabs) => new Tabs($(tabs)));

