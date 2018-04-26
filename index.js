$ = (queryString) => document.querySelector(queryString);

const shiftHue = (hue) => (hue + 1) % 360;

let hue = 0;

const animate = () => {
    hue = shiftHue(hue);
    const color = `hsl(${hue}, 100%, 50%)`;  //color changing
    $('a-sphere').setAttribute('color', color);
    
    //variation makes the ball bounce
    const variation = Math.sin(Date.now() / 1000);
    
    const position = `0 ${1.5 + variation} -2`;
    $('a-sphere').setAttribute('position', position);
    
    //plane with rotation; if want still set to `-90 0 0`
    $('a-plane').setAttribute('rotation', `-90 ${90 * variation} 0`);
    
    $('a-plane').setAttribute('color', color);
    
    requestAnimationFrame(animate);
};

//animation - fires callback when animation is ready
requestAnimationFrame(animate);