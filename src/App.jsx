import './App.css'
import { UseFetch } from './hooks/UseFetch'
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import Channel from './pages/Channel';
import PlayList from './pages/PlayList';
import Header from './components/header/Header';

function App() {

  

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/watch/:videoId' element={<Video/>}/>
        <Route path='/channel' element={<Channel/>}/>  
        <Route path='/watch/playlist/:playlistId' element={<PlayList/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
