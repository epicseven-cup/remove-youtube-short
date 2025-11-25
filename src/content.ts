function remove_shorts(){
    console.log("Removing Youtube shorts")
    const shorts = document.querySelectorAll('[is-shorts=""]') ?? []
    console.log(`Short content found: ${shorts.length}`)

    for (const e of shorts) {
        e.remove()
        console.log("Remove is called")
    }

    const short_button = document.querySelector("[title='Shorts']") ?? document.createElement("button")
    short_button.remove()

    // issue withthe video
    const short_video = document.getElementsByClassName("short-video-container") ?? []
    for (const e of short_video) {
        e.remove()
    }
}

setInterval( ()=> {
    remove_shorts()
}, 1000)