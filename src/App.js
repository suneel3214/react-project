import { useState } from 'react';
import './App.css';
import Alert from './component/Alert';
import Register from './component/Register';
import Navbar from './component/Navbar';
import Show from './component/Show';
import About from './component/About';
import Editform from './component/Editform';
import Footer from './component/Footer';
import TopButton from './component/TopButton';




import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import WhyChoose from './component/WhyChoose';
import Team from './component/Team';
import Contact from './component/Contact';
import MainFooter from './component/MainFooter';


function App(){

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
      setAlert({
      msg: message,
      type: type
      })
      setTimeout(() => {
         setAlert(null);  
      } , 2000)
  }

  return (
   <div className="App" style={{ 
    backgroundImage: `url("https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/about-bg.jpg")` 
  }}>
     <>
     <Router>
      <Navbar />  
      <Alert alert={alert}/>
      <div className="container-fluid card2 mt-5">
          <Switch>
              <Route exact path="/" >
                <Show  showAlert={showAlert} />
              </Route>
              <Route exact path="/edit/:id" children={((props)=><Editform {...props} showAlert={showAlert}/>)}/>
          </Switch>
      </div>
      <TopButton/>
      <About/>
      <WhyChoose/>
      <Team/>
      <Register showAlert={showAlert} />
      <Contact/>
      <MainFooter/>
      <Footer/>
     </Router>
     </>
   </div>
  );
}

export default App;
