import Chart from 'chart.js/auto'

(async function() {
    var json = require('./mockData.json')
    var stringify=JSON.stringify(json.emissions)
    var userobj = JSON.parse(stringify)
    console.log(userobj)
    var data = userobj;
    //alert(data)
    // const data = [
    //     { year: 2010, count: 10 },
    //     { year: 2011, count: 20 },
    //     { year: 2012, count: 15 },
    //     { year: 2013, count: 25 },
    //     { year: 2014, count: 22 },
    //     { year: 2015, count: 30 },
    //     { year: 2016, count: 28 },
    // ];
    // const data = [
    //     { "region": "us-east-1", "mtPerKwHour": 0.000379069 },
    //     { "region": "us-east-2", "mtPerKwHour": 0.000410608 },
    //     { "region": "us-west-1", "mtPerKwHour": 0.000322167 },
    //     { "region": "us-west-2", "mtPerKwHour": 0.000322167 },
    //     { "region": "us-gov-east-1", "mtPerKwHour": 0.000379069 },
    //     { "region": "us-gov-west-1", "mtPerKwHour": 0.000322167 },
    //     { "region": "af-south-1", "mtPerKwHour": 0.0009006 },
    //     { "region": "ap-east-1", "mtPerKwHour": 0.00071 },
    //     { "region": "ap-south-1", "mtPerKwHour": 0.0007082 },
    // ]
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
