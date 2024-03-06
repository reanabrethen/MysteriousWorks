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
  
//API 
const chicagoArtMuseumAPI = "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,date_start,date_end,image_id,medium_display,place_of_origin"
    

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
        //create an empty variable to push links of images into
        let imgId = []
        dataInArtObj.forEach(artwork =>{
            imgId.push(`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`)
       })
       console.log(imgId)
        let artworkDisplay = document.querySelector('#art-display')
        
        const nextButton = document.querySelector('.next')
        const previousButton = document.querySelector('.previous')
    
        // //create event listeners for both buttons to move through array
        // // previous button increment down 1 arr of links
        // // next button increment up 1 arr of links
    
       let currentArtwork = 0
       let maxArtwork = 12

        nextButton.addEventListener('click', ()=>{
            console.log('next')
                if(currentArtwork < maxArtwork){
                   currentArtwork++
                    artworkDisplay.src = imgId[currentArtwork]

                }
        })
            previousButton.addEventListener('click', ()=>{
                console.log('previous')
                if(currentArtwork > 0){
                    currentArtwork--
                    artworkDisplay.src = imgId[currentArtwork]
                }
                
    
                    }
                )
                })
                




        const title = document.querySelector('.title')
        const startDate = document.querySelector('.date-start')
        const endDate = document.querySelector('.date-end')
        const artistName = document.querySelector('.artist-title')
        const placeOfOrgin = document.querySelector('.place-of-orgin')
        const artMedium = document.querySelector('.medium-display')

        //automatically display images
        // let artIndex = 0
        // setInterval(()=>{
        //     if(artIndex === imgId.length){
        //         artIndex = 0
        //     }
        //     artworkDisplay.src = imgId[artIndex]
        //     artIndex++
        // }, 5000)


        
    // })


    //possibly set intervals and/or timeout for automatic scrolling through artwork
    //in Readme, use buttons as stretch goals?


  
    previousButton.addEventListener('click', ()=>{
        console.log('previous')
    })



      

    

  

        
         // let imgId = artObj.data[0].image_id
        // const artImg = artObj.config.website_url + '/'
        // //to change the art URL to the next art image from the API
        // let artId = artObj.data[0].id 
        // //loop through arr 
        
        // artworkDisply.src = artImg + artId
        // console.log(artworkDisply.src)
        // artImages.src = artObj.message
    
// })

