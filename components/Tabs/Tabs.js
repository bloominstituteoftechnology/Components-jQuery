
class TabsItem {
  constructor($element) {
    // Attach dom element to object. Example in Tabs class
    this.element = $element;
  }
  select() {
    // Selects the item by adding a class
    this.element.classList.add("tabs-item-selected");
    /* Stretch goal: use a built in jQuery method to show the item */
    // this.element.addClass('tabs-item-selected');
  }

  deselect() {
    // Deselects the item by removing a class
    /* Stretch goal: use a built in jQuery method to hide the item */
    this.element.classList.remove("tabs-item-selected");
    // this.element.removeClass('tabs-item-selected');
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
    this.tabsItem = parent.getTab(`.tab-link[data-tab='${this.tabs}']`);
    // Reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
    this.tabsItem = this.tabsItem;
    /* Add an click event to the main element, this will update the active tab on the parent, 
       and should call select on this tab */
    this.element.click( () => {
      this.tabs.updateActive(this);

    });
  };

  select() {
    // add selected class to this link
    this.$element.classList.add("tabs-link-selected");
    // select the associated tab item
  }

  deselect() {
    // deselect this link
    this.$element.classList.remove("tabs-link-selected");
    // deselect the associated tab item
  }
}

class Tabs {
  constructor($element) {
    this.element = $element;

    // Using jQuery's .find method, get an array of all links on the element
    this.linksthis.$element.classList.add("tabs-link-selected");

    // This step will map over the array creating new TabsLink class isntances of each link.
    this.links = this.links.map((index, link) => {
      return new TabsLink($(link), this);
    });

    // Select the first Link and set it to the activeLink
    this.activeLink;
    this.init();
  }

  init() {
    // Select the first link and tab upon ititialization
  }

  updateActive(newActive) {
    // Deselect the old active link

    // Assign the new active link

  }

  getTab(data) {
    // Use the tab item classname and the data attribute to select the proper item
  }

}

/* Using jQuery, select all instances of the class tabs, map over it and create new instances 
   of the Tabs class with the element */
let tabs = $();
tabs = tabs.map();

