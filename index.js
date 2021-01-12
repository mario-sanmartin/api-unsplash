const accesKey = ('ImPUO9F2RHB-SUH1zOcM7itwjuMBva3vofTpkHcWw48');
const endPoint = 'https://api.unsplash.com/search/photos';

async function getImages(query){
    //The code will be here
    const url = await fetch(endPoint+'?query='+ query + '&client_id=' + accesKey)
    // let response = await fetch(endPoint + '?query=' + query + '&client_id=' + accesKey);
    // let jsonResponse = await response.json();
    // let imagesList = await jsonResponse.results;
    const data = await url.json()
    const imagesList =  data.results;

    createImages(imagesList);
}

function createImages(imagesList){
    for(let i = 0 ; i < imagesList.length ; i++ )
     {
         const image = document.createElement('img');
         image.src = imagesList[i].urls.thumb;
         document.body.appendChild(image);
    }
    
}

getImages('party')