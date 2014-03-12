// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap.min
//= require turbolinks
//= require_tree .

$(function(){
        // Check the initial Poistion of the Sticky Header
        var stickyHeaderTop = $('#stickyheader').offset().top;
 
        $(window).scroll(function(){
                if( $(window).scrollTop() > stickyHeaderTop ) {
                        $('#stickyheader').attr('class', 'navbar navbar-default navbar-fixed-top');
                        $('#stickyalias').css('display', 'block');
                } else {
                        $('#stickyheader').attr('class', 'navbar navbar-default navbar-static-top');
                        $('#stickyalias').css('display', 'none');
                }
        });
        
        var ua = navigator.userAgent.toLowerCase(); 
        

        if (ua.indexOf('safari')!=-1)
        { 
          if(ua.indexOf('chrome')  > -1)
          { }
          else
          {
            $('#icss').attr('style', 'display:block;');
            $('#dates').attr('style', 'display:none;');
          }
        }
        
        
      	$('a[href^="#"]').on('click',function (e) {
      	    e.preventDefault();

      	    var target = this.hash,
      	    $target = $(target);

      	    $('html, body').stop().animate({
      	        'scrollTop': $target.offset().top - 50
      	    }, 450, 'swing', function () {
      	        window.location.hash = target;
      	    });
      	});
        
        
        
        
        // GMaps
        var map;
        var myLatlng = new google.maps.LatLng(48.370712, -89.278893);
  
        function initialize() {
          var mapOptions = {zoom: 16, center: myLatlng, mapTypeId: google.maps.MapTypeId.ROADMAP, scrollwheel: false};
          map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
          var marker = new google.maps.Marker({position: myLatlng, map: map, title: 'West Thunder Community Center'});
        }
        
        google.maps.event.addDomListener(window, 'load', initialize);
  });