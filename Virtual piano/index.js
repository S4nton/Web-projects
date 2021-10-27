let audio;
document.addEventListener("keydown", function (event) {
    if (event.code === "KeyA") {
        audio = new Audio("musicForPiano/A.mp3");
        return audio.play();
    } else if (event.code === "KeyS") {
        audio = new Audio("musicForPiano/S.mp3");
        return audio.play();
    } else if (event.code === "KeyD") {
        audio = new Audio("musicForPiano/D.mp3");
        return audio.play();
    } else if (event.code === "KeyF") {
        audio = new Audio("musicForPiano/F.mp3");
        return audio.play();
    } else if (event.code === "KeyG") {
        audio = new Audio("musicForPiano/G.mp3");
        return audio.play();
    } else if (event.code === "KeyH") {
        audio = new Audio("musicForPiano/H.mp3");
        return audio.play();
    } else if (event.code === "KeyJ") {
        audio = new Audio("musicForPiano/J.mp3");
        return audio.play();
    } else if (event.code === "KeyW") {
        audio = new Audio("musicForPiano/W.mp3");
        return audio.play();
    } else if (event.code === "KeyE") {
        audio = new Audio("musicForPiano/E.mp3");
        return audio.play();
    } else if (event.code === "KeyT") {
        audio = new Audio("musicForPiano/T.mp3");
        return audio.play();
    } else if (event.code === "KeyY") {
        audio = new Audio("musicForPiano/Y.mp3");
        return audio.play();
    } else if (event.code === "KeyU") {
        audio = new Audio("musicForPiano/U.mp3");
        return audio.play();
    }
    else {
        console.log("Unexpected keydown!");
    }
})