'use strict';

document.addEventListener("scroll", throttle(function() {
  if (window.pageYOffset > 300) {
      header.classList.add('float');
      header.classList.remove('text-shadow');
      nav.classList.remove('nav-hover-bg')
      nav.classList.add('nav-hover-underline')
      menu.classList.add('fill-black')
      list.style.top = '60px'
  } else {
      header.classList.remove('float');
      header.classList.add('text-shadow');
      nav.classList.add('nav-hover-bg')
      nav.classList.remove('nav-hover-underline')
      menu.classList.remove('fill-black')
      list.style.top = '80px'
  }
},300),{passive: true});

document.body.addEventListener('touchstart',function(){},false);

mobileNav.addEventListener('click', function() {
    if (getComputedStyle(list).visibility !== 'visible') {
        list.style.visibility = 'visible';
        list.classList.add('list-open')
    } else {

        list.classList.remove('list-open')
        list.style.visibility = 'hidden';
    }
})

//节流函数
function throttle(func, wait) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    var later = function() {
      previous = new Date();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = new Date();
      if (!previous) previous = now;
      // remaining time
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
     if (remaining <= 0 || remaining > wait) {
         if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };