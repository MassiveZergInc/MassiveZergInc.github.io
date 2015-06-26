(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  app.displayInstalledToast = function() {
    document.querySelector('#caching-complete').show();
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    // console.log('Our app is ready to rock!');
    var drawerPanel = document.querySelector('#paperDrawerPanel');
     drawerPanel.closeDrawer();

  });
  app.onMenuSelect = function() {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }
  };

  app.selected = 0;
      app._onPrevClick = function() {
        app.entryAnimation = 'slide-from-right-animation';
        app.exitAnimation = 'slide-left-animation';
        
        app.selected = app.selected === 0 ? 2 : (app.selected - 1);
      };
      app._onNextClick = function() {
        app.entryAnimation = 'slide-from-left-animation';
        app.exitAnimation = 'slide-right-animation';
        app.selected = app.selected === 2 ? 0 : (app.selected + 1);
      };

  app.selectDescriptionPage1 = function() {
    app.$.descriptionfab1.setAttribute("state","active");
    app.$.descriptionfab2.setAttribute("state","inactive");
    app.$.descriptionfab3.setAttribute("state","inactive");
    app.$.descriptionfab4.setAttribute("state","inactive");
    app.$.descriptionfab5.setAttribute("state","inactive");
    app.selected = 0;
  };

  app.selectDescriptionPage2 = function() {
    app.$.descriptionfab1.setAttribute("state","inactive");
    app.$.descriptionfab2.setAttribute("state","active");
    app.$.descriptionfab3.setAttribute("state","inactive");
    app.$.descriptionfab4.setAttribute("state","inactive");
    app.$.descriptionfab5.setAttribute("state","inactive");
    app.selected = 1;
  };

  app.selectDescriptionPage3 = function() {
    app.$.descriptionfab1.setAttribute("state","inactive");
    app.$.descriptionfab2.setAttribute("state","inactive");
    app.$.descriptionfab3.setAttribute("state","active");
    app.$.descriptionfab4.setAttribute("state","inactive");
    app.$.descriptionfab5.setAttribute("state","inactive");
    app.selected = 2;
  };

  app.selectDescriptionPage4 = function() {
    app.$.descriptionfab1.setAttribute("state","inactive");
    app.$.descriptionfab2.setAttribute("state","inactive");
    app.$.descriptionfab3.setAttribute("state","inactive");
    app.$.descriptionfab4.setAttribute("state","active");
    app.$.descriptionfab5.setAttribute("state","inactive");
    app.selected = 3;
  };

  app.selectDescriptionPage5 = function() {
    app.$.descriptionfab1.setAttribute("state","inactive");
    app.$.descriptionfab2.setAttribute("state","inactive");
    app.$.descriptionfab3.setAttribute("state","inactive");
    app.$.descriptionfab4.setAttribute("state","inactive");
    app.$.descriptionfab5.setAttribute("state","active");
    app.selected = 4;
  };

  app.selected = 0;
  app.selectedDescriptionPage = 0;
  app.selectedImage = 0;

  app.imageRight = function() {
    //app.entryAnimation = 'slide-from-right-animation';
    //app.exitAnimation = 'slide-left-animation';
    if(app.selectedImage < 3){
        app.selectedImage += +1;
    } 
    checkScroll();
  };

  app.imageLeft = function() {
    //app.entryAnimation = 'slide-from-left-animation';
    //app.exitAnimation = 'slide-right-animation';
    if(app.selectedImage > 0){
        app.selectedImage += -1;
    }
    checkScroll();
  };

  function checkScroll(){
        console.log(app.selectedImage);
        if(app.selectedImage === 0){
          var imageLeftButton = document.querySelector('#imageLeftButton');
          imageLeftButton.setAttribute("disabled","true");
        }else{
          var imageLeftButton = document.querySelector('#imageLeftButton');
          imageLeftButton.removeAttribute("disabled");
        }
        if(app.selectedImage == 3){
          var imageRightButton = document.querySelector('#imageRightButton');
          imageRightButton.setAttribute("disabled","true");
        }else{
          var imageRightButton = document.querySelector('#imageRightButton');
         imageRightButton.removeAttribute("disabled");
        }
  }

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    drawerPanel.forceNarrow = true;
  });

})(document);
