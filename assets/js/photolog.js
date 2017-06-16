console.log("hello");

function drag(ev) {
    console.log(ev.target.src); //verificamos en consola lo que va ocurriendoo
    ev.dataTransfer.setData('text', ev.target.id); //indicamos el tipo de dato que vamos a insertar
}
//iniciallizamos Drop
function permitirDrop(ev) {
    //evitamos que el navegador manipule nuestros datos
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    //tomamos el dato que hemos arrastrado
    var foto = ev.dataTransfer.getData('text');
    //agregamos el elemento arrastrado al elemento en el que se produjo el evento ondrop.
    ev.target.appendChild(document.getElementById(foto));
}