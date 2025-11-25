function remove_shorts(shorts: NodeListOf<Element>){
    console.log("Removing Youtube shorts")
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
    const shorts = document.querySelectorAll('[is-shorts=""]') ?? []
    if (shorts.length > 0) {
        remove_shorts(shorts)
    }
}, 1000)