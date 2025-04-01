import { test, expect } from '@playwright/test';

test.describe('Website QADEMO Checkbox', () => {
    // npx playwright test "7_Website_DemoQA_CheckBox.spec.ts.spec.ts" 
    // โจทย์ 1: ตรวจสอบการเลือก checkbox จุดประสงค์: ตรวจสอบว่า checkbox ถูกเลือกแล้วชื่อไฟล์/โฟลเดอร์แสดงในข้อความด้านล่าง คลิกเช็ค Desktop > Notes, Commands ตรวจสอบว่า text ด้านล่างมีคำว่า "You have selected: desktop notes commands"

    test('Checkbox', async ({ page }) => {

        await page.goto("https://demoqa.com/checkbox", { waitUntil: 'domcontentloaded' });
        await page.locator("//div[@id='tree-node']/ol/li/span/button[@type='button']").click();
        await page.locator("//label[@for='tree-node-desktop']/preceding-sibling::button[@type='button']").click();
        await page.pause();
        await page.locator("//label[@for='tree-node-notes']/span[@class='rct-checkbox']").click();
        await expect.soft(page.locator("//div[@id='result']")).toContainText("You have selected :")
        
        
    })
    
    
})
