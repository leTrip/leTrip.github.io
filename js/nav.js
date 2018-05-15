'use strict';

document.addEventListener("scroll", throttle(function() {
  if (window.pageYOffset > 600) {
      header.classList.add('float');
      header.classList.remove('text-shadow');
      nav.classList.remove('nav-hover-bg')
      nav.classList.add('nav-hover-underline')
  } else {
      header.classList.remove('float');
      header.classList.add('text-shadow');
      nav.classList.add('nav-hover-bg')
      nav.classList.remove('nav-hover-underline')
  }
},300),{passive: true});


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