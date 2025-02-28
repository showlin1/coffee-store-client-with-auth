import { useLoaderData } from 'react-router-dom'
import './App.css'
// import CoffeeCard from './CoffeeCard';
import { useState } from 'react';
import CoffeeCard from './Component/CoffeeCard';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);


  return (

    <div className='m-20'>
      <h1 className='text-6xl text-center text-purple-600'>Hot Hot Cold Coffee:{coffees.length} </h1>
      <div className='grid md:grid-cols-2 lg:grid-cools-2 my-20 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App