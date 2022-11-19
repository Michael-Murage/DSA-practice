function solution(B) {
	// let colLen = B.length
	let patrols = 0
	let Subs = 0
	let Dests = 0
	let a
	for(let i = 0; i < B.length; i++){
			for(let j = 0; j < B[i].length; j++){
					if((B[i][j] && B[i][j]=='#')  && (B[i][j+1] && B[i][j+1]=='#') && (B[i][j+2]) && (B[i][j+2]) && B[i][j+2]=='#'){
							// a = B[i].split('')
							// a.splice(j, 3, '.')
							// a = a.join('')
							// B.splice(i, 1, a)
							Dests++
							// a = []
							continue
					}
					if((B[i][j] && B[i][j]=='#') && (B[i+1][j] && B[i+1][j]=='#') && (B[i+2][j] && B[i+2][j]=='#')){
							// Dests++
							// a = B[i].split('')
							// a.splice(j, 1, '.')
							// a = a.join('')
							// B.splice(i, 1, a)
							// a = []

							// a = B[i+1].split('')
							// a.splice(j, 1, '.')
							// a = a.join('')
							// B.splice(i+1, 1, a)
							// a = []

							// a = B[i+2].split('')
							// a.splice(j, 1, '.')
							// a = a.join('')
							// B.splice(i+2, 1, a)
							// a = []
							continue
					}
					if((B[i][j] && B[i][j]=='#') && (B[i][j+1] && B[i][j+1]=='#') && (B[i+1][j] && B[i+1][j]=='#')){
							Dests++
							// a = B[i].split('')
							// a.splice(j, 2, '.')
							// a = a.join('')
							// B.splice(i, 1, a)
							// a = []
							
							// a = B[i+1].split('')
							// a.splice(j, 1, '.')
							// a = a.join('')
							// B.splice(i+1, 1, a)
							// a = []
							continue
					}
					if((B[i][j] && B[i][j]=='#') && (B[i][j+1] && B[i][j+1]=='#') && (B[i+1][j+1] && B[i+1][j+1]=='#')){
							Dests++
							// a = B[i].split('')
							// a.splice(j, 2, '.')
							// a = a.join('')
							// B.splice(i, 1, a)
							// a = []
							
							// a = B[i+1].split('')
							// a.splice(j, 1, '.')
							// a = a.join('')
							// B.splice(i+1, 1, a)
							// a = []
							continue
					}
					if((B[i][j] && B[i][j]=='#') && (B[i+1][j] && B[i+1][j]=='#') && (B[i+1][j+1] && B[i+1][j+1]=='#')){
							Dests++
							// a = B[i].split('')
							// a.splice(j, 1, '.')
							// a = a.join('')
							// B.splice(i, 1, a)
							// a = []
							
							// a = B[i+1].split('')
							// a.splice(j, 2, '.')
							// a = a.join('')
							// B.splice(i+1, 1, a)
							// a = []
							continue
					}
					if((B[i][j+1] && B[i][j+1]=='#') && (B[i+1][j] && B[i+1][j]=='#') && (B[i+1][j+1] && B[i+1][j+1]=='#')){
							Dests++
							// a = B[i].split('')
							// a.splice(j+1, 1, '.')
							// a = a.join('')
							// B.splice(i, 1, a)
							// a = []

							// a = B[i+1].split('')
							// a.splice(j, 2, '.')
							// a = a.join('')
							// B.splice(i+1, 1, a)
							// a = []
							continue
					}
					// submarines
					if((B[i][j] && B[i][j]=='#') && (B[i][j+1] && B[i][j+1]=='#')){
							Subs++
							// a = B[i].split('')
							// a.splice(j, 2, '.')
							// a = a.join('')
							// B.splice(i, 1, a)
							// a = []
							continue
					}
					if((B[i][j] && B[i][j]=='#') && (B[i+1][j] && B[i+1][j]=='#')){
							Subs++
							// a = B[i].split('')
							// a.splice(j, 1, '.')
							// a = a.join('')
							// B.splice(i, 1, a)
							// a = []

							// a = B[i+1].split('')
							// a.splice(j, 1, '.')
							// a = a.join('')
							// B.splice(i+1, 1, a)
							// a = []
							continue
					}
					// patrols
					if(B[i][j] && B[i][j]=='#'){
							patrols++
							// a = B[i].split('')
							// a.splice(j, 1, '.')
							// a = a.join('')
							// B.splice(i, 1, a)
							// a = []
							continue
					}
			}
	}
	return [patrols, Subs, Dests]
}


console.log(solution(['.##.#', '#.#..', '#...#', '#.##.']));
// console.log(solution(['.....', '.....', '.....', '.....']));
const B = ['.##.#', '#.#..', '#...#', '#.##.']
let patrols = 0
let Subs = 0
let Dests = 0
let a

if((B[1][1] && B[1][1]=='#')  && (B[1][1+1] && B[1][1+1]=='#') && (B[1][1+2]) && (B[1][1+2]) && B[1][1+2]=='#'){
	a = B[1].split('')
	a.splice(1, 3, '.')
	a = a.join('')
	B.splice(1, 1, a)
	Dests++
	a = []
}
// console.log([patrols, Subs, Dests])