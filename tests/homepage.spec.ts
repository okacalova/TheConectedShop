import { test, expect } from '@playwright/test';
test.describe ('homepage test',() => {
    test.beforeEach(async ({page})=>{
    await page.goto('https://theconnectedshop.com');

    })
test('Open Home Page and check title',async ({ page }) => {
    expect(page.url()).toBe ('https://theconnectedshop.com/')
    //Verify title 
    const title = await page.title();
    expect (title).toContain('The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office');
});

test('Logo is displayed',async({page}) =>{
const Logo = await page.$('.Header__LogoImage--primary');
expect(Logo).toBeTruthy();
const LogoFront = await page.$('.Header__LogoImage Header--transparent');
expect(LogoFront).toBeTruthy();
expect (await LogoFront.isVisible()).toBeTruthy();
});

test('Navigation main are displayed', async({page}) => {
    const navLinks=[
        {text:'Home', className:'Heading u-h6'},
        {text:'New In', className:'Heading u-h6'}
        
    ];
    for (const link of navLinks) {
        const linkElement = await page.$(`a.${link.className}:has-text("${link.text}")`);
        expect(linkElement).toBeTruthy();
      
 }
});
   test('searchBar',async({page}) => {
    const search = await page.$('a[data-action="toggle-search"]');
    expect (search).toBeTruthy();
    await search.click();
 });

   test('searchInput2',async({page}) => {
   const searchInput = await page.$('input[type="search"]');
   expect (searchInput).toBeTruthy();
        await searchInput.click(); 
   
 } );
});