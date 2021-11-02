let x = 0;
let y = 0;
export default function moveBall(e, ball, container) {

    let $ball = document.querySelector(ball);
    const $container = document.querySelector(container);
    const circleLimit = $ball.getBoundingClientRect();
    const containerLimit = $container.getBoundingClientRect();
  
    
    switch (e.keyCode) {
        case 37: // left
        e.preventDefault();
        if(circleLimit.left > containerLimit.left) x --;
        break;
        
        case 38: //up
        e.preventDefault();
        if (circleLimit.top > containerLimit.top) y--;
        break;
        
        case 39: //right
        e.preventDefault();
        if(circleLimit.right < containerLimit.right) x ++;
        break;
        
        case 40: //down
        e.preventDefault();
        if (circleLimit.bottom < containerLimit.bottom) y++;
        break;
        
        default:
            break;
        }
        $ball.style.transform =`translate(${x * 10}px , ${y * 10}px)`;
}