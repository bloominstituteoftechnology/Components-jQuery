
class TabsItem {
  constructor($element) {
    // Attach dom element to object. Example in Tabs class
    this.element = $($element);
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
    // console.log('inside link constructor')
    // Attach the element to this instance of the TabsLink class
    this.element = $element;
    // Attach Tabs (parent) to this instance of the TabsLink class
    this.tabs = parent;
    // console.log('parent',parent);
    // console.log('parent.getTab',parent.getTab);
    /* Use the getTab method on the parent to find the corresponding
       TabItem for this link
       hint: use the data-tab attribute 
    */
  //  console.log('this.element.dataset.tab',this.element.dataset.tab);
   this.tabsItem = parent.getTab(this.element.dataset.tab);
  //  console.log('this.tabsItem',this.tabsItem)
    /* Reassign this.tabsItem to be a new instance
       of TabsItem, passing it this.tabsItem */
    this.tabsItem = new TabsItem(this.tabsItem);
    
    /* Add an click event to the main element,
       this will update the active tab on the parent, 
       and should call select on this tab */
    this.element.click( () => {
      console.log('Link clicked');
      this.tabs.updateActive(this);
      this.select();
      //this.element = $element
    });
  };

  select() {
    console.log('hello form Link.select()')
    // add selected class to this link
    // select the associated tab item
  }
  
  deselect() {
    console.log('hello form Link.deselect()')
    // deselect this link
    // deselect the associated tab item
  }
}

class Tabs {
  constructor($element) {
    console.log('inside TAbs constructor')
    this.element = $element;
    // Using jQuery's .find method, get an array of all links on the element
    this.links = this.element.find('.tabs-link');
    // console.log('this.links', this.links);
    // console.log('this.links.length', this.links.length);
    // This step will map over the array creating new TabsLink class isntances of each link.
    this.links = this.links.map((index, link) => {
      // console.log('link',link);
      // console.log('link.dataset.tab', link.dataset.tab);
      return new TabsLink(link, this);
    });

    // Select the first Link and set it to the activeLink
    this.activeLink = $(this.links[0]);
    console.log('this.activeLink',this.activeLink)
    this.init();
  }

  init() {
    console.log(this.activeLink.addClass('tabs-link-selected'));
    this.activeLink.addClass('tabs-link-selected'); // DO NOT WORK
    this.activeLink.toggleClass('tabs-link-selected'); // DO NOT WORK
    document.querySelector('.tabs-link[data-tab="1"').classList.add('tabs-link-selected');
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

  console.log(document.querySelector('.tabs'));
   let tabs = $('.tabs');
   console.log(tabs);
tabs = new Tabs(tabs);

