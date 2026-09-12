(function() {


/*console.log = function() {}

})();*/

window.addEventListener('load', function () {
    window.focus();
    document.body.addEventListener('click',function(e) {
        window.focus();
    },false);
});
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

})