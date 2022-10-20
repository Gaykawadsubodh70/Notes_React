import { BrowserRouter as Router,useParams, Switch, Route,Link,Routes } from "react-router-dom"
import Home from './Component/Home';
import About from './Component/About';
import SignUp from './Component/SignUp';

import "./App.css"

function App() {
  return (
 <>
<Router>



    <Route path='/'element={<Home/>}/>
    <Route path='/about'element={<About/>}/>
    <Route path='/Signup'element={<SignUp/>}/>

</Router>
  
    </>
  );
}


export default App;
