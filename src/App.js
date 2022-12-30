import { Routes, Route } from 'react-router-dom'
import About from './Components/About/About';
import Home from './Components/Home';
import Navbar from './Components/NavBar/Navbar';
import NotFound from './Components/Not_Found/NotFound';
import $ from 'jquery'
// import { useEffect, useState } from 'react';

function App() {
  // const [cursor, setCursor] = useState('')

  // useEffect(() => {
  //   setCursor(document.getElementById('hover_display'))
  // }, [])


  $(document).mousemove(function (e) {
    $('.cursor')
      .eq(0)
      .css({
        marginLeft: e.clientX,
        marginTop: e.clientY
      });
    setTimeout(function () {
      $('.cursor')
        .eq(1)
        .css({
          marginLeft: e.clientX,
          marginTop: e.clientY
        });
    }, 100);
    setTimeout(function () {
      $('.cursor')
        .eq(2)
        .css({
          marginLeft: e.clientX - 100,
          marginTop: e.clientY
        });
    }, 100);
  })



  return (
    <>
      <div class="cursor"></div>
      {/* <div class="cursor"></div>
      <div class="cursor" id='hover_display'>Read More</div> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home
        //  cursor={cursor}
        />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  );
}

export default App;
