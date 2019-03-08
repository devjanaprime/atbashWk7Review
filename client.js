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
    displayInventory();
} // end addItem

function displayInventory(){
    console.log( 'in displayInventory' );
    let el = $( '#inventoryOut' );
    el.empty();
    // loop through the inventory array
    for( let item of inventory ){
        // for each item, create a new <li> in inventoryOut
        el.append( `<li><strong>${ item.name }</strong>: ${ item.size } & ${ item.color }</li>` );
    } // end for
} // displayInventory

function readyNow(){
    $( '#addItemButton' ).on( 'click', addItem )
} // end readyNow