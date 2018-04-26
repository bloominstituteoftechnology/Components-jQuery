class TabsItem {
  constructor($element) {
    // Attach dom element to object. Example in Tabs class
    this.element = $element;
  }

  select() {
    // Selects the item by adding a class
    /* Stretch goal: use a built in jQuery method to show the item */
    this.element.addClass("tabs-item-selected");
  }

  deselect() {
    // Deselects the item by removing a class
    /* Stretch goal: use a built in jQuery method to hide the item */
    this.element.removeClass("tabs-item-selected");
  }
}

class TabsLink {
  constructor($element, parent) {
    // Attach the element to this instance of the TabsLink class
    this.element = $element;
    // Attach Tabs (parent) to this instance of the TabsLink class
    this.tabs = parent;
    /* Use the getTab method on the parent to find the corresponding TabItem for this link
       hint: use the data-tab attribute */
    this.tabsItem = this.tabs.getTab(this.element);
    // Reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
    this.tabsItem = new TabsItem(this.tabsItem);
    /* Add a click event to the main element, this will update the active tab on the parent, 
       and should call select on this tab */
    this.element.click( () => {
      this.tabs.updateActive(this);
      this.select();

    });
  };

  select() {
    // add selected class to this link
    // select the associated tab item
    this.element.addClass("tabs-link-selected");
  }

  deselect() {
    // deselect this link
    // deselect the associated tab item
    this.element.removeClass("tabs-link-selected");
  }
}

class Tabs {
  constructor($element) {
    this.element = $element;

    // Using jQuery's .find method, get an array of all links on the element
    this.links = this.element.find(".tabs-link");

    // This step will map over the array creating new TabsLink class instances of each link.
    this.links = this.links.map((index, link) => {
      return new TabsLink($(link), this);
    });

    // Select the first Link and set it to the activeLink
    console.log("this.links",this.links);
    this.activeLink = this.links[0];
    this.init();
  }

  init() {
    // Select the first link and tab upon initialization
    this.activeLink.select();
    this.activeLink.tabsItem.select();
    // console.log(this.activeLink);
    // console.log(this.activeLink.element.data("tab"));
    // this.getTab(this.activeLink.element.data("tab")).select();
  }

  updateActive(newActive) {
    // Deselect the old active link
    console.log("updateActive this", newActive);
    this.activeLink.deselect();
    this.activeLink.tabsItem.deselect();
    // Assign the new active link
    console.log("newActive #", newActive.element.data("tab"));
    this.activeLink = this.links[newActive.element.data("tab")-1];
    this.init();
  }

  getTab(data) {
    // Use the tab item classname and the data attribute to select the proper item
    let tabNum = data[0].dataset.tab;
    console.log("data tab",data[0].dataset.tab);
    console.log("getTabSelection",$(`.tabs-item[data-tab="${tabNum}"]`));
    return $(`.tabs-item[data-tab="${tabNum}"]`);
  }

}

/* Using jQuery, select all instances of the class tabs, map over it and create new instances 
   of the Tabs class with the element */
let tabs = $(".tabs");
tabs = tabs.map((index, tabs) => {
  return new Tabs($(tabs));
});

