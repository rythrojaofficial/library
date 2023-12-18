const submitButton = document.getElementById('submit-button');
const inputTitle = document.getElementById('book');
const inputAuthor = document.getElementById('author');
const inputStatus = document.getElementById('read');
const inputRating = document.getElementById('rating')
    const sliderOutput = document.getElementById('rating-input');
    sliderOutput.addEventListener('input', ()=>{sliderOutput.innerText = inputRating.value})
    


submitButton.addEventListener("click",()=>{
    addRow();
});

function addRow() {
    console.log("i work");
}