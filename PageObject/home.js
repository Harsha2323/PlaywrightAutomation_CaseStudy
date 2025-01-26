class home {

  

    constructor(page) 
    {
    this.page = page;
    this.searchbar = page.locator('#js--search-option'); 
    this.searchlistSelector = ('.p-2'); 
   
    }

  async searchForTheProduct() {
   
    await this.searchbar.fill('type c c');
    await this.page.waitForSelector(this.searchlistSelector);

   
    const searchedOptions = await this.page.$$(this.searchlistSelector);
    for (let option of searchedOptions) {
      const value = await option.textContent();
      console.log('Searched value is: ',value); 
      if (value?.includes('Type C Connector with Bas...')) {
        await option.click();
        break;
      }
    }
  }
  
}

module.exports = { home };
