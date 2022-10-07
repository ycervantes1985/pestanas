import React from 'react'

const data = [
  {
      label: 'Tab 1',
      content: 'Tab 1 content'
  },
  {
      label: 'Tab 2',
      content: 'Tab 2 content'
  },
  {
      label: 'Tab 3',
      content:'Tab 3 content 1'
   }
];

function Pestanas() {  



const showProp = (e,valor) =>{

  document.getElementById("tarea").innerText = valor;
  

} 


  return (
    
    <div className='container'>
        {
            data.map((array)=>{
              return (<button onClick={(e) => showProp(e, array.content)} style={{backgroundColor:'grey', width:'5em', height:'2em', marginLeft:'15px', display:'inline-block'}}
              
              >{array.label}</button>)
            })

            
            
          }
         <textarea id='tarea'></textarea> 
      </div>
  )
}

export default Pestanas