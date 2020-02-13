const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
//declare the window height
canvas.width = window.innerWidth;
canvas.height = windows.innerHeight;

let particleArray = [];

let mouse = {
    x: null,
    y: null,
    radius: 100
}

window.addEventListener('mousemove', function(event){  //everytime mouse move event is trigerred, the callback event will run
    mouse.x = event.x + canvas.clientleft/2;
    mouse.y = event.y + canvas.clienttop/2;

})

function drawImage(){
    let imageWidth = png.width;
    let imageHeight = png.height;

    const data = ctx.getImageData(0 , 0, imageWidth, imageHeight) //scan canvas for piel information and save it in the data variable
    ctx.clearRect(0,0, canvas.width, canvas.height)

    class Particle{ //blueprint to create each particle as an object
        constructor( x , y, color,size){
            // to center the image
            this.x = x + canvas.width/2 - png.width *2,
            this.y = y + canvas.height/2 - png.height *2,
            //^
            this.color = color,
            this.size = size,
            this.baseX = x + canvas.width/2 - png.width *2,
            this.baseY = y + canvas.height/2 - png.height *2,
            this.density = (Math.random() * 10) +2;

        }
        //This method gets called after each particle for every fram of our animation afte x and y position has been calculated
        draw(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); //draws circle around particles current coordinates
            ctx.closePath();
            ctx.fill();
        }
        //calculate particles movement and interaction 
        update(){
            //To know if mouse is close enought to the particles to start interaction
            // collision detection
            let dx = mouse.x - this.x; //current position of mouse minus position of the particle
            let dx = mouse.y - thisy; 
            let distane = Math.sqrt(dx * dx + dy * dy);
            let forceDirectionX = dx / distance; //how fast is it being pushed along the x axis
            let forceDirectionY = dy / distance;

                //convert values between 0 and max distance to values between 0 and 1
                //far away will be close to 0 and close will bw close to 1
            const maxDistance = 100;
            let force = (maxDistance - distance) / maxDistance;
                //force cant be negative numbers
            if(force < 0)  force= 0;

            let directionX = (forceDirectionX * force * this.density * 0.6);
            let directionY = (forceDirectionY * force * this.density * 0.6);

            if(distance < mouse.radius + this.size) {
                this.x -= directionX;
                this.y -= directionY;
            } else { // this will run everytime particle and mouse are not collided 
                if(this.x !== this.baseX){
                    let dx = this.x = this.baseX;
                    this.x -= dx/20; //deide by 20 to slow down the particles back to initial position
                }
                if(this.y !== this.baseY){
                    let dy = this.y = this.baseY;
                    this.y -= dx/20; //deide by 20 to slow down the particles back to initial position
                }
            }
            this.draw();             
        }
    }
    function init() {
        partcicleArray = [];

        for(let y = 0 ; y2= data.height < y2; y++ ){
            for(let x=0, x2 = data.width; x < x2 ; x++ ){
                if(data.data [(y * 4 * data.width ) + (x * 4) + 3] >128){
                    let positionX = x;
                    let positionY = y;
                    let color = "rgb(" + data.data[(y * 4 * data.width) + ( x * 4 )] + "," + 
                                        data.data[(y * 4 * data.width)+ ( x * 4 ) +1] + ","+
                                        data.data[(y * 4 * data.width)+ ( x * 4 ) +2] + ")";
                    particleArray.push(new Particle(positionX * 4, positionY * 4, color ));
                }
            }
        }
    }
    function animate(){
        requestAnimationFrame(animate); //call request animation api and pass it its own name so it calls iteself over and over recursivelly
        ctx.fillstyle = 'rgba(0,0,0,.05)';
        ctx.fillrect(0, 0, innerWidth, innerHeight);

        for(let i=0 ; i< particleArray.length; i++ ) {
            partcicleArray[i].update();
        }

    }

    init();
    animate();
    //everytime window is resized the canvas is resized and thats an issue so for that we create:
    window.addEventListener('resize', 
        function() {
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            init();
        }
    )

}

const png = new Image();
png.src = "data:image/png;base64,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";

window.addEventListener('load', (event) => {
    console.log('page has loaded');
    ctx.drawImage(png, 0, 0);
    drawImage();
});


