const saveBtn1 = document.querySelector( '.saveBtn' );
saveBtn1.style.filter = "blur(1px)";
  saveBtn1.style.backgroundColor = '#ced3e0';
var header = document.querySelector( '.titleName' );
header.setAttribute( 'style', 'display:none' );
var pageList = document.querySelector( '.pageBar' );
pageList.setAttribute( 'style', 'display:none' );
let keys = Object.keys( localStorage );
var totalRecord = JSON.parse( localStorage.getItem( 'formValidation' ) )
let currentPage = 1;
if ( keys.length > 0 ) 
{
  let display = 0;
  sortUsername(display);
  if ( totalRecord.length % 5 != 0 )
  {
    totalPages = Math.trunc( ( totalRecord.length ) / 5 ) + 1;
  }
  else
  {
    totalPages =  totalRecord.length  / 5 ;
  }

  for ( let i = 0; (i < 5 && i < totalRecord.length ) ; i++ ) // loop to display only first 5 records
  {
    let SrNo = totalRecord[ i ].SrNo;
    let title = totalRecord[ i ].title;
    let firstName = totalRecord[ i ].fname;
    let lastName = totalRecord[ i ].lname;
    let userName = totalRecord[ i ].username;
    let emailId = totalRecord[ i ].emailid;

    // call display fuction to display records on screen
    displayUser( SrNo, title, firstName, lastName, userName, emailId );

    // for more than 5 records, that is more than 1 pages, display pagination bar (Previous + 1 + 2 + Next)
    if ( i == 4 )
    {
      if ( totalPages > 1 )
      {
        pagination();
        let listItems = document.querySelectorAll( 'li' );
        listItems[ 1 ].style.backgroundColor = '#337ab7';
        listItems[ 1 ].style.color = '#fff';  
        listItems[ 1 ].style.borderRadius = '4px';
        listItems[ 1 ].style.borderColor = 'black';
        listItems[ 0 ].style.cursor = 'not-allowed';
        
        eventPagination();
      }
    // for more than 10 records, that is more than 2 pages, display additional numbers on bar
      for ( let j = 3; j <= totalPages; j++ )
      {
        // let nextPage = j + 1;
        // // console.log( nextPage );
        iteration( j );
        
        eventPagination();
      }
      
    }
  }
deleteEvent ();
} 
// close display existing records
const saveBtn = document.querySelector( '.saveBtn' );

formArray = [];
console.log( saveBtn );
saveBtn.addEventListener( 'click', () =>
{

saveBtn.style.borderColor = 'black';
  saveBtn.style.borderRadius = '4px', 'solid';
  saveBtn.style.filter = blur("blur", "red");

keys = Object.keys( localStorage );
console.log( 'keys', keys );
formValidation = 'formValidation';
let i = keys.length;
let  SrNo = 1;
    if ( i > 0 )
    {
        
    form = JSON.parse( localStorage.getItem( 'formValidation' ) );
    SrNo = parseInt(form[ form.length - 1 ].SrNo) + 1;
      formArray = form;
      usernamelist = form.userData;  
    console.log( usernamelist );
    }
 
title = document.getElementById( "selecttitle" ).value;
firstName = document.getElementById( "fname" ).value;
lastName = document.getElementById( "lname" ).value;
userName = document.getElementById( "uname" ).value;
emailId = document.getElementById( "email" ).value;   
  const wrongUsername = document.querySelector( '.invalidUser' );
  const errorEmail = document.querySelector( '.invalid-email-message' );
  if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( emailId ) )
  {
    console.log('Email is valid')
  }
  else
  {
    errorEmail.textContent = 'email is invalid';
    return;
  }
  var userfound = formArray.find( function ( user, index )
  {
    if ( user.username == userName )
    {
           wrongUsername.textContent = 'Username Already Exist';
      // return;
    }
})
   
  if ( title.length > 0  && firstName.length > 0 && lastName.length > 0
    && userName.length > 0 && emailId.length > 0 )
  {
    saveBtn.style.cursor = 'default';
    saveBtn.style.filter = "brightness(1)";
    saveBtn.style.backgroundColor = '#394d83';
      }
  else
  {
    saveBtn.style.cursor = 'not-allowed';
      saveBtn.style.backgroundColor = '#ced3e0';
    return;
  }
 
  userObj =   
{
    "SrNo": SrNo,
    "title": title,
    "fname": firstName,
    "lname": lastName,
    "username":userName,
    "emailid": emailId
  };
  formArray.push( userObj );
  localStorage.setItem( formValidation, JSON.stringify( formArray ) ); 
  let display = 1;
  sortUsername (display)
  if ( SrNo == 6 )
  {
    totalRecord = JSON.parse( localStorage.getItem( 'formValidation' ) )
    pagination();
    let listItems = document.querySelectorAll( 'li' );
    listItems[1 ].style.backgroundColor = '#337ab7';
    listItems[ 1 ].style.color = '#fff'; 
    listItems[ 1 ].style.borderRadius = '4px';
    listItems[ 1 ].style.borderColor = 'black';
    listItems[ 0 ].style.cursor = 'not-allowed';
    
    eventPagination();
  }
  const listItems = document.querySelectorAll( 'li' );
  const list = document.querySelector( '.pageBar' );
    
  if ( SrNo > 10 )
  {
     let reminder = SrNo % 5;
      if ( reminder == 1 )
    {
      nextPageSubmit = Math.trunc( SrNo / 5 ) + 1;
        iteration( nextPageSubmit );
        eventPagination();
          }
  }
 
  document.getElementById( "selecttitle" ).value = "";
  document.getElementById( "fname" ).value = "";
  document.getElementById( "lname" ).value = "";
  document.getElementById( "uname" ).value = "";
  document.getElementById( "email" ).value = "";
 deleteEvent ();
  } ); 


const cancelBtn = document.querySelector( '.cancelBtn' );
formArray = [];
console.log( cancelBtn );
cancelBtn.addEventListener( 'click', () =>
{
  document.getElementById( "selecttitle" ).value = "";
  document.getElementById( "fname" ).value = "";
  document.getElementById( "lname" ).value = "";
  document.getElementById( "uname" ).value = "";
  document.getElementById( "email" ).value = "";
} );
const inputTopic1 = document.querySelector( '.inputField' );
const wrongUsername = document.querySelector( '.invalidUser' );
const errorEmail = document.querySelector( '.invalid-email-message' );
inputTopic1.addEventListener( 'click', () => {
  saveBtn.style.cursor = 'default';
  saveBtn.style.filter = "brightness(1)";
  saveBtn.style.backgroundColor = '#394d83';
  errorEmail.textContent = '';
  wrongUsername.textContent = '';
  // saveBtn.style.cursor = 'not-allowed';
} );
// Function section starts here
function displayUser(SrNo, title, firstName, lastName, userName, emailId)
{
  var header = document.querySelector( '.titleName' );
  // console.log( header );
  header.setAttribute( 'style', "display:'' " );
  
  const userData = document.querySelector( 'tbody' );
  userData.className = 'tableHead';
   
    userData.innerHTML += `
               
                    <tr class ="tableRow">
                        <td>${SrNo}</td>
                        <td>${title}</td>
                        <td>${firstName}</td>
                        <td>${lastName}</td>
                        <td>${userName}</td>
                        <td>${emailId}</td>
                        <td><button class="deleteBtn" id =${SrNo}>Delete</button></td>
                    </tr>
                
`;
}
//
function deleteEvent()
    {
  var listItems = document.querySelectorAll( '.tableRow' );
  var list = document.querySelector( '.tableHead' );

  list.addEventListener( 'click', function ( event ) {
    let deleteRec = event.target.id;
    console.log( deleteRec );
   
  } );
}
function pagination ()
{
  var pageList = document.querySelector( '.pageBar' );
  console.log( pageList );
  pageList.setAttribute( 'style', 'display:block' );
  eventPagination();
  return;
 }   
function iteration ( nextPage )
{
   newli = document.createElement( 'li' );
   newli.innerHTML = nextPage;
    var ul = document.querySelector( '.pageBar' );
  ul.lastElementChild.before( newli )
  listItems = document.querySelectorAll( 'li' );
  listItems[ listItems.length - 1 ].style.cursor = 'default';
   // eventPagination() // calling here for each page number added
}
  // Event listner for pagination
function eventPagination ()
{
  var listItems = document.querySelectorAll( 'li' );
  var list = document.querySelector( '.pageBar' );
  totalRecord = JSON.parse( localStorage.getItem( 'formValidation' ) )
  
}  
var listItems = document.querySelectorAll( 'li' );
var list = document.querySelector( '.pageBar' );

  list.addEventListener( 'click', function (event) 
  {
    let ref = event.target.closest( 'li' )
    let eventPage = ref.innerHTML;
    listItems[ currentPage ].style.backgroundColor = 'white';
    listItems[ currentPage ].style.color = '#337ab7';
    listItems[ currentPage ].style.borderColor = '#ddd';
    totalRecord = JSON.parse( localStorage.getItem( 'formValidation' ) )
    if ( totalRecord.length % 5 != 0 )
    {
      totalPages = Math.trunc( ( totalRecord.length ) / 5 ) + 1;
    }
    else
    {
      totalPages = totalRecord.length / 5;
    }
    
    if ( eventPage == 'Previous' )
    {
          if ( currentPage == 1 )
          {
            
            listItems[ currentPage ].style.backgroundColor = '#337ab7';
            listItems[ currentPage ].style.color = '#fff';  
            listItems[ currentPage ].style.borderColor = '#ddd';
                return 0;
          }
          eventPage = parseInt( currentPage ) - 1;
      console.log( 'jump to page', eventPage );
      listItems[ currentPage ].style.borderColor = '#ddd';
      currentPage = eventPage;
      
    }
    if ( eventPage == 'Next' )
    {
      
          if ( totalPages == currentPage )
          {
            listItems[ currentPage ].style.backgroundColor = '#337ab7';
            listItems[ currentPage ].style.color = '#fff';
            listItems[ currentPage ].style.borderColor = '#ddd';
           
            return 0;
          }
              
          listItems[ currentPage ].style.borderColor = '#ddd';
          eventPage = parseInt( currentPage ) + 1;
          console.log( 'jump to page', eventPage );
          currentPage = eventPage;
    }
    listItems[ eventPage ].style.backgroundColor = '#337ab7';
    listItems[ eventPage ].style.color = '#fff';
    listItems[ eventPage ].style.borderRadius = '4px';
    listItems[ eventPage ].style.borderColor = 'black';
        
    let z = ( eventPage - 1 ) * 5;

        var elems = document.querySelectorAll( '.tableRow' );
        elems.forEach( user =>
        {
          user.remove();
        } 
        );
    
        currentPage = eventPage;
        
        totalRecord = JSON.parse( localStorage.getItem( 'formValidation' ) )
        for ( let x = z; x < (z + 5) && x < totalRecord.length; x++ )
        {
          let SrNo = totalRecord[ x ].SrNo;
          let title = totalRecord[ x ].title;
          let firstName = totalRecord[ x ].fname;
          let lastName = totalRecord[ x ].lname;
          let userName = totalRecord[ x ].username;         
          let emailId = totalRecord[ x ].emailid;
    // call display fuction to display user on screen
          displayUser( SrNo, title, firstName, lastName, userName, emailId );
          
        }
    if ( eventPage == 1 )
       
    {
      listItems[ 0 ].style.cursor = 'not-allowed';
    }
    else
    {
      listItems[ 0 ].style.cursor = 'default';
    }
    if (eventPage == totalPages)
    {
      listItems[ listItems.length - 1 ].style.cursor = 'not-allowed';
    }
     else
    {
      listItems[ listItems.length - 1 ].style.cursor = 'default';
    }
      
    
    // paginationDone = 1;
  } );
function sortUsername (display)
{
  let totalRecord = JSON.parse( localStorage.getItem( 'formValidation' ) );
    
     
  for ( var i = 0; i < totalRecord.length; i++ ) {
     
    for ( var j = 0; j < ( totalRecord.length - 1 ); j++ )
    {
      
      if ( totalRecord[ j ].username > totalRecord[ j + 1 ].username )
      {
        var temp = totalRecord[ j ]
        totalRecord[ j ] = totalRecord[ j + 1 ]
        totalRecord[ j + 1 ] = temp
      }
    }
  }
  let formValidation = 'formValidation';
  for ( let i = 0; i < totalRecord.length; i++ )
  {
    totalRecord[ i ].SrNo = i + 1;
  }
  
  localStorage.setItem( formValidation, JSON.stringify( totalRecord ) ); 
  let z = ( currentPage - 1 ) * 5;
        var elems = document.querySelectorAll( '.tableRow' );
        elems.forEach( user =>
        {
          user.remove();
        } 
        );
   if ( display == 1 )
  {
    for ( let x = z; x < ( z + 5 ) && x < totalRecord.length; x++ )
    {
      let SrNo = totalRecord[ x ].SrNo;
      let title = totalRecord[ x ].title;
      let firstName = totalRecord[ x ].fname;
      let lastName = totalRecord[ x ].lname;
      let userName = totalRecord[ x ].username;
      let emailId = totalRecord[ x ].emailid;
      // call display fuction to display user on screen
      displayUser( SrNo, title, firstName, lastName, userName, emailId );      
    }    
  }
}
