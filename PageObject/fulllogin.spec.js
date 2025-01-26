const {test, expect}=require('@playwright/test')
const{login} = require('../PageObject/login')
const{home} = require('../PageObject/home')
const{Productdetails} = require('../PageObject/Productdetails')




test('has title', async ({page}) => {

  //Url
  const loginpage = new login(page)
  await loginpage.pageurl()
  const currentUrl = page.url();
  //Assertion to confirm the URL
  expect(currentUrl).toBe('https://techshopbd.com/');

  //Login
  await loginpage.logincred()
  

  //Searching the product
 const homepage = new home(page)
 await homepage.searchForTheProduct()


//Assertion to confirm the selected product
await expect(page.locator('.product-title')).toContainText('Type C Connector with Base')


//assertion to confirm the prise of the product
const priseoftheproduct = page.locator('.price')
await expect(priseoftheproduct).toBeVisible()

//Assertion to confirm that user is able to see the description     
const description = page.locator('p.model:first-of-type')
await expect(description).toBeVisible()

// Assertion for the star rating review 
const Starrating = page.locator('.rating-review')
await expect(Starrating).toBeVisible()

//cartbutton
await page.locator('.btn-cart').click()



//gotocart 
const itemsinrow = page.locator('.card-body table tr')

itemsinrow.filter({
  has: page.locator('td'),
  hasText : "Type C Connector with Base"
})


  
});

