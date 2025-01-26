class cart{

    constructor(page)
    {
        this.page = page
        this.itemsinrow = page.locator('.card-body table tr')
       
        
    }
    
    async verifyingitem()
    {
        const selectingrow = this.itemsinrow.filter
        ({
        has: this.page.locator('td'),
        hasText : "Type C Connector with Base"
        })
    }




    async updatethequality()
    {
        const selectingrow = this.itemsinrow.filter
        ({
        has: this.page.locator('td'),
        hasText : "Type C Connector with Base"
        })
        await selectingrow.locator("[name='plus-button']").click()
    }

    async deletefromcart()
    {
        const selectingrow = this.itemsinrow.filter
        ({
        has: this.page.locator('td'),
        hasText : "Type C Connector with Base"
        })
        await selectingrow.locator("[name='remove-cart-product']").click()
    }

}

module.exports = {cart}