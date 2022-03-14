import { useState } from "react";



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
    
  return (
    <div className="addHouseContainer">
      <form>
        <label>name</label>
        <input id="name" type="text" className="name" value={""} onChange={formHandle}  required />
        <br />
        <label>ownerName</label>
        <input id="ownerName" value={""} onChange={formHandle} type="text" className="ownerName" required />
        <br />
        <label>address</label>
        <input id="address" value={""} onChange={formHandle} type="text" className="address" required />
        <br />
        <label>areaCode</label>
        <input id="areaCode" value={""} onChange={formHandle} type="text" className="areaCode" required />
        <br />
        <label>rent</label>
        <input id="rent" value={""} onChange={formHandle} type="text" className="rent" required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input id="preferredTenant" onChange={formHandle} checked={""} value={"bachelor"} type="checkbox" className="bachelor" />
        <br />
        <label>married</label>
        <input id="preferredTenant" onChange={formHandle} checked={""} value={"married"} type="checkbox" className="married" />
        <br />
        <label>image</label>
        <input id="image" value={""} onChange={formHandle} type="text" className="image" required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
