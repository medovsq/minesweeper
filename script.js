document.body.onload = createPlace;
// document.querySelector(".place").addEventListener("click", handleClick)

function setMINEPACENUMS() {
    for (i = 0; i < 100; i++) {
        let count = 0;
        switch (true) {
            case i == 0:
                count += MINEPLACE[1] + MINEPLACE[10] + MINEPLACE[11];
                break;
            case i == 9:
                count += MINEPLACE[8] + MINEPLACE[19] + MINEPLACE[18];
                break;
            case i == 90:
                count += MINEPLACE[91] + MINEPLACE[80] + MINEPLACE[81];
                break;
            case i == 99:
                count += MINEPLACE[98] + MINEPLACE[89] + MINEPLACE[88];
                break;
            case i > 0 && i < 9:
                count += MINEPLACE[i - 1] + MINEPLACE[i + 1] + MINEPLACE[i + 10] + MINEPLACE[i + 11] + MINEPLACE[i + 9]
                break;
            case i % 10 == 0:
                count += MINEPLACE[i - 10] + MINEPLACE[i + 1] + MINEPLACE[i + 10] + MINEPLACE[i + 11] + MINEPLACE[i - 9]
                break;
            case (i + 1) % 10 == 0:
                count += MINEPLACE[i - 10] + MINEPLACE[i - 1] + MINEPLACE[i + 10] + MINEPLACE[i + 9] + MINEPLACE[i - 11]
                break;
            case i > 90 && i < 99:
                count += MINEPLACE[i - 1] + MINEPLACE[i + 1] + MINEPLACE[i - 10] + MINEPLACE[i - 11] + MINEPLACE[i - 9]
                break;
            default:
                count += MINEPLACE[i - 11] + MINEPLACE[i - 10] + MINEPLACE[i - 9] + MINEPLACE[i + 1] + MINEPLACE[i - 1] + MINEPLACE[i + 11] + MINEPLACE[i + 10] + MINEPLACE[i + 9]
                break;

        }
        MINEPLACENUMS[i] = count;
    }
}

var MINEPLACE = Array(100).fill(0);
for (i = 0; i < 10; i++) {
    MINEPLACE[i] = 1;
}
shuffle(MINEPLACE);

// console.log(MINEPLACE);
var MINEPLACENUMS = Array(100).fill(0);

setMINEPACENUMS();


function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}

function createPlace() {
    const newDiv = document.createElement("ul");
    newDiv.setAttribute('id', 'place')
    for (i = 0; i < 100; i++) {
        var x = document.createElement('li')
        x.setAttribute('id', 'a' + i)
        var v = document.createElement('button');
        v.setAttribute('id', 'b' + i);
        v.setAttribute('onclick', 'checkMine()')
        x.appendChild(v);
        newDiv.appendChild(x);
    }


    const currentDiv = document.getElementById("place");
    document.body.insertBefore(newDiv, currentDiv);

}


function checkMine() {
    const handleClick = event => {

        const id = event.target.id
        const num = id.slice(1, 3);

        if (MINEPLACE[num] == 1) {
            var defeat = document.getElementById(id);
            defeat.style.backgroundColor = 'red';
        }
        else {
            var suc = document.getElementById(id);
            suc.style.backgroundColor = "green";
            var elem = document.getElementById(id);
            elem.innerHTML = MINEPLACENUMS[num];
        }
    }

    const el = document.getElementById('place');
    if (el) {
        el.addEventListener('click', handleClick, false);
    }
}



