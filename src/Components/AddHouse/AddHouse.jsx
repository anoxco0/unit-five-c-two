import axios from "axios";
import { useEffect, useState } from "react";



export const AddHouse = () => {
     const [form, setForm] = useState({
       name:"",
       ownerName:"",
       address:"",
       areaCode:"",
       rent:"",
       preferredTenant:"",
       image:"",
     })
     const formHandle=(e)=>{
       const {id, value} = e.target;
       setForm({...form, [id]:value});
     }
     const submitHandler=(e)=>{
      e.preventDefault();
      axios.post("http://localhost:8080/houses",{
        name:form.name,
       ownerName:form.ownerName,
       address:form.address,
       areaCode:form.areaCode,
       rent:form.rent,
       preferredTenant:form.preferredTenant,
       image:form.image,
      })
     }
  return (
    <div className="addHouseContainer">
      <form>
        <label>name</label>
        <input id="name" type="text" className="name"  onChange={formHandle}  required />
        <br />
        <label>ownerName</label>
        <input id="ownerName" onChange={formHandle} type="text" className="ownerName" required />
        <br />
        <label>address</label>
        <input id="address" onChange={formHandle} type="text" className="address" required />
        <br />
        <label>areaCode</label>
        <input id="areaCode" onChange={formHandle} type="text" className="areaCode" required />
        <br />
        <label>rent</label>
        <input id="rent" onChange={formHandle} type="text" className="rent" required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input id="preferredTenant" onChange={formHandle}  value={"bachelor"} type="checkbox" className="bachelor" />
        <br />
        <label>married</label>
        <input id="preferredTenant" onChange={formHandle}  value={"married"} type="checkbox" className="married" />
        <br />
        <label>image</label>
        <input id="image" onChange={formHandle} type="text" className="image" required />
        <br />
        <input onClick={(e)=>{submitHandler(e)}} className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
