var alreadyRun = false;

window.onscroll = function(){

    //throttle
    if (alreadyRun) return;
    alreadyRun = true;
    setTimeout(function(){
        alreadyRun = false;
    }, 100);


    var imgs = document.querySelectorAll('img[data-src]');
    for (var i = 0; i < imgs.length; i++) {
        if (imgs[i].getBoundingClientRect().top < window.innerHeight) {
            imgs[i].src = imgs[i].getAttribute('data-src');
        }
    }
}