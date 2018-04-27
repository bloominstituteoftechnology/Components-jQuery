
class TabsItem {
  constructor($element) {
    // Attach dom element to object. Example in Tabs class
    this.element = $element;
  }

  select() {
    // Selects the item by adding a class
    /* Stretch goal: use a built in jQuery method to show the item */
    console.log('hello form TabsItem.select()');
    this.element.addClass('tabs-item-selected');
  }

  deselect() {
    // Deselects the item by removing a class
    /* Stretch goal: use a built in jQuery method to hide the item */
  }
}

class TabsLink {
  constructor($element, parent) {
    // Attach the element to this instance of the TabsLink class
    this.element = $element;
    // Attach Tabs (parent) to this instance of the TabsLink class
    this.tabs = parent;
    /* Use the getTab method on the parent to find the corresponding
       TabItem for this link
       hint: use the data-tab attribute 
    */
    this.tabsItem = parent.getTab(this.element.data('tab'));
    /* Reassign this.tabsItem to be a new instance
       of TabsItem, passing it this.tabsItem 
    */
    this.tabsItem = new TabsItem($(this.tabsItem));
    /* Add a click event to the main element,
       this will update the active tab on the parent, 
       and should call select on this tab */
    this.element.click( (e) => {
      console.log('Link clicked');
      this.tabs.updateActive(this);
      this.select();
      //this.element = $element
    });
  };

  select() {
    console.log('hello form Link.select()');
    // add selected class to this link
    // select the associated tab item
    this.element.toggleClass('tabs-link-selected');
    this.tabsItem.select();
  }
  
  deselect() {
    console.log('hello form Link.deselect()')
    // deselect this link
    // deselect the associated tab item
    this.element.toggleClass('tabs-link-selected');
  }
}

class Tabs {
  constructor($element) {
    // this.element = $($element);
    this.element = $element;
    // Using jQuery's .find method, get an array of all links on the element
    this.links = this.element.find('.tabs-link');
    // This step will map over the array creating new TabsLink class isntances of each link.
    this.links = this.links.map((index, link) => {
      return new TabsLink($(link), this);
    });

    // Select the first Link and set it to the activeLink
    this.activeLink = this.links[0];
    console.log('this.activeLink',this.activeLink)
    this.init();
    
  }

  init() {
    this.activeLink.select();
    
    /**
     * this.activeLink IS JUST A 'REFERENCE' TO THE CLASS TansLink INSTANCE.
     * IS NO POSIBLE TO MANIPULATE ITS INTERNAL PROPERTIES
     * The properties are in a Closure, and some of them are inaccesible
     * from the outer Scope.
     * 
     * Thus this code do not works:
     * this.activeLink.addClass('tabs-link-selected');
     * 
     * The only way to manipulate the instance is through its 'methods':
     *    TabsLink.select()
     * and
     *    TabsLink.deselect()
    */
    
  }

  updateActive(newActive) {
    console.log('Hello from tabinit()')
    // Deselect the old active link
    // Assign the new active link
    this.activeLink = $(newActive);
  }

  getTab(data) {
    // console.log('inside getData');
    // console.log('data',data);
    // Use the tab item classname and the data attribute to select the proper item
    // console.log('this.element',this.element);
    // console.log(`.tabs-item[data-tab="${data}"]`);
    return this.element.find(`.tabs-item[data-tab="${data}"]`);
  }

}

/* Using jQuery, select all instances of the class tabs, map over it and create new instances 
   of the Tabs class with the element */

console.log(document.querySelector('.tabs')); // DOM Node

let tabs = $('.tabs'); // jQuery Object
console.log(tabs);

// tabs = new Tabs($(tabs)); // works - pass a jQuery Object
// tabs = new Tabs(tabs); // works - pass a jQuery Object
tabs = tabs.map(( (i,t) => new Tabs($(t)) )); // works - we pass to the constructor a jQuery Object.
// tabs = tabs.map(( (i,t) => new Tabs(t) )); // do not works - we are passing a DOM-Node


/** Accessing the element whit regular DOM manipulation
 * No access to the Classes methods and properties.
 */
let tabsDOM = document.querySelector('.tabs');
// console.log(tabsDOM);
tabsDOM.classList.add('caracola');
