const chicagoArtMuseumAPI = "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,date_display,main_reference_number,medium_display,place_of_origin"
const artImages = document.querySelector('#art-display')

window.addEventListener("DOMContentLoaded", () =>{
    const museumMusic = new Audio('sounds/Liebestraum.mp3')
    museumMusic.volume = 0.1
    museumMusic.play()
})






// // const museumMusic = new Audio('sounds/Liebestraum.mp3').play()
// const museumMusic = document.querySelector('#museum-music').play()
// museumMusic.autoplay = true
// museumMusic.play()

fetch(chicagoArtMuseumAPI)
    .then((response)=>{
        console.log('response received')
        console.log(response)
        return response.json()
    })
    .then((artObj)=>{
        console.log('response processed')
        // console.log(artObj.message)
        // artImages.src = artObj.message
    })