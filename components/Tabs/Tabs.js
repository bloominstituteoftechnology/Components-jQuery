
class TabsItem {
  constructor($element) {
    // Attach dom element to object. Example in Tabs class
  }

  select() {
    // Selects the item by adding a class
    /* Stretch goal: use a built in jQuery method to show the item */
  }

  deselect() {
    // Deselects the item by removing a class
    /* Stretch goal: use a built in jQuery method to hide the item */
  }
}

class TabsLink {
  constructor($element, parent) {
    // Attach the element to this instance of the TabsLink class
    this.element;
    // Attach Tabs (parent) to this instance of the TabsLink class
    this.tabs;
    /* Use the getTab method on the parent to find the corresponding TabItem for this link
       hint: use the data-tab attribute */
    this.tabsItem = parent.getTab();
    // Reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
    this.tabsItem;
    /* Add an click event to the main element, this will update the active tab on the parent, 
       and should call select on this tab */
    this.element.click( () => {
      this.tabs.updateActive(this);

    });
  };

  select() {
    // add selected class to this link
    // select the associated tab item
  }

  deselect() {
    // deselect this link
    // deselect the associated tab item
  }
}

class Tabs {
  constructor($element) {
    this.element = $element;
    this.links = this.elements.find('.tabs-link'); // Get all tab links in this instance of tabs
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
let tabs = $();
tabs = tabs.map();

