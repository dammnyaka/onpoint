

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
console.log(canvas);
const shape = new Image();
shape.src = 'shape.png';


shape.onload = function(){
    ctx.drawImage(shape, 0, 0, shape.width/3, shape.height/3);
};
