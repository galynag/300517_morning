function string(str) {
    var rts='';
    for (var i=0; i<str.length; i++) {
        rts+= str[str.length-1-i];
        console.log(rts);
    }
}
string('01234 56');


window.addEventListener('load',function() {
 //    console.log(event);
 //    console.log(this.outerHeight);
 //    console.log(this.parent.innerHeight);
 //    console.log(this.parent.document.activeElement.children);
 //    console.log(this.document.activeElement.children[0].offsetHeight);
    if (this.outerHeight > this.document.activeElement.children[0].offsetHeight) {
        $('footer').css({
            'position' : 'absolute',
            'bottom':'0'
        })
    } else return false
});