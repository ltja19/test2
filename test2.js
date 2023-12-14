import Chart from 'chart.js/auto'

(async function() {
    var json = require('./mockData.json')
    var stringify=JSON.stringify(json.recommendations)
    var userobj = JSON.parse(stringify)
    var newMap = stringify
    alert(stringify)
    //var data = userobj;
    new Chart(
        document.getElementById('test2'),
        {
            type: 'pie',
            data: {
                labels: userobj.map(row => row.accountName),
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
