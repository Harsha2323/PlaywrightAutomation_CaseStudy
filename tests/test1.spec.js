const {test, expect} = require('@playwright/test')


test('demo1',async ({page})=>{

await page.goto('https://www.youtube.com/watch?v=JgDNFQ2RaLQ&list=RDn2dVFdqMYGA&index=3')
await page.goBack()
await page.goForward()
console.log('this is KEAA')
})
