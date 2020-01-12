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
            let force = (maxDistance = distance) / maxDistance;

            if(force < 0)  force= 0;
                
        }
        
    }

}

