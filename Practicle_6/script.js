// script.js

document.addEventListener('DOMContentLoaded', function () {
        var canvas = document.getElementById('imageCanvas');
        var ctx = canvas.getContext('2d');
        var coordinates = [];
    
        var img = new Image();
        img.src = 'CAR.png';  // Replace 'example.jpg' with the path to your image
        img.onload = function () {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
    
        canvas.addEventListener('click', function (event) {
            var rect = canvas.getBoundingClientRect();
            var x = event.clientX - rect.left;
            var y = event.clientY - rect.top;
    
            coordinates.push({ x: x, y: y });
    
            drawPoint(x, y);
            displayCoordinates();
        });
    
        function drawPoint(x, y) {
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = 'red';
            ctx.fill();
            ctx.stroke();
        }
    
        function displayCoordinates() {
            var output = document.getElementById('coordinatesOutput');
            output.innerHTML = 'Coordinates: ' + JSON.stringify(coordinates);
        }
    });
    