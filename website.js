


document.getElementById('footer-menu-open-close').onclick = function(){
    document.getElementById("abo-ali").classList.toggle('hide-nav-more');
}

 
    
var seemorebutton = document.getElementById('Smore');
var seelessbutton = document.getElementById('Smore1');
var adjustableneed = document.getElementById('nav-scroll2');
var firstdiv  = document.getElementById('firstdiv');
function seemore(){
    seelessbutton.style.display = "flex"
    adjustableneed.style.display = 'flex';
    seemorebutton.style.display = "none"
    firstdiv.style.borderBottom = 'none';
    adjustableneed.style.borderBottom = '1px solid rgba(128, 128, 128, 0.495)';
}
function seeless(){
    adjustableneed.style.display = 'none';
    firstdiv.style.borderBottom = '1px solid rgba(128, 128, 128, 0.495)';
    adjustableneed.style.borderBottom = 'none';
    seelessbutton.style.display = "none";
    seemorebutton.style.display = "flex";
}
   


seemorebutton.onclick = seemore;
seelessbutton.onclick = seeless;




document.getElementById('left-header-search-button').onclick = function(){
   let searchBar = document.getElementById('searchBar-input');
    searchBar.focus();
}

document.querySelector('#header-menu').onclick = function(){
    document.querySelector('#top-menu').classList.toggle('showmenu');
}



document.getElementById('back-icon1').onclick = function(){
    document.getElementById('search-popup').style.display= 'none';
}

