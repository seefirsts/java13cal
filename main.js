function solve(string) {
    var v = document.querySelector("#res");
    v.value += string;
}

function result() {
    var num1 = document.querySelector("#res").value;

    try {
        var num2 = eval(num1.replace('x', '*'));
        document.querySelector("#res").value = num2;
    }
    catch {
        document.querySelector("#res").value = "Error";
    }
}

function _clear() {
    var inp = document.querySelector("#res");
    inp.value = "";
}

function back() {
    var ev = document.querySelector("#res");
    ev.value = ev.value.slice(0, -1);
}

document.addEventListener("keydown", function(event){
    const key = event.key;
    const valid_keys = '0123456789+-*/.%';

    console.log(key)

    if (valid_keys.includes(key)) {
        solve(key === '*' ? 'x' : key);
    }
    else if (key === 'Enter') {
        result();
    }
    else if (key === "Backspace") {
        back();
    }
    else if (key.toLowerCase() === 'c') {
        _clear();
    }
})