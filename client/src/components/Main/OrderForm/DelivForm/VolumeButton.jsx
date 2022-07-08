import React, { useState } from "react"
import style from "./style.module.css"

const VolumeButton = ({inputVol, setInputVol}) => {


  
  // const [inputVol,setInputVol] = useState('')
  const handleCreatingVol = (e) => {
   console.log('1111')
   console.log(e.target.value)
   setInputVol(e.target.value) 
}
  return (
    <>

<div className={style.volumebutton}>

 
<p>
  <button style={{ borderRadius:"25px",height:"50px",width:"600px",fontSize:"25px"}} className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#volumeButton" aria-expanded="false" aria-controls="volumeButton">
    Объём
  </button>
</p>
</div>
<div className="collapse" id="volumeButton">
  <div className="card card-body"  >


  <div><input placeholder="0.1 м3" style={{width: '200px',marginLeft: '45%' }} 
  onChange={handleCreatingVol} value ={inputVol} /> </div>


  
  {/* </div> */}
{/* </div> */}
      
    {/* </div> */}
     </div>
     </div>
</>
  )
}


export default VolumeButton
