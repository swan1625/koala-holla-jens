console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: $('#nameIn').val(),
      age: $('#ageIn').val(),
      gender: $('#genderIn').val(),
      readyForTransfer: $('#readyForTransferIn').val(),
      notes: $('#notesIn').val(),
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
}







function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    type: 'GET',
    url: '/koalas'
  }).then(function(response) {
    console.log(response);
    renderKoalas(response);
  }).catch(function(error){
    console.log('error in GET', error);
  });
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );

  $.ajax({
    method: 'POST',
    url: '/koalas',
    data:{ 
      koala: newKoala 
    }
   }).then(function(response){
     console.log(response);
     getKoalas();
   }).catch(function(error) {
     console.log('error in koala POST', error );
    alert("error adding koala")

   })
  // ajax call to server to get koalas
}

function renderKoalas(koalas) {
  $('#viewKoalas').empty();

  for(let i = 0; i < koalas.length; i += 1) {
    let koala = koalas[i];
    // For each koala, append a new row to our table
    $('#viewKoalas').append(`
      <tr data-id = ${koala.id}>
        <td>${koala.name}</td>
        <td>${koala.gender}</td>
        <td>${koala.age}</td>
        <td>${koala.ready_to_transfer}</td>
        <td>${koala.notes}</td>
        <td>
        </td>
      </tr>
    `);
  }
}