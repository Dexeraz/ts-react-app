import React, { useState } from "react";

const AddToList = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>{
    setInput({
        ...input,
        //if we are chaning name, then this look like this - name: event.target.value
        [event.target.name]: event.target.value 
    })
  }

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        //if we want to check what type has the handleChange in this case we can do onChange={(e) => {}}, and hover over 'e'
        onChange={handleChange} 
        name="name"
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange} 
        name="age"
      />
      <input
        type="text"
        placeholder="Image url"
        className="AddToList-input"
        value={input.img}
        onChange={handleChange} 
        name="img"
      />
      <textarea
        placeholder="Notes"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange} 
        name="note"
      />
    </div>
  );
};

export default AddToList;
