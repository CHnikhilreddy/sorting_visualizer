import {useState} from 'react'

const noRows = 200

function Insertion(){
    const [grid,setgrid] = useState(getrandomarr)

    function getrandomarr(){
        var arr = []
        for(let i = 0;i<noRows;i++){
            arr.push(Math.floor(Math.random() * (200 - 10 + 1)) + 10)
        }
        return arr
    }

    const insertionsort = (arg)=>{
        if(arg === noRows){
            return
        }
        setgrid((new_arr)=>{
            var g = JSON.parse(JSON.stringify(new_arr))
            var key = g[arg]
            var j = arg-1
            while(j>=0 && g[j]>key){
                g[j+1] = g[j]
                j = j-1
            }
            g[j+1] = key
            return g
        })
        setTimeout(()=>{insertionsort(arg+1)},100)
    }

    return (
    <div>
        <button onClick={()=>{insertionsort(0)}}>Insertion Sort</button>
        <div style={{display:'inline-flex'}}>
            {grid.map((v,i)=>(
                <div style={{ height:`${v*3}px`,width:'3px',backgroundColor:'blue',padding:'0',margin:'2px'}}/>
            ))}
        </div>
    </div>)
}
export default Insertion