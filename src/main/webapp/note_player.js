function playNotes() {
    for (var i = 0; i < dvPattern1.length; i++) {
        var notes = isAvarohanam ? avarohanam : arohanam;
        osc = audioContext.createOscillator();
        // 1 second divided by number of beats per second times number of beats (length of a note)
        osc.type = 'sine';
        osc.frequency.value = noteFrequencies[notes[dvPattern1[i] + lineInc]];
        osc.start(t);
        osc.stop(t + playlength);
        t += playlength;
        osc.connect(audioContext.destination);
    }
}

function playSVNotes() {
    for (var i = 0; i < dvPattern.length; i++) {
        osc = audioContext.createOscillator();
        // 1 second divided by number of beats per second times number of beats (length of a note)
        osc.type = 'sine';
        osc.frequency.value = noteFrequencies[dvPattern[i]];
        osc.start(t);
        osc.stop(t + playlength);
        t += playlength;
        osc.connect(audioContext.destination);
    }
}