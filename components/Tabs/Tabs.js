class TabsItem {
  constructor(element) {
    // Attach dom element to object. Example in Tabs class
    this.element = $(element);
  }
  // ---- TABSITEM METHODS ----- //
  // Selects the item by adding a class
  /* Stretch goal: use a built in jQuery method to show the item */
  // Deselects the item by removing a class
  /* Stretch goal: use a built in jQuery method to hide the item */
  select() {
    this.element.slideToggle(200);
  }

  deselect() {
    this.element.hide();
  }
}

class TabsLink {
  constructor(element, parent) {
    // Attach the element to this instance of the TabsLink class
    // Attach Tabs (parent) to this instance of the TabsLink class
    /* Use the getTab method on the parent to find the corresponding TabItem for this link
       hint: use the data-tab attribute */
    // Reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
    /* Add a click event to the main element, this will update the active tab on the parent, 
       and should call select on this tab */
    this.element = $(element);
    this.tabs = parent;
    this.tabsItem = parent.getTab(this.element.data("tab"));
    this.tabsItem = new TabsItem(this.tabsItem);
    this.element.click(() => {
      this.tabs.updateActive(this);
      this.select();
    });
  };
  // ----- TABSLINK METHODS ---- //
  // add selected class to this link
  // select the associated tab item
  // deselect this link
  // deselect the associated tab item
  select() {
    this.element.addClass("tabs-link-selected");
    this.tabsItem.select();
  }

  deselect() {
    this.element.removeClass("tabs-link-selected");
    this.tabsItem.deselect();
  }
}

class Tabs {
  constructor(element) {
    // Using jQuery's .find method, get an array of all links on the element
    // this.links = this.element.find(".tabs-links");
    // This step will map over the array creating new TabsLink class isntances of each link.
    // Select the first Link and set it to the activeLink
    this.element = $(element);
    this.links = this.element.find(".tabs-link");
    this.links = this.links.map((index, link) => {
      return new TabsLink(link, this);
    });
    this.activeLink = this.links[0]; //selects first child of the jQuery array named links.
    this.init();
  }
  // ---- TABS METHODS ---- //
  // Select the first link and tab upon ititialization
  // Deselect the old active link
  // Assign the new active link
  // Use the tab item classname and the data attribute to select the proper item

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
let tabs = $(".tabs");
tabs = tabs.map((index, tab) =>
  new Tabs(tab)
);