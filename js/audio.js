let boton = document.querySelector("#botonRusia")
let audioEtiqueta = document.querySelector("audio")

boton.addEventListener("click", () => {
    audioEtiqueta.setAttribute("src", "../audio/Rimsky-Korsakov-The-Flight-of-the-Bumble-Bee-CLA014201 (mp3cut.net).wav")
    audioEtiqueta.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
})