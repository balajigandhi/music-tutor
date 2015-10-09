var x = 0, y = 0;

var j = 0;

function printArohanam() {
    x += cw / vsplit;
    y = noteRelativeLocations[dvPattern[j]] * ch / hsplit;
    ctx.fillText(dvPattern[j], x, y);
    j++;
    if (j < dvPattern.length) {
        setTimeout(printArohanam, playlength * 1000);
    }
}