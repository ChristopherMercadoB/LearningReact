import './App.css'
import Card from './components/Card'
import { ShowAndHide } from './components/ShowAndHide'
import vehicles from './data/vehicles'





function App() {
  const vehicleList = vehicles.map(v=>{
    return <Card title={v.name} description={v.description}/>
  })

  return (
    <div className='App'>
      <h1>Hola React</h1>
            
      <div className='container'>
        {vehicleList}  
      </div>
     {//<ShowAndHide/>
}
    </div>
  )
}

export default App
