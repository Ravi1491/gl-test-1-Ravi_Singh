const btn_Node = document.getElementById('btn');

function randomColor(){
    const r = Math.floor(Math.random()*(255 + 1));
    const g = Math.floor(Math.random()*(255 + 1));
    const b = Math.floor(Math.random()*(255 + 1));

    return [r,g,b];
}

function changeColor(){
    btn_Node.addEventListener('click', () => {
        // console.log("Dws");
        const [r,g,b] = randomColor();
        document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    })
}

changeColor();