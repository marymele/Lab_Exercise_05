const taskInput = document.querySelector('#task');           

const form = document.querySelector('#task-form');         

const filter = document.querySelector('#filter');            

const taskList = document.querySelector('.collection');      

const clearBtn = document.querySelector('.clear-tasks');  

const reloadIcon = document.querySelector('.fa');

const order=document.querySelector('#order');


form.addEventListener('submit',addNewTask);

clearBtn.addEventListener('click', clearAllTasks);

filter.addEventListener('keyup', filterTasks);

taskList.addEventListener('click', removeTask);

reloadIcon.addEventListener('click', reloadPage);

order.addEventListener('change', orderItems);


function addNewTask(e) {

    e.preventDefault(); //disable form submission


    // Check empty entry
    if (taskInput.value === '') {
        taskInput.style.borderColor = "red";

        return;
    }

    // Create an li element when the user adds a task 
    const li = document.createElement('li');
    // Adding a class
    li.className = 'collection-item';
    // Create text node and append it 
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new element for the link 
    const link = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append to UL 
    taskList.appendChild(li);
    taskInput.value ="";
    let date = new Date().getTime();
    li.dataset.date = date;

    orderItems();

}
 
   
   


function clearAllTasks() {

    //This is the first way 
    // taskList.innerHTML = '';    

    //  Second Way 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

}


function filterTasks(e) {

    console.log("HI");

}
function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item'))
        {
        if (confirm('Are You Sure about that ?'))
        {
            e.target.parentElement.parentElement.remove();
        }

    }

}







