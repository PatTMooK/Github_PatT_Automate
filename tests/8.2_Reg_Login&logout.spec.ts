import { test, expect } from '@playwright/test';
test.describe('Regression_Login_Logout', () => {
    // npx playwright test "2_Reg_Login&logout.spec.ts"
    test('01_Not_Add_user&password', async ({ page }) => {
        //  npx playwright test "2_Reg_Login&logout.spec.ts" -g "01_Not_Add_user&password"
        await page.goto('https://practice.expandtesting.com/login', { waitUntil: 'domcontentloaded' });
        await page.locator("//button[text()='Login']").click();
        await expect.soft(page.locator("//div[@id='flash']")).toHaveText('Your username is invalid!');
        
    })
    test('02_Add_User_but_not_add_password', async ({ page }) => {
        //  npx playwright test "2_Reg_Login&logout.spec.ts" -g "02_Add_User_but_not_add_password"
        await page.goto('https://practice.expandtesting.com/login', { waitUntil: 'domcontentloaded' });
        await page.locator("//input[@id='username']").fill('practice');
        await page.locator("//button[text()='Login']").click();
        await expect.soft(page.locator("//div[@id='flash']")).toHaveText('Your password is invalid!');
    })
    
    
})
