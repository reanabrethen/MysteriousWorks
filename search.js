//declare music to variable
const searchMusic = new Audio('sounds/Lang Lang Debussy Suite bergamasque, L.75 III. Clair de lune.mp3')

//target browser to play when loaded
window.addEventListener('DOMContentLoaded', ()=>{
    searchMusic.volume = 0.1
    searchMusic.play()
})

// pause/play button to give option to user to stop or play music
const playButton = document.querySelector('#play')
const pauseButton = document.querySelector('#pause')

    playButton.addEventListener('click', ()=>{
        searchMusic.play()
    })

    pauseButton.addEventListener('click', ()=>{
        searchMusic.pause()
    })


const searchButton = document.querySelector(".fa-solid fa-magnifying-glass fa-2xs")

//API 
const chicagoArtMuseumAPI = "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,date_start,date_end,place_of_origin,image_id,medium_display,dimensions?page=2&limit=100"

//search API
// let searchAPI ='https://api.artic.edu/api/v1/artworks/search?q=cats'

fetch(chicagoArtMuseumAPI)
    .then((information)=>{
        console.log(information)
        return information.json()
    })
    .then((artObj)=>{
        console.log('information processed')
        console.log(artObj.data)

        let imgArr = []
        let artData = artObj.data

        artData.forEach(artwork =>{
            imgArr.push(`https://api.artic.edu/api/v1/artworks/search?q=${artwork.image_id}`)
        })

        console.log(imgArr)
    })