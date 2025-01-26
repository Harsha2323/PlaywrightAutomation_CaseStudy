class signup
{

    constructor(page) 
    {
        this.page = page
        this.loginicon = page.locator('.user-login')
        this.signuptab = page.locator('#signup-tab')
        this.username = page.locator('#userName')
        this.email = page.locator('#email')
        this.phonenumber = page.locator('#phone')
        this.password = page.locator('#password')
        this.checkbox = page.locator('#privacy')
        this.signupbutton = page.locator('.btn-sign__up')
    }

    async Signtab()
    {
        await this.loginicon.click() 
        await this.signuptab.click()
    }


  async Signin(name,email,phone,pass)
    {
        await this.username.fill(name)
        await this.email.fill(email)
        await this.phonenumber.fill(phone)
        await this.password.fill(pass)
        await this.checkbox.check()
        this.signupbutton.click()
    }




}

module.exports = {signup}

