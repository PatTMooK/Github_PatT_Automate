import { test, expect } from '@playwright/test';
test.describe('E2E_Login_Logout', () => {
    // npx playwright test "1_E2E_Login&logout.spec.ts"
    // คำอธิบาย E2E_Login_Logout เป็นการแสดงการทำงานเคส login และ logout แบบ positive case โดย script ที่ใช้จะมีการใช้ 
    // page.locator ในการกำหนด element ต่างที่ใช้ทดสอบ
    // { waitUntil: 'domcontentloaded' } เพื่อจะให้หน้าเว็บไม่รอโหลดนานเกินไปจนเกิดเคส timeout
    // expect.soft เพื่อให้ดำเนินการเทสจนครบ flow E2E ของเคส แม้จะเจอ error
    // expect(page.locator()).toHaveText เพื่อเป็นการตรวจสอบ Text ใน element นั้นๆ ว่าตรงกับคำที่กำหนดหรือไม่
    test('Login_Success_&_Logout_Success', async ({ page }) => {
        await page.goto('https://practice.expandtesting.com/login', { waitUntil: 'domcontentloaded' });
        // ไปยังเว็บทดสอบการ login แบบไม่รอโหลดนานเกินไป
        await page.locator("//input[@id='username']").fill('practice');
        // กรอกคำว่า practice ใน field user
        await page.locator("//input[@id='password']").fill('SuperSecretPassword!');
        // กรอกคำว่า SuperSecretPassword! ใน field password
        await page.locator("//button[text()='Login']").click();
        // คลิ๊กปุ่ม Login
        await expect.soft(page.locator("//div[@id='flash']")).toHaveText('You logged into a secure area!')
        // ตรวจสอบการมีอยู่ของ Text login success ที่มีข้อความว่า You logged into a secure area!
        await page.locator("//div[@class='container']//i[text()=' Logout']").click();
        // คลิ๊กปุ่ม Logout
        await expect.soft(page.locator("//div[@id='flash']")).toHaveText('You logged out of the secure area!');
        // ตรวจสอบการมีอยู่ของ Text login success ที่มีข้อความว่า You logged out of the secure area!
                
    });
});
