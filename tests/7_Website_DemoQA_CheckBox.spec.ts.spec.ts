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
        const elements=['notes','veu','wordFile'];
        for(const element of elements){
            await expect.soft(page.locator("//div[@id='result']")).toContainText(element);
        }
        // ตรวจสอบข้อความการเลือก ที่แถบ Result ต้องมีคำว่า veu,notes,wordFile
        // await page.pause();

        
    });

    test('TC04_expand/collapse', async ({ page }) => {
        // npx playwright test "7_Website_DemoQA_CheckBox.spec.ts.spec.ts" -g "TC04_expand/collapse"
        // จุดประสงค์: ทดสอบว่า expand/collapse ทำงานถูกต้อง

        await page.goto("https://demoqa.com/checkbox", { waitUntil: 'domcontentloaded' });
        // ไปยังเว็บทดสอบการ checkbox แบบไม่รอโหลดนานเกินไป
        await page.locator("//div[@id='tree-node']/ol/li/span/button[@type='button']").click();
        // ทำการกดปุ่มที่ต้องการเพื่อดูไฟล์ด้านใน
        const elements = ['workspace','office'];
        
        for (const element of elements) {
            await expect.soft(page.locator(`//label[@for='tree-node-${element}']`)).not.toBeVisible();
            // console.log(element);
        }
        // ตรวจสอบว่าไม่พบ element workspace,office'
        await page.locator("//label[@for='tree-node-documents']/preceding-sibling::button[@type='button']").click();
        // ทำการกดปุ่มที่ต้องการเพื่อexpand  node documents
        for (const element of elements) {
            await expect.soft(page.locator(`//label[@for='tree-node-${element}']`)).toBeVisible();
            // console.log(element);
        }
        // ตรวจสอบว่าพบ element workspace,office'
        // await page.pause();
        
    });

    test('TC05_Select_All', async ({ page }) => {
        // npx playwright test "7_Website_DemoQA_CheckBox.spec.ts.spec.ts" -g "TC05_Select_All"
        // จุดประสงค์: ตรวจสอบ Select All ถ้าหน้ามีปุ่ม + / - ด้านบน

        await page.goto("https://demoqa.com/checkbox", { waitUntil: 'domcontentloaded' });
        // ไปยังเว็บทดสอบการ checkbox แบบไม่รอโหลดนานเกินไป
        await page.locator("//button[contains(@class,'rct-option-expand-all')]").click();
        // กดปุ่ม + เพื่อ expand ทั้งหมด
        const elements = [
            'home','desktop', 'notes', 'commands', 'documents', 'workspace', 'react', 'veu',
            'office', 'public', 'private', 'classified', 'general', 'downloads',
            'wordFile', 'excelFile'
        ];
        // สร้างตัวแปร elements เพื่อเก็บค่า Label ที่ต้องการเช็ค
        for (const element of elements) {
            await expect.soft(page.locator(`//label[@for='tree-node-${element}']`)).toBeVisible();
            // console.log(element);
        }
        // สร้าง loop element โดยให้นำค่าใน elements มาใส่ใน locater เพื่อตัวสอบการปรากฏ .toBeVisible()
        await page.locator("//label[@for='tree-node-home']/span[@class='rct-checkbox']").click();
        // กดcheckbox ที่ home เพื่อเลือกทั้งหมด
       
        await page.locator("//button[contains(@class,'rct-option-collapse-all')]").click();
        // กดปุ่ม - เพื่อ collapse ทั้งหมด
        
        for (const el of elements) {
            await expect.soft(page.locator("//div[@id='result']")).toContainText(el);
            // console.log(el);
        }
        // สร้าง loop el โดยให้นำค่าใน elements ตรวจสอบข้อความทั้งหมดใน Locator
        
    });
    
    
    
    
})
