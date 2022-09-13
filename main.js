function preload()
{

}
function setup()
{
    canvas = createCanvas(650,470);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video, 0, 0, 650, 470);
    circle(60, 40, 50);    
    rect(200, 20, 70, 40); 
    ellipse(400, 40, 55, 55);   
}