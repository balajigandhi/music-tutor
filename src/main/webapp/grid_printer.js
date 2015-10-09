function drawGrid() {
    for (var x = 0; x <= cw; x += cw / vsplit) {
        ctx.strokeStyle = 'lightgrey';
        ctx.rect(x, 0, cw / vsplit, ch);
        ctx.stroke();
    }

    for (var y = 0; y <= ch; y += ch / hsplit) {
        ctx.strokeStyle = 'lightgrey';
        ctx.rect(0, y, cw, ch / hsplit);
        ctx.stroke();
    }
}