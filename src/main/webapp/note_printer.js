var x = 0, y = 0;

var j = 0;

function printArohanam(ctx, playlength) {
    x += 50;
    y = noteRelativeLocations[dvPattern[j]] * 50;
    ctx.fillText(dvPattern[j], x, y);
    j++;
    if (j < dvPattern.length) {
        setTimeout(printArohanam(ctx, playlength), playlength * 1000);
    }
}