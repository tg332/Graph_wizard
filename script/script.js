// script.js
document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('cubicChart').getContext('2d');
    var cubicChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['0', '1', '2', '3', '4', '5'],
            datasets: [{
                label: 'Gráfico Cúbico',
                data: [0, 1, 8, 27, 64, 125],
                backgroundColor: 'transparent',
                borderColor: 'blue',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'X'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Y'
                    }
                }]
            }
        }
    });
});
