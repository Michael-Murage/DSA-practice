function isValidPos(grid, i, j){
    if(i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === '.'){
        return false
    }
    return true
}

function explore(grid, i, j){
    if(grid[i][j] === '#'){
        grid[i][j] = '.'
        let w = 0
        let x = 0
        let y = 0
        let z = 0

        if(isValidPos(grid, i-1, j)){
            w = explore(grid, i-1, j)
        }
        if(isValidPos(grid, i+1, j)){
            x = explore(grid, i+1, j)
        }
        if(isValidPos(grid, i, j-1)){
            y = explore(grid, i, j-1)
        }
        if(isValidPos(grid, i, j+1)){
            z = explore(grid, i, j+1)
        }
        return 1+w+x+y+z
    }
    return 0
}

function solution(B){
    let grid = []

    for (let x of B){
        let l = x.split('')
        grid.push(l)
    }

    let patrolBoats = 0
    let subMarines = 0
    let destroyers = 0

    for (let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(grid[i][j] === '#'){
                let val = explore(grid, i, j)

                if(val === 1){
                    patrolBoats++
                }
                if(val === 2){
                    subMarines++
                }
                if(val === 3){
                    destroyers++
                }
            }
        }
    }
    return [patrolBoats, subMarines, destroyers]
}

let B = ['.##.#', '#.#..', '#...#', '#.##.']

let rows = B.length
let cols = B[0].length

console.log(`[patrol boats, submarines, destroyers] : ${solution(B)}`)