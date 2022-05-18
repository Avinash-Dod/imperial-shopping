import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Nav from './components/Navigation';
import { fetchData, fetchOrder, fetchProducts } from './redux/actions/action';


function App() { 
  
    const dispatch=useDispatch()
    useEffect(() => {
     async function fetchApi() {        
       dispatch(fetchData());
      //  dispatch(fetchProducts());        
       dispatch(fetchOrder());        
     }
     fetchApi()
   },[dispatch])
  
    
    return (
      <div className="App">
        <Nav />

      </div>
    );
  
}
  export default App;
