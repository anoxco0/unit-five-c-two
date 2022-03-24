



import axios from "axios";
import { useEffect, useState } from "react";
import "./Rentals.css";

export const Rentals = () => {
  const [showTable, setShowTable] = useState([]);
  // const [a, setA] = useState([]);
  useEffect(()=>{
     getData()
  },[])
  const getData=(value)=>{
    axios.get("http://localhost:8080/houses").then(res=>{
      setShowTable(res.data)
    })
  }
  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button  onClick={(()=>{
        return (setShowTable([...showTable.sort((a,b)=>a.id-b.id)]))
      })} className="sortById">Sort by ID</button>
        <button 
            onClick={(()=>{
              return (setShowTable([...showTable.sort((a,b)=>a.rent-b.rent)]))
            })}
        className="sortByRentAsc">Rent Low to high</button>
        <button
            onClick={(()=>{
              return (setShowTable([...showTable.sort((a,b)=>b.rent-a.rent)]))
            })}
        className="sortByRentDesc">Rent High to low</button>
        <button  
        
        
        onClick={(()=>{
          return (setShowTable([...showTable.sort((a,b)=>a.areaCode-b.areaCode)]))
        })}
        className="sortByAreaAsc">Area Low to high</button>
        <button 
          onClick={(()=>{
            return (setShowTable([...showTable.sort((a,b)=>b.areaCode-a.areaCode)]))
          })}
        className="sortByAreaDesc">Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {showTable.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {house.preferredTenant}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
