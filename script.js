let searchButton = document.querySelector("#search")

//add an event listener to the button

searchButton.addEventListener("click", ()=>{
    console.log("button pressed")
    sendApiRequest()
})

//a function to fetch data from API

async function sendApiRequest(){
    let APP_ID = "360a29d3"
    let API_KEY = "3d40df2f74098f2df2e599c77a62812b	"
    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=pasta`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApidata(data)
}

//function that does soemthing from received API

function useApidata(data){
    document.querySelector("#content").innerHTML = `
    <div class="card" style="width: 18rem;">
  <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.hits[0].recipe.label}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `
}