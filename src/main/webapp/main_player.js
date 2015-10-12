var noteFrequencies = {
    's': 261.63,
    'r': 293.66,
    'g': 329.63,
    'm': 349.23,
    'p': 392.00,
    'd': 440.00,
    'n': 493.88,
    'S': 523.25
};

var noteRelativeLocations = {
    's': 8,
    'r': 7,
    'g': 6,
    'm': 5,
    'p': 4,
    'd': 3,
    'n': 2,
    'S': 1
};

var arohanam = {
    1: 's',
    2: 'r',
    3: 'g',
    4: 'm',
    5: 'p',
    6: 'd',
    7: 'n',
    8: 'S'
};

var avarohanam = {
    1: 'S',
    2: 'n',
    3: 'd',
    4: 'p',
    5: 'm',
    6: 'g',
    7: 'r',
    8: 's'
};

var elem = document.getElementById('play'),
    audioContext = new (window.AudioContext || window.webkitAudioContext),
    osc = audioContext.createOscillator();
var bpm = 120;
var t = audioContext.currentTime;
var playlength = 1 / (bpm / 60);

var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");
ctx.font = "20px Arial";
var cw = myCanvas.width;
var ch = myCanvas.height;
var vsplit = 16;
var hsplit = 8;
var lineInc = -1;
var totalLines = 0;
var isAvarohanam = false;