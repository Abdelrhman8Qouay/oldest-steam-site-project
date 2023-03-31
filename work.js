// this for featured-recommended

// let smallImgs = Array.from(document.querySelectorAll('.sm-images'));
// let mainSmImgs = Array.from(document.querySelectorAll(".sm-images img"));
// let mainImgsFeatured = Array.from(document.querySelectorAll(".side img"));


function changeImg(event) {
    document.querySelector('.side img').src = event.children[0].src;
}

function oldImg() {
    document.querySelector('.side img').src = document.querySelector('.side p').innerHTML;
}


// for others btn section

let tagsOthers = document.querySelectorAll(".tagsOfOhters ul li");

tagsOthers.forEach((tagOth) => {
    tagOth.onclick = () => {
        clearActiveTag();
        tagOth.classList.add("active");
    }
})

function clearActiveTag() {
    tagsOthers.forEach((tagOth) => {
        tagOth.classList.remove("active");
    })
}


let boxChoices = document.querySelectorAll('.choicesOhters .boxChoice');

boxChoices.forEach((box) => {
    box.onmouseover = () => {
        let nameChoice = document.querySelectorAll(".boxChoice .infoChoiceBox span");
        let nameNot = document.querySelector(".showChoicesOthers h4");
        // nameChoice.forEach((name) => {
        //     // nameNot.innerHTML = name.innerHTML;
        //     console.log(name);
        // })
        nameChoice.forEach(name => { nameNot.innerHTML = name.innerHTML})
        // document.querySelector(".showChoicesOthers h4").innerHTML = nameChoice.innerHTML;
    };
})

