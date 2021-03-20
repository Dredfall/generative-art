colors = [
  [255,255,255, 255], 
  [255,255,255, 255],
  [250,201,1, 255], 
  [221,1,0, 255], 
  [34,80,149, 255]
]

function draw_paint(ord_x, ord_y) {
  let a_coord_x = []
  let a_width = []
  let n_row = 3;
  let n_col = 5;
  let width = 50
  let height = 50;
  let prev_width = 0
  let prev_height = 0;
  let coord_x = 0
  let coord_y = 0
  let remain_length = 300;
  let line_length = 300;
  let remain_height = 300;
  let line_height = 300;
  let offset = 10;
  f = [0, 0, 255, 0]
  f = random(colors)

  // For all rows
  for (let x = 0; x < n_row; x++) {
    // For the last row, choose a height that fill the remain length
    if (x == n_row - 1) {
      height = remain_height;
    }
    // Choose a random height between two values and insure that it is less than the remaining available
    else {
        do {
          height = int(random(50,line_height/2));
        } while (height > remain_height)
    }
      // Reset the value for the columns
      coord_x = 0;
      remain_length = 300
      // Create new array to store the values of width and coord for each rectangle
      a_coord_x[x]=[];
      a_width[x]=[];
      // Loop over the columns
      for (let y = 0; y < n_col; y++) {
        f = random(colors)
        fill(f);
        // Same idea, for the last rect, fill the remaining length
          if (y == n_col - 1) {
            width = remain_length;
          }
          else {
              // Same idea, choose a random width, smaller than the remaining
              do {
                width = int(random(20,line_length/4));
              } while (width > remain_length)
              // If we are not in the first row, check the line precision
              if(x != 0)
                {
                  // loop over the arrays of width and coord of the previous row
                  for(let i = 0 ; i < n_col; i++)
                    {
                      // If the value of coord_x + width selected more or less (offset) a value of coord_x + width in the previous row
                      if(coord_x + width <= (a_coord_x[x-1][i] + a_width[x-1][i] + offset ) && coord_x + width >= (a_coord_x[x-1][i] + a_width[x-1][i] - offset )) {
                        console.log(y)
                        // then set the current width so that the horizontal lines matches
                        width = a_coord_x[x-1][i+1] - coord_x
                        console.log(a_coord_x[x-1][i+1])
                      }
                    }
                }     
          }
          // Decrement the remaining length
          remain_length -= width;
          // Store coord and width
          a_coord_x[x][y]=coord_x;
          a_width[x][y]=width;
          // Draw the rect
          rect(ord_x + coord_x + 20, ord_y + coord_y + 20, width, height);
          // Increment the coord for the next rect
          coord_x += width;
      }
      // Increment the coord for the next row
      coord_y += height;
      remain_height -= height;
  }
}

function setup() {
  createCanvas(1500, 1500);
  strokeWeight(4);
  noLoop();
}

function draw() {
  for(let i = 0 ; i < 4 ; i++)
  {
    for(let j = 0 ; j < 2 ; j++)
    {
      draw_paint(i*320,j*320);
    }
  }
}
