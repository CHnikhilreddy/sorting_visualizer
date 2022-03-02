import {useState} from 'react'

const noRows = 200

function Quick(){
    const [grid,setgrid] = useState(getrandomarr)

    function getrandomarr(){
        var arr = []
        for(let i = 0;i<noRows;i++){
            arr.push(Math.floor(Math.random() * (200 - 10 + 1)) + 10)
        }
        return arr
    }

    function partition(new_arr,low,high){
        let pivot = new_arr[high]
        let i = (low-1)
        for (let j = low; j <= high - 1; j++) {
            if (new_arr[j] < pivot) {
                i++
                let temp = new_arr[i]
                new_arr[i] = new_arr[j]
                new_arr[j] = temp
            }
        }
        let temp = new_arr[i+1]
        new_arr[i+1] = new_arr[high]
        new_arr[high] = temp
        return (i+1)
    }

    const QuickSort = (low,high)=>{
        if(low<high){
            var p
            setgrid((g)=>{
                var new_arr = JSON.parse(JSON.stringify(g))
                p = partition(new_arr,low,high)
                return new_arr
            })
            setTimeout(()=>{QuickSort(low,p-1)},1000)
            setTimeout(()=>{QuickSort(p+1,high)},1000)
        }
    }

    return (
    <div>
        <button onClick={()=>{QuickSort(0,noRows-1)}}>Quick sort</button>
        <div style={{display:'inline-flex'}}>
            {grid.map((v,i)=>(
                <div style={{ height:`${v*3}px`,width:'3px',backgroundColor:'blue',padding:'0',margin:'2px'}}/>
            ))}
        </div>
    </div>)
}
export default Quick