console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// for loop? each image as card then append to the dom    
//  <div id="dog-image-container">
//.appendchild(card) 

function fetchImg() {
    return fetch(imgUrl) //only need to call 'return' if we're calling this function elsewhere
        .then((response) => response.json())
        .then((json) => renderImg(json));
}

function renderImg(dogs) {
    const dogImg = document.querySelector("#dog-image-container")
    const dogImgUrl = dogs.message
    console.log('object print', dogs.message)
    dogImgUrl.forEach(link => {
        // console.log('obj', obj)
        // console.log(dogImgUrl[obj]) 
        const h2 = document.createElement('h2');
        h2.innerHTML = `<img src="${link}">`
        dogImg.appendChild(h2);
    })
}


function fetchBreeds() {
    return fetch(breedUrl)
        .then((response) => response.json())
        .then((json) => listBreeds(json));
}


function listBreeds(breeds) {
    // console.log('breeds', breeds)
    const dogBreeds = document.querySelector("#dog-breeds")
    const breedNames = breeds.message
    arrBreedNames = Object.keys(breedNames)
    dropDownBreed(arrBreedNames)
    // console.log('arrBreedNames in fxn', arrBreedNames)
    // console.log('arrBreedNames', arrBreedNames)
    arrBreedNames.forEach(name => {
        const li = document.createElement('li');
        li.innerHTML = name
        li.addEventListener('click', breedClick)
        dogBreeds.appendChild(li);
        // console.log('dogBreeds.innerHTML', dogBreeds.innerHTML)

    })
}


document.addEventListener('DOMContentLoaded', function () {
    fetchImg()
    fetchBreeds()
});


function breedClick(e) {
    console.log('e', e.target)
    e.target.style.color = 'red'
    //alt method - to 'toggle' the color, make a css selector 
    //i.e. a 'class of red' 
}

//Challenge #4 

// take the breeds names as an array 
// const arrBreedNames = Object.keys(breedNames)

//iterate through the array?
//for each? charAt(0) 
// const arrBreedNames = {}
// "select-breed"

//key word to access: 


// event.target 

    function dropDownBreed(breeds) {
        const breedNames = breeds.message
        document.getElementById("breed-dropdown").addEventListener("change", event => {
            console.log('breeds', breeds)
            let filter = breeds.filter(breed => breed[0] === event.target.value) //implied return! which then is defined in variable "filter"
            console.log('filter', filter)
            // console.log('check breed', breed[0])
            // console.log('check', event.target.value)
            const dogBreeds = document.querySelector("#dog-breeds")
            dogBreeds.innerHTML = ""  //this is how you clear out HTML - empty string! 
            //this should be blank^^ 
            filter.forEach(breed => {
                const li = document.createElement('li');
                li.innerHTML = breed 
                console.log('breedinLi', breed)
                li.addEventListener('click', breedClick)
                dogBreeds.appendChild(li);
            })
        })
    }

    //clear out the uls 
    //imagine box (That is the ul)
