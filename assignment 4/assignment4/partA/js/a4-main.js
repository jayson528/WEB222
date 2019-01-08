var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)



window.onload = function(){
    loadTableWithFilters();
}

function loadTableWithFilters() {
    var myTable = document.querySelector("#main-table-body")
    myTable.innerHTML = ""

    for (var i = 0; i < petData.length; i ++){
        var result = false

        if ((filterAgeMin <= petData[i].age && filterAgeMax >= petData[i].age) && (filterType == petData[i].type || filterType == "")){
            result = true
        }

        if (result){
            var picture = document.createElement("img")
            var tableRow = document.createElement("tr")
            var tableData = document.createElement("td")
            var tableData2 = document.createElement("td")
            var headerSize4 = document.createElement("h4")
            var petName = document.createTextNode(petData[i].name)
            var petDiscription = document.createElement("p")
            var span = document.createElement("span")
            var petAge = document.createTextNode("Age: " + petData[i].age + " years old.")

            picture.src = petData[i].image.src
            picture.alt = petData[i].image.alt
            picture.height = petData[i].image.height
            picture.width = petData[i].image.width
            tableData.appendChild(picture)
            headerSize4.appendChild(petName)
            tableData2.appendChild(headerSize4)
            petDiscription.innerHTML = petData[i].description
            tableData2.appendChild(petDiscription)
            span.appendChild(petAge)
            tableData2.appendChild(span)

            tableRow.appendChild(tableData)
            tableRow.appendChild(tableData2)
            myTable.appendChild(tableRow)
        }
    }
}

function filterDog(){
    filterType = "dog"
    filterAgeMin = 0
    filterAgeMax = Number.MAX_VALUE
    loadTableWithFilters()        
}

function filterCat(){
    filterType = "cat"
    filterAgeMin = 0
    filterAgeMax = Number.MAX_VALUE
    loadTableWithFilters()   
}

function filterBird(){
    filterType = "bird"
    filterAgeMin = 0
    filterAgeMax = Number.MAX_VALUE
    loadTableWithFilters()      
}

function filter_zero_1(){
    filterType = ""
    filterAgeMin = 0
    filterAgeMax = 1
    loadTableWithFilters()
}

function filter_1_3(){
    filterType = ""
    filterAgeMin = 1
    filterAgeMax = 3
    loadTableWithFilters()
}

function filter_4_plus(){
    filterType = ""
    filterAgeMin = 4
    filterAgeMax = Number.MAX_VALUE
    loadTableWithFilters()
}

function filterAllPets(){
    filterType = ""
    filterAgeMin = 0
    filterAgeMax = Number.MAX_VALUE
    loadTableWithFilters()
}
