var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var player1 = new GameObject();
var keys = {};

console.log(document.getElementById("canvas"));

player1.x = 20;
player1.y = canvas.height / 2 - 50;
player1.width = 20;
player1.height = 100;
player1.color = "blue";
player1.speed = 3;

// makes sure that when player presses a key, the system knows (dyslexia)
document.addEventListener("keydown", function(e) 
{
    keys[e.key] = true;
});

document.addEventListener("keyup", function(e) 
{
    keys[e.key] = false;
});


setInterval(animate, 1000 / 60);

function animate() 
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    //keys up and down
    if (keys["w"] && player1.y > 0)
    {
        player1.y -= player1.speed;
    }

    if (keys["s"] && player1.y + player1.height < canvas.height)
    {
        player1.y += player1.speed;
    }

    //player bounding
    if (player1.y < 0)
    {
        player1.y = 0;
    }

    if (player1.y + player1.height > canvas.height)
    {
        player1.y = canvas.height - player1.height;
    }

    player1.drawRect(context);
}