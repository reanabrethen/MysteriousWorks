const chicagoArtMuseumAPI = "https://api.artic.edu/api/v1/artworks"

const artImages = document.querySelector('#art-display')




fetch(chicagoArtMuseumAPI)
    .then((response)=>{
        console.log('response received')
        console.log(response)
        return response.json()
    })
    .then((artObj)=>{
        console.log('response processed')
        console.log(artObj.message)
        artImages.src = artObj.message
    })