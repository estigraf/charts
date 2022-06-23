import React, { useState } from "react";
import axios from "axios";
import Country from "../../pages/Country/Country";
import { useNavigate } from "react-router-dom";

const ListCountry = () => {
  const navigate = useNavigate();

  const [countryList, setCountryList] = useState([]);
  const [code, setCode] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  async function listCountries() {
    const countryUrl = "https://corona-api.com/countries";
    const { data } = await axios.get(countryUrl);
    console.log(data);
    setCountryList(data.data.map((el) => `${el.name}  :${el.code}`));
    console.log({ countryList });
    //setIsSelected(true);
  }
  // listCountries()

  return (
    <div>
      <button
        onClick={listCountries} //onChange={isSelected? <Country/>:null }
        // onChange={(e)=>{const url=e.target.value; console.log(url);}}
      >
        searchCountry
        <select
          onChange={(e) => {
            const url = e.target.value.split(":")[1];
            navigate(`../country/${url}`);
          }}
        >
          {countryList.map((el) => (
            <option>{el}</option>
          ))}
          <Country />
          {/* onChange=
          {(e) => { console.log('xzv');
            const url = e.target.value;
            console.log(url); //navigate(`../${url}`)
          }} */}
        </select>
      </button>
      {/* {isSelected ? <Country /> : null} */}
    </div>
  );
};

export default ListCountry;
