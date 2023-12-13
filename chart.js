new Chart(ctx, {
    data: {
        datasets: [
            {fill: 'origin'},      // 0: fill to 'origin'
            {fill: '+2'},          // 1: fill to dataset 3
            {fill: 1},             // 2: fill to dataset 1
            {fill: false},         // 3: no fill
            {fill: '-2'},          // 4: fill to dataset 2
            {fill: {value: 25}}    // 5: fill to axis value 25
        ]
    }
});
