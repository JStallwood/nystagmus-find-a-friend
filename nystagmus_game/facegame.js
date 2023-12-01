const FACE_URLS = [
    "url('./img/faces/al.png')",
    "url('./img/faces/ar.png')",
    "url('./img/faces/bb1.png')",
    "url('./img/faces/bb2.png')",
    "url('./img/faces/pdl.png')",
    "url('./img/faces/pdr.png')",
    "url('./img/faces/rl.png')",
    "url('./img/faces/rr.png')",
    "url('./img/faces/snk1l.png')",
    "url('./img/faces/snk1r.png')",
    "url('./img/faces/snk2l.png')",
    "url('./img/faces/snk2r.png')",
    "url('./img/faces/tl.png')",
    "url('./img/faces/tr.png')",
    "url('./img/faces/wll.png')",
    "url('./img/faces/wlr.png')"
];

function fillGrid() {

    shuffleArray(FACE_URLS);

    let grid = document.getElementById('fg');
    grid.innerHTML = "";

    let n = (Math.floor((Math.random() * 100)) % 2 == 0) ? 3 : 4;
    grid.style.gridTemplateRows = "repeat(" + n.toString() + ", 1fr)";
    grid.style.gridTemplateColumns = "repeat(" + n.toString() + ", 1fr)";

    let correct = Math.floor(Math.random() * (n * n));

    for(let i = 0; i < n * n; i++) {
        let faceDiv = document.createElement('div');
        faceDiv.className = "face-card";
        faceDiv.style.backgroundImage = FACE_URLS[i];

        if(i == correct) {
            faceDiv.onclick = function() {
                let scoreEl = document.getElementById('score');
                let score = parseInt(scoreEl.innerHTML);
                score += 1;
                scoreEl.innerHTML = score;
                fillGrid();
            };
        }
        else {
            faceDiv.onclick = function() {
                fillGrid();
            };
        }

        grid.appendChild(faceDiv);
    }

    let largeCard = document.getElementById('lc');
    largeCard.style.backgroundImage = FACE_URLS[correct];
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

document.fillGrid = fillGrid;