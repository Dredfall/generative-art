colors =[
  [191,187,182],
  [171,46,42],
  [28,87,159],
  [83,67,47],
]

let u = 60
let width_u = 6
let height_u = 9
let circle_d = 100
let offset = 20

function draw_shape(x,y) {
  let dice = 0
  let increment = 0
  let dice_0 = 0
  let rnd = 0
  dice = int(random(0,5))

  switch (dice) {
    case 0:
      dice_0 = int(random(1,4))
        for(let i = 0 ; i< dice_0 ; i++) {
          noStroke()
          rect(x,y+increment,50,10)
          increment +=20
        }
      break;

    case 1:
      dice_0 = int(random(1,3))
        for(let i = 0 ; i< dice_0 ; i++) {
          noStroke()
          rect(x,y+increment,50,20)
          increment +=40
        }
      break;

    case 2: 
      noStroke()
      rect(x,y,50,40)
      break;
    
    case 3: 
      noStroke()
      circle(x+25,y+30,40)
      break;

    case 4: 
      noFill()
      rnd = int(random(0,4))
      stroke(colors[rnd])
      strokeWeight(3)
      circle(x+25,y+30,40)
      break;
  }
}

function grid() {
  let rnd = 0
  let rnd_2 = 0
  for(let i=0 ; i< width_u ; i++) {
    for(let j=0 ; j< height_u ; j++) {
      rnd = int(random(0,4))
      fill(colors[rnd])
      rnd_2 = int(random(0,2))
      if(rnd_2 == 0)
        draw_shape(i*u+offset,j*u+offset)
      //noFill()
      //stroke('red')
      //rect(i*u+offset,j*u+offset,u,u)
    }
  }
}

function setup() {
  createCanvas(1000, 1000);
  noLoop()
}

function draw() {
  background(40,40,40);
  grid()
}
