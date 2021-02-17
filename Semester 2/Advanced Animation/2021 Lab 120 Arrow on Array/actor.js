class Actor{
  constructor(row, column){
    this.row = row;
    this.col = column;
  }





  render(){
    let cell = ecoSystem.cells[this.row][this.col];

    let ctx = ecoSystem.context1;
    ctx.beginPath();
    ctx.arc(cell.x + cell.width/2, cell.y + cell.height/2, 5, 0, Math.PI*2);
    ctx.strokeStyle = 'black';
    ctx.fillstyle = 'red';
    ctx.fill();
    ctx.stroke();
  }
}
