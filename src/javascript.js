import 'boxicons'
import {compareAsc, format} from "date-fns";
import "./styles.css";
import drawCompleted from './chartHandle';
import updateToAllTasks from './alltasks';
import dashboardUpdate from './dashboard';

const test = parseInt(format(new Date(2025, 4, 2), "yyyyMMdd"));

console.log(test)

// Global VARS

let projectsList = ["Home 🏠"]
const tasksList = []


// UI LOCATORS


// CONSTRUCTORS

function Task(title,description, project, dueDate, priority){
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor")
        }
        
    this.title = title;
    this.description = description;
    this.project = project;
    this.dueDate = dueDate;
    this.priority = priority
    this.status = "unfinished"
}


const sampleData = new Task("Chores", "Clean the dishes", "House-keeping", test, "high" )

tasksList.push(sampleData)


// Dialog

const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
// FORM Locators
const selectEl = favDialog.querySelector("select");
const inputEl = favDialog.querySelector("input");
const selectPriority = favDialog.querySelector("#priority")
const textAreaEl = favDialog.querySelector("textarea")
const dateEl = favDialog.querySelector("#date")


/////////////////////
const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
favDialog.addEventListener("close", (e) => {
  outputBox.value =
    favDialog.returnValue === ""
      ? "No return value."
      : `ReturnValue: ${favDialog.returnValue}.`; // Have to check for "default" rather than empty string
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form


  
  favDialog.close(selectEl.value); // Have to send the select box value here.


const newOne = new Task(inputEl.value,textAreaEl.value,selectEl.value,selectPriority.value,dateEl.value)

tasksList.push(newOne)

drawCompleted(tasksList)

 
});


// Projects handling

const projectsOptionsHTML = document.querySelector("#projectsOptions");

projectsList.forEach(project => {
  projectsOptionsHTML.insertAdjacentHTML("beforeend", `<option value="${project}">${project}</option>`)

  
});

const plusSignHTML = document.querySelector("#plusSign")
const projectsUL = document.querySelector(".projects-ul")

plusSignHTML.addEventListener("click",() => {

  projectsUL.insertAdjacentHTML("beforeend", `<li><box-icon name='folder' type='regular' size = "xs"></box-icon><p>Home</p></li>`)

})

console.log(tasksList)

drawCompleted(tasksList)


document.querySelector("#allTasks").addEventListener("click", () =>{
updateToAllTasks(tasksList)

})

document.querySelector(".dashboard").addEventListener("click", () => {
  dashboardUpdate()
  drawCompleted(tasksList)
})