export default function dashboardUpdate(){

    const mainPage = document.querySelector(".main-page");


    const dashboardHTML = `    <div class="main-page">
            <div class="title-component">
                <h1 class = "titleh1"><box-icon class = "top-icon" type='solid' name='dashboard'></box-icon> Dashboard</h1>
                <hr class="separator">
            </div>
            <div class="introduction">
                <p class = "firstPara">Here's an overview on your tasks</p>
                <div class="piecharts">
                    <div class="item1 completed">
                        <p class="chart-title">Completed</p>
                        <canvas id = "completedChart" width="300px">

                        </canvas>
                    </div>
                    <div class="item1 uncompleted">
                        <p class="chart-title">Uncompleted</p>
                        <canvas id = "uncompletedChart" width="300px">


                    </div>
                    <div class="item1 overdue">
                        <p class="chart-title">Tasks by Project</p>
                        <canvas id = "overDueChart" width="300px">


                    </div>
                    <div class="item1 today">
                        <p class="chart-title">Today</p>
                        <canvas id = "todayChart" width="300px">


                    </div>




                </div>
            </div>
        </div>`


    mainPage.innerHTML = dashboardHTML;
  }