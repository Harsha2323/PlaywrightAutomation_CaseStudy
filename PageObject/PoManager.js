const {test, expect}=require('@playwright/test')
const{login} = require('../PageObject/login')
const{home} = require('../PageObject/home')
const{Productdetails} = require('../PageObject/Productdetails')
const {signup}=require('../PageObject/signup')
const {cart} = require('../PageObject/Cart')
const {profile} = require('../PageObject/profile')

class PoManager
{

constructor(page)
{

     this.page = page
     this.Login = new login(this.page)
     this.signUP = new signup(this.page)
     this.PRoductDetails = new Productdetails(this.page)
     this.Cart = new cart(this.page)
     this.Home = new home(this.page)
     this.profile = new profile(this.page)



}

getloginpage()
{
    return this.Login 
}

getsignuppage()
{
    return this.signUP 
}

getproductdetails()
{
    return this.PRoductDetails
}

getcartpage()
{
    return this.Cart
}

gethomepage()
{
    return this.Home
}

getprofilepage()
{
    return this.profile
}


}
module.exports = {PoManager}