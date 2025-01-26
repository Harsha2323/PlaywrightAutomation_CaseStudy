const {test, expect}=require('@playwright/test')
const {PoManager} = require('../PageObject/PoManager')
const data =JSON.parse(JSON.stringify(require('../testdata/Testdata.json')))



test('Verify User is able to search the product', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const homepage = pomanager.gethomepage()
  await homepage.searchForTheProduct()
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'SearchedProduct.png', fullPage: true})
});