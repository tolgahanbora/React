import './App.css';
import Header from './components/header';

import { todoAPI } from './context/api'; //contextimi içeri aldım
import { useState } from 'react';

function App() {

 const [todo, setTODO] = useState("") //componentlerdek ullanmak üzere state oluşturdum ve tuttum
const [liste, setListe] = useState([])
const data = {
  todo,        //statelerimi tek bir değişkende yakalamak için bir obje oluşturdum 
  setTODO,
  liste,
  setListe
}                   
  return (
    <div className="App">
      
   
      <todoAPI.Provider value={data}>    
      <Header/>

      </todoAPI.Provider>

  
    </div>
  );
  //son olarak providerin içerisine objemi tuttuğum değişkeni aktardım diğer componentlerde çağırmak için
}

export default App;
