import { test, expect } from '@playwright/test';

test.describe('Website QADEMO Checkbox', () => {
    // npx playwright test "7_Website_DemoQA_CheckBox.spec.ts.spec.ts" 
    // โจทย์ 1: ตรวจสอบการเลือก checkbox จุดประสงค์: ตรวจสอบว่า checkbox ถูกเลือกแล้วชื่อไฟล์/โฟลเดอร์แสดงในข้อความด้านล่าง คลิกเช็ค Desktop > Notes ตรวจสอบว่า text ด้านล่างมีคำว่า "You have selected: desktop notes"

    test('Checkbox', async ({ page }) => {

        await page.goto("https://demoqa.com/checkbox", { waitUntil: 'domcontentloaded' });
        // ไปยังเว็บทดสอบการ checkbox แบบไม่รอโหลดนานเกินไป
        await page.locator("//div[@id='tree-node']/ol/li/span/button[@type='button']").click();
        // ทำการกดปุ่มที่ต้องการเพื่อดูไฟล์ด้านใน
        await page.locator("//label[@for='tree-node-desktop']/preceding-sibling::button[@type='button']").click();
        // ทำการกดปุ่มที่ต้องการเพื่อดูไฟล์ด้านใน  node desktop
        await page.locator("//label[@for='tree-node-notes']/span[@class='rct-checkbox']").click();
        // ทำการกดปุ่ม checkbox เป็นคำว่า note
        await expect.soft(page.locator("//div[@id='result']")).toContainText("You have selected :notes")
        // ตรวจสอบข้อความการเลือก ที่แถบ Result ต้องมีคำที่กไหนด
        
        
    })
    
    
})
