//targets the whole browser & will play when loaded
// window.addEventListener("DOMContentLoaded", () =>{
//     const museumMusic = new Audio('sounds/Liebestraum.mp3')
//     museumMusic.volume = 0.1
//     museumMusic.play()
// })

let artworkDisply = document.querySelector('#art-display')

const nextButton = document.querySelector('.next')


// nextButton.addEventListener('click', ()=>{
//     const artImages = document.querySelector('#art-display')
//     const title = document.querySelector('.title')
//     const startDate = document.querySelector('.date-start')
//     const endDate = document.querySelector('.date-end)
//     const artistName = document.querySelector('.artist-title')
//     const placeOfOrgin = document.querySelector('.place-of-orgin')
//     const artMedium = document.querySelector('.medium-display')
    
    const chicagoArtMuseumAPI = "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,date_start,date_end,image_id,medium_display,place_of_origin"
    


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
        let imgId = []
       dataInArtObj.forEach(artwork =>{
            imgId.push(`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`)
       })
       console.log(imgId)

            
            // return fetch(imageAPI)
        }
        
        // dataInArtObj.forEach(image => {
        //     image = `${artObj.data.image_id}`
        // })
        
        
               
    )
    
    // let image = `${artObj.data.image_id}`
    //     

    // for(let i = 0; i < dataInArtObj.length; i++){
    //     dataInArtObj[i] = `${artObj.data.image_id}`
    //     let artImage = dataInArtObj[i]

    .then((response)=>{
        console.log('response logged here')
        return response.json()
    })

    // for(let i = 0; i < artObj.length; i++){
    //     artObj[i] = artObj.data.image_id
    //     console.log(artObj)  
        
    // for(data in artObj){
    //     for(let i = 0; i < data.length; i++){
    //     console.log(data[i])
        
         // let imgId = artObj.data[0].image_id
        // const artImg = artObj.config.website_url + '/'
        // //to change the art URL to the next art image from the API
        // let artId = artObj.data[0].id 
        // //loop through arr 
        
        // artworkDisply.src = artImg + artId
        // console.log(artworkDisply.src)
        // artImages.src = artObj.message
    
// })

