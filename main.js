// Get data
d3.csv("https://github.com/Lanli0226/LATIA112-1/blob/HW4/mean-years-of-schooling-long-run.csv").then(
    res => {
        console.log(res);
        drawPieChart(res);
        drawBarChart(res);
        drawLineChart(res);
    }
);

function drawPieChart(res){
    
    let trace1 = {};
    trace1.type = "pie";
    trace1.title = {
        text: 'Global mean years of schooling ratio in 2017',
        font : {
            size:23,
        },
    };
    trace1.labels = ['0~3 years', '3~6 years', '6~9 years','More than 9 years'];
    trace1.values = [0, 0, 0, 0];

    // 遍歷 res 並計數符合特定條件的數據
    for (let x = 0; x < res.length; x++) {
        if (res[x]['Year'] == '2007'){
            avgYears = parseFloat(res[x]['avg_years_of_schooling']);
            if (avgYears < 3) {
                trace1.values[0] += 1;
            } else if (avgYears >= 3 && avgYears < 6) {
                trace1.values[1] += 1;
            } else if (avgYears >= 6 && avgYears < 9) {
                trace1.values[2] += 1;
            } else {
                trace1.values[3] += 1;
            }
            }
        }
 
    trace1.textfont = {
        size:30,
    };

    let data1 = [];
    data1.push(trace1);
    
    let layout1 = {
        
        legend:{
            font:{
                size:22,
            },
        },
    };
    
    Plotly.newPlot(myGraph1, data1, layout1);
};




function drawLineChart(res){
    
    country = ['United States','Japan','China','Germany','United Kingdom']

    let trace2 = {};
    trace2.mode = "markers+lines";
    trace2.type = "scatter";
    trace2.name = country[0];
    trace2.marker = {
        size:12,
    };
    
    trace2.x = [];
    trace2.y = [];
    trace2.text = trace2.y;
    trace2.textposition = "bottom center";
    trace2.textfont = {
        size:20,
    };

    for(let i=0;i<res.length;i++){
        if (res[i]['Entity'] == country[0]){
            trace2.x[i] = parseInt(res[i]['Year']);
            trace2.y[i] = parseFloat(res[i]['avg_years_of_schooling']);
    }
    };

    let trace21 = {};
    trace21.mode = "markers+lines";
    trace21.type = "scatter";
    trace21.name = country[1];
    trace21.marker = {
        size:12,
    };
    
    trace21.x = [];
    trace21.y = [];
    trace21.text = trace21.y;
    trace21.textposition = "bottom center";
    trace21.textfont = {
        size:20,
    };

    for(let i=0;i<res.length;i++){
        if (res[i]['Entity'] == country[1]){
            trace21.x[i] = parseInt(res[i]['Year']);
            trace21.y[i] = parseFloat(res[i]['avg_years_of_schooling']);
    }
    };

    let trace22 = {};
    trace22.mode = "markers+lines";
    trace22.type = "scatter";
    trace22.name = country[2];
    trace22.marker = {
        size:12,
    };
    
    trace22.x = [];
    trace22.y = [];
    trace22.text = trace22.y;
    trace22.textposition = "bottom center";
    trace22.textfont = {
        size:20,
    };

    for(let i=0;i<res.length;i++){
        if (res[i]['Entity'] == country[2]){
            trace22.x[i] = parseInt(res[i]['Year']);
            trace22.y[i] = parseFloat(res[i]['avg_years_of_schooling']);
    }
    };

    let trace23 = {};
    trace23.mode = "markers+lines";
    trace23.type = "scatter";
    trace23.name = country[3];
    trace23.marker = {
        size:12,
    };
    
    trace23.x = [];
    trace23.y = [];
    trace23.text = trace23.y;
    trace23.textposition = "bottom center";
    trace23.textfont = {
        size:20,
    };

    for(let i=0;i<res.length;i++){
        if (res[i]['Entity'] == country[3]){
            trace23.x[i] = parseInt(res[i]['Year']);
            trace23.y[i] = parseFloat(res[i]['avg_years_of_schooling']);
    }
    };

    let trace24 = {};
    trace24.mode = "markers+lines";
    trace24.type = "scatter";
    trace24.name = country[4];
    trace24.marker = {
        size:12,
    };
    
    trace24.x = [];
    trace24.y = [];
    trace24.text = trace24.y;
    trace24.textposition = "bottom center";
    trace24.textfont = {
        size:20,
    };

    for(let i=0;i<res.length;i++){
        if (res[i]['Entity'] == country[4]){
            trace24.x[i] = parseInt(res[i]['Year']);
            trace24.y[i] = parseFloat(res[i]['avg_years_of_schooling']);
    }
    };

    

    let data2 = [];
    data2.push(trace2);
    data2.push(trace21);
    data2.push(trace22);
    data2.push(trace23);
    data2.push(trace24);

    let layout2 = {
        margin: {
            t:50
            },
        title:{
            text:'2007 Annual GDP TOP5 Mean years of schooling',
            font:{
                size:22,
            },
        },
        xaxis: {
            title: 'Year',
            dtick: 10,
        
        },
        legend: {
            x: 0,
            y: 14,
            orientation: 'p'
        },
        yaxis: {
            title: 'Mean years of schooling',
            dtick: 1,
            range: [0, 15]
        }
        };
    
        Plotly.newPlot('myGraph2', data2, layout2);
    };


function drawBarChart(res){
    
    let trace3 = {};
    trace3.type = "bar";
    trace3.name = 'Germany';
    trace3.x = [];
    trace3.y = [];
    trace3.text = trace3.y;
    trace3.textfont = {
        size:10,
    };

    top1 = ['Germany']
    year = ['1950','1960','1970','1980','1990','2000','2007']
    for(let i=0;i<res.length;i++){
        if (res[i]['Entity'] == 'Germany'){
            for(let k=0;k<year.length;k++){
                if (res[i]['Year'] == year[k]){
                    trace3.x[i] = parseInt(res[i]['Year']);
                    trace3.y[i] = parseFloat(res[i]['avg_years_of_schooling']);
                }
            }
        }
    };

    let trace33 = {};
    trace33.type = "bar";
    
    trace33.x = [];
    trace33.y = [];
    trace33.name = 'World average';
    trace33.text = trace33.y;
    trace33.textfont = {
        size:10,
    };
    total = [0,0,0,0,0,0,0]
    count = [0,0,0,0,0,0,0]
    for(let i=0;i<res.length;i++){
        for(let k=0;k<year.length;k++){
            if (res[i]['Year'] == year[k]){
                trace33.x[k] = year[k];
                total[k] += parseFloat(res[i]['avg_years_of_schooling']);
                count[k] += 1;

            }
        }
    };
    for(let k=0;k<year.length;k++){
        trace33.y[k] = total[k]/count[k];
    }
    let data3 = [];
    data3.push(trace3);
    data3.push(trace33);

    let layout3 = {
        margin:{
            t:100,
        },
        title:{
            text:"Mean years of schooling - Year",
            font:{
                size:33,
            },
        },
        xaxis:{
            dtick:10,
            title: 'Year',
            tickfont:{
                size:18,
            },
        },
        yaxis:{
            title: 'Mean years of schooling',
        },
        legend:{
            x:0,
            y:1,
            orientation:'h',
        },
    };

    Plotly.newPlot(myGraph3, data3, layout3);
};
