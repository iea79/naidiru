function calculate(percentLoaded){
    var  circle = document.getElementById('percent-loaded');
    var percentLoadedCircle = document.querySelectorAll("circle#percent-loaded");

    var r = percentLoadedCircle[0].attributes.r;
    var radius = Number(r.value);

    var circumference = Math.PI * (radius * 2);
    var arcPercent = ((100-percentLoaded)/100);

    var arcLengthOffset = arcPercent * circumference;

    percentLoadedCircle[0].style.strokeDashoffset = arcLengthOffset;
}

calculate(38);
