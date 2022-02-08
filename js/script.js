/* Reference : https://codepen.io/Delano83/pen/XjYxZQ */

var currentPage = 1;
var contactsPerPage = 10;
var numberOfPages = 0;
var index;

//number of contacts
var contactElements = document.querySelectorAll(".contact-item");
var numberOfContacts = contactElements.length;


//Calculate number of Pages
function getNumberOfPages()
{
    var numberOfPages;
    numberOfPages = parseInt(numberOfContacts/contactsPerPage);
    if((numberOfContacts%contactsPerPage)> 0)
    {
        numberOfPages += 1;
    }

    return numberOfPages;
}

//hiding all the contacts on the list
function hideContacts() {
	for (var i = 0; i < numberOfContacts; i++) {
		contactElements[i].style.display = "none";
	}
}

//Display only 10 contacts per page
function displayContacts(pgnumber)
{
	//loop through the contacts and display the relevant contacts 
    for(var i=0; i<contactsPerPage; i++)
    {
        index = pgnumber * contactsPerPage - contactsPerPage + i;
		if(contactElements[index])
		{
			contactElements[index].style.display = "block";
		}
		
    }
}

// Access a page by number
function gotoPage(page) {

	// sets the current page to the selected page
	currentPage = page
	//hide all contacts
	hideContacts();
	// changes the page to the selected page
	displayContacts(page)
}

//Create page for each pagination
function createPage()
{
	var pagediv = document.querySelector(".pagination");

	//page structure for pagination
	var ulList = document.createElement('ul');
	var liList = document.createElement('li');
				
    for (var i = 1; i <= getNumberOfPages(); i++) {

		var pageLink = document.createElement('a');
		pageLink.setAttribute('class','navLink');
		pageLink.setAttribute('href', 'javascript:gotoPage(" '+i+' ")');
		
		liList.appendChild(pageLink);

		//append the page number list to the pagination class
		pagediv.appendChild(ulList);
		ulList.appendChild(liList);
		var linkText = document.createTextNode(i);
		pageLink.appendChild(linkText);
		
	}
	
}

window.onload = hideContacts();
window.onload = createPage();
window.onload = displayContacts(1);

		











