import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import './App.css'
import data from './data'

function App() {
  const travels = data.map(travel => {
    return (
      <MainContent 
        key = {travel.id}
        {...travel}
      />
    )
  })
  return (
    <div className='container'>
      <Navbar />
      <MainContent />
      <div className='travel-container'>
        {travels}
      </div>
      
    </div>
  )
}

export default App
