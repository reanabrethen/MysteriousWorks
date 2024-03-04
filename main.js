

window.addEventListener("click", () =>{
    const museumMusic = new Audio('sounds/Liebestraum.mp3')
    museumMusic.volume = 0.1
    museumMusic.play()
})

const nextButton = document.querySelector('.next')


// nextButton.addEventListener('click', ()=>{
//     const artImages = document.querySelector('#art-display')
//     const title = document.querySelector('.title')
//     const dateDisplay = document.querySelector('.date-display')
//     const artistName = document.querySelector('.artist-title')
//     const placeOfOrgin = document.querySelector('.place-of-orgin')
//     const artMedium = document.querySelector('.medium-display')
    
    const chicagoArtMuseumAPI = `https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,date_display,main_reference_number,medium_display,place_of_origin`
    
    fetch(chicagoArtMuseumAPI)
    .then((information)=>{
        console.log('information received')
        console.log(information)
        return information.json()   //promise
    })
    .then((artObj)=>{
        console.log('response processed')
        console.log(artObj)
        // artImages.src = artObj.message
    })
// })

