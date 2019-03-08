$( document ).ready( readyNow );
let inventory = [];

function addItem(){
    console.log( 'in addItem' );
    let newItem = {
        name: $( '#itemNameIn' ).val(),
        size: $( '#sizeIn' ).val(),
        color: $( '#colorIn' ).val()
    } // end newItem
    inventory.push( newItem );
    console.log( 'inventory:', inventory );
} // end addItem

function readyNow(){
    $( '#addItemButton' ).on( 'click', addItem )
} // end readyNow