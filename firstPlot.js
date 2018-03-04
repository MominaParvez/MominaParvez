

var trace1 = {       					// skapat en variabel som heter trace //
  x: [1, 2, 3, 4],						// värden x axel // längden skall idealt lika långa, dvs lika många siffror på x och y-axeln. 
  y: [10, 15, 13, 17]					// värden y axel //
  mode: 'markers'						// vi vill bara ha markörer för varje datapunkt i grafen//
};

var trace2 = {
  x: [2, 3, 4, 5],
  y: [16, 5, 11, 10],
  mode: 'lines'							//	visa endast linjer //
};

var trace3 = {
  x: [1, 2, 3, 4],
  y: [12, 9, 15, 12],
  mode: 'lines+markers'					// lines och markers//
};

var data1 = [ trace1, trace2, trace3 ];

var data2 = [ trace1, trace2 ]; 				//Inom paranteserna kan man skriva vilken data man vill ska presenteras//

var layout = {};

Plotly.newPlot('myDiv1', data1, layout);
Plotly.newPlot('myDiv2', data2, layout);
