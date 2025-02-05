const {test, expect}=require('@playwright/test')
const {PoManager} = require('../PageObject/PoManager')
const data =JSON.parse(JSON.stringify(require('../testdata/Testdata.json')))


test('Verify User is able to view the delete the added product', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const homepage = pomanager.gethomepage()
  await homepage.searchForTheProduct()
  const productdetails = pomanager.getproductdetails()
  await productdetails.addtocart()
  await productdetails.navigatetocartpage()
  const cartpage = pomanager.getcartpage()
  await cartpage.verifyingitem()
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'PoductsAddedInCart.png', fullPage: true})
  await cartpage.deletefromcart()
  console.log("ownbranch")
});

test('Verify User is able to update the quality of the product and delete the product', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
    await loginpage.pageurl()
    await loginpage.logincred(data.username , data.password)
    const homepage = pomanager.gethomepage()
    await homepage.searchForTheProduct()
    const productdetails = pomanager.getproductdetails()
    await productdetails.addtocart()
    await productdetails.navigatetocartpage()
    const cartpage = pomanager.getcartpage()
    await cartpage.updatethequality()
    await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'UpdatedPoductsAddedInCart.png', fullPage: true})
    await cartpage.deletefromcart()
})

test('Verify User is able to delete the added product', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
    await loginpage.pageurl()
    await loginpage.logincred(data.username , data.password)
    const homepage = pomanager.gethomepage()
    await homepage.searchForTheProduct()
    const productdetails = pomanager.getproductdetails()
    await productdetails.addtocart()
    await productdetails.navigatetocartpage()
    const cartpage = pomanager.getcartpage()
    await cartpage.deletefromcart()
})

test('Verify the total amount of the product in the cart', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const homepage = pomanager.gethomepage()
  await homepage.searchForTheProduct()
  const productdetails = pomanager.getproductdetails()
  await productdetails.addtocart()
  await productdetails.navigatetocartpage()
  const payabletotalamount = await page.locator('#payable_total').textContent()
  const shimppingcartprice = await page.locator('#big-total').textContent()
  console.log('total is: ',payabletotalamount)
  console.log('total is: ',shimppingcartprice)
  const cartpage = pomanager.getcartpage()
  await cartpage.deletefromcart()
})
