
setInterval(createSnowFlake, 30); //speed at which snowflakes fall

function createSnowFlake() { 
    const snow_flake = document.createElement('i');
    snow_flake.classList.add('fas');
    snow_flake.classList.add('fa-snowflake');

    snow_flake.style.left = Math.random() * window.innerWidth + 'px';
    snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2-5 seconds (a number between 2 and 5)
    snow_flake.style.opacity = Math.random(); //opacity of snowflakes
    snow_flake.style.fontSize = Math.random() * 10 + 15 + 'px'; // adjusts the size of the random snowflakes

    document.body.appendChild(snow_flake);

    setTimeout( () => { 
        snow_flake.remove();    
    }, 5000)

}