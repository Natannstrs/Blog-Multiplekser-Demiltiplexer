function runMux() {
    let i0 = document.getElementById("i0").value;
    let i1 = document.getElementById("i1").value;
    let s  = document.getElementById("select").value;

    let output;

    if (s == 0) {
        output = i0;
    } else {
        output = i1;
    }

    document.getElementById("output").innerText = output;
}

function scrollToGame() {
    document.getElementById("game").scrollIntoView({ behavior: "smooth" });
}
