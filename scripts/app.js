(function (document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  app.displayInstalledToast = function() {
    document.querySelector('#caching-complete').show();
    console.log('Our app is ready to rock!');
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('template-bound', function() {
    
  });
  
  
     //window.addEventListener('WebComponentsReady', function() {
        // Explicitly call the register() method. We need to wait until the template's variables are
        // all set first, since the configuration depends on bound variables.
    //    document.querySelector('platinum-sw-register').register();
  //       console.log('Our app is ready to rock!');
//      });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    document.querySelector('body').removeAttribute('unresolved');

    // Ensure the drawer is hidden on desktop/tablet
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    //drawerPanel.forceNarrow = true;
  });

  // Close drawer after menu item is selected if drawerPanel is narrow
  app.onMenuSelect = function() {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }
  };

  app.setajax = function() {
    this.$.ajax.url = "http://jsonplaceholder.typicode.com/posts";
    this.$.ajax.params = {"userId":"1"};
    this.$.ajax.generateRequest();

    //var spinner = document.querySelector('paper-spinner');

    //spinner.style.display = "inner-block";

    //spinner.active = true;

  };
  app.hresponse = function(request){

    var responseArr = request.detail.response;

    var firstObject = responseArr[0];

    console.log(firstObject.userId);

    var ajaxList = document.querySelector('my-list');

    //ajaxList.setAttribute("items", JSON.stringify(responseArr));

    ajaxList.items = responseArr;

    //var spinner = document.querySelector('paper-spinner');

    //spinner.active = false;

    //spinner.style.display = "none";

    console.log(request.detail.response);
    console.log(this.$.ajax.lastResponse);
  };



})(document);

// TODO: Decide if we still want to suggest wrapping as it requires
// using webcomponents.min.js.
// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
// )(wrap(document));
