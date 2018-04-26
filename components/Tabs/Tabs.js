// Attach dom element to object. Example in Tabs class
// Selects the item by adding a class
/* Stretch goal: use a built in jQuery method to show the item */
// Deselects the item by removing a class
/* Stretch goal: use a built in jQuery method to hide the item */

class TabsItem {
  constructor(element) {
    this.element = $(element);
  }
  select() {
    this.element.addClass('tabs-item-selected')
  }
  deselect() {
    this.element.removeClass('tabs-item-selected')
  }
}


// Attach the element to this instance of the TabsLink class
// Attach Tabs (parent) to this instance of the TabsLink class
/* Use the getTab method on the parent to find the corresponding TabItem for this link
       hint: use the data-tab attribute */
// Reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
/* Add an click event to the main element, this will update the active tab on the parent, 
       and should call select on this tab */

class TabsLink {
  constructor(element, parent) {
    this.element = $(element);
    this.tabs = parent;
    this.tabsItem = parent.getTab(this.element.data('tab'));
    this.tabsItem = new TabsItem($(this.tabsItem));
    this.element.click(() => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    this.element.addClass('tabs-link-selected')
    this.tabsItem.select();
    // add selected class to this link
    // select the associated tab item
  }

  deselect() {
    this.element.removeClass('tabs-link-selected')
    this.tabsItem.deselect();
    // deselect this link
    // deselect the associated tab item
  }
}



// Using jQuery's .find method, get an array of all links on the element
// This step will map over the array creating new TabsLink class isntances of each link.
// Select the first Link and set it to the activeLink
// Select the first link and tab upon ititialization
// Deselect the old active link
// Assign the new active link
// Use the tab item classname and the data attribute to select the proper item

class Tabs {
  constructor(element) {
    this.element = $(element);
    this.links = this.element.find('.tabs-link');
    this.links = this.links.map((index, link) => {
      return new TabsLink($(link), this);
    });
    this.activeLink = this.links[0];
    this.init();
  }
  init() {
    this.activeLink.select();
  }
  updateActive(newActive) {
    this.activeLink.deselect();
    this.activeLink = newActive;
  }
  getTab(data) {
    return this.element.find(`.tabs-item[data-tab="${data}"]`);
  }
}


/* Using jQuery, select all instances of the class tabs, map over it and create new instances 
   of the Tabs class with the element */
let tabs = $('.tabs');
tabs = tabs.map(function (index, element) {
  new Tabs(element)
});

