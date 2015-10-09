var x = 0, y = 0;

var j = 0;

function printArohanam() {
    x += cw / vsplit;
    y = noteRelativeLocations[notes[dvPattern1[j] + line]] * ch / hsplit;
    var newX = x - cw / vsplit / 2 - 5;
    var newY = y - ch / hsplit / 2 + 5;
    ctx.fillText(notes[dvPattern1[j] + line], newX, newY);
    j++;
    if (j < dvPattern1.length) {
        setTimeout(printArohanam, playlength * 1000);
    } else {
        x = 0;
        y = 0;
        j = 0;
        setTimeout(clearGrid, playlength * 500);
    }
}

function clearGrid() {
    for (var x = 0; x <= cw; x += cw / vsplit) {
        for (var y = 0; y <= ch; y += ch / hsplit) {
            ctx.clearRect(x + 1, y + 1, cw / vsplit - 2, ch / hsplit - 2);
        }
    }
}