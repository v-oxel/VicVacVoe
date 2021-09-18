var area = document.getElementById('area');
var cell = document.getElementsByClassName('cell');

var cells = [
    [""],
];

var player = "x";

var tmp = [];

createCells();

function createCells() {
    area.innerHTML = "";
    for (var i = 0; i < cells.length; i++) {
        for (var j = 0; j < cells[i].length; j++) {
            area.innerHTML += "<div class='cell' " + "onclick='cellClick(" + i + "," + j + ")'>" + cells[i][j] + "</div>";
        }
        area.innerHTML += "<br>";
    }
}

function cellClick(i, j) {
    var n = cells.length;
    var m = cells[0].length;
    if (cells[i][j] == "")
    {
        cells[i][j] = player.toUpperCase();
        player = player == "x" ? "o" : "x";
    }
    else
    {
        alert("Ячейка занята");
        return;
    }
    if (i == 0)
    {
        tmp = cells;
        cells = [[]];
        for (var ii = 0; ii < tmp[0].length; ii++)
        {
            cells[0].push("");
        }
        for (var ii = 0; ii < tmp.length; ii++)
        {
            cells.push(tmp[ii]);
        }
    }
    if (i == n - 1)
    {
        cells.push([]);
        for (var ii = 0; ii < cells[0].length; ii++)
        {
            cells[cells.length - 1].push("");
        }
    }
    if (j == 0)
    {
        tmp = cells;
        cells = [];
        for (var ii = 0; ii < tmp.length; ii++)
        {
            cells.push([""]);
        }
        for (var ii = 0; ii < tmp.length; ii++)
        {
            for (var jj = 0; jj < tmp[0].length; jj++)
            {
                cells[ii].push(tmp[ii][jj]);
            }
        }
    }
    if (j == m - 1)
    {
        for (var ii = 0; ii <= cells.length - 1; ii++)
        {
            cells[ii].push("");
        }
    }
    createCells();
}