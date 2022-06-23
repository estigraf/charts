import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ListCountry from '../../components/ListCountry/ListCountry';
import { useNavigate } from 'react-router-dom';


const Country = () => {

  const navigate =useNavigate()


  const [active, setActive] =useState ([])
  const [cases, setCases] = useState('')
  const [recovered, setRecovered] = useState('')
  const [today, setToday] = useState({})
  const [deaths, setDeaths] = useState('')
  const [critical, setCritical] = useState('')
  const [code, setCode] = useState('')


  async function countryData(url) {
    const countryUrl = `https://corona-api.com/countries/${url}`;
    const { data } = await axios.get(countryUrl);
    console.log(data);
    const dataList = data.data.latest_data
    setActive(data.data.timeline[0].new_confirmed)
    setCases(dataList.confirmed)
    setRecovered(dataList.recovered)
    setToday(data.data.today.deaths)
    setDeaths(dataList.deaths)
    setCritical(dataList.critical)
    //setCode(data.data.code)
    console.log([active]);
  }
  useEffect(()=>{
    countryData('li')
  },[])
  
  return (
    <div>
            <button onClick={()=>{navigate('../home')}}>hjglhglglkjg</button>
            <div>{active}</div>
            <div>{cases}</div>
            <div>{recovered}</div>
            <div>{today}</div>
            <div>{deaths}</div>
            <div>{critical}</div>
    </div>
  )
}

export default Country