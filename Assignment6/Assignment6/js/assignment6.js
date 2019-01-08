// set a global httpRequest object

var httpRequest;
		
// TODO: when the page (window) has loaded, make a
// request for page 1
window.onload(makeRequest(1));

function makeRequest(pageNum) {
	
    // TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	// 		"https://reqres.in/api/users?page=1" // for page 1
	// 		"https://reqres.in/api/users?page=2" // for page 2
	// 		etc...

	var url = 'https://reqres.in/api/users?page=' + pageNum;
	
	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		    // Just for debugging. 
			console.log(httpRequest.responseText);
			
			// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
			document.getElementById("data").innerHTML = "";
			
			for(var i = 0; i < jsData.data.length; i++){
				var tableRow			 	= document.createElement("tr");
				var tableData_id			= document.createElement("td");
				var tableData_firstName 	= document.createElement("td");
				var tableData_lastName 		= document.createElement("td");
				var tableData_Avatar 		= document.createElement("td");
				var avatar				 	= document.createElement("img");
				var id 						= document.createTextNode(jsData.data[i].id);
				var firstName 				= document.createTextNode(jsData.data[i].first_name);
				var lastName 				= document.createTextNode(jsData.data[i].last_name);
				
				tableData_id.appendChild(id);
				tableData_firstName.appendChild(firstName);
				tableData_lastName.appendChild(lastName);
				avatar.setAttribute("src", jsData.data[i].avatar);
				avatar.setAttribute("alt", "Unable to load Image");
				tableData_Avatar.appendChild(avatar);
				tableRow.appendChild(tableData_id);
				tableRow.appendChild(tableData_firstName);
				tableRow.appendChild(tableData_lastName);
				tableRow.appendChild(tableData_Avatar);
				document.getElementById("data").appendChild(tableRow);
			}
		} else {
			console.log("Unable to load Data");
		}
	}
}	