let gen
let chance = 0

function start() {
    gen = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    console.log(gen)
    document.getElementById("st").style.display = "none"
}
function restart() {

    window.location.reload()
}


function game(){
    chance++
    let user = document.getElementById("g").value
    if (user == "") {
        // break;
        document.getElementById("prt").innerHTML = "No guesses"
    }
    else if (user > gen) {
        document.getElementById("prt").innerHTML = "Your guess is grater than the number"
    }
    else if (user < gen) {
        document.getElementById("prt").innerHTML = "Your guess is smaller then the number"
    }
    else if (user == gen) {

        document.getElementById("prt").innerHTML = "Congress!!!!!!!!!!!! you win"
        document.getElementById("rest").style.display = "inline"

    }

    if (chance == 10) {
        document.getElementById("prt").innerHTML = "Your chances are over Click Restart to play again"
        document.getElementById("rest").style.display = "inline"
    }

}


