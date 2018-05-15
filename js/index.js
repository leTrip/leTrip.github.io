'use strict';


//评论左右切换
(function(){

    var length = document.querySelector('.comment').children.length-1;
    var index = 1;



    var previous = function(){
        var prepare,now;
        if(index !== 1){
          prepare = index-1;
          now = index--;
        }else{
          now = index;
          prepare = index= 4;
        }

        var nextDIV = document.querySelector('#comment'+prepare);
        var nowDIV = document.querySelector('#comment'+now);

        nextDIV.classList.add('comment-show');
        nextDIV.classList.add('previous-prepare');
        setTimeout(function(){
        nowDIV.classList.add('slide-to-right');
        nextDIV.classList.remove('previous-prepare');
        },0)



         setTimeout(function(){
        nowDIV.classList.remove('comment-show');
        nowDIV.classList.remove('slide-to-right');
        },1000)
                
    }

    var next = function(){
       var prepare,now;


        if(index !== length){
          prepare = index+1;
          now = index ++;
        }else{
          now = index;
          prepare = index = 1;
        }

        console.log(index,prepare,now)

        var nextDIV = document.querySelector('#comment'+prepare);
        var nowDIV = document.querySelector('#comment'+now);

        nextDIV.classList.add('comment-show');
        nextDIV.classList.add('next-prepare');
        setTimeout(function(){
        nowDIV.classList.add('slide-to-left');
        nextDIV.classList.remove('next-prepare');
        },0)

         setTimeout(function(){
        nowDIV.classList.remove('comment-show');
        nowDIV.classList.remove('slide-to-left');
        },1000)

    }

    nextBtn.onclick= next
    previousBtn.onclick= previous

})();