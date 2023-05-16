$(document).ready(function(){
    const size = document.getElementsByClassName('si');
    $(size).click(function(){
        this.classlist.add( "showdrop");
        console.log("oi");
        
    });
});