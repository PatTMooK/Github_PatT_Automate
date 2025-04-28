import { test, expect } from '@playwright/test';
test.describe('Website QADEMO upload file', () => {
    // Run test project npx playwright test "6_Website_DemoQA_uploadfile.spec.ts" 
    test('upload file', async ({ page }) => {
        await page.goto('https://demoqa.com/upload-download'); 
        // ไปยังเว็บที่กำหนด
        
        await page.locator("//input[@id='uploadFile']").setInputFiles("C:/Users/padth/OneDrive/เอกสาร/GitHub/Github_PatT_Automate/data/test.jpg");

        await expect.soft(page.locator("//p[@id='uploadedFilePath']")).toContainText("test.jpg");
        
    })
    
    
})