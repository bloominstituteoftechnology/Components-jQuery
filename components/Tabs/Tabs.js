class TabsItem {
  constructor($element) {

    // Attach dom element to object. Example in Tabs class

    this.element = $element;

    console.log("This is what is in this.element in the TabsItem constructor:");
    console.log(this.element);
  }

  select() {

    // Selects the item by adding a class
    /* Stretch goal: use a built in jQuery method to show the item */

    this.element.addClass('tabs-item-selected');
  }

  deselect() {
    // Deselects the item by removing a class
    /* Stretch goal: use a built in jQuery method to hide the item */
    this.element.removeClass('tabs-item-selected');
  }
}

class TabsLink {
  constructor($element, parent) {

    // Attach the element to this instance of the TabsLink class

    this.element = $element;

    console.log("This is what is in this.element in the TabsLink constructor:");
    console.log(this.element);

    // Attach Tabs (parent) to this instance of the TabsLink class

    this.tabs = parent;

    console.log("This is what is in this.tabs in the TabsLink constructor:");
    console.log(this.tabs);

    /* Use the getTab method on the parent to find the corresponding TabItem for this link hint: use the data-tab attribute */

    this.tabsItem = parent.getTab(this.element[0].dataset.tab); // Assign this to the associated tab using the parent's "getTab" method by passing it the correct data

    console.log("This is what is in this.tabsItem in the TabsLink constructor:");
    console.log(this.tabsItem);

    // Reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem

    this.tabsItem = new TabsItem($(this.tabsItem));

    console.log("This is what is in this.tabsItem in the TabsLink constructor after new assignment:");
    console.log(this.tabsItem);

    /* Add an click event to the main element, this will update the active tab on the parent, and should call select on this tab */

    this.element.click(() => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    // add selected class to this link

    this.element.addClass('tabs-link-selected');

    // select the associated tab item

    this.tabsItem.select();
  }

  deselect() {
    // deselect this link

    this.element.removeClass('tabs-link-selected');

    // deselect the associated tab item

    this.tabsItem.deselect();
  }
}

class Tabs {
  constructor($element) {
    this.element = $element; // Attaches the dom node to the object as "this.element"

    console.log("This is what is in this.element in the Tabs constructor:");
    console.log(this.element);

    // Using jQuery's .find method, get an array of all links on the element

    this.links = this.element.find('.tabs-link');

    console.log("This is what is in this.links in the Tabs constructor:")
    console.log(this.links);

    // This step will map over the array creating new TabsLink class instances of each link.

    this.links = this.links.map((index, link) => {
      return new TabsLink($(link), this);
    });

    console.log("This is what is in this.links in the Tabs constructor after mapping:")
    console.log(this.links);

    // Select the first Link and set it to the activeLink

    this.activeLink = this.links[0];

    console.log("This is what is in this.activeLink in the Tabs constructor:");
    console.log(this.activeLink);

    this.init();
  }

  init() {
    // Select the first link and tab upon ititialization

    this.activeLink.select();
  }

  updateActive(newActive) {
    // Deselect the old active link

    this.activeLink.deselect();

    // Assign the new active link

    this.activeLink = newActive;
  }

  getTab(data) {

    // Use the tab item classname and the data attribute to select the proper item

    return this.element.find(`.tabs-item[data-tab="${data}"]`);
  }
}

/* Using jQuery, select all instances of the class tabs, map over it and create new instances of the Tabs class with the element */

let tabs = $('.tabs');

console.log("This is what is in the tabs variable:")
console.log(tabs);

tabs = tabs.map((index, item) => {
  new Tabs($(item));
});

console.log("This is what is in the tabs variable after the mapping:")
console.log(tabs);
