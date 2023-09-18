canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

/*
    Use a função beginPath() para começar um caminho.
    Então, use strokeStyle para ajustar a cor para "grey".
    Use lineWidth e ajusta a width para 1.
    Use rect() para criar um retângulo em 150 e 143 com 430 width e 200 height.
*/

ctx.beginpath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 1;
ctx.rect( x,150,y,143, width,430, height,200);
ctx.stroke();

/*
    Use a função beginPath() para começar um caminho.
    Então, use strokeStyle para ajustar a cor para "blue".
    Use lineWidth e ajuste a width para 5.
    Use arc() para criar um círculo em  x = 150 e y = 143
with 40 como radius, 0 startAngle e 2 * Math.PI endAngle.
*/

ctx.beginpath;
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(x,150, y, 143 ,r,40,startAngle,0, endAngle,2 * Math.PI);
ctx.stroke();

// De modo parecido, crie um círculo preto com posição 350 e 210
ctx.beginpath;
ctx.strokeStyle = "bleck";
ctx.lineWidth = 5;
ctx.arc(x,350, y, 210 ,r,40,startAngle,0, endAngle,2 * Math.PI);
ctx.stroke();
// De modo parecido, crie um círculo vermelho com posição 210 e 40
ctx.beginpath;
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(x,210, y, 40 ,r,40,startAngle,0, endAngle,2 * Math.PI);
ctx.stroke();
// De modo parecido, crie um círculo laranja com posição  300 e 250
ctx.beginpath;
ctx.strokeStyle = "orange";
ctx.lineWidth = 5;
ctx.arc(x,300, y, 250 ,r,40,startAngle,0, endAngle,2 * Math.PI);
ctx.stroke();
// De modo parecido, crie um círculo verde com posição 400 e 250
ctx.beginpath;
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(x,400, y, 250 ,r,40,startAngle,0, endAngle,2 * Math.PI);
ctx.stroke();