function GameObject() {
    this.x = 0;
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.radius = 25;
    this.color = "blue";
}

GameObject.prototype.drawCircle = function(context) {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fill();
};

GameObject.prototype.drawRect = function(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
};