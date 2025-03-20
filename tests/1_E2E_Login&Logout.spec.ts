import { test, expect } from '@playwright/test';
test.describe('E2E_Login_Logout', () => {
    // npx playwright test "1_E2E_Login&logout.spec.ts"
    test('Login_Success_&_Logout_Success', async ({ page }) => {
        await page.goto('https://practice.expandtesting.com/login');
        // ไปยังเว็บทดสอบการ login
        await page.locator("//input[@id='username']").fill('practice');
        // กรอกคำว่า practice ใน field user
        await page.locator("//input[@id='password']").fill('SuperSecretPassword!');
        // กรอกคำว่า SuperSecretPassword ใน field password
        await page.locator("//button[text()='Login']").click();
        // คลิ๊กปุ่ม Login
        await page.locator("//div[@id='flash']/b[text()='You logged into a secure area!']").isVisible();
        // ตรวจสอบการมีอยู่ของ Text login success ที่มีข้อความว่า You logged into a secure area!

        await page.locator("//i[text()=' Logout']").click();
        // คลิ๊กปุ่ม Logout
        const Text_Logout = await page.locator("//b[text()='You logged out of the secure area!']").textContent();
        // console.log(Text_Logout);
        expect(Text_Logout==='You logged out of the secure area!').toBeTruthy(); 
        // ตรวจสอบการมีอยู่ของ Text logout success ที่มีข้อความว่า You logged out of the secure area!

        
    });
});
