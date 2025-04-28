import React from 'react'
import axios from 'axios'
import './Namedetail.css'
import { useState, useEffect } from 'react'

function Namedetail() {
  const [names, setName] = useState([]);

  const fetchName = async () => {
    const response = await axios.get("http://localhost:5002/name")
    setName(response.data.data)
    console.log(response)
  }
  useEffect(() => {
    fetchName();
  }, []);
  return (
    <div className="table-wrapper">
      <h2 className="heading">NAME PLATE DETAILS TRANSFORMER</h2>
      {names.map((name, index) => (
        <table className="nameplate-table" key={index}>
          <thead>
            <tr>
              <th colSpan="3">VISHVAS POWER ENGINEERING SERVICES PVT. LTD. NAGPUR</th>
            </tr>
          </thead>
          <tbody>
  <tr>
    <td>MAKE</td>
    <td>{name.Make}</td>
  </tr>
  <tr>
    <td>SR. NO.</td>
    <td>{name.SR}</td>
  </tr>
  <tr>
    <td>MVA Rating</td>
    <td>{name.MVA}</td>
  </tr>
  <tr>
    <td>HV (KV)</td>
    <td>{name.HV}</td>
  </tr>
  <tr>
    <td>LV (KV)</td>
    <td>{name.LV}</td>
  </tr>
  <tr>
    <td>% Impedance</td>
    <td>{name.Impedance}</td>
  </tr>
  <tr>
    <td>Year of Mfg.</td>
    <td>{name.Year}</td>
  </tr>
  <tr>
    <td>Oil Quantity</td>
    <td>{name.Oil}</td>
  </tr>
  <tr>
    <td>CURRENT HV</td>
    <td>{name.CurrentHV}</td>
  </tr>
  <tr>
    <td>CURRENT LV</td>
    <td>{name.CurrentLV}</td>
  </tr>
  <tr>
    <td>Temp. Rise over amb. - Winding</td>
    <td>{name.TempRiseWinding} °C</td>
  </tr>
  <tr>
    <td>Temp. Rise over amb. - Oil</td>
    <td>{name.TempRiseOil} °C</td>
  </tr>
  <tr>
    <td>TRANSPORTING WEIGHT</td>
    <td>{name.TransportWeight}</td>
  </tr>
  <tr>
    <td>NO. OF RADIATORS</td>
    <td>{name.NoOfRadiators}</td>
  </tr>
  <tr>
    <td>Weight of Core & Wdg.</td>
    <td>{name.WeightCore}</td>
  </tr>
  <tr>
    <td>Total Weight</td>
    <td>{name.TotalWeight}</td>
  </tr>
</tbody>

        </table>
      ))}
    </div>
  )
}

export default Namedetail
