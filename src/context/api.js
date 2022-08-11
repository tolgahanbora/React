import { createContext, useContext } from "react"; //her componente useContext yazmamak icin useContext import ettim

const todoAPI = createContext() //create contex ile contex oluşturdum.

export{
    todoAPI,   //export ile dışarı aktardım, hem themeapi aktardim hemde useContexti aktardım sonradan rahat kullanmak için
    useContext
}