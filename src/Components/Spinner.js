import React from 'react'
import Loading from '../loading.gif'
import Loading1 from '../loading1.gif'


const Spinner = (props) =>  {
    
        
        return (
            <div className='text-center' >
                {
                    props.mode === "light" ? <img  className='my-3' src={Loading} alt="loading" /> : <img  className='my-3' src={Loading1} alt="loading" /> 
                }
            </div>
        )
   
}

export default Spinner
