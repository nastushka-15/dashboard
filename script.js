const moment = require("moment");

let date = moment();

const Chart = require('chart.js/auto');

      var dateElement = document.querySelector('#current-date .date');
      var monthElement = document.querySelector('#current-date .month');
      var yearElement = document.querySelector('#current-date .year');

      dateElement.textContent = date.date();
      monthElement.textContent = date.format('MMMM');
      yearElement.textContent = date.year();
    


fetch('schedule.json')
.then(response => response.json())
.then(data => {
const days = data.map(item => item.day);
const quantity = data.map(item => item.quantity);
const tasks = data.map(item => item.task);
console.log(days);
// First chart
const ctx1 = document.getElementById('myChart1');
let chart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: days,
        datasets: [{
            label: 'Расписание на неделю',
            data: quantity,
          borderWidth: 1
        }]
    },
    options: {
      scales: {
        y: {
                beginAtZero: true
        }
      }
    }
  });

// Second chart
const ctx2 = document.getElementById('myChart2');
let chart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: tasks,
        datasets: [{
            label:'Список дел',
            data: quantity,
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
})
.catch((error)=> {
    console.log(error.message);
    });

