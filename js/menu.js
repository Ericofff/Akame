
$(document).ready(function(){
    const openMenu = document.getElementById('menu-dropdown');
    const menu = document.getElementById('dropdown')
    $(openMenu).click(function(){
        $(menu).toggleClass( "showdrop", 1000, "easeOutSine" );
        console.log("oi");
        
    });
});