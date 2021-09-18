var area = document.getElementById("area"),
    cell = document.getElementsByClassName("cell"),
    cells = [
        [""]
    ],
    player = "X",
    win = !1;

function createCells() {
    area.innerHTML = "";
    for (var l = 0; l < cells.length; l++) {
        for (var e = 0; e < cells[l].length; e++) area.innerHTML += "<div class='cell' onclick='cellClick(" + l + "," + e + ")'>" + cells[l][e] + "</div>";
        area.innerHTML += "<br>"
    }
}

function cellClick(l, e) {
    if (1 != win) {
        var c = cells.length,
            s = cells[0].length;
        if ("" == cells[l][e]) {
            if (cells[l][e] = player, player = "X" == player ? "O" : "X", 0 == l) {
                var n = cells;
                cells = [
                    []
                ];
                for (var r = 0; r < n[0].length; r++) cells[0].push("");
                for (r = 0; r < n.length; r++) cells.push(n[r])
            }
            if (l == c - 1)
                for (cells.push([]), r = 0; r < cells[0].length; r++) cells[cells.length - 1].push("");
            if (0 == e) {
                n = cells;
                for (cells = [], r = 0; r < n.length; r++) cells.push([""]);
                for (r = 0; r < n.length; r++)
                    for (var t = 0; t < n[0].length; t++) cells[r].push(n[r][t])
            }
            if (e == s - 1)
                for (r = 0; r <= cells.length - 1; r++) cells[r].push("");
            winCheck(c, s), createCells()
        } else alert("Ячейка занята")
    }
}

function winCheck(l, e) {
    if (l >= 3 && cells[0].length >= 5)
        for (var c = 1; c < cells.length - 1; c++)
            for (var s = 1; s < cells[0].length - 5; s++)
                if ("" != cells[c][s] && cells[c][s] == cells[c][s + 1] && cells[c][s] == cells[c][s + 2] && cells[c][s] == cells[c][s + 3] && cells[c][s] == cells[c][s + 4]) return alert(cells[c][s] + " выиграл"), void(win = !0);
    if (cells.length >= 5 && e >= 3)
        for (c = 1; c < cells.length - 5; c++)
            for (s = 1; s < cells[0].length - 1; s++)
                if ("" != cells[c][s] && cells[c][s] == cells[c + 1][s] && cells[c][s] == cells[c + 2][s] && cells[c][s] == cells[c + 3][s] && cells[c][s] == cells[c + 4][s]) return alert(cells[c][s] + " выиграл"), void(win = !0);
    if (cells.length >= 5 && cells[0].length >= 5)
        for (c = 1; c < cells.length - 5; c++)
            for (s = 1; s < cells[0].length - 5; s++)
                if ("" != cells[c][s] && cells[c][s] == cells[c + 1][s + 1] && cells[c][s] == cells[c + 2][s + 2] && cells[c][s] == cells[c + 3][s + 3] && cells[c][s] == cells[c + 4][s + 4]) return alert(cells[c][s] + " выиграл"), void(win = !0);
    if (cells.length >= 5 && cells[0].length >= 5)
        for (c = 1; c < cells.length - 5; c++)
            for (s = cells[0].length - 2; s >= 5; s--)
                if ("" != cells[c][s] && cells[c][s] == cells[c + 1][s - 1] && cells[c][s] == cells[c + 2][s - 2] && cells[c][s] == cells[c + 3][s - 3] && cells[c][s] == cells[c + 4][s - 4]) return alert(cells[c][s] + " выиграл"), void(win = !0)
}

function main() {
    createCells()
}
main();
