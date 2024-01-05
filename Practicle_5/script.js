// script.js

function showInfo(info) {
        var infoBox = document.getElementById('info-box');
        infoBox.innerHTML = info;
        infoBox.style.display = 'block';
    }
    
    document.addEventListener('click', function (event) {
        var infoBox = document.getElementById('info-box');
        if (!event.target.classList.contains('hotspot')) {
            infoBox.style.display = 'none';
        }
    });
    