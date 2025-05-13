// set the language switcher cookie
function setPreferredLanguage(language, days) 
    {
        var exdate=new Date();
        exdate.setDate(exdate.getDate() + days);
        var cookievalue=escape(language) + ((days==null) ? "" : "; expires="+exdate.toUTCString());
        document.cookie="prefer-language=" + cookievalue + "; path=/";
    }

// submit search form on pressing return key
function submitForm(event, formID)
    {
        if (event.keyCode == 13) 
            {
                //target.form.submit();
                //alert(formID);
                document.forms.muiSuche.submit();
                return true;
            }
        return true;
    }







/*window.addEvent('domready', function() {
	if ($$('body.start').length > 0)
		$('muiTeaser').agListFader({showNav:true, intervalTime:6000});

	// function von p.d.
	//aktivieren und stylen des fontsize men�s AAA
	//merken der fontsize in einem session cookie
	var fontSizeElements = $('muiMetaMenu').getElements('.fontsizer a');
	for (var i=0; i<fontSizeElements.length;i++){
		var multi = 12+(1*i);
		//var multi = 11+(3*i);
		fontSizeElements[i].style.fontSize = multi+'px'
		fontSizeElements[i].store('multi', multi);
		fontSizeElements[i].addEvent('click', function(){
		   var multi = this.retrieve('multi');
		   document.getElement('body').style.fontSize = multi + 'px';
		   Cookie.write('muiFontSize',multi);
		   setBoxHeights();
	   });
	}
	
	setFontSize();
	setBoxHeights();

});*/


// function von p.d.
//setzen der fontsizes im body, wirkt auf alle em definitionen
function setFontSize(){
	var storedSize = Cookie.read('muiFontSize');
	if (storedSize != null) document.getElement('body').style.fontSize = storedSize + 'px';
}

// function von p.d.
//setzen einheitlicher h�he von .box innerhalb von .boxline
function setBoxHeights() {
	var boxLinedElements = $('muiCont').getElements('.boxline');
	for (var i=0; i<boxLinedElements.length;i++){
		var childElements = boxLinedElements[i].getChildren('.box');
		for(var j=0;j<childElements.length;j++) childElements[j].removeProperty('style');
		var childMaxHeight = boxLinedElements[i].getChildren('.box').getStyle('height').max();
		if (childMaxHeight > 250) {
			childMaxHeight  = childMaxHeight/2;
		}
		for(var j=0;j<childElements.length;j++) childElements[j].style.height = childMaxHeight + 'px';
	}
}


function emptyField(eItem,eValue,eMode){
	if(eItem == undefined || eValue == undefined || eMode == undefined) return;
	if(eMode){
		if(eItem.value == eValue)
			eItem.value = "";
	}else{
		if(eItem.value == "")
			eItem.value = eValue;
	}
}

Array.prototype.max = function() {
	var max = parseFloat(this[0]);
	var len = this.length;
	for (var i = 1; i < len; i++) if (parseFloat(this[i]) > max) max = parseFloat(this[i]);
	return max;
}


// Typoersetzung mittels cufon
//Cufon.replace('h1',{fontFamily:'CorporateA'});
/*Cufon.replace('div.muiDeptHeadline',{fontFamily:'CorporateA'});
Cufon.replace('h1',{fontFamily:'CorporateS'});
Cufon.replace('.start h2',{fontFamily:'CorporateA'});
Cufon.replace('.folge h2',{fontFamily:'CorporateS'});
Cufon.replace('h3',{fontFamily:'CorporateA'});
//Cufon.replace('.tnews span',{fontFamily:'CorporateA', hover:true});
Cufon.replace('#muiMainMenu p',{fontFamily:'CorporateS', hover:true});
Cufon.replace('.zitat p',{fontFamily:'CorporateA'});
Cufon.replace('p.quelle',{fontFamily:'CorporateS'});*/



// class Definition von p.d.
// bildwechsler basierend auf UL innerhalb div mit ID
/*var agListFader = new Class({
	Implements: Options,
	options: {showNav: true, intervalTime: 0},
	initialize: function(listfader,options){
		this.setOptions(options);
		this.listfader = document.id(listfader);
		var listholder = document.id(listfader).getFirst('ul');
		var listlinks = new Element('p');
		var listnavigator = new Element('div.navigate');
		listholder.getChildren('li').each(function(item, index){
			(index == 0) ? item.fade('show') : item.fade('hide');
			this.itemAnchor = new Element('a', {
				'class': (index == 0) ? 'current' : 'common',
				html: index+1,
				events: {
					click: function(){
						this.getSiblings('a').each(function(aitem){aitem.removeClass('current');aitem.addClass('common');});
						this.removeClass('common');
						this.addClass('current');
						this.retrieve('theList').getChildren('li').each(function(liItem){if (liItem.getStyle('opacity') != 0) liItem.fade('out');});
						this.retrieve('myItem').fade('in');
						if (options.intervalTime != undefined && options.intervalTime > 0){
							clearInterval(doChange.timer);
							doChange.timer = doChange.periodical(options.intervalTime);
						}
					}
				}
			});
			
			itemAnchor.store('myItem',item);
			itemAnchor.store('theList',listholder);
			itemAnchor.inject(listlinks);
			
		});
		
		listlinks.inject(listnavigator);
		
		var doChange = function(){
			listlinks.getChildren('a').each(function(aItem){aItem.addClass('common'), aItem.removeClass('current');});
			listholder.getChildren('li').each(function(item, index){
				if (item.getStyle('opacity') != 0) {
					item.fade('out');
					if (item.getNext('li') != null) {
						item.getNext('li').fade('in');
						navItem = listlinks.getChildren('a')[index+1];
					} else {
					   item.getParent().getFirst('li').fade('in');
					   navItem = listlinks.getChildren('a')[0];
					}
					navItem.addClass('current');
					navItem.removeClass('common');
				}
			});
		}

		// erzeugt Navigations element
		if(this.options.showNav)
			listnavigator.inject(this.listfader);
			
		// automatischer Wechsel, falls intervalTime gr��er 0
		if(this.options.intervalTime > 0)
			doChange.timer = doChange.periodical(this.options.intervalTime);
	},

	toElement: function(){
		return this.listfader
	}

});


Element.implement({
	agListFader: function (options){
		this.store('agListFader',new agListFader(this,options));
		return this;
	}
});*/



//neu

$(document).ready(function() {
    $('.news-carousel').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        margin: 2,
        autoplay:true,
        //autoplayTimeout:30000
        autoplayTimeout:12000
    })
});

$(document).ready(function() {
    $('.teaser-slider').owlCarousel({
        items: 2,
        loop: true,
        margin: 5,
        navigation: true,
        //navigationText: ["<img src='myprevimage.png'>","<img src='mynextimage.png'>"]
        responsiveClass:true,
		dots: false,
        responsive: {
            0: {
                items: 1,
            },
            992: {
                items: 2,
            }
        }
    });
    var owl = $('.teaser-slider');
    $('.customNextBtn').not('.setup').click(function() {
        owl.trigger('next.owl.carousel');
    }).addClass('setup');
// Go to the previous item
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })
});
$(document).ready(function () {
	/*$('li.li1.has-submenu').hover(function () {
        var element = $(this);
		if ($(this).hasClass('mobile')){
		} else {
            element.addClass('active');
            element.prev().addClass('no-border');
            setTimeout(function () {
                element.addClass('visible');
            },50);
        }
    }, function() {
        var element = $(this);
        element.removeClass('visible');
        element.prev().removeClass('no-border');
        setTimeout(function () {
            element.removeClass( "active" );
        },250);
    });*/
});

function reset_submenu(){
	var l1 = $("#muiMainMenu .li1");
	if (l1.hasClass('subebene-1')){
    $("#muiMainMenu.submenu-active").removeClass("submenu-active");
    l1.removeClass("subebene-1");
	}
	else if(l1.hasClass('subebene-2')){
        $("#muiMainMenu .li1.subebene-2 .ul3").removeClass('active');
        $("#muiMainMenu .li1.subebene-2").addClass('subebene-1').removeClass("subebene-2");

	}
}

$(document).ready(function () {
    $('.burgericon a').not('setup').click(function () {
        $('html').addClass('menu-open');
        $('#muiMainMenu').addClass('active');
        $('#muiMainMenu .li1').addClass('mobile');
    }).addClass('setup');
    $('.close a').not('setup').click(function () {
        $('html').removeClass('menu-open');
        $('#muiMainMenu').removeClass('active');
        $('#muiMainMenu .li1').removeClass('mobile');
        reset_submenu();
    }).addClass('setup');
    $('#muiMainMenu .li1 p > span').not('.setup').click(function () {
    	$(this).parents('.li1').addClass('subebene-1');
    	$('#muiMainMenu').addClass('submenu-active');
    }).addClass('setup');
    $('#muiMainMenu .back-btn a').not('.setup').click(function () {
    	reset_submenu();
    }).addClass('setup');
    $('#muiMainMenu .li1 .li3.main-point >span img').not('.setup').click(function () {
        $(this).parents('.li1').removeClass('subebene-1');
        $(this).parents('.li1').addClass('subebene-2');
        $(this).parents('.ul3').addClass('active');
    }).addClass('setup');

    $(window).resize(function () {
        var fensterbreiter = window.outerWidth;
        if (fensterbreiter > 991){
			$('html').removeClass('menu-open');
			$('#muiMainMenu').removeClass('active');
			$('#muiMainMenu .li1').removeClass('mobile');
            reset_submenu();
        }
    });

	var image_count = $('.contentheader .image-col img').length;
    var random_image = Math.floor((Math.random() * image_count)+1);
    console.log(random_image);
    $('.contentheader .image-col img:nth-of-type('+random_image+')').addClass('active');

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 200){
        	$('#muiMainMenu_fixed').not('.fixed').addClass('fixed');
		}
		else {
            $('#muiMainMenu_fixed.fixed').removeClass('fixed');
		}
        // Do something
    });
    var container_margin = $('.main-container > .container').css('margin-right');
    $('.headline-right:after').css('width',container_margin);
});

$(document).ready(function () {
    $('#muiMetaMenu li.has-submenu').hover(function () {
		$(this).addClass('active');
        setTimeout(function () {
            $(this).addClass('visible')
        },100);
    }, function() {
        $( this ).removeClass( "active" );
    });
});

$(document).ready(function () {
	$('.muiMetaMenu-mobile .has-submenu a').not('.setup').click(function () {
		$(this).parent('.has-submenu').toggleClass('active');
    }).addClass('setup');
});

$(document).ready(function () {
	$('#muiMainMenu_fixed #muiSearchFixed .button a').click(function (e) {
        var menu_width = $('#muiMainMenu_fixed ul.ul1').width() - 155;
        var input = $('#muiMainMenu_fixed #muiSearchFixed input.x2');
        input.parent().addClass('search_open');
        input.css('width',menu_width);
        if (input.hasClass('open')) {
            document.forms.muiSuche.submit();
		}
		input.addClass('open');
    })
})

$(document).ready(function() {
    $('.share-popup').click(function(e) {
        e.preventDefault();
        window.open($(this).attr('href'), 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;
    });
});
/*
 *  Hyphenator_Loader 5.3.0 - client side hyphenation for webbrowsers
 *  Copyright (C) 2017  Mathias Nater, Zürich (mathiasnater at gmail dot com)
 *  https://github.com/mnater/Hyphenator
 *
 *  Released under the MIT license
 *  http://mnater.github.io/Hyphenator/LICENSE.txt
 */

/** @license Hyphenator_Loader 5.3.0 - client side hyphenation for webbrowsers
 *  Copyright (C) 2017  Mathias Nater, Zürich (mathiasnater at gmail dot com)
 *  https://github.com/mnater/Hyphenator
 *
 *  Released under the MIT license
 *  http://mnater.github.io/Hyphenator/LICENSE.txt
 */

/**
 * @constructor
 * @description Checks if there's CSS-hyphenation available for the given languages and
 * loads and runs Hyphenator if there's no CSS-hyphenation
 * @author Mathias Nater, <a href = "mailto:mathias@mnn.ch">mathias@mnn.ch</a>
 * @version 5.3.0
 * @namespace Holds all methods and properties
 */

/* The following comment is for JSLint: */
/*jslint browser: true multivar: true, single: true*/
/*global window Hyphenator*/

var Hyphenator_Loader = (function (window) {
    'use strict';
    var languages,
        config,
        path,

        /**
         * @name Hyphenator-createElem
         * @description
         * A function alias to document.createElementNS or document.createElement
         * @param {string} tagname the Element to create
         * @type {function({string})}
         * @private
         */
        createElem = function (tagname) {
            var r;
            if (window.document.createElementNS) {
                r = window.document.createElementNS('http://www.w3.org/1999/xhtml', tagname);
            } else if (window.document.createElement) {
                r = window.document.createElement(tagname);
            }
            return r;
        },

        /**
         * @name Hyphenator-loadNrunHyphenator
         * @description Loads Hyphenator.js and runs it with the given configuration
         * @type {function({object})}
         * @param {object} config the configuration object for Hyphenator.js
         * @private
         */
        loadNrunHyphenator = function (config) {
            var head, script, done = false;

            head = window.document.getElementsByTagName('head').item(0);
            script = createElem('script');
            script.src = path;
            script.type = 'text/javascript';
            script.onreadystatechange = function () {
                if (!done && (!script.readyState || script.readyState === "loaded" || script.readyState === "complete")) {
                    done = true;
                    Hyphenator.config(config);
                    Hyphenator.run();

                    // Handle memory leak in IE
                    script.onreadystatechange = null;
                    script.onload = null;
                    if (head && script.parentNode) {
                        head.removeChild(script);
                    }
                }
            };
            script.onload = script.onreadystatechange;
            head.appendChild(script);
        },

        /**
         * @name Hyphenator-checkLangSupport
         * @description
         * Checks if hyphenation for all languages are supported:
         * If body is present (i.e. DOMContentLoaded) a hidden div is added to the body and the height of probably hyphenated text is measured.
         * Else a fake body is inserted and used instead of the 'real' body. It will later be removed.
         * @type {function()}
         * @return {bool}
         * @private
         */
        checkLangSupport = function () {
            var shadowContainer,
                shadow,
                lang,
                fakeBdy = createElem('body');
            shadowContainer = createElem('div');
            shadowContainer.style.visibility = 'hidden';

            fakeBdy.appendChild(shadowContainer);
            window.document.documentElement.appendChild(fakeBdy);

            for (lang in languages) {
                if (languages.hasOwnProperty(lang)) {
                    shadow = createElem('div');
                    shadow.style.MozHyphens = 'auto';
                    shadow.style['-webkit-hyphens'] = 'auto';
                    shadow.style['-ms-hyphens'] = 'auto';
                    shadow.style.hyphens = 'auto';
                    shadow.style.width = '5em';
                    shadow.style.lineHeight = '12px';
                    shadow.style.border = 'none';
                    shadow.style.padding = '0';
                    shadow.style.wordWrap = 'normal';
                    shadow.style['-webkit-locale'] = "'" + lang + "'";
                    shadow.lang = lang;
                    shadow.appendChild(window.document.createTextNode(languages[lang]));
                    shadowContainer.appendChild(shadow);
                    if (shadow.offsetHeight <= 13) {
                        loadNrunHyphenator(config);
                        break;
                    }
                }
            }

            fakeBdy.parentNode.removeChild(fakeBdy);
        };

    return {
        /**
         * @name Hyphenator_Loader.init
         * @description Bootstrap function that inits the loader
         * @param {Object} languages an object with the language as key and a long word as value
         * @param {Object} config the Hyphenator.js configuration object
         * @public
         */
        init: function (langs, p, configs) {
            languages = langs;
            path = p;
            config = configs || {};
            checkLangSupport();
        }
    };
}(window));Hyphenator_Loader.init({
    "en": "hyphenationalgorithm",
    "hy": "Հայերենն"
}, "/themes/imed_neu/js/Hyphenator.js",{useCSS3hyphenation : true
});