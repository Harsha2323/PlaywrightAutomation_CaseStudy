const {test, expect}=require('@playwright/test')
const {PoManager} = require('../PageObject/PoManager')
const data =JSON.parse(JSON.stringify(require('../testdata/Testdata.json')))



test('Verify User is able to navigate to the url', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  const currentUrl = page.url();
  //Assertion to confirm the URL
   expect(currentUrl).toBe('https://techshopbd.com/');
   await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'Mainpage.png', fullPage: true})
});


test('Verify User is able to login to the application', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  //Assertion for login (cart icon visible only when user login)
  await expect(page.locator("[alt='cart_icon']")).toBeVisible()
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'HomeScreen.png', fullPage: true})
});


test('Verify User is able to logout from the application', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  await loginpage.logout()
  const loginUrl = page.url();
  //Assertion to confirm the logout
   expect(loginUrl).toBe('https://techshopbd.com/login?logout');
   await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'Logout.png', fullPage: true})
});

test('Verify reset password link ', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  await loginpage.logout()
  const loginUrl = page.url();
  //Assertion to confirm the logout
   expect(loginUrl).toBe('https://techshopbd.com/login?logout');
});

