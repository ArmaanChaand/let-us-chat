import './App.css'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom'
import ChatRoom from './room/ChatRoom'

function App() {
 
  return (
   <div className='overflow-hidden' style={{height:window.innerHeight}}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:user_id/room/:room_id/' 
        element={<ChatRoom/>}
      />
    </Routes>
   </div>
  )
}

export default App
