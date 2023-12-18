const submitButton = document.getElementById('submit-button');
const inputTitle = document.getElementById('book');
const inputAuthor = document.getElementById('author');
const inputStatus = document.getElementById('read');
const inputRating = document.getElementById('rating')
    const sliderOutput = document.getElementById('rating-input');
    inputRating.addEventListener('input', ()=>{sliderOutput.innerText = inputRating.value
    })
const displayTable = document.getElementById('display-table');
    

submitButton.addEventListener("click",()=>{
    addRow();
});



function addRow() {
    let nextRow = document.createElement('tr');

    let row = [inputTitle.value, inputAuthor.value,
        inputStatus.value, inputRating.value]

        for(let i = 0; i < row.length; i+=1){
            let td = document.createElement('td');
                td.innerText = row[i];
            nextRow.appendChild(td);
        }
    let del = document.createElement('td');
        del.innerText = 'delete';
        del.className = 'delete';
        nextRow.appendChild(del);
    
    displayTable.appendChild(nextRow);

    
}