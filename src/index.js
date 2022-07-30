document.addEventListener('DOMContentLoaded', () => {
    getRamen()
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        makeNewRamen()})
    // editForm.addEventListener('submit', (e) => {
    //     e.preventDefault()
    //     editRamen()
    // })
})


const ramenMenu = document.getElementById(`ramen-menu`)
const ramenDetail = document.getElementById("ramen-detail")
const namelist = document.querySelector('h2')
const restaurant = document.getElementById('restaurant')
const ratingList = document.getElementById('rating-display')
const commentList = document.getElementById('comment-display')
const ramenDisplay = document.getElementById('ramen-display')
const form = document.getElementById('new-ramen')
const newName = document.getElementById('new-name')
const newRestaurant = document.getElementById('new-restaurant')
const newComment = document.getElementById('new-comment')
const newRating = document.getElementById('new-rating')
const newImage = document.getElementById('new-image')
const editForm = document.getElementById('edit-ramen')


function getRamen() {
fetch('http://localhost:3000/ramens')
.then(res => res.json())
.then(data => {data.forEach(renderRamen)
        onLoad(data[0])
    })
}

function renderRamen(ramen) {
    let img = document.createElement('img')
    img.src = ramen.image
    img.addEventListener('click', () => {
        ramenDisplay.src = img.src, 
        restaurant.innerText = ramen.restaurant
        commentList.innerText = ramen.comment
        ratingList.innerText = `${ramen.rating}`
        namelist.innerText = ramen.name
    })
    ramenMenu.append(img)   
}
function makeNewRamen() {
    let newRamenObj = {
        name:`${newName.value}`,
        image: `${newImage.value}`,
        comment: `${newComment.value}`,
        rating: `${newRating.value}`,
        restaurant: `${newRestaurant.value}`
    }
    renderRamen(newRamenObj);
    postNewRamen(newRamenObj);
    form.reset();
}
function onLoad(ramen) {
    ramenDisplay.src = ramen.image
    namelist.innerText = ramen.name
    restaurant.innerText = ramen.restaurant
    ratingList.innerText = ramen.rating
    commentList.innerText = ramen.comment
 

}
// function editRamen(ramen) {
//     fetch(`http://localhost:3000/ramens${ramen.id}` {
//         method: 'PATCH',
//         headers: {
//             'content-Type': 'application/json'
//         },
//         body: JSON.stringify(ramen)
//     })
//     .then(res => res.json())
//     .then()
    
function postNewRamen(ramenObject) {
    console.log(ramenObject);
    fetch('http://localhost:3000/ramens', {
        method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ramenObject)
        })
        .then(res => res.json())

    }