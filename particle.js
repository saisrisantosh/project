class particle {
constructor(x,y,w,h){
    var option={
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,w,h,otions);
    this.w=w;
    this.h=h;
    world.add(world,this.body);
}
display(){
var pos=this.body.position;
rectMode(CENTER);
fill("white");
rect(pos.x,pos.y,this.w,this.h);
this.body=bodies.circle(x,y,this.r,option);
this.color=color(random(0,255),random(0,255),random(0,255))
world.add(world,this.body);


}
};
