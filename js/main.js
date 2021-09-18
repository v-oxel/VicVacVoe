var area = document.getElementById("area"),
    cell = document.getElementsByClassName("cell"),
    cells = [
        [""]
    ],
    player = "x",
    tmp = [];

function createCells() {
    area.innerHTML = "";
    for (var l = 0; l < cells.length; l++) {
        for (var e = 0; e < cells[l].length; e++) area.innerHTML += "<div class='cell' onclick='cellClick(" + l + "," + e + ")'>" + cells[l][e] + "</div>";
        area.innerHTML += "<br>"
    }
}

function cellClick(l, e) {
    var c = cells.length,
        s = cells[0].length;
    if ("" == cells[l][e]) {
        if (cells[l][e] = player.toUpperCase(), player = "x" == player ? "o" : "x", 0 == l) {
            tmp = cells, cells = [
                []
            ];
            for (var t = 0; t < tmp[0].length; t++) cells[0].push("");
            for (t = 0; t < tmp.length; t++) cells.push(tmp[t])
        }
        if (l == c - 1) {
            cells.push([]);
            for (t = 0; t < cells[0].length; t++) cells[cells.length - 1].push("")
        }
        if (0 == e) {
            tmp = cells, cells = [];
            for (t = 0; t < tmp.length; t++) cells.push([""]);
            for (t = 0; t < tmp.length; t++)
                for (var r = 0; r < tmp[0].length; r++) cells[t].push(tmp[t][r])
        }
        if (e == s - 1)
            for (t = 0; t <= cells.length - 1; t++) cells[t].push("");
        createCells()
    } else alert("Ячейка занята")
}
createCells();
