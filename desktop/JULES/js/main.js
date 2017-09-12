var audio;

//Hide Pause / Stop
$('#pause').hide();
$('#stop').hide();
$('#duration').css({
    fontStyle: "'Britannic Bold', serif",
    color: "#EDD8C7"
})

// Initializing
initAudio($('#playlist li:first-child'));

// Initializer
function initAudio (element) {
    var song = element.attr('song');
    var title = element.text();
    var cover = element.attr('cover');
    var artist = element.attr('artist');

    audio = new Audio('media/' + song);
    
    if(!audio.currentTime) {
        $('#duration').html('0:00');
    }

    $('#audio-player .title').text(title);
    $('#audio-player .artist').text(artist);

    $('img.cover').attr('src', 'cover/' + cover);

    $('#playlist li').removeClass('active');
    element.addClass('active')
}


// Button
$('#muter').click(function () {
    audio.volume = 0;

    
})
$('#play').click(function () {
        audio.play();
        $('#play').hide();
        $('#pause').show();
        $('#duration').fadeIn(400);
        showDuration();
        
})
$('#play').mouseenter(function () {
    $(this).css("cursor", "pointer");
})

$('#pause').click(function() {
    audio.pause();
    $('#pause').hide();
    $('#play').show();
})
$('#pause').mouseenter(function () {
    $(this).css("cursor", "pointer");
})

$('#stop').click(function() {
    audio.pause();
    audio.currentTime = 0;
    $('#pause').hide();
    $('#play').show();
    $('#duration').fadeOut(400);
})
$('#stop').mouseenter(function () {
    $(this).css("cursor", "pointer");
})

$('#next').click(function() {
    audio.pause();
    $('#pause').show();
    $('#play').hide();
    var next = $('#playlist li.active').next();

    if (next.length == 0) {
        next = $('#playlist li:first-child');
    }
    initAudio(next);
    audio.play();    
    
    showDuration();
})
$('#next').mouseenter(function () {
    $(this).css("cursor", "pointer");
})

$('#prev').click(function() {
    audio.pause();
    $('#pause').show();
    $('#play').hide();
    
    var prev = $('#playlist li.active').prev();

    if (prev.length == 0) {
        prev = $('#playlist li:last-child');
    }
    initAudio(prev);
    audio.play();
    showDuration();
})
$('#prev').mouseenter(function () {
    $(this).css("cursor", "pointer");
})

$('#volume').change(function() {
    audio.volume = parseFloat(this.value/80)
});

//Time

function showDuration() {
    $(audio).bind('timeupdate', function() {
        var s = parseInt(audio.currentTime % 60);
        var m = parseInt((audio.currentTime / 60) % 60);

        if (s < 0) {
            s = '0' + s;
        }
        if(s < 10){
            $('#duration').html(m + ':0' + s);
        } else {
            $('#duration').html(m + ':' + s)
        }
        var value = 0;
        if(audio.currentTime > 0) {
            value = Math.floor((100 / audio.duration) * audio.currentTime);
        }
        $('#progress').css('width', value + '%');
    })
}
