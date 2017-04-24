$(document).ready(function () {
  
  var trigger = $('.hamburger'),
      trigger2 = $('.hamburger2'),
      sidebar = $('#sidebar-wrapper > nav'),
      isClosed = true,
      isClosed2 = false,
      sideslider = $('[data-toggle=collapse-side]'),
      sel = sideslider.attr('data-target'),
      sel2 = sideslider.attr('data-target-2');
  
  /**
   * Menu horizontal
   */
  sideslider.click(function(event){
    $(sel).toggleClass('in');
    $(sel2).toggleClass('out');
  });
    
  /**
   * Hamburger
   */
  
  // hamburger
  trigger.click(function () {
    hamburger_cross();      
  });
  
  function hamburger_cross() {
    
    if (isClosed == true) {          
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {   
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      sidebar.addClass('in');
      isClosed = true;
    }
  }
  
  $('[data-toggle="hamburger"]').click(function () {
    $('#wrapper').toggleClass('toggled');
  });
  
  //hamburger2
  trigger2.click(function () {
    hamburger_cross2();      
  });
    
  function hamburger_cross2() {
    
    if (isClosed2 == true) {          
      trigger2.removeClass('is-open');
      trigger2.addClass('is-closed');
      isClosed2 = false;
    } else {   
      trigger2.removeClass('is-closed');
      trigger2.addClass('is-open');
      isClosed2 = true;
    }
  }
  
  $('[data-toggle="hamburger2"]').click(function () {
    $('#wrapper').toggleClass('toggled');
  });
  
  /**
   * Resize
   */  
  function resize() {
    if ($(window).width() > 991) {     
      $('#wrapper').addClass('toggled');
    }
    else {
      $('#wrapper').removeClass('toggled');
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      sidebar.removeClass('in');
      isClosed = false;
    }
  }
  
  $(window).on("resize", resize);
  resize();
});