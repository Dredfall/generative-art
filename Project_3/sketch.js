let u = 30
let u_height = 17
let u_width = 8
let division = []

colors =[
  [255, 255, 255],
  [207, 203, 199]
]

p_colors =[
  [157, 153, 144],
  [180, 69, 50],
  [214, 184, 147],
  [61, 58, 54],
  [224, 73, 49],
  [113, 129, 135],
  [38, 78, 137],
]

function divide_rect() {
  let res = []
  let remain = u_height;
  let n = 0
  let x = 0
  let c1 = false
  let c2 = false

  while (remain > 0)
  {
    n = int(random(1,5))
    if (n > remain) {
      n = remain
    }
    remain -= n
    res[x] = n
    x++
  }
  return res
}

// At each pixel, 1/12 to create a square, but if there is a square above, chance goes to 1/3
function draw_pixels(x,y) {
  let dice = 0
  let shape_dice = 0
  let color = 0
  let adjacent = false
  fill('red')
  let array_p = []
  let array_c= []

  for (let i = 0 ; i< u_width ; i++)
  {
    array_p[i] = []
    array_c[i] = []
    for (let j = 0 ; j< u_height ; j++)
    {
      shape_dice = int(random(1,80))
      if(shape_dice == 4 && j <= u_height-5 && i <= u_width - 4)
      {

        draw_shape(x+i,y+j);
      }
      else {
        if(i != 0) {
          if(array_p[i][j-1] == 1) {
            dice = int(random(1,4))
            adjacent = true
            //console.log("i : " + i +" j :" + j)
          }
          else {
            dice = int(random(1,13))
            adjacent = false
          }
        }
        else {
          dice = int(random(1,13))
        }
        
        if(dice == 2) {
          color = int(random(0,7))
          if(i != 0) {
            if(adjacent) {
              color = array_c[i][j-1]
            }
          }
          fill(p_colors[color])
          rect((x+i)*u,(y+j)*u,u,u);
          array_p[i][j] = 1
          array_c[i][j] = color
        }
        else {
          array_p[i][j] = 0 
        }
      }
    }
  }
}

function draw_shape(x,y) {
  let dice = 0
  let color = 0
  fill('red')
  let array_p = []
  let array_c= []
  dice = int(random(3,5))
  for (let i = 0 ; i< 3 ; i++)
  {
    fill(p_colors[int(random(0,7))])
    for (let j = 0 ; j< dice; j++)
    {
      if(i == 1) {
        if(j == 0) {
          rect((x+i)*u,(y+j)*u,u,u);
        }
      }
      else {
        rect((x+i)*u,(y+j)*u,u,u);
      }
      
    }
  }
}

function create_grid() {
  noStroke()
  fill(colors[0])
  rect(u,u,u*8,u*17)
  rect(10*u,u,u*8,u*17)
  rect(19*u,u,u*8,u*17)
  fill(colors[1])
  let coord = 0
  for (let i = 0 ; i < division.length ; i++) {
    if(i%2 == 0) {
      fill(colors[1])
      c1 = true
    }
    else {
      fill(colors[0])
      c2 = true
    }
    if(i == 0) {
      rect(u,u,u*8,division[i]*u)
      rect(19*u,u,u*8,division[i]*u)
      if(c1) {
        fill(colors[0])
      }
      else if(c2) {
        fill(colors[1])
      }
      rect(10*u,u,u*8,division[i]*u)
    }
    else {
      rect(u,(coord+1)*u,u*8,division[i]*u)
      rect(19*u,(coord+1)*u,u*8,division[i]*u)
      if(c1) {
        fill(colors[0])
      }
      else if(c2) {
        fill(colors[1])
      }
      rect(10*u,(coord+1)*u,u*8,division[i]*u)
    }
    coord += division[i]
    c1 = false
    c2 = false
  }
}

function setup() {
  createCanvas(28*u, 19*u);
  division = divide_rect();
  //console.log(division)
  noLoop();
}

function draw() {
  background(242, 228, 178);
  create_grid()
  draw_pixels(1,1)
  draw_pixels(10,1)
  draw_pixels(19,1)
  draw_shape(10,5)
}
