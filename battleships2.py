# method to check if (i,j) is a valid position in the grid
def isValidPos(grid, i, j):
    global rows, cols
    # i should be in the range [0,rows-1]
    # j should be in the range [0,cols-1]
    # if they are not present in the given range that means the position is not valid
    # and if the grid[i][j]='.' it should not be explored only grid[i][j]='#' should be explored
    if i < 0 or j < 0 or i >= rows or j >= cols or grid[i][j] == '.':
        return False
    # if the above condition is false then the position is valid
    return True

# recursive method for processing neighbouring cells of a given cell


def explore(grid, i, j):
    # if grid[i][j]='#'
    if grid[i][j] == '#':
        # make it as '.' so that it is not explored again
        grid[i][j] = '.'

        w, x, y, z = 0, 0, 0, 0

        # explore top cell(i-1,j) of (i,j) if it is valid
        if isValidPos(grid, i-1, j):
            w = explore(grid, i-1, j)

        # explore bottom cell(i+1,j) of (i,j) if it is valid
        if isValidPos(grid, i+1, j):
            x = explore(grid, i+1, j)

        # explore left cell(i,j-1) of (i,j) if it is valid
        if isValidPos(grid, i, j-1):
            y = explore(grid, i, j-1)

        # explore right cell(i,j+1) of (i,j) if it is valid
        if isValidPos(grid, i, j+1):
            z = explore(grid, i, j+1)

        # consider the current cell by returning 1
        # also considering the neighbouring cells by adding the values returned by them
        return 1+w+x+y+z
    # if grid[i][j]='.' then return 0 as it is not considered in our calculation
    return 0

# given method


def solution(B):
    # intialize an empty grid
    grid = []
    # first form a list by appending each character of the string in B
    # append the list as a row in grid
    # repeat for every string in B
    for x in B:
        l = [y for y in x]
        grid.append(l)
    # variables to calculate the number of patrol boats, submarines and destroyers all are initialized to zero
    patrolBoats, subMarines, destroyers = 0, 0, 0
    # iterate through the grid
    for i in range(rows):
        for j in range(cols):
            # if grid[i][j]='#'
            if grid[i][j] == '#':
                # explore it and get the number of connected cells to it having value '#'
                val = explore(grid, i, j)

                # if the number of connected cells is 1 then it is a patrol boat increment the count
                if val == 1:
                    patrolBoats += 1

                # if the number of connected cells are 2 then it is a submarine increment the count
                if val == 2:
                    subMarines += 1

                # if the number of connected cells are 3 then it is a destroyer increment the count
                if val == 3:
                    destroyers += 1
    # return the list containing the counts
    return [patrolBoats, subMarines, destroyers]


B = ['.##.#', '#.#..', '#...#', '#.##.']

rows = len(B)
cols = len(B[0])
print('[patrol boats, submarines, destroyers] :', solution(B))


# test case 1
# B=['.##.#','#.#..','#...#','#.##.']

# test case 2
# B=['.#..#','##..#','...#.']

# test case 3
# B=['##.','#.#','.##']

# test case 4
# B=['...','...','...']

solution([".##.#", "#.#..", '#...#', '#.##.'])