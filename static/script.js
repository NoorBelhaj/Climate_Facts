
// START OF QUERY DATA used in the download Zone showing either a sample data of full set for download
// ========================================= START  getCO2Emissions
function getCO2Emissions(preview) {
  if (preview==0){
    d3.json("/co2_emissions")
      .then(function(data) {
        var table = d3.select("#co2EmissionsData")
          .html("") // Clear the contents of the element
          .append("table")
          .attr("class", "table");
  
        var thead = table.append("thead");
        var tbody = table.append("tbody");
  
        // Create table headers
        var headers = Object.keys(data[0]);
        thead.append("tr")
          .selectAll("th")
          .data(headers)
          .enter()
          .append("th")
          .text(function(header) {
            return header.charAt(0).toUpperCase() + header.slice(1);
          });
  
        // Create table rows
        var sampleData = data.slice(0, 5); // Modify the number to display a different sample size
        var rows = tbody.selectAll("tr")
          .data(sampleData)
          .enter()
          .append("tr");
  
        // Create table cells
        var cells = rows.selectAll("td")
          .data(function(row) {
            return headers.map(function(header) {
              return { header: header, value: row[header] };
            });
          })
          .enter()
          .append("td")
          .text(function(d) {
            return d.value;
          });
      })
      .catch(function(error) {
        console.log("Error retrieving CO2 emissions data:", error);
      });
    }
    else {
 // OLD CODE
  d3.json("/co2_emissions")
    .then(function (data) {
      var csvContent = "data:text/csv;charset=utf-8,";

      // Create the CSV header
      csvContent += "Country,Year,Emissions\n";
  
      // Add each data row to the CSV content
      data.forEach(function(d) {
        csvContent += `${d.country},${d.year},${d.emissions}\n`;
      });
  
      // Create a data URI for the CSV file
      var encodedUri = encodeURI(csvContent);
  
      // Create a temporary anchor element
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "co2_emissions.csv");
  
      // Simulate a click to trigger the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch(function(error) {
      console.log("Error retrieving CO2 emissions data:", error); 
    });
}}
// =======================================END getCO2Emissions

// ============================= START getTemperature
function getTemperature(preview) {
  if (preview== 0) {
  d3.json("/temperature")
  .then(function(data) {
    var table = d3.select("#temperatureData")
      .html("") // Clear the contents of the element
      .append("table")
      .attr("class", "table");

    var thead = table.append("thead");
    var tbody = table.append("tbody");

    // Create table headers
    var headers = Object.keys(data[0]);
    thead.append("tr")
      .selectAll("th")
      .data(headers)
      .enter()
      .append("th")
      .text(function(header) {
        return header.charAt(0).toUpperCase() + header.slice(1);
      });

    // Create table rows
    var sampleData = data.slice(0, 5); // Modify the number to display a different sample size
    var rows = tbody.selectAll("tr")
      .data(sampleData)
      .enter()
      .append("tr");

    // Create table cells
    var cells = rows.selectAll("td")
      .data(function(row) {
        return headers.map(function(header) {
          return { header: header, value: row[header] };
        });
      })
      .enter()
      .append("td")
      .text(function(d) {
        return d.value;
      });
  })
  .catch(function(error) {
    console.log("Error retrieving Temerature data:", error);
  });
} else {
// OLd Code
  d3.json("/temperature")
    .then(function (data) {
      var csvContent = "data:text/csv;charset=utf-8,";
       // Create the CSV header
      csvContent += "Country,Month,Year,Temperature\n";
          // Add each data row to the CSV content
      data.forEach(function(d) {
      csvContent += `${d.country},${d.month},${d.year},${d.temperature}\n`;
        })
        var encodedUri = encodeURI(csvContent);

      // Create a temporary anchor element
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "temperature.csv");
  
      // Simulate a click to trigger the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch(function (error) {
      console.log("Error retrieving temperature data:", error);
    });
}}
//========================================================== END getTemperature 

//============================================================= compareCO2Emissions
function compareCO2Emissions(preview) {
  if (preview ==0) {
  d3.json("/co2_emissions/compare")
  .then(function(data) {
    var table = d3.select("#co2EmissionsComparisonData")
      .html("") // Clear the contents of the element
      .append("table")
      .attr("class", "table");

    var thead = table.append("thead");
    var tbody = table.append("tbody");

    // Create table headers
    var headers = Object.keys(data[0]);
    thead.append("tr")
      .selectAll("th")
      .data(headers)
      .enter()
      .append("th")
      .text(function(header) {
        return header.charAt(0).toUpperCase() + header.slice(1);
      });

    // Create table rows
    var sampleData = data.slice(0, 5); // Modify the number to display a different sample size
    var rows = tbody.selectAll("tr")
      .data(sampleData)
      .enter()
      .append("tr");

    // Create table cells
    var cells = rows.selectAll("td")
      .data(function(row) {
        return headers.map(function(header) {
          return { header: header, value: row[header] };
        });
      })
      .enter()
      .append("td")
      .text(function(d) {
        return d.value;
      });
  })
  .catch(function(error) {
    console.log("Error retrieving co2 Temerature data:", error);
  });
} else { 
  //OLD CODE 
  d3.json("/co2_emissions/compare")
    .then(function (data) {
        
      var csvContent = "data:text/csv;charset=utf-8,";
      // Create the CSV header
     csvContent += "Country,Emissions\n";
         // Add each data row to the CSV content
     data.forEach(function(d) {
          csvContent += `${d.country},${d.total_emissions}\n`;
       })
    var encodedUri = encodeURI(csvContent);

     // Create a temporary anchor element
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "co2_emissions.csv");
 
     // Simulate a click to trigger the download
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
   })
   .catch(function (error) {
      console.log("Error retrieving CO2 emissions comparison data:", error);
    });
}}
//   ============================================  END compareCO2Emissions

//   ============================================  START avgTemperature
function avgTemperature(preview) {
  if (preview ==0) {
  d3.json("/temperature/average_temperature")
  .then(function(data) {
    var table = d3.select("#avg_temperature")
      .html("") // Clear the contents of the element
      .append("table")
      .attr("class", "table");

    var thead = table.append("thead");
    var tbody = table.append("tbody");

    // Create table headers
    var headers = Object.keys(data[0]);
    thead.append("tr")
      .selectAll("th")
      .data(headers)
      .enter()
      .append("th")
      .text(function(header) {
        return header.charAt(0).toUpperCase() + header.slice(1);
      });

    // Create table rows
    var sampleData = data.slice(0, 5); // Modify the number to display a different sample size
    var rows = tbody.selectAll("tr")
      .data(sampleData)
      .enter()
      .append("tr");

    // Create table cells
    var cells = rows.selectAll("td")
      .data(function(row) {
        return headers.map(function(header) {
          return { header: header, value: row[header] };
        });
      })
      .enter()
      .append("td")
      .text(function(d) {
        return d.value;
      });
  })
  .catch(function(error) {
    console.log("Error retrieving Avergae Temerature data:", error);
  });
} else { 

  // // OLD CODE
  d3.json("/temperature/average_temperature")
    .then(function (data) {
      var csvContent = "data:text/csv;charset=utf-8,";
      // Create the CSV header
     csvContent += "Year,Country,avg_temperature\n";
         // Add each data row to the CSV content
     data.forEach(function(d) {
          csvContent += `${d.Year}${d.Country},${d.avg_temperature}\n`;
       })
    var encodedUri = encodeURI(csvContent);

     // Create a temporary anchor element
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "avg_temperature.csv");
 
     // Simulate a click to trigger the download
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);

    })
    .catch(function (error) {
      console.log("Error retrieving Avergae emissions comparison data:", error);
    });
}}

// ===================================  END avgTemperature

// ===================================  START avgSeasonTemp
function avgSeasonTemp(preview) {
  if (preview ==0) { 
  d3.json("/temperature/season")
  .then(function(data) {
    var table = d3.select("#average_season_temp")
      .html("") // Clear the contents of the element
      .append("table")
      .attr("class", "table");

    var thead = table.append("thead");
    var tbody = table.append("tbody");

    // Create table headers
    var headers = Object.keys(data[0]);
    thead.append("tr")
      .selectAll("th")
      .data(headers)
      .enter()
      .append("th")
      .text(function(header) {
        return header.charAt(0).toUpperCase() + header.slice(1);
      });

    // Create table rows
    var sampleData = data.slice(0, 5); // Modify the number to display a different sample size
    var rows = tbody.selectAll("tr")
      .data(sampleData)
      .enter()
      .append("tr");

    // Create table cells
    var cells = rows.selectAll("td")
      .data(function(row) {
        return headers.map(function(header) {
          return { header: header, value: row[header] };
        });
      })
      .enter()
      .append("td")
      .text(function(d) {
        return d.value;
      });
  })
  .catch(function(error) {
    console.log("Error retrieving average_season_temp data:", error);
  });
} else { 

  d3.json("/temperature/season")
    .then(function (data) {
    var csvContent = "data:text/csv;charset=utf-8,";
    // Create the CSV header
   csvContent += "Year,COuntry,avg_spring,avg_summer,avg_fall,avg_winter\n";
       // Add each data row to the CSV content
   data.forEach(function(d) {
        csvContent += `${d.Year}${d.Country},${d.avg_spring},${d.avg_summer},${d.avg_fall},${d.avg_winter}\n`;
     })
  var encodedUri = encodeURI(csvContent);

   // Create a temporary anchor element
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "avg_temperature.csv");

   // Simulate a click to trigger the download
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);

  })
    .catch(function (error) {
      console.log("Error retrieving CO2 emissions comparison data:", error);
    });
}}
// ===================================  END avgSeasonTemp

// ===================================  START temperature_co2

function temperature_co2(preview) {
  if (preview == 0) {
  d3.json("/temperature_co2")
  .then(function(data) {
    var table = d3.select("#temperature_co2")
      .html("") // Clear the contents of the element
      .append("table")
      .attr("class", "table");

    var thead = table.append("thead");
    var tbody = table.append("tbody");

    // Create table headers
    var headers = Object.keys(data[0]);
    thead.append("tr")
      .selectAll("th")
      .data(headers)
      .enter()
      .append("th")
      .text(function(header) {
        return header.charAt(0).toUpperCase() + header.slice(1);
      });

    // Create table rows
    var sampleData = data.slice(0, 5); // Modify the number to display a different sample size
    var rows = tbody.selectAll("tr")
      .data(sampleData)
      .enter()
      .append("tr");

    // Create table cells
    var cells = rows.selectAll("td")
      .data(function(row) {
        return headers.map(function(header) {
          return { header: header, value: row[header] };
        });
      })
      .enter()
      .append("td")
      .text(function(d) {
        return d.value;
      });
  })
  .catch(function(error) {
    console.log("Error retrieving average_season_temp data:", error);
  });
} else {  
  d3.json("temperature_co2")
    .then(function (data) {
      var csvContent = "data:text/csv;charset=utf-8,";
      // Create the CSV header
     csvContent += "Year,Country,co2_emissions,avg_temerature\n";
         // Add each data row to the CSV content
     data.forEach(function(d) {
          csvContent += `${d.Year}${d.Country},${d.co2_emissions},${d.avg_temerature}\n`;
       })
    var encodedUri = encodeURI(csvContent);
  
     // Create a temporary anchor element
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "avg_temperature.csv");
  
     // Simulate a click to trigger the download
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
  
    })

    .catch(function (error) {
      console.log("Error retrieving CO2 emissions comparison data:", error);
    });
}}

// ===================================  END temperature_co2

// code to include Leaflet map and Plotly chart visualizations:
// Leaflet Map
// var myMap = L.map('map').setView([0, 0], 2);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
// }).addTo(myMap);
//
//
// =================================  END OF QUERY DATA

// FUNCTION USED WITH GeoMap
function getMapData() {
  fetch("/map")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng, {
            radius: 5,
            fillColor: "blue",
            color: "blue",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8,
          });
        },
        onEachFeature: function (feature, layer) {
          layer.bindPopup("<p>Country: " + feature.properties.country + "</p>");
        },
      }).addTo(myMap);
    })
    .catch(function (error) {
      console.log("Error retrieving map data:", error);
    });
}

// FUNCTION USED WITH GeoMap

// ============================ START Anomaly Temp Variation

// Plotly Chart
// In this updated code, the layout object includes additional properties for interactivity.
// The rangeselector property adds a range selector to the x-axis, allowing users to select different time ranges.
// It provides predefined buttons to select ranges like 10 years, 25 years, 50 years, or the full range.
// The rangeslider property adds a range slider to the x-axis, enabling users to zoom in on specific portions of the chart.

function getTemperaturePlotly() {
  let myURL = "/temp_anomaly";
  fetch(myURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var years = [];
      var avg_temp_anomaly = [];
      var up_bound = [];
      var lo_bound = [];

      data.forEach(function (d) {
        if (d.country == "Global") {
          years.push(d.year);
          avg_temp_anomaly.push(d.avg_temp_anomaly);
          up_bound.push(d.up_bound);
          lo_bound.push(d.lo_bound);
        }
      });

      var trace1 = {
        x: years,
        y: avg_temp_anomaly,
        mode: "lines",
        type: "scatter",
        name: "Average Anomaly Temperature",
      };

      var trace2 = {
        x: years,
        y: up_bound,
        mode: "lines",
        type: "scatter",
        name: "Upper Bound Temperature",
      };

      var trace3 = {
        x: years,
        y: lo_bound,
        mode: "lines",
        type: "scatter",
        name: "Lower Bound Temperature",
      };

      var tempData = [trace1, trace2, trace3];

      var layout = {
        title: "Average Anomaly Temperature Variation ",
        xaxis: {
          title: "Year",
          tick0: years[0],
          dtick: 10,
        },
        yaxis: {
          title: "Temperature",
          tickmode: "linear",
          tick0: 0,
          dtick: 0.05,
        },
        width: 1000, // Specify the desired width of the plot in pixels
        height: 500,
      };

      Plotly.newPlot("temperatureChart", tempData, layout);
    })
    .catch(function (error) {
      console.log("Error retrieving temperature data:", error);
    });
}

// Call the functions to retrieve and visualize the data

getTemperaturePlotly();

// ====================== END OF Anomaly Temp Variation

// ================================
// Function to calculate linear regression
function linearRegression(xValues, yValues) {
  var n = xValues.length;
  var xSum = xValues.reduce(function(a, b) {
    return a + b;
  }, 0);
  var ySum = yValues.reduce(function(a, b) {
    return a + b;
  }, 0);
  var xySum = xValues.reduce(function(a, b, i) {
    return a + b * yValues[i];
  }, 0);
  var xSquaredSum = xValues.reduce(function(a, b) {
    return a + b * b;
  }, 0);

  var slope = (n * xySum - xSum * ySum) / (n * xSquaredSum - xSum * xSum);
  var intercept = (ySum - slope * xSum) / n;

  return {
    slope: slope,
    intercept: intercept,
  };
}

function co2_emissionTempPlot(countryName) {
  let myURL = "/temperature_co2?country=" + encodeURIComponent(countryName);
  
  fetch(myURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var years = [];
      var co2_emissions = [];
      var avg_temperature = [];
      var country = countryName;
      

      data.forEach(function (d) {
        if (d.Country == countryName) {
          years.push(d.Year);
          co2_emissions.push(d.co2_emissions);
          avg_temperature.push(d.avg_temperature);
        }
      });
     // Sort the data by years
     var sortedData = data.sort(function(a, b) {
      return a.Year - b.Year;
    });

    years = sortedData.map(function(d) {
      return d.Year;
    });

    co2_emissions = sortedData.map(function(d) {
      return d.co2_emissions;
    });

    avg_temperature = sortedData.map(function(d) {
      return d.avg_temperature;
    });

    // Calculate linear regression for temperature
    var regression = linearRegression(years, avg_temperature);
    var regressionY = years.map(function(year) {
        return regression.slope * year + regression.intercept;
      });

      var trace1 = {
        x: years,
        y: co2_emissions,
        
        type: "bar",
        name: "co2_emissions",
      };

      var trace2 = {
        x: years,
        y: avg_temperature,
        mode: "lines",
        lines: { 
          color: "red",
          width: 3,
        },
        type: "scatter",
        name: "avg_temperature",
      };


      var trace3 = {
        x: years,
        y: regressionY,
        type: "scatter",
        mode: "lines",
        name: "Temperature Regression",
        line: {
          color: "red",
          width: 3,
        },
      };

      var tempData = [trace1, trace3];

      var layout = {
        title: "Average Temperature and CO2 emissions for " + country,
        xaxis: {
          title: "Year",
          tick0: years[0],
          dtick: 10,
        },
        yaxis:[
          {
            title: "CO2 Emissions",
            tickmode: "linear",
          },
          {
            title: "Temperature",
            overlaying: "y",
            side: "right",
            tickmode: "linear",
            range: [-10,40],
            dtick: 5,
          },
        ],
        width: 1000, // Specify the desired width of the plot in pixels
        height: 500,
      };

      Plotly.newPlot("temp_co2", tempData, layout);
    })
    .catch(function (error) {
      console.log("Error retrieving temperature data:", error);
    });
}

// Call the functions to retrieve and visualize the data
let measureCountry = 'Canada'
co2_emissionTempPlot(measureCountry);

// ====================== END OF Anomaly Temp Variation



// ================================

// ========================  START AVERAGE TEMP CHANGE PLOT

function buildCharts(sample) {
  let myurl = "/temperature/average_temperature";
  fetch(myurl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var years = [];
      var temperatures = [];

      data.forEach(function (d) {
        if (d.Country == sample) {
          years.push(d.Year);
          temperatures.push(d.avg_temperature);
        }
      });

      var trace = {
        x: years,
        y: temperatures,
        type: "line",
        // mode: 'lines+markers',
        // marker: {
        //     color: 'red'
        // }
      };

      var layout = {
        title: "Temperature Over Time" + "  " + sample,
        xaxis: {
          title: "Year",
        },
        yaxis: {
          title: "Temperature",
        },
        width: 1000, // Specify the desired width of the plot in pixels
        height: 500,
      };

      Plotly.newPlot("tempChart", [trace], layout);
    })
    .catch(function (error) {
      console.log("Error retrieving temperature data:", error);
    });
}

function initAvgTempAll() {
  let firstSample = "Canada";
  buildCharts(firstSample);
}

function optionChanged(newSample) {
  // updateCharts(newSample)
  buildCharts(newSample);
  co2_emissionTempPlot(newSample)
}

initAvgTempAll();
// ========================  END TEMP CHANGE PLOT

// ====================  Chloropleth Plot ========================
// d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2010_alcohol_consumption_by_country.csv', function(err, rows){
//       function unpack(rows, key) {
//           return rows.map(function(row) { return row[key]; });
//       }

//     var data = [{
//         type: 'choropleth',
//         locationmode: 'country names',
//         locations: unpack(rows, 'location'),
//         z: unpack(rows, 'alcohol'),
//         text: unpack(rows, 'location'),
//         autocolorscale: true
//     }];

//     var layout = {
//       title: 'Pure alcohol consumption<br>among adults (age 15+) in 2010',
//       geo: {
//           projection: {
//               type: 'robinson'
//           }
//       }
//     };

//     Plotly.newPlot("myDivTest", data, layout, {showLink: false});

// });

var plotData = null; // Global variable to store the plot data

function tempChoropleth(newYear) {
  
  d3.json(`/Heat/${newYear}`, function (err, rows) {
    if (err) console.log(err);
    
    var locations = rows.map(function (row) {
      return row.Country;
    });
    var zValues = rows.map(function (row) {
      return parseFloat(row.Temperature);
    });
    var textValues = rows.map(function (row) {
      return row.Country;
    });
    if (
      locations.length !== zValues.length ||
      locations.length !== textValues.length
    ) {
      console.error(
        "Data arrays are not aligned properly. Please check the data."
      );
      return;
    }

    var trace = {
      type: "choropleth",
      locationmode: "country names",
      locations: locations,
      z: zValues,
      text: textValues,
      autocolorscale: true,
    };

    plotData = [trace];
    
    let chloroTitle = `Average Temperature ${newYear}`;
    var layout = {
      title: {
        text: chloroTitle, // Update the title property
      },
      geo: {
        projection: {
          type: "robinson",
        },
      },
      //   ,
      //   coloraxis: {
      //     cmin: Math.min(...zValues),
      //     cmax: Math.max(...zValues),
      //   },
      //   width: 1000,  // Specify the desired width of the plot in pixels
      //   height: 500
    };

    Plotly.newPlot("myDiv", plotData, layout); //, {showLink: false});
  });
}

function initChoropleth(startYear) {
  tempChoropleth(startYear);
}

initChoropleth(1916);

var plotData1 = null; // Global variable to store the plot data
function optionHeat(changedYear) {
  initChoropleth(parseInt(changedYear));
}

// ====================== END OF CHLOROPLETH ===========================

// ==================================Start e chart ===========

// new e chart co2 emissions
var dom = document.getElementById('Echart-container');

var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false,
  width : 800,
  height : 400,
  
});
var option;

// Replace the URL with the path to your data file
$.get('/temperature/temperature_co2', function (_rawData) {
    run(_rawData);
});

function run(_rawData) {
    // var countries = ['Australia', 'Canada', 'China', 'Cuba', 'Finland', 'France', 'Germany', 
    // 'Iceland', 'India', 'Japan', 'North Korea', 'South Korea', 'New Zealand', 'Norway', 'Poland', 'Russia', 'Turkey', 'United Kingdom', 'United States'];
    const countries = [
                'Germany', 'United Kingdom',
                'United States', 'Brazil',
                'China', 'Japan', 'India'
    ];
    const datasetWithFilters = [];
    const seriesList = [];
    echarts.util.each(countries, function (country) {
      var datasetId = 'dataset_' + country;
      datasetWithFilters.push({
        id: datasetId,
        fromDatasetId: 'dataset_raw',
        transform: {
          type: 'filter',
          config: {
            and: [
              { dimension: 'year', gte: 1950 },
              { dimension: 'country', '=': country }
            ]
          }
        }
      });
        seriesList.push({
        type: 'line',
        datasetId: datasetId,
        showSymbol: false,
        name: country,
        endLabel: {
          show: true,
          formatter: function (params) {
            return params.value[3] // + ': ' + params.value[3];
          }
        },
        labelLayout: {
          moveOverlap: 'shiftY'
        },
        emphasis: {
          focus: 'series'
        },
        encode: {
          x: 'year',
          y: 'co2_emissions',
          label: ['country', 'co2_emissions'],
          itemName: 'year',
          tooltip: ['co2_emissions']
        }
      });
    });
    option = {
        // Set the color palette for the dark theme
      color: ['#90c7f4', '#f47983', '#80cbc4', '#fbd97f', '#ba8cdd', '#96d788'],
      // Set the background color for the dark theme
      backgroundColor: '#333',
      // Set the text styles for the dark theme
      textStyle: {
        color: '#fff'} ,  
        animationDuration: 10000,
              
      dataset: [
        {
          id: 'dataset_raw',
          source: _rawData
        },
        ...datasetWithFilters
      ],
      title: {
        text: 'co2_emissions  since 1950',
        textStyle: {
          color: '#fff',
          fontSize: 18,
          align: 'center'
        }
      },
      tooltip: {
        order: 'valueDesc',
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        nameLocation: 'middle',

        name: 'Year'        
      },
      yAxis: {
        name: 'co2_emissions kTones ',
        
      },
      grid: {
        right: 140
      },
      series: seriesList
    };
    myChart.setOption(option);
    
  }

  if (option && typeof option === 'object') {
    myChart.setOption(option);
    dom.render();
  }

  window.addEventListener('resize', myChart.resize);

// ====================== END e Chart co2 emissions ===================

// AVG TEMP plotly clean up

// function updateCharts(sample) {
//     let myurl = '/temperature/average_temperature'
//   d3.json(myurl).then(function (data) {
//     let country1 = data.filter(sampleObj => sampleObj.Country == sample)
//     let temp = country1.map(country1 => parseFloat(country1.avg_temperature))
//     let year = country1.map(country1 => parseFloat(country1.Year))
//     // console.log(year)
//     // console.log(temp)
//     let trace1 = {
//       x: [year],
//       y: [temp]
//     //  type: 'line'
//     };
//     let my_data = [trace1];
//     let layout = {
//     title: 'Temerature Over Time '+ sample
//     };
//     Plotly.update("tempChart", trace1, layout);
//   });
// }

// function init() {
//   let selector = d3.select("#selDataset")
//   console.log(selector)
//   console.log("This is init data:  ",data)

//   d3.json(dropdownurl).then(function (data) {
//     let country1 = data[0].Country
//     for (let i = 0; i < 100; i++) {
//       let countries = data[i].Country
//       console.log(countries)
//   //    const uniqueCountries = [... new Set(countries)]
//       //console.log(uniqueCountries)
//       selector
//         .append("option")
//         .text(countries )
//         .property("value",countries )
//     }
//     let firstSample = country1
//     console.log(firstSample)
//     buildCharts(firstSample)
//   })
// }

// function initAvgTemp(initData) {
//     let selector = d3.select("#selDataset");

//     d3.json(initData, function (data) {
//       let countries = data.map(item => item.Country);
//       let countryList = [...new Set(countries)].sort(); // Sort countries in ascending order

//       countryList.forEach(country => {
//         selector
//           .append("option")
//           .text(country)
//           .property("value", country);
//       });

//       let firstSample = countries[0];
//       console.log('From init function countries:', countryList);

//       buildCharts(firstSample);
//     });
//   }

// initAvgTemp('/temperature/average_temperature');
// END CLEAN UP ====
