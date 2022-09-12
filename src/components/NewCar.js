import React,{useState} from 'react'


export const NewCar = ({onAddHire}) => {


    const [formData, setFormData] = useState({
        name: "", price: ""
      });
      function handleChange(e) {
        setFormData({ ...formData , [e.target.name]: e.target.value})
      }
      function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:9292/owners",{
            method: "POST",
            headers: {
            "Content-Type":"application/json",
            },
            body: JSON.stringify({name:formData.name,price:formData.price})
          })
            .then(res => res.json())
            .then((data) => {
              onAddHire(data)
              setFormData({...formData,name:"",price:""})
            })
        }
        return (
            <div>
            <form className="form" onSubmit={handleSubmit}>
              <input class="flex-auto text-lg font-semibold text-slate-900"onChange={handleChange} value={formData.name} name="name" placeholder="Name" />
              <input class="text-sm text-slate-700" onChange={handleChange} value={formData.price} name="price"  placeholder="Price" />
            <button class="h-10 px-6 font-semibold rounded-md bg-black text-white"type='submit'>Add</button>
            </form>
            </div>
          )
        }
    
  