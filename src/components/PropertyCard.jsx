import React from 'react'
import { getProperty } from '../services/propertyService';
import heart from "../assets/heart.svg"
import apartment_5 from "..//assets/apartment_5.png"


const PropertyCard = () => {

  // const [property, setProperty] = React.useState();
  // const [loading, setLoading] = React.useState(false);

  // React.useEffect(() =>{
  //   getProperty()
  //   .then(data => {
  //     console.log(data)
  //   })
  //   // .catch(() =>)

  // },[])


  return (
    
    // This is the card for property
    <article className='relative' >
      <header>
        <p>Available</p>
        <img src={heart} alt="" />
      </header>
      <img src={apartment_5} alt="" className='rounded' />
      <h3>3 Bedroom Apartment</h3>
      <p>&#8358;800,000<span>/Year</span></p>
      <address>Aguda Surulere</address>


    </article>
    // property card ends

  )
}

export default PropertyCard