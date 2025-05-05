import 'boxicons'

export default function updateToAllTasks(data) {
  const mainPage = document.querySelector(".main-page");

  // Get the main page element

  // Create the new HTML for the All Tasks view
  const allTasksHTML = `
       <div class="title-component">
                <h1 class = "titleh1"><box-icon class = "top-icon"  name='list-check'></box-icon> All Tasks</h1>
                <hr class="separator">
            </div>
            <div class="introduction">
                <div class="task-container" id = "taskContainer">
                    <div class="task" id="demo-task">
                        <div class="left-side">
                            <div class="left-side1">
                                <box-icon name = "checkbox" size = "md" color = "orange" id = "checkbox"></box-icon>
                                <p class="task-title">Name of Task</p>
                            </div>
                            <div class="right-side">
                                <box-icon name = "trash" size = "sm" color = "red" id = "trash"></box-icon>
                            </div>
                            
                        </div>


                        <div class="below-side">
                            <div class="task-project">
                                <box-icon name = "folder-open" size = "sm"></box-icon>
                                <p class="task-project" id="taskProject">Task Project</p>
                            </div>
                           
                            <div class="priority">
                                <box-icon name = "flag" color = "red"></box-icon>
                                <p class="priority" id="priority">High</p>
                            </div>
                          
                        </div>


                      
                    </div>
                    


                </div>
            




                </div>
            </div>
        </div>
    </div>
    `;

  // Replace the content of the main page with the new HTML
  mainPage.innerHTML = allTasksHTML;




  data.forEach(task => {

    const transformed = 
    `<div class="task" id="demo-task">
    <div class="left-side">
        <div class="left-side1">
            <box-icon name="checkbox" size="md" color="orange" id="checkbox"></box-icon>
            <p class="task-title">${task.description}</p>
        </div>
        <div class="right-side">
            <box-icon name="trash" size="sm" color="" id="trash"></box-icon>
        </div>

    </div>


    <div class="below-side">
        <div class="task-project">
            <box-icon name="folder-open" size="sm"></box-icon>
            <p class="task-project" id="taskProject">${task.project}</p>
        </div>

        <div class="priority">
            <box-icon name="flag" color="red"></box-icon>
            <p class="priority" id="priority">${task.priority}</p>
        </div>

    </div>



</div>
    `

    document.querySelector("#taskContainer").insertAdjacentHTML("beforeend", transformed )


    

  });

}

