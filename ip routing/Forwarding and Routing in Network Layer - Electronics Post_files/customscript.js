jQuery.fn.exists = function(callback) {
  var args = [].slice.call(arguments, 1);
  if (this.length) {
	callback.call(this, args);
  }
  return this;
};

/*! .isOnScreen() returns bool */
jQuery.fn.isOnScreen = function(){

	var win = jQuery(window);

	var viewport = {
		top : win.scrollTop(),
		left : win.scrollLeft()
	};
	viewport.right = viewport.left + win.width();
	viewport.bottom = viewport.top + win.height();

	var bounds = this.offset();
	bounds.right = bounds.left + this.outerWidth();
	bounds.bottom = bounds.top + this.outerHeight();

	return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

/*----------------------------------------------------
/* Show/hide Scroll to top
/*--------------------------------------------------*/
jQuery(document).ready(function($) {
	//move-to-top arrow
	jQuery("body").prepend("<a id='move-to-top' class='animate ' href='#blog'><i class='fa fa-chevron-up'></i></a>");
	
	var scrollDes = 'html,body';  
	/*Opera does a strange thing if we use 'html' and 'body' together so my solution is to do the UA sniffing thing*/
	if(navigator.userAgent.match(/opera/i)){
		scrollDes = 'html';
	}
	//show ,hide
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 160) {
			jQuery('#move-to-top').addClass('filling').removeClass('hiding');
		} else {
			jQuery('#move-to-top').removeClass('filling').addClass('hiding');
		}
	});
});


/*----------------------------------------------------
/* Make all anchor links smooth scrolling
/*--------------------------------------------------*/
jQuery(document).ready(function($) {
 // scroll handler
  var scrollToAnchor = function( id, event ) {
	// grab the element to scroll to based on the name
	var elem = $("a[name='"+ id +"']");
	// if that didn't work, look for an element with our ID
	if ( typeof( elem.offset() ) === "undefined" ) {
	  elem = $("#"+id);
	}
	// if the destination element exists
	if ( typeof( elem.offset() ) !== "undefined" ) {
	  // cancel default event propagation
	  event.preventDefault();

	  // do the scroll
	  var scroll_to = elem.offset().top;
	  $('html, body').animate({
			  scrollTop: scroll_to
	  }, 600, 'swing', function() { if (scroll_to > 46) window.location.hash = id; } );
	}
  };
  // bind to click event
  $("a").click(function( event ) {
	// only do this if it's an anchor link
	var href = $(this).attr("href");
	if ( href && href.match("#") && href !== '#' ) {
	  // scroll to the location
	  var parts = href.split('#'),
		url = parts[0],
		target = parts[1];
	  if ((!url || url == window.location.href.split('#')[0]) && target)
		scrollToAnchor( target, event );
	}
  });
});

/*----------------------------------------------------
/* Responsive Navigation
/*--------------------------------------------------*/
if (mts_customscript.responsive && mts_customscript.nav_menu != 'none') {
	jQuery(document).ready(function($){
		$('.secondary-navigation').append('<div id="mobile-menu-overlay" />');
		// merge if two menus exist
		if (mts_customscript.nav_menu == 'both' && !$('.navigation.mobile-only').length) {
			$('.navigation').not('.mobile-menu-wrapper').find('.menu').clone().appendTo('.mobile-menu-wrapper').hide();
		}
	
		$('.toggle-mobile-menu').click(function(e) {
			e.preventDefault();
			e.stopPropagation();
			$('body').toggleClass('mobile-menu-active');

			if ( $('body').hasClass('mobile-menu-active') ) {
				if ( $(document).height() > $(window).height() ) {
					var scrollTop = ( $('html').scrollTop() ) ? $('html').scrollTop() : $('body').scrollTop();
					$('html').addClass('noscroll').css( 'top', -scrollTop );
				}
				$('#mobile-menu-overlay').fadeIn();
			} else {
				var scrollTop = parseInt( $('html').css('top') );
				$('html').removeClass('noscroll');
				$('html,body').scrollTop( -scrollTop );
				$('#mobile-menu-overlay').fadeOut();
			}
		});
	}).on('click', function(event) {

		var $target = jQuery(event.target);
		if ( ( $target.hasClass("fa") && $target.parent().hasClass("toggle-caret") ) ||  $target.hasClass("toggle-caret") ) {// allow clicking on menu toggles
			return;
		}
		jQuery('body').removeClass('mobile-menu-active');
		jQuery('html').removeClass('noscroll');
		jQuery('#mobile-menu-overlay').fadeOut();
	});
}

/*----------------------------------------------------
/*  Dropdown menu
/* ------------------------------------------------- */
jQuery(document).ready(function($) {
	
	function mtsDropdownMenu() {
		var wWidth = $(window).width();
		if(wWidth > 865) {
			$('#navigation ul.sub-menu, #navigation ul.children').hide();
			var timer;
			var delay = 100;
			$('#navigation li').hover( 
			  function() {
				var $this = $(this);
				timer = setTimeout(function() {
					$this.children('ul.sub-menu, ul.children').slideDown('fast');
				}, delay);
				
			  },
			  function() {
				$(this).children('ul.sub-menu, ul.children').hide();
				clearTimeout(timer);
			  }
			);
		} else {
			$('#navigation li').unbind('hover');
			$('#navigation li.active > ul.sub-menu, #navigation li.active > ul.children').show();
		}
	}

	mtsDropdownMenu();

	$(window).resize(function() {
		mtsDropdownMenu();
	});
});

/*---------------------------------------------------
/*  Vertical menus toggles
/* -------------------------------------------------*/
jQuery(document).ready(function($) {

	$('.widget_nav_menu, #navigation .menu').addClass('toggle-menu');
	$('.toggle-menu ul.sub-menu, .toggle-menu ul.children').addClass('toggle-submenu');
	$('.toggle-menu ul.sub-menu').parent().addClass('toggle-menu-item-parent');

	$('.toggle-menu .toggle-menu-item-parent').append('<span class="toggle-caret"><i class="fa fa-plus"></i></span>');

	$('.toggle-caret').click(function(e) {
		e.preventDefault();
		$(this).parent().toggleClass('active').children('.toggle-submenu').slideToggle('fast');
	});
});


/*----------------------------------------------------
/* Social button scripts
/*---------------------------------------------------*/
jQuery(document).ready(function($){
	(function(d, s) {
		var js, fjs = d.getElementsByTagName(s)[0], load = function(url, id) {
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.src = url; js.id = id;
			fjs.parentNode.insertBefore(js, fjs);
		};
		jQuery('span.facebookbtn, span.facebooksharebtn, .facebook_like').exists(function() {
			load('//connect.facebook.net/en_US/all.js#xfbml=1&version=v2.3', 'fbjssdk');
		});
		jQuery('span.twitterbtn').exists(function() {
			load('//platform.twitter.com/widgets.js', 'tweetjs');
		});
	}(document, 'script'));
});

/*----------------------------------------------------
/* Lazy load avatars
/*---------------------------------------------------*/
jQuery(document).ready(function($){
	var lazyloadAvatar = function(){
		$('.comment-author .avatar').each(function(){
			var distanceToTop = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			var isVisible = distanceToTop - scroll < windowHeight;
			if( isVisible ){
				var hashedUrl = $(this).attr('data-src');
				if ( hashedUrl ) {
					$(this).attr('src',hashedUrl).removeClass('loading');
				}
			}
		});
	};
	if ( $('.comment-author .avatar').length > 0 ) {
		$('.comment-author .avatar').each(function(i,el){
			$(el).attr('data-src', el.src).removeAttr('src').addClass('loading');
		});
		$(function(){
			$(window).scroll(function(){
				lazyloadAvatar();
			});
		});
		lazyloadAvatar();
	}
});

/*----------------------------------------------------
/* Header Search
/*---------------------------------------------------*/
jQuery(document).ready(function($){

	$('.head-search').on('click', '.search-trigger', function(e){
	
		var $form = $(this).next('#searchform');

		$form.stop().fadeToggle();
		$form.find('#s').focus();

		e.stopPropagation();
		e.preventDefault();

	});

	$('#header').on('click', '#searchform', function(e){
		e.stopPropagation();
	});

	$(document).on('click', function(e){
		$('#header #searchform').stop().fadeOut();
	});

});

/*----------------------------------------------------
/* Popular / Latest Post Tabs
/*---------------------------------------------------*/

function mts_loadTabContent( tab_name, page ) {
	
	var container = jQuery('#tab-content');
	var tab_content = jQuery(tab_name);
	if (!page) page = 1;
		
	// only load content if it wasn't already loaded
	var isLoaded = parseInt(tab_content.data('loaded')) || 0;
	if ( isLoaded < page ) {
		if (!container.hasClass('mts-loading')) {
			container.addClass('mts-loading');
			if (page > 1) {
				tab_content = tab_content.append('<div class="more-page-'+page+'"></div>').find('.more-page-'+page);
			}
			tab_content.load(mts_customscript.ajax_url, {
					action: 'mts_home_tabs_content',
					tab: tab_name,
					page: page
				}, function() {
					container.removeClass('mts-loading');
					if (page == 1) {
						tab_content.data('loaded', page).hide().fadeIn().siblings().hide();
					} else {
						tab_content.hide().fadeIn().parent().data('loaded', page);
						tab_content.parent().find('[id=load-posts]').hide().last().show();
					}
				}
			);
		}
	} else {
		tab_content.fadeIn().siblings().hide();
	}
}

jQuery(document).ready(function($){

	$('#tab-group li').on( 'click', 'a', function(e) {
		var $this = $(this);

		e.preventDefault();
		$this.parent().addClass('active').siblings().removeClass('active');
		var tab_name = $this.attr( 'href' ),
			tab_name = tab_name+'-content';
		mts_loadTabContent ( tab_name );
			
	});

	$('#tab-group li').first().find('a').click();

	$('#tab-content').on('click', '#load-posts > a', function(e) {
		e.preventDefault();
		var $this = $(this);
		
		if ($this.is('.disabled'))
			return true;

		var page = parseInt($this.data('page'));
		var tab_name = $this.data('tab');
		mts_loadTabContent ( tab_name,  page );
	});	

});