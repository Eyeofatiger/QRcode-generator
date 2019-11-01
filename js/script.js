let qrcode = new QRCode(document.getElementById("qrcode"), {
	width : 100,
	height : 100
});

let elText = document.getElementById("text"),
    inp = document.querySelectorAll("input"),
    check = document.querySelector(".divdc");

function makeCode () {		
	qrcode.makeCode(elText.innerHTML);
}

for (let i = 0; i<inp.length; i++ ){

inp[i].addEventListener("input", ()=>{
    if(check.checked == true){
        elText.innerHTML = inp[0].value + " *" + inp[1].value;
        makeCode();
    } else {
        elText.innerHTML = inp[0].value + inp[1].value;
        makeCode();
    }
    
    
});

}
    
