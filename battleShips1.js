function solution(B) {
	let patrols = 0
	let Subs = 0
	let Dests = 0
	let a = []

	for(let i=0; i<B.length; i++){
		for(let j = 0; j<B[i].length; j++){
				if(B[i][j] && B[i][j]=='#'  && B[i][j+1] && B[i][j+1]=='#' && B[i][j+2] && B[i][j+2] && B[i][j+2]=='#'){
						Dests++
						j+=3
						continue
				}
				if((B[i][j] && B[i][j]=='#') && (B[i+1][j] && B[i+1][j]=='#') && (B[i+2][j] && B[i+2][j]=='#')){
						Dests++
						a = B[i].split('')
						a.splice(j, 1, '.')
						a = a.join('')
						B.splice(i, 1, a)
						a = []

						a = B[i+1].split('')
						a.splice(j, 1, '.')
						a = a.join('')
						B.splice(i+1, 1, a)
						a = []

						a = B[i+2].split('')
						a.splice(j, 1, '.')
						a = a.join('')
						B.splice(i+2, 1, a)
						a = []
						continue
				}
				if((B[i][j] && B[i][j]=='#') && (B[i][j+1] && B[i][j+1]=='#') && (B[i+1][j] && B[i+1][j]=='#')){
						Dests++
						a = B[i].split('')
						a.splice(j, 2, '.')
						a = a.join('')
						B.splice(i, 1, a)
						a = []
						
						a = B[i+1].split('')
						a.splice(j, 1, '.')
						a = a.join('')
						B.splice(i+1, 1, a)
						a = []
						continue
				}
				if((B[i][j] && B[i][j]=='#') && (B[i][j+1] && B[i][j+1]=='#') && (B[i+1][j+1] && B[i+1][j+1]=='#')){
						Dests++
						a = B[i].split('')
						a.splice(j, 2, '.')
						a = a.join('')
						B.splice(i, 1, a)
						a = []
						
						a = B[i+1].split('')
						a.splice(j, 1, '.')
						a = a.join('')
						B.splice(i+1, 1, a)
						a = []
						continue
				}
				if((B[i][j] && B[i][j]=='#') && (B[i+1][j] && B[i+1][j]=='#') && (B[i+1][j+1] && B[i+1][j+1]=='#')){
						Dests++
						a = B[i].split('')
						a.splice(j, 1, '.')
						a = a.join('')
						B.splice(i, 1, a)
						a = []
						
						a = B[i+1].split('')
						a.splice(j, 2, '.')
						a = a.join('')
						B.splice(i+1, 1, a)
						a = []
						continue
				}
				if(B[i][j+1] && B[i][j+1]=='#' && B[i+1][j] && B[i+1][j]=='#' && B[i+1][j+1] && B[i+1][j+1]=='#'){
						Dests++
						a = B[i].split('')
						a.splice(j+1, 1, '.')
						a = a.join('')
						B.splice(i, 1, a)
						a = []

						a = B[i+1].split('')
						a.splice(j, 2, '.')
						a = a.join('')
						B.splice(i+1, 1, a)
						a = []
						continue
				}
				// submarines
				if((B[i][j] && B[i][j]=='#') && (B[i][j+1] && B[i][j+1]=='#')){
						Subs++
						a = B[i].split('')
						a.splice(j, 2, '.')
						a = a.join('')
						B.splice(i, 1, a)
						a = []
						continue
				}
				if((B[i][j] && B[i][j]=='#') && (B[i+1][j] && B[i+1][j]=='#')){
						Subs++
						a = B[i].split('')
						a.splice(j, 1, '.')
						a = a.join('')
						B.splice(i, 1, a)
						a = []

						a = B[i+1].split('')
						a.splice(j, 1, '.')
						a = a.join('')
						B.splice(i+1, 1, a)
						a = []
						continue
				}
				// patrols
				if(B[i][j] && B[i][j]=='#'){
						patrols++
						a = B[i].split('')
						a.splice(j, 1, '.')
						a = a.join('')
						B.splice(i, 1, a)
						a = []
						continue
				}
			}
}
return [patrols, Subs, Dests]
}

console.log(solution(['.##.#', '#.#..', '#...#', '#.##.']));
// console.log(solution(['.....', '.....', '.....', '.....']));
