import React, { useState } from 'react'
import { Data } from '../constant/Data'


function Multiselection() {
 const  [selected , setselected] = useState(null);
    
    function Show (currentid) {
     setselected(currentid)
     setselected(selected === currentid ? null : currentid)
    }
  return (
    <>
   
     {  Data && Data.length > 0 ?   Data.map((items)=>{
            return (
                <div>
                <h1>{items.questions}</h1>
                <button onClick={()=>Show(items.id)}>Show Answer</button>
                {
                    selected === items.id ? <div>
                        { items.answers}
                    </div> : null
                }
                </div>
            )
             
        }) : <div> Items Not Found</div>   
       
     }
    
    </>
  )
}

export default Multiselection
