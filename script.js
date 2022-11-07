var CalCounty;
var CalPic;

var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_region_usa_caLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

chart.geodata.features[0].properties.population = "77,031" ; //yuba
chart.geodata.features[1].properties.population = "220,408" ; //yolo
chart.geodata.features[2].properties.population = "854,223"; //ventura


// console.log(chart.geodata.features[1].properties)

console.log(chart);


// Exclude Antartica
polygonSeries.exclude = ["AQ"];

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;



// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name} County,  Population: {population} ";

polygonTemplate.fill = am4core.color("#b78727");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#367B25");



polygonTemplate.events.on("hit", function(ev) {


CalCounty = ev.target.dataItem.dataContext.name + ' County, California'

 console.log(ev.target.cloneId);
 console.log(CalCounty);




//getting our JSON data from Wikipedia





// old wAY

var queryURL="https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&piprop=original&prop=pageimages|extracts&exintro&explaintext&redirects=1&titles=" + CalCounty;



// var queryURL2 = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&titles=File:"+CalPic+"&prop=imageinfo&iilimit=50&iiend=20071231235959&iiprop=timestamp|user|url"


// convert to using
// fetch(queryUrl).
// then(function(res) {
//   return res.json()
// })
// .then(function (response) {
//   let page = response.query.pages
//   let page2 = response
//   //  let pic = response.continue.imcontinue

//   let pageId = Object.keys(response.query.pages)[0];
//   let content = page[pageId].extract
//   let image = page[pageId].original.source

//   // console.log();
//   // console.log(page2)
//   document.getElementById('county-text').innerHTML = content;
//   document.getElementsByTagName('body')[0].style.backgroundImage = 'url(' + image + ')';
//   //  document.getElementById('information').innerHTML = '<img src ='+pic+ "/>";
// });

fetch(queryURL,
  {
    data: { action:'query', format:'json' },
    dataType: 'json',
    method: "GET",
  }).then
  (function(res) {
    return res.json()
  })
   .then(function (response) {
     let page = response.query.pages
     let page2 = response
     let pageId = Object.keys(response.query.pages)[0];
     let content = page[pageId].extract
     let image = page[pageId].original.source
     document.getElementById('county-text').innerHTML = content;
     document.getElementsByTagName('body')[0].style.backgroundImage = 'url(' + image + ')';
   })



// $.ajax({
//   url: queryURL,
//   data: { action:'query', format:'json' },

//   dataType: 'json',
//   method: "GET",
// }).then(function (response) {
//   let page = response.query.pages
//   let page2 = response
//   //  let pic = response.continue.imcontinue

//   let pageId = Object.keys(response.query.pages)[0];
//   let content = page[pageId].extract
//   let image = page[pageId].original.source

//   // console.log();
//   // console.log(page2)
//   document.getElementById('county-text').innerHTML = content;
//   document.getElementsByTagName('body')[0].style.backgroundImage = 'url(' + image + ')';
//   //  document.getElementById('information').innerHTML = '<img src ='+pic+ "/>";

// });

});






