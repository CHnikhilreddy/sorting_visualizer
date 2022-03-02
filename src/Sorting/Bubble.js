import {useState} from 'react'

const noRows = 200

function Bubble(){
    const [grid,setgrid] = useState(getrandomarr)

    function getrandomarr(){
        var arr = []
        for(let i = 0;i<noRows;i++){
            arr.push(Math.floor(Math.random() * (200 - 10 + 1)) + 10)
        }
        return arr
    }

    const BubbleSort = (arg)=>{
        if(arg === noRows-1){
            return
        }
        setgrid((new_arr)=>{
            var g = JSON.parse(JSON.stringify(new_arr))
            for(let i = 0;i<noRows-arg-1;i++){
                if(g[i]>g[i+1]){
                    var temp = g[i]
                    g[i] = g[i+1]
                    g[i+1] = temp
                }
            }
            return g
        })
        setTimeout(()=>{BubbleSort(arg+1)},100)
    }

    return (
    <div>
        <button onClick={()=>{BubbleSort(0)}}>Bubble sort</button>
        <div style={{display:'inline-flex'}}>
            {grid.map((v,i)=>(
                <div style={{ height:`${v*3}px`,width:'3px',backgroundColor:'blue',padding:'0',margin:'2px'}}/>
            ))}
        </div>
    </div>)
}
export default Bubble