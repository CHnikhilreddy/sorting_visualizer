import {useState} from 'react'

function Testsorting(){
    const [grid,setgrid] = useState(getrandomarr)

    function getrandomarr(){
        var arr = []
        for(let i = 0;i<100;i++){
            arr.push(Math.floor(Math.random() * (200 - 10 + 1)) + 10)
        }
        return arr
    }

    const selectionsort = (arg)=>{
        if(arg === 99){
            return
        }
        setgrid((new_arr)=>{
            var g = JSON.parse(JSON.stringify(new_arr))
            var min_index = arg
            for(let i = arg+1;i<100;i++){
                if(g[i]<g[min_index]){
                    var temp = g[i]
                    g[i] = g[min_index]
                    g[min_index] = temp
                }
            }
            return g
        })
        setTimeout(()=>{selectionsort(arg+1)},100)
    }

    return (
    <div>
        <button onClick={()=>{selectionsort(0)}}>selection sort</button>
        <div style={{display:'inline-flex'}}>
            {grid.map((v,i)=>(
                <div style={{ height:`${v*3}px`,width:'10px',backgroundColor:'blue',padding:'0',margin:'2px'}}/>
            ))}
        </div>
    </div>)
}
export default Testsorting