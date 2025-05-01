import 'boxicons'
import {compareAsc, format} from "date-fns";
import "./styles.css";

const test = format(new Date(2025, 4, 2), "yyyy-MM-dd");

console.log(test)




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
}


const sampleData = new Task("Chores", "Clean the dishes", "House-keeping", test, "high" )


console.log(sampleData)