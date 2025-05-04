
export default function updateToAllTasks() {
    const mainPage = document.querySelector(".main-page");

    // Get the main page element
    
    // Create the new HTML for the All Tasks view
    const allTasksHTML = `
      <div class="title-component">
        <h1 class="titleh1"><box-icon class="top-icon" type='solid' name='list-check'></box-icon> All Tasks</h1>
        <hr class="separator">
      </div>
      <div class="introduction">
        <p class="firstPara">Here's a list of all your tasks</p>
        <div class="tasks-container">
          <!-- Task list will go here -->
          <div class="no-tasks-message">
            <p>You have no tasks yet. Create a new task to get started!</p>
          </div>
        </div>
      </div>
    `;
    
    // Replace the content of the main page with the new HTML
    mainPage.innerHTML = allTasksHTML;
  }

  