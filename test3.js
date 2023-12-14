import Chart from 'chart.js/auto'

(async function() {
    var json = require('./mockData.json')
    var stringify=JSON.stringify(json.footprint)
    var userobj = JSON.parse(stringify)

    const firstFootprint=json.footprint[0];
    const firstServiceEstimate=firstFootprint.serviceEstimates[0];
    const cost=firstServiceEstimate.cost
    console.log("Cost:", cost)
    alert(cost)
    new Chart(
        document.getElementById('test3'),
        {
            type: 'line',
            data: {
                labels: userobj.map(row => row.firstServiceEstimate.cost),
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