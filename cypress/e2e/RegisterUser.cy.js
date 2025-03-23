import { RegisterPage } from "../Pages/register_page"
import register_data from "../fixtures/register_data.json"
const registerObj = new RegisterPage()
describe("test suite",()=>{
    it("register new user ",()=>{
        registerObj.openURL()
        registerObj.enterFirstname(register_data.firstName)
        registerObj.enterLastname(register_data.lastName)
        registerObj.enterEmail(register_data.email)
        registerObj.enterTelephone(register_data.Mobile)
        registerObj.enterPassword(register_data.password)
        registerObj.enterCpassword(register_data.cpassword)
        registerObj.selectCheckbox()
        registerObj.clickOncontinue()
        


    })

    
})



