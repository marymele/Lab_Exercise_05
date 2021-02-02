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


function addNewTask(e){

    e.preventDefault();

    // if (taskInput.value===""){
    //      alert("Add New Task");
    //      return;
    // }

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
     // Append to ul 
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

    /*  
    Instruction for Handling the Search/filter 
    
    1. Receive the user input from the text input 
    2. Assign it to a variable so the you can reuse it 
    3. Use the querySelectorAll() in order to get the collection of li which have  .collection-item class 
    4. Iterate over the collection item Node List using forEach
    5. On each element check if the textContent of the li contains the text from User Input  [can use indexOf]
    6 . If it contains , change the display property of the element as block , else none
    
    */
   var userInput=filter.value;   
   var list=document.querySelectorAll('.collection-item')
   list.forEach(element=> {
       if (element.firstChild.textContent.includes(userInput)) {
           element.style.display="block";
           
       } else {
           element.style.display="none";
       }
   })

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

function orderItems() {
    let tasks = document.querySelectorAll('.collection-item');
    let dates = []
    tasks.forEach(task => {
        dates.push(task.dataset.date)
    });

    dates.sort()
    if (order.value=='decend') {
        dates.reverse()
    }

    clearAllTasks()
    for (let date = 0; date < dates.length; date++) {
        for (let task = 0; task < tasks.length; task++) {
            if (dates[date]==tasks[task].dataset.date) {
                taskList.appendChild(tasks[task]);
            }
            
        }
        
    }
}



// Reload Page Function 
function reloadPage() {
    //using the reload fun on location object 
    location.reload();
}








