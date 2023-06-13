window.addEventListener("DOMContentLoaded",()=>{
    let container = document.querySelector('.background-menu');
    let containerWidth = container.clientWidth;
    let containerHeight = container.clientHeight;
    let numDivs = 36;
    for (let i = 0; i < numDivs; i++) {
        let glitchParticle = document.createElement('div');
        glitchParticle.className = 'glitchParticle';
        glitchParticle.style.width = (containerWidth / Math.sqrt(numDivs)) + 'px';
        glitchParticle.style.height = (containerHeight / Math.sqrt(numDivs)) + 'px';
        glitchParticle.style.backgroundPosition = `${-(i % Math.sqrt(numDivs)) * (containerWidth / Math.sqrt(numDivs))}px ${-Math.floor(i / Math.sqrt(numDivs)) * (containerHeight / Math.sqrt(numDivs))}px`;
        container.appendChild(glitchParticle);
    }

    setInterval(()=>{
        let glitchEffect = document.getElementsByClassName('glitchParticle'); 
        for(let i = 0; i < glitchEffect.length; i++ ){
            glitchEffect[i].style.width = Math.floor(Math.random() * (100 - 90) + 90) + 'px'; 
            glitchEffect[i].style.height = Math.floor(Math.random() *(50 - 45) +45) + 'px'; 
        }
    },120);
})