const {test, expect}=require('@playwright/test')
const {PoManager} = require('../PageObject/PoManager')
const data =JSON.parse(JSON.stringify(require('../testdata/Testdata.json')))



test('Verify that user is able to see the selected product name', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const homepage = pomanager.gethomepage()
  await homepage.searchForTheProduct()
  //Assertion to confirm the selected product
  await expect(page.locator('.product-title')).toContainText(data.productfullname)
})


test('Verify that user is able to see the selected product Price', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const homepage = pomanager.gethomepage()
  await homepage.searchForTheProduct()
 //assertion to confirm the prise of the product
 const priseoftheproduct = page.locator('.price')
 await expect(priseoftheproduct).toBeVisible()
})


test('Verify that user is able to see the selected product image', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const homepage = pomanager.gethomepage()
  await homepage.searchForTheProduct() 
  const imageoftheproduct = page.locator("[role='presentation']")
  await expect(imageoftheproduct).toBeVisible()     

})  


test('Verify that user is able to see the selected product description', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const homepage = pomanager.gethomepage()
  await homepage.searchForTheProduct()
 //Assertion to confirm that user is able to see the description     
 const description = page.locator('p.model:first-of-type')
 await expect(description).toBeVisible()
})


test('Verify that user is able to see the selected products star rating', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const homepage = pomanager.gethomepage()
  await homepage.searchForTheProduct()
 // Assertion for the star rating review 
 const Starrating = page.locator('.rating-review')
 await expect(Starrating).toBeVisible()
})


test('verify that user is able to see the gotocart button', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const homepage = pomanager.gethomepage()
  await homepage.searchForTheProduct()
 //cartbutton
 const productdetails = pomanager.getproductdetails()
 await productdetails.addtocart()
 await expect(page.locator('.btn-go-to-cart')).toBeVisible()
})

test('verify that user is able to navigate to the cart page', async ({page}) => {
    const pomanager =new PoManager(page)
    const loginpage = pomanager.getloginpage()
    await loginpage.pageurl()
    await loginpage.logincred(data.username , data.password)
    const homepage = pomanager.gethomepage()
    await homepage.searchForTheProduct()
    const productdetails = pomanager.getproductdetails()
    await productdetails.navigatetocartpage()
    await expect(page.locator('.summary-title')).toContainText('Cart Summary')
  });



