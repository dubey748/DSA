
const towerOfHanoi=((n, source, help, dest)=>{
    if(n==1) return console.log(`Move Plate ${n} from ${source} to ${dest}`)
    
    towerOfHanoi(n-1,source, dest, help)
    console.log(`Move Plate ${n} from ${source} to ${dest}`)
    towerOfHanoi(n-1,help, source, dest)

})

towerOfHanoi(3, 'A', 'B', 'C')

