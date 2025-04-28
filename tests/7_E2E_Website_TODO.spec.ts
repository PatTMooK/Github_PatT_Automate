import { test, expect } from '@playwright/test';
test.describe('TodoMVC - Active and Completed Filters', () => {
    test('active and completed filters', async ({ page, context }) => {
      // เปิด trace สำหรับการ debug
      await context.tracing.start({ screenshots: true, snapshots: true });
  
      // Navigate ไปยังเว็บไซต์ TodoMVC
      await page.goto('https://demo.playwright.dev/todomvc/#/');
  
      // เพิ่มรายการ "water the plants"
      await page.getByPlaceholder('What needs to be done?').fill('water the plants');
      await page.getByPlaceholder('What needs to be done?').press('Enter');
  
      // เพิ่มรายการ "feed the dog"
      await page.getByPlaceholder('What needs to be done?').fill('feed the dog');
      await page.getByPlaceholder('What needs to be done?').press('Enter');
  
      // ทำเครื่องหมาย "water the plants" เป็น Completed
      await page.locator('li').filter({ hasText: 'water the plants' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
  
      // ตรวจสอบ Active filter
      await page.getByRole('link', { name: 'Active' }).click();
      const TaskActive = await page.locator("//label[normalize-space()='feed the dog']").isVisible(); 
      // await page.locator("//label[normalize-space()='feed the dog']").isVisible();  //สามารถจบที่บรรทัดนี้ได้
      //const TaskActive = await page.locator("//label[normalize-space()='feed the dog']").textContent();
      //console.log("Msg Completed have  "+TaskActive);
      expect(TaskActive).toBeTruthy(); //เผื่อกรณีนำค่าไปใช้ต่อส่วนอื่น
      //expect(TaskActive==="feed the dog").toBeTruthy();
  
      // ตรวจสอบ Completed filter
      await page.getByRole('link', { name: 'Completed' }).click();
      const TaskCompleted = await page.locator("//label[normalize-space()='water the plants']").isVisible();
      //const TaskCompleted = await page.locator("//label[normalize-space()='water the plants']").textContent();
      //console.log("Msg Completed have  "+TaskCompleted);
      expect(TaskCompleted).toBeTruthy();
      //expect(TaskCompleted==="water the plants").toBeTruthy();
  
      // จบ trace และบันทึกผล
    //   await context.tracing.stop({ path: 'trace.zip' });
    //   await page.pause()
    });
  });
  