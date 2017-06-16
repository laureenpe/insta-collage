console.log("hola");
//selector languaje

// Name and Email validation Function.
document.getElementById('enviar').addEventListener('click',validate);

// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == " " && password == " ") {
        alert("Enter parametters");

    } else{
        alert("muy bien")
    }

}


/*function validate(){
 	var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
 	var boton = document.getElementById("enviar");
 
 
 	//valida correo
      	function email(){ 
 		if(username === ""){
 			var contenedor = document.getElementsByClassName("loginForm")[2];
 			var span = document.createElement("span");
 			var texto = document.createTextNode("Campo obligatorio");
 			span.appendChild(texto);
 			contenedor.appendChild(span);
 			return false;
 		}else if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(email))){
 			var contenedor = document.getElementsByClassName("loginForm")[2];
 			var span = document.createElement("span");
 			var texto = document.createTextNode("Debe ser un correo válido");
 			span.appendChild(texto);
 			contenedor.appendChild(span);
 			return false;
 		}
 	}
 
 	function password(){
 		if(contrasena === ""){
 			var contenedor = document.getElementsByClassName("loginForm")[2];
 			var span = document.createElement("span");
 			var texto = document.createTextNode("Campo obligatorio");
 			span.appendChild(texto);
 			contenedor.appendChild(span);
 			return false;
		}else if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}[^'\s]/){
			var contenedor = document.getElementsByClassName("loginForm")[2];
 			var span = document.createElement("span");
 			var texto = document.createTextNode("Debe ser una contraseña de 6 o mas caracteres");
 			span.appendChild(texto);
 			contenedor.appendChild(span);
 			return false;
 		}
 	}
}
*/