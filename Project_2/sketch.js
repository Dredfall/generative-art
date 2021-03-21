colors = [
  [250,201,1, 255], 
  [221,1,0, 255], 
  [34,80,149, 255]
]

let tab_x_coord = []
let tab_y_coord = []

let g_x = 0
let g_y = 0

function draw_grid(color_idx) {
	let n_lines = int(random(1,10))
	let n_lines_h = int(random(1,10))
	let x_coord = 0
	let y_coord = 0
	let offset = 20
	let max_coord = 480
	let b_draw = true
	let y_min = -480
	let y_max = -20
	let x_min = -480
	let x_max = -20
	let z_coord = 0
	for (let i = 0 ; i < n_lines ; i++) {
		x_coord = int(random(-480,-20));
		z_coord = int(random(0,3))
		for (let j = 0 ; j < tab_x_coord.length  ; j++) {
			if(x_coord <= tab_x_coord[j] + offset && x_coord >= tab_x_coord[j] - offset)
			{
				b_draw = false
			}
		}
		if (b_draw) {
			stroke(colors[color_idx])
			line(x_coord, y_min, z_coord, x_coord, y_max, z_coord);
			tab_x_coord[g_x] = x_coord
			g_x++
		}
		b_draw = true
	}

	for (let k = 0 ; k < n_lines_h ; k++) {
		y_coord = int(random(-480,-20));
		z_coord = int(random(0,3))
		for (let l = 0 ; l < tab_y_coord.length  ; l++) {
			if(y_coord <= tab_y_coord[l] + offset && y_coord >= tab_y_coord[l] - offset)
			{
				b_draw = false
			}
		}
		if (b_draw) {
			stroke(colors[color_idx])
			line(x_min, y_coord, z_coord, x_max, y_coord, z_coord);
			tab_y_coord[g_y] = y_coord
			g_y++
		}
		b_draw = true
	}
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
  noLoop();
}

function draw() {
    background(255);
	strokeWeight(8);
	draw_grid(0);
	draw_grid(1);
	draw_grid(2);
}