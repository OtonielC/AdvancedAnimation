class Cell {
	constructor(env,row,col,num) {
		this.x = env.world.left + env.cellWidth * col;
		this.y = env.world.top + env.cellHeight * row;
		this.width = env.cellWidth;
		this.height = env.cellHeight;
		this.env =env;
		this.rA = Math.random()*255
		this.g = Math.random()*255
		this.b = Math.random()*255
		this.column = col;
		this.row = row;
		this.occupied = false;
		if(Math.random() > 0.9) {
			this.occupied = true;
		}


		//neighors
		this.north = 0;
		this.northWest = 0;
		this.west = 0;
		this.southWest = 0;
		this.south = 0;
		this.southEast = 0;
		this.east = 0;
		this.northEast = 0;
	}

	run() {
		this.render();
	}

	setNeighbors() {
		if(this.row != 0) {
			if(this.env.cells[this.row-1][this.column].occupied === false){
				this.north = this.env.cells[this.row-1][this.column]
			}
		}
		if(this.row != this.env.nRows-1) {
			if(this.env.cells[this.row+1][this.column].occupied === false){
				this.south = this.env.cells[this.row+1][this.column]
			}
		}
		if(this.column != this.env.nCols-1) {
			if(this.env.cells[this.row][this.column+1].occupied === false){
				this.east = this.env.cells[this.row][this.column+1]
			}
		}
		if(this.column != 0) {
			if(this.env.cells[this.row][this.column-1].occupied === false){
				this.west = this.env.cells[this.row][this.column-1]
			}
		}



	}

	render() {
		let ctx1 = ecoSystem.context1;



		if(this.occupied == true) {
			ctx1.fillStyle = "blue";
		}
		else{ctx1.fillStyle = "green";
	}

	ctx1.fillRect(this.x, this.y, this.width, this.height);
	ctx1.strokeStyle ="black";
	ctx1.strokeRect(this.x, this.y, this.width, this.height);
	ctx1.fillStyle = "white";
	ctx1.font = "12px Times_New_Roman";

	ctx1.fillText(this.column, this.x,this.y+this.height/3);
	ctx1.fillText(this.row, this.x,this.y+this.height/2);
	ctx1.stroke();

}

update() {



}
}
