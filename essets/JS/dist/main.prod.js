"use strict";var menuMobile={init:function(){this.clickShowmenu(".humberger",".menu__list","showmenu"),this.clickShowmenu("#item2 .list--item-black","#item2 .drop__menu","showMenu"),this.clickShowmenu("#item3 .list--item-black","#item3 .drop__menu","showMenu"),this.clickShowmenu("#item4 .list--item-black","#item4 .drop__menu","showMenu"),this.clickShowmenu("#item5 .list--item-black","#item5 .drop__menu","showMenu"),this.clickShowmenu("#item6 .list--item-black","#item6 .drop__menu","showMenu"),this.clickShowmenu("#item7 h5","#item7 .drop__menu2","showmenu2"),this.clickShowmenu("#item8 h5","#item8 .drop__menu2","showmenu2"),this.scrollMenu(".header","fixmenu")},clickShowmenu:function(e,t,i){var n=document.querySelector(e),o=document.querySelector(t);n.addEventListener("click",function(){o.classList.toggle(i)})},scrollMenu:function(e,t){var i=document.querySelector(e),n=document.querySelector(e).offsetHeight;window.addEventListener("scroll",function(){var e=window.pageYOffset;n/2<=e?i.classList.add(t):i.classList.remove(t)})}};menuMobile.init(),$(document).ready(function(){$(".team_slide").owlCarousel({loop:!0,margin:10,autoplay:!0,autoplayTimeout:2e3,responsiveClass:!0,responsive:{0:{items:1,nav:!1},500:{items:2,nav:!1},1e3:{items:3,loop:!0}}})}),$(document).ready(function(){$(".slide_creative").owlCarousel({loop:!0,margin:15,autoplay:!0,autoplayTimeout:2e3,responsiveClass:!0,responsive:{0:{items:1,nav:!1},500:{items:2,nav:!1},1e3:{items:3,loop:!0}}})}),$(document).ready(function(){$(".testional-carousel").owlCarousel({loop:!0,margin:15,autoplay:!0,autoplayTimeout:2e3,responsiveClass:!0,responsive:{0:{items:1,nav:!1},500:{items:1,nav:!1},1e3:{items:1,loop:!0}}})});var client=document.querySelector(".clients__items"),clientItem=document.querySelectorAll(".clients__item"),clientBtn=document.querySelectorAll(".clients__button"),c=0,clientSize=clientItem[0].offsetWidth+25;client.style.transform="translateX(".concat(-clientSize*c,"px)"),autoPlay=function(){clientBtn.forEach(function(e){return e.classList.remove("active")}),c++,client.style.transition=".5s ease-out",c%=clientItem.length,client.style.transform="translateX(".concat(-clientSize*c,"px)"),clientBtn[c].classList.add("active")},setInterval(autoPlay,5e3),clientBtn.forEach(function(e){return e.addEventListener("click",function(e){clientBtn.forEach(function(e){return e.classList.remove("active")});var t=e.target.dataset.count;client.style.transition=".5s ease-out",client.style.transform="translateX(".concat(-clientSize*t,"px)"),clientBtn[t].classList.add("active")})});var video={init:function(){this.showVideo()},showVideo:function(){var e=document.querySelector(".bnt_play"),t=document.querySelector(".modal__video");e.addEventListener("click",function(){t.style.display="block"})}};window.onclick=function(e){"modal__video"===e.target.className&&(e.target.style.display="none")};