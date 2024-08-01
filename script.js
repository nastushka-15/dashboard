const moment = require("moment");

let date = moment();
console.log(date);
const Chart = require('chart.js/auto');





// First chart
const ctx1 = document.getElementById('myChart1');
let chart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Sales',
            data: [50, 60, 70, 80, 90, 100],
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

    // const data = [
    //   { year: 2010, count: 10 },
    //   { year: 2011, count: 20 },
    //   { year: 2012, count: 15 },
    //   { year: 2013, count: 25 },
    //   { year: 2014, count: 22 },
    //   { year: 2015, count: 30 },
    //   { year: 2016, count: 28 },
    // ];
  
    // let chart2 = new Chart(
    //   document.getElementById('acquisitions'),
    //   {
    //     type: 'bar',
    //     data: {
    //       labels: data.map(row => row.year),
    //       datasets: [
    //         {
    //           label: 'Acquisitions by year',
    //           data: data.map(row => row.count)
    //         }
    //       ]
    //     }
    //   }
    // );
