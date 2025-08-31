const {test, expect} = require('@playwright/test')


test('demo1',async ({page})=>{

await page.goto('https://cetonline.karnataka.gov.in/kea/ugcet2025')
await page.goBack()
await page.goForward()
console.log('this is KEEA')
})