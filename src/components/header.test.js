import {screen, render} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Header from "./header"

describe("ToDo Test",() => {


    let todoINPUT, addBTN, removeBTN, list

    beforeEach(() => {
        render( <Header /> )
         todoINPUT = screen.getAllByPlaceholderText("Add your daily task..")
         addBTN = screen.getByText("Add")
         removeBTN = screen.getByText("Reset")
         list = screen.getByTestId("list")

    })


    test('todo input ', () => { 
        
        userEvent.click(addBTN)
       
     
       
      })
     
})

