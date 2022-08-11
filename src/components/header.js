import React, { useState } from 'react'

import { todoAPI,useContext } from '../context/api'; //can't resolve hatasının fixi import ederken .. koymak
import './headerstyle.css'


function Header() {
useContext(todoAPI)
const[todo, setTODO ] = useState('') //todolar string olduğu için obje içerisinde tutmadım 
const  [liste, setListe] = useState([]) // liste içerisine input içi değerlerini attın

const addBtn = () =>  {
  setListe([...liste, todo])   //... ile önce ki değerleri tuttum, birde todoyo ekle listeye dedim
  setTODO("")
}
const rmvBTN = () => {
  setListe(liste.filter(item => !item)) // listenin içerisini liste itemlerini filtereledim, 

}


//bootstrap class destekliyor, react ise 'className' !! burası çokomelli, aksi takdirde konsolda hata alınıyor.
// bunu yaparsan rahatlıkla kullanırsın.
  return (
    <div><header><h1>Welcome To Todo List</h1>
    <div className="input-group">
 
  <input type="text" className="form-control" placeholder="Add your daily task.." aria-label="Recipient's username with two button addons" onChange={e => setTODO( e.target.value)} value={todo} name="todo"/>  
  
  <button className="btn  btn-primary" type="button" onClick={ addBtn } >Add</button>
  <button className="btn btn-danger" onClick={rmvBTN} type="button">Reset</button>
</div>
    </header>
     <div className='liste'>
      {liste.map((item,index) => (
        <li key={index} class="list-group-item list-group-item-info">{item} </li>
      ))}
     </div>
    </div>
  )

} 
//clasname liste olan divin içerisinde, liste.map kullanarak liste oluşturdum. maplemeden yapılmıyor sanırım.
//önce todoları içerisine attığım listeyi mapledim, sonra içerisine gelen değerleri parametre olarak gönderip yazdırdım.
//input içerisinde value useState içerisinde ki değerlerden olmak zorunda.
//setListe([...liste, todo]) mantık burda gizli
export default Header
