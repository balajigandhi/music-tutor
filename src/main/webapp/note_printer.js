var x = 0, y = 0;

var j = 0;

function printArohanam() {
    x += cw / vsplit;
    y = noteRelativeLocations[dvPattern[j]] * ch / hsplit;
    var newX = x - cw / vsplit / 2 - 5;
    var newY = y - ch / hsplit / 2 + 5;
    ctx.fillText(dvPattern[j], newX, newY);
    j++;
    if (j < dvPattern.length) {
        setTimeout(printArohanam, playlength * 1000);
    }
}