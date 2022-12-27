$(() => {
    window.addEventListener('message', (event) => {
        let v = event.data
        if (v.talking == 1 ) {
            $('#icon').css('color', 'white')
        } else {
            $('#icon').css('color', 'rgba(255, 255, 255, 0.664)') 
        }
        if (v.talkingradio >= 1 ) {
            $('.inradio').css('display', 'block')
            $('.inradio').html(` ${v.talkingradio} ${v.freq}`);
        } else {
            $('.inradio').css('display', 'none')
        }
    })
})