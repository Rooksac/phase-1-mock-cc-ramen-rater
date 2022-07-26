document.addEventListener('DOMContentLoaded', () => {
    getRamen()
    form.addEventListener('submit', makeNewRamen)
})

const ramenMenu = document.getElementById(`ramen-menu`)
const ramenDetail = document.getElementById("ramen-detail")
const namelist = document.querySelector('h2')
const restaraunt = document.getElementById('restaurant')
const ratingList = document.getElementById('rating-display')
const commentList = document.getElementById('comment-display')
const ramenDisplay = document.getElementById('ramen-display')
const form = document.getElementById('new-ramen')
const newName = document.getElementById('new-name')
const newRestaraunt = document.getElementById('new-restaurant')
const newComment = document.getElementById('new-comment')
const newRating = document.getElementById('new-rating')
const newImage = document.getElementById('new-image')
function getRamen() {
fetch('http://localhost:3000/ramens')
.then(res => res.json())
.then(data => data.forEach(renderRamen))
}

function renderRamen(ramen) {
    let img = document.createElement('img')
    img.src = ramen.image
    img.addEventListener('mouseover', () => {
        ramenDisplay.src = img.src, 
        restaraunt.innerText = ramen.restaurant
        commentList.innerText = ramen.comment
        ratingList.innerText = `${ramen.rating}`
        namelist.innerText = ramen.name
    })
    ramenMenu.append(img)   
}
function makeNewRamen(newRamen) {
    let newramen = {
        'name':`${newName.value}`,
        'image': `${newImage.value}`,
        'comment': `${newComment.value}`,
        'rating': `${newRating.value}`,
        'restaurant': `${newRestaraunt.value}`
    }
    renderRamen(newRamen);
}
