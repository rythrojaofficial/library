




const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener("click",()=>{
                    addRow();
    });
const inputTitle = document.getElementById('book');
const inputAuthor = document.getElementById('author');
const inputStatus = document.getElementById('read');
const inputRating = document.getElementById('rating')
    const sliderOutput = document.getElementById('rating-input');
    inputRating.addEventListener('input', ()=>{sliderOutput.innerText = inputRating.value
    })
const displayTable = document.getElementById('display-table');


const library=[];
// constructor
function Book(title, author, status, rating){
    this.title = title;
    this.author = author;
    this.status = status;
    this.rating = rating;
}





function addRow() {
    let currentBook = new Book(inputTitle.value, inputAuthor.value,
                            inputStatus.value, inputRating.value);
    library.push(currentBook);


    let nextRow = document.createElement('tr');
    let del = document.createElement('td');
    let row = [library.length, inputTitle.value, inputAuthor.value,
        inputStatus.value, sliderOutput.innerText, del]

        // read status 
        for(let i = 0; i < row.length; i+=1){
            let td = document.createElement('td');
                td.innerText = row[i];
                if(td.innerText === 'read'){
                    td.classList.add('read');
                }else if(td.innerText === 'not read'){
                    td.classList.add('notRead');
                } 
            if (i===3){
                td.classList.add('status');
                td.addEventListener('click', ()=>{
                    if (td.innerText === 'read'){
                        td.innerText = 'not read';
                        td.classList.remove('read');
                        td.classList.add('notRead');
                    }else if (td.innerText === 'not read'){
                        td.innerText = 'read';
                        td.classList.remove('notRead');
                        td.classList.add('read');

                    }else return
                })
            }
            //rating row
            if(i==4){
                let theRating = Number(td.innerText);
                // console.log(`theRating is ${theRating}, which is a ` + typeof(theRating));

                
                if(theRating > 0 && theRating < 2.5){
                    td.classList.add('rated-poorly');
                }else if(theRating >= 2.5 && theRating < 4){
                    td.classList.add('rated-okay')
                }else if(theRating >= 4 && theRating <= 5){
                    td.classList.add('rated-well');
                }else td.classList.add('notRated');
                
               
            }
            // delete row
            if (i==5){
                td.innerText = 'delete';
                td.className = 'delete';
                td.addEventListener('click', ()=>{
                    let text;
                    if(confirm(`You are about to delete entry ${del.parentElement.firstChild.innerText}`)){
                        displayTable.removeChild(nextRow);
                        delete library[del.parentElement.firstChild.innerText-1]
                        
                    }
                    else return;
                    
                })
            }
            
            nextRow.appendChild(td);
        }
        nextRow.appendChild(del);
    
    displayTable.appendChild(nextRow);

    
}