import Chart from 'chart.js/auto'

(async function() {
    var json = require('./mockData.json')
    var stringify=JSON.stringify(json.recomendations)
    var userobj = JSON.parse(stringify)
    var newMap = stringify
    alert(stringify)
    //var data = userobj;
    new Chart(
        document.getElementById('test3'),
        {
            type: 'pie',
            data: {
                labels: userobj.map(row => row.region),
                datasets: [
                    {
                        label: 'KilloWatt Hour Savings',
                        data: userobj.map(row=>row.kilowattHourSavings)
                    }
                ]
            }
        }
    );
})();
