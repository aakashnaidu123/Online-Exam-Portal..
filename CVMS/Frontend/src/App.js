import './App.css';
import H1 from './components/Home';
import Nav from './components/Navigation';
import R1 from './components/Register';
import Signin from './components/Signin';
import S from './components/Show';
import RN from './components/Respnavigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LOG from './components/Login';
import UP from './components/Update';
import Del from './components/Delete';
import Test from './components/Test';
import Sco from './components/Score';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={"download.png"} className="App-logo" alt="logo" />
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        <p><h1><i>
         ONLINE EXAM PORTAL</i>
</h1>
        </p>

      </header>
      <div className="App-body">
        <Nav/>
        <RN/>
        <Routes>
          <Route path="/tes" element={<Test />}></Route>
          <Route path="/Sco" element={<Sco />}></Route>
          <Route path="/Reg" element={<R1 />}></Route>
          <Route path="/B" element={<H1/>}></Route>
          <Route path="/S" element={<Signin />}></Route>
          <Route path="/sho" element={<S/>}></Route>
          <Route path="/log" element={<LOG/>}></Route>
          <Route path="/upd" element={<UP/>}></Route>
          <Route path="/del" element={<Del/>}></Route>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;