document.addEventListener('DOMContentLoaded', setVal);

   
var targetScrollPos;
var scrollPos = 0;
var nowScrollPos = pageYOffset;
var scrollInterval;


function setVal()
{
 
    var menu = document.querySelectorAll('.menu-top p');
    var contents = document.querySelectorAll('#contents > section');

    for(var i =0; i < menu.length; i++)
    {
        menu[i].addEventListener('click', menuClick);

        function menuClick()
        {        clearInterval(scrollInterval);

            var index = this.getAttribute('clickVal');
            targetScrollPos = contents[index].offsetTop;

            scrollInterval = setInterval(moveTo, 50);

        }
    }
}


window.addEventListener('scroll', scrollFn);

function scrollFn()
{
    nowScrollPos = pageYOffset;
    scrollPos = nowScrollPos;
}


function moveTo()
{
    scrollPos += (targetScrollPos - nowScrollPos) * 0.3;
    nowScrollPos = scrollPos;
    window.scroll(0, Math.round(scrollPos));

    if(Math.abs(targetScrollPos - scrollPos) <= 1)
    {
        window.scroll(0, targetScrollPos);
        nowScrollPos = targetScrollPos;
        clearInterval(scrollInterval);
    }
}
