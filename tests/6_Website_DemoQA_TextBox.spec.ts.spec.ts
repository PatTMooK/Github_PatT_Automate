import { test, expect } from '@playwright/test';
import { count } from 'console';

test.describe('Website QADEMO Textbox', () => {
    // npx playwright test "6_Website_DemoQA_TextBox.spec.ts.spec.ts"

    test('TC01_Fill&Submit', async ({ page }) => {
        // npx playwright test "6_Website_DemoQA_TextBox.spec.ts.spec.ts" -g "TC01_Fill&Submit$"  

        await page.goto("https://demoqa.com/text-box", { waitUntil: 'domcontentloaded' }); 
        // เปิดหน้าเว็บ
        
        const Name = ['Padthadon Kimlaung']; 
        const Email = ['Padthadon@gmail.com'];
        const CurrentAddress = 'Bang Sue,Bangkok,10800,Thailand';
        const PermanentAddress = 'Huai Krachao,Kanchanaburi,71170,Thailand';
        //ข้อมูล input
        const ExpectedResults = [
            `Name:${Name}`,
            `Email:${Email}`,
            `Current Address :${CurrentAddress}`,
            `Permananet Address :${PermanentAddress}`
            ];
        // ข้อมูลที่คาดหวังหลัง Submit

        await page.locator("//input[@placeholder='Full Name']").fill(`${Name}`);
        await page.locator("//input[@placeholder='name@example.com']").fill(`${Email}`);
        await page.locator("//textarea[@placeholder='Current Address']").fill(`${CurrentAddress}`);
        await page.locator("//textarea[@id='permanentAddress']").fill(`${PermanentAddress}`);
        // กรอกข้อมูลในฟอร์ม
        await page.locator("//button[@id='submit']").click();
        // กดปุ่ม Submit
        
        const OutputBox = page.locator("//div[@id='output']");
        // กำหนดให้ outputBox เก็บค่า Element output
        await expect.soft(OutputBox).toBeVisible();
        // ครวจสอบว่า Element output แสดงขึ้นมา

        for (const ExpectedText of ExpectedResults) {
            await expect.soft(OutputBox).toContainText(ExpectedText);
        }
        // ตรวจสอบผลลัพธ์แต่ละบรรทัด
        // await console.log(ExpectedResults);
        
        
        
    })
    
    
})
