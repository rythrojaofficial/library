let count = 0;


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
    addRow(inputTitle.innerText);
    count += 1;
});

const library=[];
// constructor
function Book(title, author, status, rating){
    this.title = title;
    this.author = author;
    this.status = status;
    this.rating = rating;
}





function addRow(theTitle) {
    // let new Book(theTitle, )


    let nextRow = document.createElement('tr');

    let row = [count, inputTitle.value, inputAuthor.value,
        inputStatus.value, inputRating.value]

        for(let i = 0; i < row.length; i+=1){
            let td = document.createElement('td');
                td.innerText = row[i];
            nextRow.appendChild(td);
        }
    let del = document.createElement('td');
        del.innerText = 'delete';
        del.className = 'delete';
        del.addEventListener('click', ()=>{
            let text;
            if(confirm(`You are about to delete a row`)){
                displayTable.removeChild(nextRow)
            }
            else return;
            
        });
        nextRow.appendChild(del);
    
    displayTable.appendChild(nextRow);

    
}