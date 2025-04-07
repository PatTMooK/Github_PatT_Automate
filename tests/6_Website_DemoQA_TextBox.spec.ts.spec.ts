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
        const currentAddress = 'Bang Sue,Bangkok,10800,Thailand';
        const permanentAddress = 'Huai Krachao,Kanchanaburi,71170,Thailand';
        //ข้อมูล input
        const expectedResults = [
            `Name:${Name}`,
            `Email:${Email}`,
            `Current Address :${currentAddress}`,
            `Permananet Address :${permanentAddress}`
            ];
        // ข้อมูลที่คาดหวังหลัง Submit

        await page.locator("//input[@placeholder='Full Name']").fill(`${Name}`);
        await page.locator("//input[@placeholder='name@example.com']").fill(`${Email}`);
        await page.locator("//textarea[@placeholder='Current Address']").fill(`${currentAddress}`);
        await page.locator("//textarea[@id='permanentAddress']").fill(`${permanentAddress}`);
        // กรอกข้อมูลในฟอร์ม
        await page.locator("//button[@id='submit']").click();
        // กดปุ่ม Submit
        
        const outputBox = page.locator("//div[@id='output']");
        // กำหนดให้ outputBox เก็บค่า Element output
        await expect.soft(outputBox).toBeVisible();
        // ครวจสอบว่า Element output แสดงขึ้นมา

        for (const expectedText of expectedResults) {
            await expect.soft(outputBox).toContainText(expectedText);
        }
        // ตรวจสอบผลลัพธ์แต่ละบรรทัด
        // await console.log(expectedResults);
        
        
        
    })
    
    
})
