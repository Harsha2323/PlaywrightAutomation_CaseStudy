const {test, expect}=require('@playwright/test')
const {PoManager} = require('../PageObject/PoManager')
const data =JSON.parse(JSON.stringify(require('../testdata/Testdata.json')))



test.skip('Verify User is able to create a new account by signup', async ({page}) => {

  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  const signuppage = pomanager.getsignuppage()
  await signuppage.Signtab()
  await expect(page.locator('.signin-link')).toBeVisible()
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'signupPage.png', fullPage: true})
  await signuppage.Signin(data.name,data.email,data.phone,data.pass)
});