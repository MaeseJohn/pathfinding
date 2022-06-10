const CREATE_BUTTON = document.getElementById('create')

let grid
let grid_height
let grid_width 

CREATE_BUTTON.onclick = function(){

    if(grid != undefined)
    {
        grid.removeGrid();
    }

    grid_height = document.getElementById('heigth').value
    grid_width  = document.getElementById('width').value
    grid = new Grid(grid_height, grid_width)
    grid.makeGrid()
}

const MAZE_RANDOMIZER_BUTTON = document.getElementById('mazerun')

let mazeInProcces

MAZE_RANDOMIZER_BUTTON.onclick = function()
{
    if(mazeInProcces)
    {
        grid.removeGrid()
        grid = new Grid(grid_height, grid_width)
        grid.makeGrid()
    }
    
    Features.generateMaze()
    mazeInProcces = true
}