window.onload = function(){
    randColorMenu();
    //scrollFunction();
    //disableScroll();
    //setTimeout(enableScroll, 7000);
}

function randColorMenu(){ 
    var page1 = document.querySelector("#homePage");
    var page2 = document.querySelector("#featuredPage");
    var page3 = document.querySelector("#projectPage");
    var page4 = document.querySelector("#aboutPage");
    var menuItems = [page1, page2, page3, page4];
    var rgb1 = [];
    var rgb2 = [];
    var rgb3 = [];
    var rgb4 = [];
    var menuColors = [rgb1, rgb2, rgb3, rgb4];

    for (let c = 0; c < menuColors.length; c++) {
        var r = Math.floor((Math.random() * 146) + 55);
        var g = Math.floor((Math.random() * 146) + 55);
        var b = Math.floor((Math.random() * 146) + 55);
        menuColors[c].push(r,g,b);
        console.log(menuColors[c]);
    }

    for (let p = 0; p < menuItems.length; p++) {
        menuItems[p].style.backgroundColor = 'rgb(' + [menuColors[p][0],menuColors[p][1],menuColors[p][2]].join(',') + ')';
        console.log('rgb(' + [menuColors[p][0],menuColors[p][1],menuColors[p][2]].join(',') + ')');
    }
}

function scrollFunction() {
    let e = document.getElementById("top");
    console.log("YAYYAAY!!");
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
}

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function() {};
}

// var el = document.getElementById('btnScroll Down');
// if(el){
//     console.log("I AM READY!!")
//   el.addEventListener('click', scrollFunction, false);
// }

// document.getElementById("btnScrollDown").addEventListener("click", scrollFunction);