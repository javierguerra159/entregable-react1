import React, { useState } from 'react';

const ToDosForm = ({addProducts}) => {

    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")   
    const [isAvalible, setIsAvalible] = useState(false)

    const submit = e => {
        e.preventDefault()
        console.log("hice submit")

        const data = {
            id: Date.now(),
            name, category, price,
            isAvalible,
        }
        addProducts(data);
    }
    
    return (
        <div>
          <form onSubmit={submit}>
              <div>
                  <label htmlFor='name'>nombre</label>
                  <input 
                        type="text" 
                        id='name'
                        onChange={e => setName(e.target.value)}
                        value={name}
                  />
              </div>
              <div>
                  <label htmlFor='category'>categoria</label>
                  <input 
                        type="text" 
                        id='category'
                        onChange={e => setCategory(e.target.value)}
                        value={category}
                  />
              </div>
              <div>
                  <label htmlFor='price'>precio</label>
                  <input 
                        type="number" 
                        id='price'
                        onChange={e => setPrice(e.target.value)}
                        value={price}
                  />
              </div>
              <div>
                  <label htmlFor='isAvalible'>esta disponible</label>
                  <input 
                        type="checkbox" 
                        id='isAvalible'
                        onChange={e => setIsAvalible(e.target.checked)}
                        checked={isAvalible}
                  />
              </div>
              <button>submit</button>

              
          </form>
        </div>
    );
};

export default ToDosForm;