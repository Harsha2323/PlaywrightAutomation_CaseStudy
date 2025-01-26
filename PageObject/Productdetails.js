class Productdetails
{


constructor(page)
{
this.page = page
this.gotocart = page.locator('.btn-go-to-cart')
this.addtocartbutton = page.locator('.btn-cart')
}


async addtocart() 
  {
    this.addtocartbutton.click()
  }

async navigatetocartpage()
    {
        await this.gotocart.click()
    }


}

module.exports = {Productdetails}