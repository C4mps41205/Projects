var a;
var b;
var c;
var d;


document.getElementById("botao").onclick = function(){
    a = document.getElementById("aside").value;
    a = Number(a);
    b = document.getElementById("bside").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
	
    document.getElementById("valor").innerHTML = "c side: " + c;
}

