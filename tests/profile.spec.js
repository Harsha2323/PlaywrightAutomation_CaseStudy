const {test, expect}=require('@playwright/test')
const {PoManager} = require('../PageObject/PoManager')
const data =JSON.parse(JSON.stringify(require('../testdata/Testdata.json')))




test.only('Verify that user is able to land on the profile page',async ({page})=>{

    const pomanager =new PoManager(page)
    const loginpage = pomanager.getloginpage()
    await loginpage.pageurl()
    await loginpage.logincred(data.username , data.password)
    const profilepage = pomanager.getprofilepage()
    await profilepage.profileicon()
    await expect(page.locator('.js--link-edit1')).toContainText(data.linktoupdateprofile)
    await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'Profilepage.png', fullPage: true})
})

test('Verify that user is able to update the profile name',async ({page})=>{

    const pomanager =new PoManager(page)
    const loginpage = pomanager.getloginpage()
    await loginpage.pageurl()
    await loginpage.logincred(data.username , data.password)
    const profilepage = pomanager.getprofilepage()
    await profilepage.profileicon()
    await profilepage.updateprofile()
    await expect(page.locator('#name')).toHaveValue(data.updatedname)
    await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'UpdatedProfilenName.png', fullPage: true})
})


