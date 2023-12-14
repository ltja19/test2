import Chart from 'chart.js/auto'

(async function() {
    var json = require('./mockData.json')
    var stringify=JSON.stringify(json.emissions)
    var userobj = JSON.parse(stringify)
    console.log(userobj)
    var data = userobj;

    new Chart(
        document.getElementById('test'),
        {
            type: 'bar',
            data: {
                labels: userobj.map(row => row.region),
                datasets: [
                    {
                        label: 'Acquisitions by year',
                        data: userobj.map(row=>row.mtPerKwHour)
                    }
                ]
            }
        }
    );
})();
