import { test, expect } from '@playwright/test';

test.describe('Website QADEMO Checkbox', () => {
    // npx playwright test "7_Website_DemoQA_CheckBox.spec.ts.spec.ts" 
    

    test('TC01_Checkbox', async ({ page }) => {
        // npx playwright test "7_Website_DemoQA_CheckBox.spec.ts.spec.ts" -g "/TC01_Checkbox" 
        // จุดประสงค์: ตรวจสอบว่า checkbox ถูกเลือกแล้วชื่อไฟล์/โฟลเดอร์แสดงในข้อความด้านล่าง คลิกเช็ค Desktop > Notes ตรวจสอบว่า text ด้านล่างมีคำว่า "You have selected :notes"
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
        
    });
   
    test('TC02_Un_Checkbox', async ({ page }) => {
        // npx playwright test "7_Website_DemoQA_CheckBox.spec.ts.spec.ts" -g "TC02_Un_Checkbox"
        // จุดประสงค์: ตรวจสอบว่าเมื่อ uncheck แล้วชื่อหายจาก teb result

        await page.goto("https://demoqa.com/checkbox", { waitUntil: 'domcontentloaded' });
        // ไปยังเว็บทดสอบการ checkbox แบบไม่รอโหลดนานเกินไป
        await page.locator("//div[@id='tree-node']/ol/li/span/button[@type='button']").click();
        // ทำการกดปุ่มที่ต้องการเพื่อดูไฟล์ด้านใน
        await page.locator("//label[@for='tree-node-desktop']/preceding-sibling::button[@type='button']").click();
        // ทำการกดปุ่มที่ต้องการเพื่อดูไฟล์ด้านใน  node desktop
        await page.locator("//label[@for='tree-node-notes']/span[@class='rct-checkbox']").click();
        // ทำการกดปุ่ม checkbox เป็นคำว่า note
        await expect.soft(page.locator("//div[@id='result']")).toContainText("You have selected :notes");
        // ตรวจสอบข้อความการเลือก ที่แถบ Result ต้องมีคำที่กำหนด
        await page.locator("//label[@for='tree-node-notes']/span[@class='rct-checkbox']").click();
        // ทำการกดปุ่ม checkbox เป็นคำว่า note เพื่อเป็นการ Un check
        await expect.soft(page.locator("//div[@id='result']")).not.toBeVisible();
        // ตรวจสอบข้อความการเลือก ที่แถบ Result ต้องไม่มี element มาแสดง
        
    });

    test('TC03_Multi-select', async ({ page }) => {
        // npx playwright test "7_Website_DemoQA_CheckBox.spec.ts.spec.ts" -g "TC03_Multi-select"
        // จุดประสงค์: ทดสอบว่าเลือกไฟล์ข้ามโฟลเดอร์ได้

        await page.goto("https://demoqa.com/checkbox", { waitUntil: 'domcontentloaded' });
        // ไปยังเว็บทดสอบการ checkbox แบบไม่รอโหลดนานเกินไป
        await page.locator("//div[@id='tree-node']/ol/li/span/button[@type='button']").click();
        // ทำการกดปุ่มที่ต้องการเพื่อดูไฟล์ด้านใน
        await page.locator("//label[@for='tree-node-desktop']/preceding-sibling::button[@type='button']").click();
        // ทำการกดปุ่มที่ต้องการเพื่อexpand  node desktop
        await page.locator("//label[@for='tree-node-notes']/span[@class='rct-checkbox']").click();
        // ทำการกดปุ่ม checkbox เป็นคำว่า note
        await page.locator("//label[@for='tree-node-documents']/preceding-sibling::button[@type='button']").click();
        // ทำการกดปุ่มที่ต้องการเพื่อexpand  node documents
        await page.locator("//label[@for='tree-node-workspace']/preceding-sibling::button[@type='button']").click();
        // ทำการกดปุ่มที่ต้องการเพื่อexpand  node workspace
        await page.locator("//label[@for='tree-node-veu']/span[@class='rct-checkbox']").click();
        // ทำการกดปุ่ม checkbox เป็นคำว่า veu
        await page.locator("//label[@for='tree-node-downloads']/preceding-sibling::button[@type='button']").click();
        // ทำการกดปุ่มที่ต้องการเพื่อexpand  node downloads
        await page.locator("//label[@for='tree-node-wordFile']/span[@class='rct-checkbox']").click();
        // ทำการกดปุ่ม checkbox เป็นคำว่า wordFile.doc

        await expect.soft(page.locator("//div[@id='result']")).toContainText("notes");
        // ตรวจสอบข้อความการเลือก ที่แถบ Result ต้องมีคำว่า notes
        await expect.soft(page.locator("//div[@id='result']")).toContainText("veu");
        // ตรวจสอบข้อความการเลือก ที่แถบ Result ต้องมีคำว่า veu
        await expect.soft(page.locator("//div[@id='result']")).toContainText("wordFile");
        // ตรวจสอบข้อความการเลือก ที่แถบ Result ต้องมีคำว่า wordFile
        // await page.pause();

        
    });
    
    
    
    
})
