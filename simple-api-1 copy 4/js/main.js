document.querySelector('button').addEventListener('click', getJoke)
function getJoke(){
fetch('https://api.chucknorris.io/jokes/random') 
.then(res => res.json())      // converts response into JSON
.then(data => {
    console.log(data)
    document.querySelector('h2').innerText = data.value
})
}


// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150