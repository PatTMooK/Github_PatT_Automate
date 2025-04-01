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

    test('TC04_expand/collapse', async ({ page }) => {
        // npx playwright test "7_Website_DemoQA_CheckBox.spec.ts.spec.ts" -g "TC04_expand/collapse"
        // จุดประสงค์: ทดสอบว่า expand/collapse ทำงานถูกต้อง
        // ยังไม่ได้ย่อ code

        await page.goto("https://demoqa.com/checkbox", { waitUntil: 'domcontentloaded' });
        // ไปยังเว็บทดสอบการ checkbox แบบไม่รอโหลดนานเกินไป
        await page.locator("//div[@id='tree-node']/ol/li/span/button[@type='button']").click();
        // ทำการกดปุ่มที่ต้องการเพื่อดูไฟล์ด้านใน
        await expect.soft(page.locator("//label[@for='tree-node-workspace']")).not.toBeVisible();
        // ตรวจสอบว่าไม่พบ element workspace'
        await expect.soft(page.locator("//label[@for='tree-node-office']")).not.toBeVisible();
        // ตรวจสอบว่าไม่พบ element office'
        await page.locator("//label[@for='tree-node-documents']/preceding-sibling::button[@type='button']").click();
        // ทำการกดปุ่มที่ต้องการเพื่อexpand  node documents
        await expect.soft(page.locator("//label[@for='tree-node-workspace']")).toBeVisible();
        // ตรวจสอบว่าพบ element workspace'
        await expect.soft(page.locator("//label[@for='tree-node-office']")).toBeVisible();
        // ตรวจสอบว่าพบ element office'
        // await page.pause();
        
    });

    test('TC05_Select_All', async ({ page }) => {
        // npx playwright test "7_Website_DemoQA_CheckBox.spec.ts.spec.ts" -g "TC05_Select_All"
        // จุดประสงค์: ตรวจสอบ Select All ถ้าหน้ามีปุ่ม + / - ด้านบน

        await page.goto("https://demoqa.com/checkbox", { waitUntil: 'domcontentloaded' });
        // ไปยังเว็บทดสอบการ checkbox แบบไม่รอโหลดนานเกินไป
        await page.locator("//button[contains(@class,'rct-option-expand-all')]").click();
        // กดปุ่ม + เพื่อ expand ทั้งหมด
        await expect.soft(page.locator("//label[@for='tree-node-desktop']")).toBeVisible();
        // ตรวจสอบว่าพบ element desktop'
        await expect.soft(page.locator("//label[@for='tree-node-notes']")).toBeVisible();
        // ตรวจสอบว่าพบ element note'
        await expect.soft(page.locator("//label[@for='tree-node-commands']")).toBeVisible();
        // ตรวจสอบว่าพบ element commands'
        await expect.soft(page.locator("//label[@for='tree-node-documents']")).toBeVisible();
        // ตรวจสอบว่าพบ element documents'
        await expect.soft(page.locator("//label[@for='tree-node-workspace']")).toBeVisible();
        // ตรวจสอบว่าพบ element workspace'
        await expect.soft(page.locator("//label[@for='tree-node-react']")).toBeVisible();
        // ตรวจสอบว่าพบ element react'
        await expect.soft(page.locator("//label[@for='tree-node-veu']")).toBeVisible();
        // ตรวจสอบว่าพบ element veu'
        await expect.soft(page.locator("//label[@for='tree-node-office']")).toBeVisible();
        // ตรวจสอบว่าพบ element office'
        await expect.soft(page.locator("//label[@for='tree-node-public']")).toBeVisible();
        // ตรวจสอบว่าพบ element public'
        await expect.soft(page.locator("//label[@for='tree-node-private']")).toBeVisible();
        // ตรวจสอบว่าพบ element private'
        await expect.soft(page.locator("//label[@for='tree-node-classified']")).toBeVisible();
        // ตรวจสอบว่าพบ element classified'
        await expect.soft(page.locator("//label[@for='tree-node-general']")).toBeVisible();
        // ตรวจสอบว่าพบ element general'
        await expect.soft(page.locator("//label[@for='tree-node-downloads']")).toBeVisible();
        // ตรวจสอบว่าพบ element downloads'
        await expect.soft(page.locator("//label[@for='tree-node-wordFile']")).toBeVisible();
        // ตรวจสอบว่าพบ element wordFile'
        await expect.soft(page.locator("//label[@for='tree-node-excelFile']")).toBeVisible();
        // ตรวจสอบว่าพบ element excelFile'
        await page.locator("//label[@for='tree-node-home']/span[@class='rct-checkbox']").click();
        // กดcheckbox ที่ home เพื่อเลือกทั้งหมด
       
        await page.locator("//button[contains(@class,'rct-option-collapse-all')]").click();
        // กดปุ่ม - เพื่อ collapse ทั้งหมด
        
        await expect.soft(page.locator("//div[@id='result']")).toContainText("home");
        await expect.soft(page.locator("//div[@id='result']")).toContainText("desktop");
        await expect.soft(page.locator("//div[@id='result']")).toContainText("notes");
        await expect.soft(page.locator("//div[@id='result']")).toContainText("commands");
        await expect.soft(page.locator("//div[@id='result']")).toContainText("documents");
        await expect.soft(page.locator("//div[@id='result']")).toContainText("workspace");
        await expect.soft(page.locator("//div[@id='result']")).toContainText("react");
        await expect.soft(page.locator("//div[@id='result']")).toContainText("veu");
        await expect.soft(page.locator("//div[@id='result']")).toContainText("office");
        await expect.soft(page.locator("//div[@id='result']")).toContainText("public");
        await expect.soft(page.locator("//div[@id='result']")).toContainText("private");
        await expect.soft(page.locator("//div[@id='result']")).toContainText("classified");
        await expect.soft(page.locator("//div[@id='result']")).toContainText("general");
        await expect.soft(page.locator("//div[@id='result']")).toContainText("downloads");
        await expect.soft(page.locator("//div[@id='result']")).toContainText("wordFile");
        await expect.soft(page.locator("//div[@id='result']")).toContainText("excelFile");
        // ตรวจสอบข้อความทั้งหมดใน tab result
        
    });
    
    
    
    
})
