// - Users should be able to click on a button to delete/remove a meme from the page
// - The form boxes should clear out automatically after the submit is clicked
// - The form fields need to have validation so they will not submit if a field is missing
// - Be sure to style your meme generator! It should be functional but also look nice


//must take input value from URL submit to make picture image
const form = document.querySelector('#logoform');
const imageURL = document.querySelector('input[name="url"]');
const topText = document.querySelector('input[name="top-text"]');
const bottomText = document.querySelector('input[name="bottom-text"]');
const results = document.querySelector('#meme-container');

function validateForm() {
    if (imageURL.value === "") {
        alert ("Form must include Image URL");
        throw new Error ("Form must be filled out properly");
    }
    window.stop();
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    validateForm();
    const newMeme = makeMeme(imageURL, topText, bottomText);
    results.append(newMeme);
});


function makeMeme(imgURL, topText, bottomText){
    const div = document.createElement('div');

    const topDiv = document.createElement('div');
    topDiv.classList.add("top");

    const bottomDiv = document.createElement('div');
    bottomDiv.classList.add("bottom");

    div.classList.add("meme");
    results.appendChild(div);

    let img = document.createElement('img');
    img.src = imgURL.value;
    img.width = "300";
    img.height = "300";

    div.appendChild(img);
    imgURL.value = "";

    let top = topText.value;
    topDiv.innerHTML = top;
    div.appendChild(topDiv);
    topText.value = "";

    let bottom = bottomText.value;
    bottomDiv.innerHTML = bottom;
    div.appendChild(bottomDiv);
    bottomText.value = "";

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.innerText = "delete";
    div.appendChild(removeButton);
    
    return div;
    
}

//removing meme when button is clicked
results.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
})