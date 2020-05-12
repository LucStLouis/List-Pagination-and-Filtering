
/*** 
start with my global variables. included are variables to call all the students' information, and more specifically,
their names.  Also defining page and the number of students to display on each.
***/
const studentItems = document.querySelectorAll('.student-item');
const studentNames = document.querySelectorAll('.student-details h3');
const itemsPerPage = 10;
const pageContainer = document.querySelector('.page');




/*** 
the showPage function and its 2 parameters, to be called later.  the 2 consts define the range of the page and what is to
be displayed on each. the style.display 'none' makes sure names not in the defined range are not visible to the user.
the for loop cycles through the array of the list given.
***/


function showPage (list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = (page * itemsPerPage);

 for (var i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
    list[i].style.display = 'block';
   } else {
      list[i].style.display = 'none';
   }
   }
};




/*** 
the for loop defines the number of pages needed, creates them and calls the function.
***/
function appendPageLinks(list) {
   const listLength = list.length;
   const pagesNeeded = Math.ceil(listLength/itemsPerPage);
   let paginationStart = `<ul>`;
   const newDiv = document.createElement('div');

   newDiv.className = "pagination";
   pageContainer.appendChild(newDiv);

   for (let p = 0; p <= pagesNeeded; p += 1) {
      if (p < pagesNeeded ) {
         paginationStart += `<li><a href="#">${p+1}</a></li>`
      } else {
         paginationStart += `</ul>`;
      }
   }
   newDiv.innerHTML = paginationStart;

   const aPageElement = document.querySelectorAll('.pagination a');
   if (aPageElement.length > 0) {
      aPageElement[0].classList.add('active');
      for (let a = 0; a < aPageElement.length; a += 1) {
         aPageElement[a].addEventListener('click', () => {
            for (let b = 0; b < aPageElement.length; b += 1) {
               aPageElement[b].classList.remove('active');
            }
            aPageElement[a].classList.add('active');
            showPage(list, a+1);
         });
      }
   }   
}


showPage(studentItems, 1);
appendPageLinks(studentItems);