import { test, expect } from '@playwright/test';
test.describe('Project Website QADEMO', () => {
    // Run test project npx playwright test "QADEMO_Website.spec.ts" 
    test('Open Link & Go To page "Elements"', async ({ page }) => {
        await page.goto('https://demoqa.com/'); 
        // ไปยังเว็บที่กำหนด
        await page.locator('//h5[text()="Elements"]').click();
        // กดที่ตำแหน่ง Elements web page
        
    })
    
    
})
