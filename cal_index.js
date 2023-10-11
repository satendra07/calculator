const audio = new Audio("sound/Mouse-click-2.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    
    button.addEventListener("click", () => {
        
        audio.play();
        buttons.style.color = 'red';
        
    });
    
       
});


function store(s) {
    let input = document.getElementById('display');

    var ov = input.value;
    var l = ov.length;
    var lastChr = ov[l - 1];
    input.value = ov + s;

    let oprsym = ["+", "-", "*", "/", ".", "%"];

    if (oprsym.includes(s)) {
        if (oprsym.includes(lastChr)) {
            var removeLast = ov.slice(0, -1);
            input.value = removeLast + s;
        }
        else {
            input.value = ov + s;
        }
    }
    else {

        input.value = ov + s;
    }


}

function calcuLate() {
    var input = document.getElementById('display');
    var ov = eval(input.value);
    input.value = ov;
}

function cls() {
    document.getElementById('display').value = '';
}
function del() {
    var del = document.getElementById('display').value;
    del = del.substr(0, del.length - 1);
    document.getElementById('display').value = del;

}
function darkLight(v) {

    var darkLight = document.getElementById('table');
    // alert("pal")
    darkLight.classList.toggle("cal_body-light");

}