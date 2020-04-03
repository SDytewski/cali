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
// console.log(chart.geodata.features[2].properties);

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
 

 console.log(ev.target.cloneId);

// Colusa
 if(ev.target.cloneId == "clone-id-361"){

  CalCounty = "Colusa%20County";
  CalPic = "Bear%20Creek%20(Colusa%20County).jpg";

  

}


 //  Lake
 if(ev.target.cloneId == "clone-id-317"){

  
  CalCounty = "Lake%20County,%20California";
  CalPic = "Clear%20Lake%20Ca%20-%20panoramio.jpg";
 
}



//Glenn
if(ev.target.cloneId == "clone-id-341"){
  
  CalCounty = "Glenn%20County";
  CalPic = "Northbound%20Interstate%205%20California.jpg";
 
 }


 // Humboldt
  if(ev.target.cloneId == "clone-id-337"){
  
  CalCounty = "Humboldt%20County,%20California";
   CalPic = "Carson%20Mansion%20and%20Eureka%20Public%20Library.jpg";
  
 }

//Mendocino
  if(ev.target.cloneId == "clone-id-293"){
  
     
  CalCounty = "Mendocino%20County";
  CalPic = "Mendocino%20California.jpg";
 

}

// Sonoma
  if(ev.target.cloneId == "clone-id-189"){
  
    CalCounty = "Sonoma%20County";
    CalPic ="Lake%20Sonoma%20Sunset.jpg";


  }




// Tehama 
if(ev.target.cloneId == "clone-id-177"){
 
  CalCounty = "Tehama%20County";
  CalPic = "Ishi%20Wilderness.jpg";
 
}

  // Trinity
if(ev.target.cloneId == "clone-id-173"){
  
  CalCounty = "Trinity%20County,%20California";
  CalPic = "Trinity%20County%20Mountains%20(California).jpg";
   
   }  





//Yolo
 if(ev.target.cloneId == "clone-id-157"){
 
  
  CalCounty = "Yolo%20County";
  CalPic = "Yolo%20County%20Courthouse.jpg"
 

}














//getting our JSON data from Wikipedia





// old wAY

var queryURL="https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?format=json&action=query&prop=images|extracts&exintro&explaintext&redirects=1&titles="+ CalCounty;

var queryURL2 = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&titles=File:"+CalPic+"&prop=imageinfo&iilimit=50&iiend=20071231235959&iiprop=timestamp|user|url"






$.ajax({
  url: queryURL,
	data: { action:'query', format:'json' },
    
  dataType: 'json',
  method: "GET",
}).then(function (response) {
  let page = response.query.pages
  let page2 = response
  //  let pic = response.continue.imcontinue

  let pageId = Object.keys(response.query.pages)[0];
  let content = page[pageId].extract
  console.log();
  // console.log(page2)
  document.getElementById('county-text').innerHTML = content;
  //  document.getElementById('information').innerHTML = '<img src ='+pic+ "/>";

});


// Second ONE


$.ajax({
  url: queryURL2,
	data: { action:'query', format:'json' },
    
  dataType: 'json',
  method: "GET"
}).then(function (response) {
   let pageB = response.query.pages;
  // let pageB2 = response
  //  let pic = response.continue.imcontinue

  let pageIdB = Object.keys(response.query.pages)[0];
  let contentB = pageB[pageIdB].imageinfo[0].url
  // console.log(contentB);
  console.log(contentB)
  // document.getElementById('county-text').innerHTML = content;
   document.getElementById('information').innerHTML = '<img src ='+ contentB + ">";

});




}, );   







// Butte

// if(ev.target.cloneId == "clone-id-369"){
  
   
//   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/1/1f/Butte_County%2C_CA.jpg" />';
//   document.getElementById('county-text').innerHTML = "<h2>Butte</h2>   <p>Butte County comprises the Chico, CA Metropolitan Statistical Area. It is in the California Central Valley, north of the state capital of Sacramento. Butte County is known as the 'Land of Natural Wealth and Beauty.'B utte County was incorporated as one of California's 19 original counties on 18 February 1850. Its name is derived from the Marysville or Sutter Buttes, which lay within the boundaries when it was created. The word butte is derived from the Teutonic word meaning 'a blunt extension or elevation.' On November 8, 2018, a major wildfire, the 'Camp Fire', destroyed most of the town of Paradise, the adjacent community of Concow, and many square miles of rural, hilly country east of Chico. More than eighty people were killed, fifty thousand were displaced, 200,000 acres were burned, and twenty thousand buildings were destroyed. The Camp Fire is California's most destructive and deadliest fire.</p>"
//  }  


// Colusa

// if(ev.target.cloneId == "clone-id-361"){
  
   
//   document.getElementById('information').innerHTML = '<img src = "https://www.countyofcolusa.org/PhotoGallery/18/Carter1293FullMoonSettingAtSunrise.jpg" />';
//   document.getElementById('county-text').innerHTML = "<h2>Colusa</h2>   <p> Colusa County is one of the original counties of California, created in 1850 at the time of statehood. Parts of the county's territory were given to Tehama County in 1856 and to Glenn County in 1891.Colusa County is one of the original counties of California, created in 1850 at the time of statehood. Parts of the county's territory were given to Tehama County in 1856 and to Glenn County in 1891. The county was named after the 1844 Rancho Colus Mexican land grant to John Bidwell. The name of the county in the original state legislative act of 1850 was spelled Colusi, and often in newspapers was spelled Coluse. The word is derived from the name of a Patwin village known as Ko'-roo or Korusi located on the west side of the Sacramento River on the site of the present-day city of Colusa.The name was established as Colusa by 1855</p>"
//  }  



// Contra Costa

// if(ev.target.cloneId == "clone-id-357"){
  
   
//   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/6/62/View_of_Mount_Diablo_and_CA_Highway_24_from_Lafayette_Heights.jpg" />';
//   document.getElementById('county-text').innerHTML = "<h2>Contra Costa</h2>   <p> Contra Costa County was one of the original 27 counties of California, created in 1850 at the time of statehood. The county was originally to be called Mt. Diablo County, but the name was changed prior to incorporation as a county. The county's Spanish language name means opposite coast, because of its location opposite San Francisco, in an easterly direction, on San Francisco Bay. Southern portions of the county's territory, including all of the bayside portions opposite San Francisco and northern portions of Santa Clara County, were given up to form Alameda County effective March 25, 1853. The most notable natural landmark in the county is 3,849 feet (1,173 m) Mount Diablo, at the northerly end of the Diablo Range.</p>"
//  }  


 
//  Del Norte

//  if(ev.target.cloneId == "clone-id-353"){
  
   
//   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/d/de/Redwood_National_Park%2C_fog_in_the_forest.jpg" />';
//   document.getElementById('county-text').innerHTML = "<h2>Del Norte</h2>   <p>The rural county is notable for forests containing giant Coast Redwoods, with some attaining heights over 350 feet (110 m). This northernmost county on the California coast also has scores of unique plants and flowers, dozens of species of coastal birds and fish, rocky primitive beaches and sea stacks, pristine rivers, and historic lighthouses. Del Norte is also known among Bigfoot enthusiasts as the location of the famous Patterson–Gimlin film, as well as being the location of some of the forest scenes used in Return of the Jedi. In 1855 Congress authorized the building of a lighthouse at 'the battery point' (a high tide island on the coast of Crescent City) which is still functioning as a historical landmark. Del Norte County was established in 1857, from part of the territory of Klamath County following the great California Gold Rush. Klamath County itself ceased to exist in 1874.</p>"
//  }


 //  El Dorado

//  if(ev.target.cloneId == "clone-id-349"){
  
   
//   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/3/33/Sugar_Pine_Point_State_Park_1.jpg" />';
//   document.getElementById('county-text').innerHTML = "<h2>El Dorado</h2>   <p>El Dorado County is part of the Sacramento-Roseville-Arden-Arcade, CA Metropolitan Statistical Area. It is located entirely in the Sierra Nevada, from the historic Gold Country in the western foothills to the High Sierra in the east. In the county's Lake Tahoe area, environmental awareness and environmental protection initiatives have grown along with the population since the 1960 Winter Olympics, hosted at Squaw Valley Ski Resort in neighboring Placer County.The County of El Dorado was one of California's original 27 counties created effective February 18, 1850 (the number has risen to 58 today). Its name is derived from the Spanish meaning 'the gilded/golden'. The final segments of the Pony Express mail route ran through El Dorado County until its replacement with the telegraph service in 1861; U.S. Highway 50 follows the Pony Express route today.</p>"
//  }

// Glenn
// if(ev.target.cloneId == "clone-id-341"){
  
   
//   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/en/c/cd/Northbound_Interstate_5_California.jpg" />';
//   document.getElementById('county-text').innerHTML = "<h2>Glenn</h2>   <p>Glenn County was formed in 1891 from parts of Colusa County. It was named for Hugh J. Glenn, who came to be the largest wheat farmer in the state during his lifetime and a man of great prominence in political and commercial life in California. The county seat is Willows. It is located in the Sacramento Valley, in the northern part of the California Central Valley. California Northern Railroad shortline serves Willows. The main line runs north to Tehama and south to Davis, where the railroad interchanges with the Union Pacific Railroad. Prior to the line being leased to the California Northern, the route was operated by Southern Pacific and was known as the West Side Line. The railroad first reached Willows on December 28, 1879, from Davis. In 1882 the extension from Willows to Tehama was completed. In 1884 the West Side and Mendocino Railroad constructed a line east from Willows to Fruto.</p>"
//  }




// Humboldt
//  if(ev.target.cloneId == "clone-id-337"){
  
   
//   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/9/9f/Humboldt_Bay_and_Eureka_aerial_view.jpg" />';
//   document.getElementById('county-text').innerHTML = "<h2>Humboldt</h2>   <p>Its primary population centers of Eureka, the site of College of the Redwoods main campus, and the smaller college town of Arcata, site of Humboldt State University, are located adjacent to Humboldt Bay, California's second largest natural bay. Area cities and towns are known for hundreds of ornate examples of Victorian architecture.The first recorded entry of Humboldt Bay by non-natives was an 1806 visit from a sea otter hunting party from Sitka employed by the Russian American Company. In 1850, Douglas Ottinger and Hans Buhne entered the bay, naming it Humboldt in honor of the great naturalist and world explorer, Alexander von Humboldt, and the name was later applied to the county as a whole.</p>"
//  }


//  Lake
// if(ev.target.cloneId == "clone-id-317"){
  
   
//   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/a/ae/ClearLakeCA.jpg" />';
//   document.getElementById('county-text').innerHTML = "<h2>Lake</h2>   <p>The county takes its name from Clear Lake, the dominant geographic feature in the county and the largest natural lake wholly within California. Lake County is part of California's Wine Country, which also includes Napa, Sonoma and Mendocino counties. It includes five American Viticultural Areas and over 35 wineries. Lake County was formed in 1861 from parts of Napa and Mendocino counties, but the area had European-American settlers from at least the 1840s. Lake County has long been known as a farming community. By the early 20th century, the area was earning a reputation for producing some of the world's greatest wines. Lake County has been ranked by the American Lung Association as having the cleanest air in the nation, including in 2013, 2014 and 2015.</p>"
//  }




//  Lassen
// if(ev.target.cloneId == "clone-id-313"){
  
   
//   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/5/57/Lassen_County_Courthouse.jpg" />';
//   document.getElementById('county-text').innerHTML = "<h2>Lassen</h2>   <p>Lassen County comprises the Susanville, California, micropolitan statistical area. A former farming, mining and lumber area, its economy now depends on employment at two state and one federal prison; the former two in Susanville and the latter in Herlong. In 2007 half the adults in Susanville worked in one of the facilities.Lassen County was formed on April 1, 1864 from parts of Plumas and Shasta counties following the two-day conflict known as the 'Sagebrush War', also called the Roop County War, that started on February 15, 1863. Due to uncertainties over the California border, the area that is now Lassen County was part of the unofficial Nataqua Territory and Roop County, Nevada during the late 1850s and early 1860s.The county was named by European Americans after Peter Lassen, along with Lassen Peak, which is in adjoining Shasta County. Lassen was one of General John C. Fremont's guides, and a famous trapper, frontiersman and Indian fighter. He was murdered under mysterious circumstances near the Black Rock Desert in 1859, and his murder was never solved.</p>"
//  }



//  Marin
// if(ev.target.cloneId == "clone-id-301"){
  
   
//   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/2/2a/Saint_Raphael_Church_San_Rafael_CA.jpg" />';
//   document.getElementById('county-text').innerHTML = "<h2>Marin</h2>   <p> San Quentin State Prison is located in the county, as is George Lucas' Skywalker Ranch. Autodesk, the publisher of AutoCAD, is also located there, as well as numerous other high-tech companies. The Marin County Civic Center was designed by Frank Lloyd Wright and draws thousands of visitors a year to guided tours of its arch and atrium design.  Marin County's natural sites include the Muir Woods redwood forest, the Marin Headlands, Stinson Beach, the Point Reyes National Seashore, and Mount Tamalpais. The United States' oldest cross country running event, the Dipsea Race, takes place annually in Marin County, attracting thousands of athletes. Mountain biking was invented on the slopes of Mount Tamalpais in Marin. Marin County is one of the original 27 counties of California, created February 18, 1850, following adoption of the California Constitution of 1849 and just months before the state was admitted to the Union. According to General Mariano Vallejo, who headed an 1850 committee to name California's counties, the county was named for 'Marin', great chief of the tribe 'Licatiut'.</p>"
//  }





//  Mendocino
//  if(ev.target.cloneId == "clone-id-293"){
  
   
//   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/6/64/Mendocino_vineyard.jpg" />';
//   document.getElementById('county-text').innerHTML = "<h2>Mendocino</h2>   <p>The county is noted for its distinctive Pacific Ocean coastline, its location along California's 'Lost Coast', Redwood forests, wine production, microbrews, and liberal views about the use of cannabis and support for its legalization. In 2009 it was estimated that roughly one-third of the economy was based on the cultivation of marijuana. Mendocino County was one of the original counties of California, created in 1850 at the time of statehood. Due to an initially minor white American population, it did not have a separate government until 1859 and was under the administration of Sonoma County prior to that. Some of the county's land was given to Sonoma County between 1850 and 1860.The county derives its name from Cape Mendocino (most of which is actually located in adjacent Humboldt County), which was probably named in honor of either Antonio de Mendoza, Viceroy of New Spain, 1535–1542 (who sent the Juan Rodríguez Cabrillo Expedition to this coast in 1542), or Lorenzo Suárez de Mendoza, Viceroy from 1580 to 1583. Mendocino is the adjectival form of the family name of Mendoza.</p>"
//  }


//  Modoc
// if(ev.target.cloneId == "clone-id-285"){
  
   
//   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/1/13/Pit_River_Valley.jpg" />';
//   document.getElementById('county-text').innerHTML = "<h2>Modoc</h2>   <p>A large portion of Modoc County is federal land. Several federal agencies, including the United States Forest Service, Bureau of Land Management, National Park Service, Bureau of Indian Affairs, and the United States Fish and Wildlife Service, have employees assigned to the area, and their operations are a significant part of the area's economy and services. The county's official slogans include 'The last best place' and 'Where the West still lives'.Prior to the arrival of Europeans in the region, varying cultures of Native Americans inhabited the county for thousands of years. At the time of European encounter, the Modoc people lived in what is now northern California, near Lost River and Tule Lake. The county was named after them. Settlement of the county began in earnest in the 1870s, with the timber, gold, agriculture, and railroad industries bringing most of the settlers into the area. Modoc County was formed when Governor Newton Booth signed an Act of the California Legislature on February 17, 1874.</p>"
//  }

 //  Napa
// if(ev.target.cloneId == "clone-id-273"){
  
   
//   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/8/89/Fall_in_Napa_Valley.jpg" />';
//   document.getElementById('county-text').innerHTML = "<h2>Napa</h2>   <p>Napa County was one of the original counties of California, created in 1850 at the time of statehood. Parts of the county's territory were given to Lake County in 1861. Napa County comprises the Napa, CA Metropolitan Statistical Area, which is also included in the San Jose-San Francisco-Oakland, CA Combined Statistical Area. It is one of four North Bay counties.Napa County, once the producer of many different crops, is known today for its regional wine industry, rising to the first rank of wine regions with France by local wineries Stag's Leap Wine Cellars and Chateau Montelena winning the 'Judgment of Paris' in 1976. The word 'napa' is of Indian derivation and has been variously translated as “grizzly bear,” “house,” “motherland” or “fish.” Of the many explanations of the names’s origin, the most plausible seems to be that it is derived from the Patwin word napo meaning house.</p>"
//  }

 //  Nevada
// if(ev.target.cloneId == "clone-id-269"){
  
   
//   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/6/6c/Donner_Lake_from_McClashan_Point.jpg" />';
//   document.getElementById('county-text').innerHTML = "<h2>Nevada</h2>   <p>Nevada County comprises the Truckee-Grass Valley, CA Micropolitan Statistical Area, which is also included in the Sacramento-Roseville, CA Combined Statistical Area. It is in the Mother Lode Country. Created in 1851, from portions of Yuba County, Nevada County was named after the mining town of Nevada City, a name derived from the Sierra Nevada Mountains. The word nevada is Spanish for 'snowy' or 'snow-covered.' Nevada City was the first to use the word 'Nevada' in its name. In 1851 the newly formed Nevada County used the same name as the county seat. The bordering state of Nevada used the same name in 1861. The region came to life in the Gold Rush of 1849. Many historical sites remain to mark the birth of this important region in California's formative years. Among them are the Nevada Theatre in Nevada City, the oldest theater built in California in 1865. It operates to this day and once hosted Mark Twain among other historical figures.</p>"
//  }

 
 //  Placer
// if(ev.target.cloneId == "clone-id-261"){
  
   
//   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/a/a2/Auburn_California_courthouse.jpg" />';
//   document.getElementById('county-text').innerHTML = "<h2>Placer</h2>   <p>Placer County is included in the Greater Sacramento metropolitan area. It is in both the Sacramento Valley and Sierra Nevada regions, in what is known as the Gold Country. The county stretches roughly 65 miles from Sacramento's suburbs at Roseville to the Nevada border and the shore of Lake Tahoe.The discovery of gold in 1848 brought tens of thousands of miners from around the world during the California Gold Rush. In addition, many more thousands came to provide goods and services to the miners. Only three years after the discovery of gold, the fast-growing county was formed from portions of Sutter and Yuba counties on April 25, 1851, with Auburn as the county seat. Placer County took its name from the Spanish word for sand or gravel deposits containing gold. Miners washed away the gravel, leaving the heavier gold, in a process known as 'placer mining.'The 1960 Winter Olympics were hosted in Squaw Valley, which is located in Placer County.</p>"
//  }

// Plumas

// if(ev.target.cloneId == "clone-id-257"){
  
   
//   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/9/93/LakeAlmanor2.jpg" />';
//   document.getElementById('county-text').innerHTML = "<h2>Plumas</h2>   <p>The county was named for the Spanish Río de las Plumas (the Feather River), which flows through the county.Plumas County was formed in 1854 during a meeting of three commissioners held at the American Ranch in Quincy. It was carved from the eastern portion of Butte County. Quincy, originally a mining town, was chosen as the county seat after an early settler donated a plot of land there to establish the seat. In 1864, the state legislature took a large portion of Plumas County to organize Lassen County because of increasing population. Shortly afterward Plumas County annexed part of Sierra County, including the prosperous mining town of La Porte. Thanks to the railroad, Plumas County could export its lumber beyond the local area, and the timber industry became dominant in the county’s economy for decades.</p>"
//  }

// Sacramento

// if(ev.target.cloneId == "clone-id-249"){
  
   
//   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/1/11/Sacramento_Capitol.jpg" />';
//   document.getElementById('county-text').innerHTML = "<h2>Sacramento</h2>   <p>Sacramento County is the central county of the Greater Sacramento metropolitan area.  Its county seat is Sacramento, which has been the state capital of California since 1854. Sacramento County was one of the original counties of California, which were created in 1850 at the time of statehood. The county was named after the Sacramento River, which forms its western border. The river was named by Spanish cavalry officer Gabriel Moraga for the Santisimo Sacramento (Most Holy Sacrament), referring to the Catholic Eucharist. Alexander Hamilton Willard, a member of the Lewis and Clark Expedition, is buried in the old Franklin Cemetery.</p>"
//  }




// San Bernadino

//  if(ev.target.cloneId == "clone-id-241"){
  
   
//    document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/0/07/Mojave_Desert_National_Preserve_%284040289834%29.jpg" />';
//    document.getElementById('county-text').innerHTML = "<h2>San Bernadino</h2>   <p>The Franciscans gave the name San Bernardino to the snowcapped peak in Southern California, in honor of a saint and it is from him that the county derives its name. Father Francisco Dumetz, named a church San Bernardino on May 20, 1810, after the feast day of St. Bernardino of Siena. In 1819, the Franciscans established the San Bernardino de Sena Estancia, a mission farm in what is now Redlands. Agua Mansa was the first town in what became San Bernardino County, settled by immigrants from New Mexico on land donated from the Rancho Jurupa in 1841.Following the purchase of Rancho San Bernardino, and the establishment of the town of San Bernardino in 1851 by Mormon colonists, San Bernardino County was formed in 1853 from parts of Los Angeles County. Some of the southern parts of the county's territory were given to Riverside County in 1893.</p>"
//   }



  // San Francisco

  // if(ev.target.cloneId == "clone-id-233"){
  
   
  //   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/1/1e/San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg" />';
  //   document.getElementById('county-text').innerHTML = "<h2>San Francisco</h2>   <p>San Francisco is known for its cool summers, fog, steep rolling hills, eclectic mix of architecture, and landmarks, including the Golden Gate Bridge, cable cars, the former Alcatraz Federal Penitentiary, Fisherman's Wharf, and its Chinatown district. San Francisco was founded on June 29, 1776, when colonists from Spain established Presidio of San Francisco at the Golden Gate and Mission San Francisco de Asís a few miles away, all named for St. Francis of Assisi. The California Gold Rush of 1849 brought rapid growth, making it the largest city on the West Coast at the time. San Francisco became a consolidated city-county in 1856. San Francisco is named after Saint Francis. The first Spanish settlement in San Francisco was built in 1776 and was named Mission San Francisco de Asis, and today is called Mission Dolores.</p>"
  //  }  


// San Mateo

// if(ev.target.cloneId == "clone-id-221"){
  
   
//   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/b/bb/Redwood_City_port_aerial_view.jpg" />';
//   document.getElementById('county-text').innerHTML = "<h2>San Mateo</h2>   <p>San Mateo County was formed in 1856 after San Francisco County, one of the state's 18 original counties since California's statehood in 1850, was split apart. Until 1856, San Francisco's city limits extended west to Divisadero Street and Castro Street, and south to 20th Street. In response to the lawlessness and vigilantism that escalated rapidly between 1855 and 1856, the California government decided to divide the county. A straight line was then drawn across the tip of the San Francisco Peninsula just north of San Bruno Mountain. Everything south of the line became the new San Mateo County while everything north of the line became the new consolidated City and County of San Francisco, to date the only consolidated city-county in California. San Mateo County bears the Spanish name for Saint Matthew. As a place name, San Mateo appears as early as 1776 in the diaries of Anza and Font.</p>"
//  }  





// Shasta 

// if(ev.target.cloneId == "clone-id-205"){
  
   
//   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/3/31/Shasta_from_south.jpg" />';
//   document.getElementById('county-text').innerHTML = "<h2>Shasta </h2>  <p>Shasta County was one of the original counties of California, created in 1850 at the time of statehood. Parts of the county's territory were given to Siskiyou County in 1852, and to Tehama County in 1856. The county was named after Mount Shasta; the name is derived from the English equivalent for the Shasta people, the name of a Native American tribe that once lived in the area, but they were ethnically cleansed from the area in the 1850's. The name of the tribe was spelled in various ways until the present version was used when the county was established. Originally Mt. Shasta was within the county, but it is now part of Siskiyou County, to the north. Its 14,179-foot (4,322 m) peak is visible throughout most of Shasta County. Shasta County comprises the Redding, California Metropolitan Statistical Area. The county occupies the northern reaches of the Sacramento Valley, with portions extending into the southern reaches of the Cascade Range. Points of interest in Shasta County include Shasta Lake, Lassen Peak, and the Sundial Bridge.</p>"
//  }  


// Sierra

// if(ev.target.cloneId == "clone-id-201"){
  
   
//   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/b/b5/Downieville%2C_California%2C_at_Main_and_Commercial_St.%2C_looking_south.jpg" />';
//   document.getElementById('county-text').innerHTML = "<h2>Sierra </h2>  <p>The county is in the Sierra Nevada, northeast of Sacramento on the border with Nevada.Sierra County was formed from parts of Yuba County in 1852. The county derives its name from the Sierra Nevada. Prior to the California Gold Rush, the area was home to both the Maidu and the Washoe peoples. They generally summered in the higher elevations to hunt and fish, and returned to lower elevations for the winter months. After the discovery of gold in the Sierra foothills sparked the California Gold Rush, more than 16,000 miners settled in Sierra County between 1848-1860. Most mining settlements in the county sprung up along the North and Middle Forks of the Yuba River, both of which had rich deposits of gold. While some of the mining boom towns faded away once gold fever died down, other settlements such as Downieville and Sierra City have remained.</p>"
//  }  




// Siskiyou 

// if(ev.target.cloneId == "clone-id-197"){
  
   
//   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/3/31/Shasta_from_south.jpg" />';
//   document.getElementById('county-text').innerHTML = "<h2>Siskiyou </h2>   <p>Siskiyou County is in the Shasta Cascade region along the Oregon border. Because of its outdoor recreation opportunities and Gold Rush era history, it is an important tourist destination within the state. Siskiyou County was created on March 22, 1852, from parts of Shasta and Klamath Counties, and named after the Siskiyou mountain range. Mount Shasta (Karuk: Úytaahkoo or 'White Mountain')is a potentially active volcano at the southern end of the Cascade Range. The county is the site of the central section of the Siskiyou Trail, which ran between California's Central Valley and the Pacific Northwest. The Siskiyou Trail followed Native American footpaths, and was extended by Hudson's Bay Company trappers in the 1830s. Its length was increased by 'Forty-Niners' during the California Gold Rush. On September 3, 2013, the Siskiyou County Board of Supervisors voted 4-1 in favor of secession from California to form a proposed state named Jefferson. A similar move was made in 1941, but was shelved due to the attack on Pearl Harbor.</p>"
//  }  

 
// Solano

// if(ev.target.cloneId == "clone-id-193"){
     
//   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/9/9f/Suisun_City_Marina_and_City_Hall.jpg"/>';
//   document.getElementById('county-text').innerHTML = "<h2>Solano</h2>  <p>Solano County comprises the Vallejo–Fairfield, CA Metropolitan Statistical Area, which is also included in the San Jose–San Francisco–Oakland, CA Combined Statistical Area. Solano County is the northeastern county in the nine-county San Francisco Bay Area region. It was one of the original counties of California, created in 1850 at the time of statehood. At the request of General Mariano Guadalupe Vallejo, the county was named for Chief Solano of the Suisun people, a Native American tribe of the region and Vallejo's close ally. Chief Solano at one time led the tribes between the Petaluma River and the Sacramento River. The chief was also called Sem-Yeto, which signifies 'brave or fierce hand.' The Chief was given the Spanish name Francisco Solano during baptism at the Catholic Mission, and is named after the Spanish Franciscan missionary, Father Francisco Solano.</p>"
// }



// Sonoma
  // if(ev.target.cloneId == "clone-id-189"){
     
  //   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/d/dc/Old_Courthouse_Square%2C_Downtown_Santa_Rosa_%28Smaller_Version%29.jpg"/>';
  //   document.getElementById('county-text').innerHTML = "<h2>Sonoma</h2>  <p>Sonoma is the southwestern county and largest producer of California's Wine Country region, which also includes Napa, Mendocino, and Lake counties. It possesses thirteen approved American Viticultural Areas and over 250 wineries. In 2002, Sonoma County ranked as the 32nd county in the United States in agricultural production. As early as 1920, Sonoma County was ranked as the eighth most agriculturally productive US county and a leading producer of hops, grapes, prunes, apples, and dairy and poultry products, largely due to the extent of available, fertile agricultural land in addition to the abundance of high quality irrigation water. More than 7.4 million tourists visit each year, spending more than $1 billion in 2006. According to the Coast Miwok and the Pomo tribes that lived in the region, Sonoma translates as 'valley of the moon' or 'many moons'. Sonoma was one of the original counties formed when California became a state in 1850.</p>"
  // }

  
// Sutter
// if(ev.target.cloneId == "clone-id-181"){
     
//   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/a/a7/CA70bridges.JPG"/>';
//   document.getElementById('county-text').innerHTML = "<h2>Sutter</h2>  <p>Sutter County is included in the Yuba City, CA Metropolitan Statistical Area as well as the Sacramento-Roseville, CA Combined Statistical Area. The county is located along the Sacramento River in the Sacramento Valley.Sutter County was one of the original counties of California, created in 1850 at the time of statehood. Parts of the county were given to Placer County in 1852.Sutter County is named after one of the state’s more engaging and complex historical personalities, and an agricultural visionary. John Augustus Sutter, a German native born to Swiss parents, was one of the first to recognize the Sacramento Valley for its potential as an agricultural empire, and his Hock Farm, established in 1841 on the Feather River just south of present-day Yuba City, was the site of the valley’s first large agricultural enterprise.</p>"
// }

// Tehama
// if(ev.target.cloneId == "clone-id-177"){
     
//   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/1/17/Ishi_Wilderness.jpg"/>';
//   document.getElementById('county-text').innerHTML = "<h2>Tehama</h2>  <p>Tehama County comprises the Red Bluff, California micropolitan statistical area, which is also included in the Redding-Red Bluff, California combined statistical area. The county is bisected by the Sacramento River.Tehama County was formed from parts of Butte, Colusa, and Shasta Counties in 1856.The county is named for the City of Tehama. The origin of the name is not known. Suggested possible roots are the Spanish language word tejamanil (shingle), or 'high water' in the dialect of local Native Americans.Famous early figures include Kit Carson, who took part in a fight that gave name to Bloody Island and Battle Creek, Jedediah Smith, John C. Fremont, and William B. Ide, the first and only president of the California Republic.</p>"
// }



  //Trinity

  // if(ev.target.cloneId == "clone-id-173"){
  
   
  //   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Trinity_lake_California.jpg" />';
  //   document.getElementById('county-text').innerHTML = "<h2>Trinity</h2>   <p>The county seat and largest community is Weaverville. Weaverville has the distinction of housing some of California's oldest buildings. The courthouse, built in 1856, is the second oldest in the state, and the Weaverville Drug Store has been filling prescriptions since 1852. The Joss House is a historic Taoist temple built in 1873. Trinity County is rugged, mountainous, heavily forested, and lies along the Trinity River within the Salmon and Klamath Mountains. It is also one of three counties in California with no incorporated cities. The county takes its name from the Trinity River, named in 1845 by Major Pierson B. Reading, who was under the mistaken impression that the river emptied into Trinidad Bay. Trinity is the English translation of Trinidad. Trinity County was one of the original counties of California, created in 1850 at the time of statehood. Parts of the county were given to Klamath County in 1852 and to Humboldt County in 1853.</p>"
  //  }  


//Yolo

// if(ev.target.cloneId == "clone-id-157"){
     
//   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/en/a/a9/Smaller_canada-geese-and-skyline.jpg"/>';
//   document.getElementById('county-text').innerHTML = "<h2>Yolo</h2>  <p>In the original act of 1850 the name was spelled 'Yola.' Yolo is a Native American name variously believed to be a corruption of a tribal name Yo-loy meaning 'a place abounding in rushes' or of the name of the chief, Yodo, or of the village of Yodoi. Yolo County was one of the original counties of California, created in 1850 at the time of statehood.The majority of Yolo County remains a relatively rural agricultural region. Much of California's multibillion-dollar tomato industry that accounts for 90% of the canned and processed tomato production in the United States and 35% worldwide, is located in Yolo County. </p>"
// }

//Yuba

// if(ev.target.cloneId == "clone-id-153"){
     
//   document.getElementById('information').innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/6/65/Englebright_Lake_%286217894829%29.jpg"/>';
//   document.getElementById('county-text').innerHTML = "<h2>Yuba</h2>  <p>Yuba County is included in the Yuba City, California Metropolitan Statistical Area, which is also included in the Sacramento–Roseville, California Combined Statistical Area. The county is located in the state's Central Valley region along the Feather River.Yuba County was one of the original counties of California, formed in 1850 at the time of statehood. Parts of the county's territory were given to Placer County in 1851, to Nevada County in 1851 and to Sierra County in 1852. The county was named after the Yuba River by Captain John Sutter for the Maidu village Yubu, Yupu or Juba near the confluence of the Yuba and Feather rivers. General Mariano Vallejo stated that the river was named Uba by an exploring expedition in 1824 because of the quantities of wild grapes (uvas silvestres in Spanish) which they found growing on its banks. </p>"
// }








// if (clicked === "clone-id-241"){
// alert("hello")

// }

// _dispoers:   cloneId: "clone-id-242"

