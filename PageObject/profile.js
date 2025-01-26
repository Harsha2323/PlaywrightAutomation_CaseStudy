class profile
{
    constructor(page)
    {
        this.page = page
        this.profiledropdown = page.locator('.dropdown-toggle-user')
        this.profilebutton = page.locator('.dropdown-item:first-child')
        this.changeinfolink = page.locator('.js--link-edit1')
        this.profilename = page.locator('#name')
        this.savebutton = page.locator('#personalInfo')
    }

 async profileicon()
{
    await this.profiledropdown.click()
    await this.profilebutton.click()
}

async updateprofile(updatedname)
{
    await  this.changeinfolink.click()
    await this.profilename.fill(updatedname)
    await this.savebutton.click()
}




}
module.exports = {profile}