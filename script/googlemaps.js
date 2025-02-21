var map = document.getElementById ('mymap'); 
var maplistner = function (e) { 
    var frame = document.createElement ('iframe'); 
    frame.src = this.getAttribute ('data-src');
    frame.width = 200;
    frame.height = 150;
    map.appendChild (frame); 
    map.removeEventListener ("mouseover", maplistner); 
}; 
map.addEventListener ('mouseover', maplistner); 