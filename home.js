function video() {
    var video = document.querySelector('video');
    if (video.pause) {
        video.play();
    }else {
        video.pause();
    }
}