
const form = document.querySelector('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const message = document.getElementById('message');
const errorMessage = document.getElementById('error-message');
const divParent = document.getElementById('comment-list');


form.addEventListener('submit', function(event){
    event.preventDefault();

    if (firstName.value === '' || lastName.value === '' || message.value === '') {
        errorMessage.style.display = 'block';
    } 

    else {
        
    
    let newDiv = document.createElement ('div');
    newDiv.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500');
    divParent.appendChild(newDiv);

    let newDiv2 = document.createElement('div');
    newDiv2.classList.add('flex-1', 'py-10', 'border-t', 'border-gray-200');
    newDiv.appendChild(newDiv2);
    

    let newDivTitle = document.createElement ('h3');
    newDivTitle.classList.add('font-medium', 'text-gray-900');
    let newDivTitleContent = document.createTextNode(firstName.value + " " + lastName.value);
    newDivTitle.appendChild(newDivTitleContent);
    newDiv2.appendChild(newDivTitle);

    let comment = document.createElement('p');
    comment.classList.add('prose', 'prose-sm', 'mt-4', 'max-w-none', 'text-gray-500');
    let commentContent = document.createTextNode(message.value);
    comment.appendChild(commentContent);
    newDiv2.appendChild(comment);

    }

   form.reset();

})



