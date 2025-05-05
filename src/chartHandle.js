import {compareAsc, format} from "date-fns";
import Chart from 'chart.js/auto';


let completedChart, uncompletedChart, overdueChart, todayChart;

export default function drawCompleted(data){

    const canvasCompleted = document.querySelector("#completedChart")
    const canvasUncompleted = document.querySelector("#uncompletedChart")
    const canvasOverdue = document.querySelector("#overDueChart")
    const canvasToday = document.querySelector("#todayChart")


    const today = format(new Date(), "yyyyMMdd");


    const stats = {total:0, finished:3, unfinished:0, today:0 , overdue:0}
    
    // Here are stats handling
    data.forEach(element => {

        stats.total += 1
        if (element.status != null){
            element.status === "unfinished" ? stats.unfinished += 1 : stats.finished += 1
            
        }

        if(element.dueDate != null && element.status === "unfinished"){
            if(element.dueDate < today){
                stats.overdue += 1
            }
            else if(element.dueDate === today){
                stats.today += 1
            }
           
        }







        
    });

    if (completedChart) completedChart.destroy();
    if (uncompletedChart) uncompletedChart.destroy();
    if (overdueChart) overdueChart.destroy();
    if (todayChart) todayChart.destroy();



// Create new charts

completedChart = new Chart(canvasCompleted, {
    type: 'pie',
    data: {
        labels: ['Completed', 'Uncompleted','Total Tasks'],
        datasets: [{
            data: [stats.finished, stats.unfinished, stats.total],
            borderWidth: 1,
            backgroundColor: ['rgb(216, 143, 7)', 'rgb(51, 48, 48)', 'rgb(7, 56, 216)']
        }]
    }
});

uncompletedChart = new Chart(canvasUncompleted, {
    type: 'pie',
    data: {
        labels: ['Uncompleted', 'Total Tasks'],
        datasets: [{
            data: [stats.unfinished, stats.total],
            borderWidth: 1,
            backgroundColor: ['rgb(216, 143, 7)', 'rgb(7, 56, 216)']
        }]
    }
});

overdueChart = new Chart(canvasOverdue, {
    type: 'pie',
    data: {
        labels: ['Overdue', 'Total Tasks'],
        datasets: [{
            data: [stats.overdue, stats.total],
            borderWidth: 1,
            backgroundColor: ['rgb(216, 143, 7)', 'rgb(7, 56, 216)']
        }]
    }
});

todayChart = new Chart(canvasToday, {
    type: 'pie',
    data: {
        labels: ['Today', 'Total Tasks'],
        datasets: [{
            data: [stats.today, stats.total],
            borderWidth: 1,
            backgroundColor: ['rgb(216, 143, 7)', 'rgb(7, 56, 216)']
        }]
    }
});

console.log(stats)
}


