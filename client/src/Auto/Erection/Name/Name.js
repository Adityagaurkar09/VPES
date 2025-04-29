import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import './Name.css'

function Name() { 
  const [plate, setPlate] = useState({
    plateNumber: '',
    Make: '',
    SR: '',
    MVA: '',
    HV: '',
    LV: '',
    Impedance: '',
    Year: '',
    Oil: '',
    CurrentHV: '',
    CurrentLV: '',
    TempRiseWinding: '',
    TempRiseOil: '',
    TransportWeight: '',
    NoOfRadiators: '',
    WeightCore: '',
    TotalWeight: ''
  })

 const processSubmit = async () => {
  try {
  const response = await axios.post("http://localhost:5002/name", plate)
  console.log(response.data)
  toast.success(response.data.message)
  setPlate({
    plateNumber: '',
    Make: '',
    SR: '',
    MVA: '',
    HV: '',
    LV: '',
    Impedance: '',
    Year: '',
    Oil: '',
    CurrentHV: '',
    CurrentLV: '',
    TempRiseWinding: '',
    TempRiseOil: '',
    TransportWeight: '',
    NoOfRadiators: '',
    WeightCore: '',
    TotalWeight: ''
  })
} catch (error) {
  toast.dismiss()
  const message = error?.response?.data?.message || "Something went wrong"
  toast.error(message)
  console.error("Error:", message)
}}

  return (
    <div>
      <h1>VISHVAS POWER ENGINEERING SERVICES PVT. LTD. NAGPUR</h1>
      <h2 className='heading'>NAME PLATE DETAILS TRANSFORMER</h2>
      <div className="form">
       <div className="form1">
        <label className="form-label">Plate Number
        <input className="form-input" name="firstName" type="text" value={plate.plateNumber}
        onChange={(e)=>setPlate({...plate, plateNumber: e.target.value})}/></label>
        <label className="form-label">Make
        <input className="form-input" name="firstName" type="text" value={plate.Make}
        onChange={(e)=>setPlate({...plate, Make: e.target.value})}/></label>
        <label className="form-label">SR.NO. 
        <input className="form-input" name="firstName" type="text" value={plate.SR}
         onChange={(e)=>setPlate({...plate, SR: e.target.value})}/></label>
        <label className="form-label">MVA Rating 
        <input className="form-input" name="firstName" type="text"value={plate.MVA}
         onChange={(e)=>setPlate({...plate, MVA: e.target.value})}/></label>
        <label className="form-label">HV (KV)
        <input className="form-input" name="firstName" type="text" value={plate.HV} 
        onChange={(e)=>setPlate({...plate, HV: e.target.value})}/></label>
        <label className="form-label">LV (KV)
        <input className="form-input" name="firstName" type="text" value={plate.LV}
         onChange={(e)=>setPlate({...plate, LV: e.target.value})}/></label>
        <label className="form-label">% Impedance
        <input className="form-input" name="firstName" type="text" value={plate.Impedance} 
        onChange={(e)=>setPlate({...plate, Impedance: e.target.value})}/></label>
        <label className="form-label">Year of Mfg.
        <input className="form-input" name="firstName" type="text"  value={plate.Year}
        onChange={(e)=>setPlate({...plate, Year: e.target.value})}/></label>
        <label className="form-label">Oil Quantity
        <input className="form-input" name="firstName" type="text" value={plate.Oil}
        onChange={(e)=>setPlate({...plate, Oil: e.target.value})}/></label>
      </div>
      <div className='form2'>
      <label className="form-label">CURRENT	HV
      <input className="form-input" name="firstName" type="text" value={plate.CurrentHV}
      onChange={(e)=>setPlate({...plate, CurrentHV: e.target.value})} /></label>
      <label className="form-label">CURRENT	LV
      <input className="form-input" name="firstName" type="text" value={plate.CurrentLV}
      onChange={(e)=>setPlate({...plate, CurrentLV: e.target.value})}/></label>
      <label className="form-label">Temp. Rise over amb.Winding
      <input className="form-input" name="firstName" type="text" value={plate.TempRiseWinding} 
      onChange={(e)=>setPlate({...plate, TempRiseWinding: e.target.value})}/></label>
      <label className="form-label">Temp. Rise over amb.Oil
      <input className="form-input" name="firstName" type="text" value={plate.TempRiseOil}
      onChange={(e)=>setPlate({...plate, TempRiseOil: e.target.value})}/></label>
      <label className="form-label">TRANSPORTING WEIGHT
      <input className="form-input" name="firstName" type="text" value={plate.TransportWeight}
      onChange={(e)=>setPlate({...plate, TransportWeight: e.target.value})} /></label>
      <label className="form-label">NO. OF RADIATORS
      <input className="form-input" name="firstName" type="text" value={plate.NoOfRadiators}
      onChange={(e)=>setPlate({...plate, NoOfRadiators: e.target.value})} /></label>
      <label className="form-label">Weight of Core & Wdg.
      <input className="form-input" name="firstName" type="text" value={plate.WeightCore}
      onChange={(e)=>setPlate({...plate, WeightCore: e.target.value})} /></label>
      <label className="form-label">Total Weight
      <input className="form-input" name="firstName" type="text" value={plate.TotalWeight}
      onChange={(e)=>setPlate({...plate, TotalWeight: e.target.value})}/></label>
      </div>
      </div>
      <button className="btn" onClick={processSubmit}>Submit</button>
      <Toaster/>
    </div>
  )
}

export default Name
