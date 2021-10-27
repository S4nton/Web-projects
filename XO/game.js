let area = document.getElementById('area');
let dataArea = [
    ["?", "?", "?"],
    ["?", "?", "?"],
    ["?", "?", "?"]
]

let player = "x";

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        area.innerHTML += "<div class='cell' id='" + i + j + "'></div>";
    }
}

let cell = document.getElementsByClassName("cell");

function resetArea() {
    for (let i = 0; i < 9; i++) {
        cell[i].style.backgroundImage = "";
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            dataArea[i][j] = "?";
        }
    }
    player = "x";
}

function clickOnCell(cell) {
    const x = parseInt(cell.id[0]);
    const y = parseInt(cell.id[1]);

    if (dataArea[x][y] === "?") {
            cell.style.backgroundImage = "url('img/" + player + ".png')";
    } else {
        alert("Cell is busy!");
        return;
    }

    dataArea[x][y] = player;
    player = player === "x" ? "o" : "x";

    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            if (!(i === j && i === 0)) {
                let cnt = 1;
                let xx = x + i, yy = y + j;
                while (xx >= 0 && xx < 3 && yy >= 0 && yy < 3 && dataArea[xx][yy] === dataArea[x][y]) {
                    cnt++;
                    xx += i;
                    yy += j;
                }
                xx = x - i;
                yy = y - j;
                while (xx >= 0 && xx < 3 && yy >= 0 && yy < 3 && dataArea[xx][yy] === dataArea[x][y]) {
                    cnt++;
                    xx -= i;
                    yy -= j;
                }
                console.log(cnt);
                if (cnt === 3) {
                    const winner = player === "x" ? "o" : "x";
                    alert(winner + " player win!");
                    resetArea();
                    return;
                }
            }
        }
    }
}

for (let i = 0; i < 9; i++) {
    cell[i].addEventListener('click', function () {
        clickOnCell(cell[i]);
    });
}