#sortable { list-style-type: none; margin: 0; padding: 0; width: 60%; }
#sortable li { margin: 0 3px 3px 3px; padding: 0.4em; padding-left: 1.5em; font-size: 1.4em; height: 18px; }
#sortable li span { position: absolute; margin-left: -1.3em; }

$( function() {
  $( "#sortable" ).sortable();
} );

let text = "Example "
for(let i = 100; i>0;i--){
    let output = "Example " + i;
    var ids = "Example"+i;
    node = document.getElementById('test1');
    node.insertAdjacentHTML('afterend', '<div class="card" id="'+ids+'" style="background-color:rgb(224,255,255);"><h1 class="updated"></h1><div class="btncenter"><button class="button" id="'+ids+'" onclick="list(this.id)">'+output+'</button></div></div>');
}
function list(text) {
    node = document.getElementById('sortable');
    node.insertAdjacentHTML('beforeend', '<li class="ui-state-default" id = '+text+'><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>'+text+'</li>');
    
}

function clearall(){
  const myNode = document.getElementById("sortable");
  myNode.innerHTML = '';
}
