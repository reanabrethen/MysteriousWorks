//declare music variable for browser
const museumMusic = new Audio('sounds/Liebestraum.mp3')

// targets the whole browser & will play when loaded
window.addEventListener("DOMContentLoaded", () =>{
    museumMusic.volume = 0.1
    museumMusic.play()
     })

//create pause/play button for users to choose option for no music
const playButton = document.querySelector('#play')
const pauseButton = document.querySelector('#pause')

    playButton.addEventListener('click', ()=>{
        museumMusic.play()
    })

    pauseButton.addEventListener('click', ()=>{
        museumMusic.pause()
    })
  
//DEFAULT ARTWORK OBJ
let defaultArtwork = {
    title: 'The Bathers',
    artist_title: 'Winslow Homer',
    date_start: 1919,
    date_end: 1920,
    place_of_origin: 'United States',
    medium_display: 'Wood engraving on paper',
    image_id: 'e9213c4f-f65f-612b-2992-f80fae8a3682'
}


//API 
const chicagoArtMuseumAPI = "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,date_start,date_end,place_of_origin,image_id,medium_display,dimensions?page=1&limit=100"

//call API
    fetch(chicagoArtMuseumAPI)
    .then((information)=>{
        console.log('information received')
        console.log(information)
        return information.json()   //promise
    })
    .then((artObj)=>{
        console.log('response processed')
        console.log(artObj)
        
        console.log(artObj.data)

            //target array w/in obj and assign to variable
            const dataInArtObj = artObj.data
                dataInArtObj.unshift(defaultArtwork)
            //create an empty variable to push links of images into
                let imgId = [] //PUT SRC OF DEFAULT IN AND THEN PUSH WILL DISPLAY OTHER IMAGES
                    dataInArtObj.forEach(artwork =>{
                        imgId.push(`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`)
                    })
        console.log(imgId)
          
            let artworkDisplay = document.querySelector('#art-display')

            const title = document.querySelector('.title')
            const artistName = document.querySelector('.artist-title')
            const startDate = document.querySelector('.date-start')
            const endDate = document.querySelector('.date-end')
            const placeOfOrigin = document.querySelector('.place-of-origin')
            const artMedium = document.querySelector('.medium-display')

        //HELPER FUNCTION FOR DISPLAYING ARTWORK & CAN UPDATE ALL INFO AT THE SAME TIME
                function updateScreen(){
                    artworkDisplay.src = imgId[currentArtwork]
                
                    title.innerHTML = `Title: ${dataInArtObj[currentArtwork].title}`
                    artistName.innerHTML = `Artist: ${dataInArtObj[currentArtwork].artist_title}`
                    startDate.innerHTML = `Start Date : ${dataInArtObj[currentArtwork].date_start}`
                    endDate.innerHTML = `End Date: ${dataInArtObj[currentArtwork].date_end}`
                    placeOfOrigin.innerHTML = `Place (Artist's Nationality): ${dataInArtObj[currentArtwork].place_of_origin}`
                    artMedium.innerHTML = `Medium: ${dataInArtObj[currentArtwork].medium_display}`
                }
        
            
        //create event listeners for both buttons to move through array
        // previous button increment down 1 arr of links
        //next button increment up 1 arr of links
            const nextButton = document.querySelector('.next')
            const previousButton = document.querySelector('.previous')
    
            let currentArtwork = 0

            nextButton.addEventListener('click', ()=>{
                currentArtwork++
                    if(currentArtwork >= imgId.length){
                        currentArtwork = 0
                    } 
                updateScreen()    
            })

            previousButton.addEventListener('click', ()=>{
                currentArtwork --
                    if(currentArtwork < 0){
                        currentArtwork = imgId.length - 1
                    } 
                updateScreen()
         })
         
   
        .catch((error) => console.log(error))
    })    










       
 //CODE TO AUTOMATICALLY DISPLAY IMAGES
    // let artIndex = 0
    // setInterval(()=>{
    //     if(artIndex === imgId.length){
    //         artIndex = 0
    //     }
    //          artworkDisplay.src = imgId[artIndex]
    //          artIndex++
    //      }, 5000)
    //  })

        
    

//IDEAS FOR LATER
//possibly set intervals and/or timeout for automatic scrolling through artwork
//in Readme, use buttons as stretch goals?
//clean up code --> offer a link to actual museum in navbar?
    