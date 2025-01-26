class login{


    constructor(page)
    {
        this.page = page
        this.loginicon = page.locator('.user-login')
        this.username =  page.getByRole('textbox', { name: 'Email' })
        this.userpass = page.getByRole('textbox', { name: 'Password' })
        this.submit =  page.getByRole('button', { name: 'Sign In' })
        this.profiledropdown = page.locator('.dropdown-toggle-user')
        this.logoutbutton = page.locator('[value="logout"]')

        
    }
    
    async pageurl()
    {
        await this.page.goto('https://techshopbd.com/')
    }
    

    
    async logincred(username , password)
    {
        await this.loginicon.click()
        await this.username.fill(username)
        await this.userpass.fill(password)
        await this.submit.click()
    }

    async logout()
    {
        await this.profiledropdown.click()
        await this.logoutbutton.click()

        

    }

}

module.exports = {login}