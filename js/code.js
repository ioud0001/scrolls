var url = "js/results.json";
var ul; 
var list; 
var php = "get.php";
var phpurls = "fields=name,rating,rank,rankedwon&start=0";

var scrollsite = "http://a.scrollsguide.com/ranking";

var urlcount = 0;

document.addEventListener("DOMContentLoaded", function () {
	buildPage(); // adds an ordered list to the page 
	retrieveData(); // this will display all information 
});

// Retrieve data from the scrolls website
function retrieveData(){
	
	var postData = scrollsite + "?fields=name,rating,rank,rankedwon&start=0&limit=500";
		//sendRequest(php, sendStats,  "GET");
		sendRequest(postData, getStats, "GET"); 
		

}
function getStats(xhr){

	// if the xhr status is good...
	if (xhr.readyState == 4 && xhr.status == 200) {
		
		var stats = xhr.responseText;
		var info = JSON.parse(xhr.responseText);
		//add player information
for (var i = 0; i < info.data.length; i++)
		{
			var player = {}; 
			player.name = info.data[i].name;
        	player.rating = info.data[i].rating;
        	player.rank = info.data[i].rank;
        	player.rankedwon = info.data[i].rankedwon;

		}
		sendStats(xhr); 
		
		// retrieve the next group of records
		var postData = scrollsite + "?fields=name,rating,rank,rankedwon&start=500&limit=500";
		sendRequest(postData, getStats2, "GET"); 
	}

	
}

function getStats2(xhr){
	// if the xhr status is good...
	if (xhr.readyState == 4 && xhr.status == 200) {
		
		var stats = xhr.responseText;
		var info = JSON.parse(xhr.responseText);

		//add player information
for (var i = 0; i < info.data.length; i++)
		{
			var player = {}; 
			player.name = info.data[i].name;
        	player.rating = info.data[i].rating;
        	player.rank = info.data[i].rank;
        	player.rankedwon = info.data[i].rankedwon;

		}
		sendStats(xhr);
		// retrieve the next group of records
		var postData = scrollsite + "?fields=name,rating,rank,rankedwon&start=1000&limit=500";;
		sendRequest(postData, getStats3, "GET"); 
	}
	xhr.open("GET", url, true);
	xhr.send(); 

}
function getStats3(xhr){
	// if the xhr status is good...
	if (xhr.readyState == 4 && xhr.status == 200) {
		
		var stats = xhr.responseText;
		var info = JSON.parse(xhr.responseText);

		//add player information
for (var i = 0; i < info.data.length; i++)
		{
			var player = {}; 
			player.name = info.data[i].name;
        	player.rating = info.data[i].rating;
        	player.rank = info.data[i].rank;
        	player.rankedwon = info.data[i].rankedwon;

		}
		sendStats(xhr);
		// retrieve the next group of records
		var postData = scrollsite + "?fields=name,rating,rank,rankedwon&start=1500&limit=500";
		sendRequest(postData, getStats4, "GET"); 
	}
}

function getStats4(xhr){
	// if the xhr status is good...
	if (xhr.readyState == 4 && xhr.status == 200) {
		
		var stats = xhr.responseText;
		var info = JSON.parse(xhr.responseText);
		//add player information
for (var i = 0; i < info.data.length; i++)
		{
			var player = {}; 
			player.name = info.data[i].name;
        	player.rating = info.data[i].rating;
        	player.rank = info.data[i].rank;
        	player.rankedwon = info.data[i].rankedwon;

		}
		sendStats(xhr);
		// retrieve the next group of records
		var postData = scrollsite + "?fields=name,rating,rank,rankedwon&start=2000&limit=500";
		//sendRequest(php, sendStats,  "GET");
		sendRequest(postData, getStats5, "GET"); 
	}
	xhr.open("GET", url, true);
	xhr.send(); 
}

function getStats5(xhr){
	// if the xhr status is good...
	if (xhr.readyState == 4 && xhr.status == 200) {
		
		var stats = xhr.responseText;
		var info = JSON.parse(xhr.responseText);

		//add player information
for (var i = 0; i < info.data.length; i++)
		{
			var player = {}; 
			player.name = info.data[i].name;
        	player.rating = info.data[i].rating;
        	player.rank = info.data[i].rank;
        	player.rankedwon = info.data[i].rankedwon;
		}
		sendStats(xhr);
		// retrieve the next group of records
		var postData = scrollsite + "?fields=name,rating,rank,rankedwon&start=2500&limit=500";
		//sendRequest(php, sendStats,  "GET");
		sendRequest(postData, getStats6, "GET"); 
	}
}
function getStats6(xhr){
		// if the xhr status is good...
		
	if (xhr.readyState == 4 && xhr.status == 200) {
		
		var stats = xhr.responseText;
		var info = JSON.parse(xhr.responseText);
		//console.log(info); 
		//console.log(xhr.responseText);
		//add player information
for (var i = 0; i < info.data.length; i++)
		{
			var player = {}; 
			player.name = info.data[i].name;
        	player.rating = info.data[i].rating;
        	player.rank = info.data[i].rank;
        	player.rankedwon = info.data[i].rankedwon;
        	
		}
		// display information
		sendStats(xhr);
		var localUrl = "js/results.json"; // local JSON file with all the data 
		//var postData = scrollsite + "?fields=name,rating,rank,rankedwon&start=0&limit=500";
		//sendRequest(php, sendStats,  "GET");
		sendRequest(localUrl, getLocalStats, "GET"); 
	}

}

// retrieve data from the local results.json file 
function getLocalStats(xhr){
	//alert("entering local stats"); 
	var json = "js/results.json?fields=name,rating,rank,rankedwon&start=0&limit=500";
		// if the xhr status is good...
	if (xhr.readyState == 4 && xhr.status == 200) {
		
		var stats = xhr.responseText;
		var info = JSON.parse(xhr.responseText);

		//add player information
for (var i = 0; i < info.data.length; i++)
		{
			var player = {}; 
			player.name = info.data[i].name;
        	player.rating = info.data[i].rating;
        	player.rank = info.data[i].rank;
        	player.rankedwon = info.data[i].rankedwon;
		}
		//sendStats(xhr);
		// retrieve the next group of records
		sendRequest(json, showStats, "GET"); 
		json = "js/results.json?fields=name,rating,rank,rankedwon&start=500&limit=500";
		sendRequest(json, showStats, "GET");
		json = "js/results.json?fields=name,rating,rank,rankedwon&start=500&limit=500";
		sendRequest(json, showStats, "GET");
		json = "js/results.json?fields=name,rating,rank,rankedwon&start=1000&limit=500";
		sendRequest(json, showStats, "GET");
		json = "js/results.json?fields=name,rating,rank,rankedwon&start=1500&limit=500";
		sendRequest(json, showStats, "GET");
		json = "js/results.json?fields=name,rating,rank,rankedwon&start=2000&limit=500";
		sendRequest(json, showStats, "GET");
		json = "js/results.json?fields=name,rating,rank,rankedwon&start=2500&limit=500";
		sendRequest(json, showStats, "GET");
	}
}
function buildPage(){
	list = document.createElement("ol"); 
	list.className = "user"; 
}


// Send data to the save.php page 
function sendStats(xhr){
// some jQuery to write to file
var stats = xhr.responseText; 

$.ajax({
    type : "POST",
    url : "save.php",
    dataType : 'jsonp', 
    data : {
        json : xhr.responseText 
    }
});
 
//showStats(stats); // display information on webpage 
}

function showStats(content) {
   
	var parseData = JSON.parse(content.responseText);  
    for(var i = 0; i < parseData.data.length; i++) {
        var li = document.createElement("li"); 
		li.innerHTML = 'Name: ' + parseData.data[i].name + '<br/>Rating: ' + parseData.data[i].rating + '<br/>Ranked Games Won: ' + parseData.data[i].rankedwon + '<span class="rating">Rank: ' + parseData.data[i].rank + '</span>'
		list.appendChild(li);  
		//console.log(list.innerHTML); 
    }

    document.querySelector(".player_ranks").appendChild(list);
}
// Display data on the page
function errors(jqxhr, status, err){
	console.log("something is broken!");
}

