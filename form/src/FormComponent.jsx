
import { useState } from 'react';

function FormComponent(){
    const [formData, setformData] = useState({name:"", email:""});

    function handleChange(event){
        const {name,value} = event.target;
        setformData({
            ...formData,
            [name]:value
        })
    }

    function handleSubmit(event){
        const {name,email} = formData;
        event.preventDefault();
        alert(`Name : ${name}, Email ${email}`);
    }

    return (
        <form onSubmit={handleSubmit}>
      <label>
        Name: 
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email: 
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    )
}

export default FormComponent; 