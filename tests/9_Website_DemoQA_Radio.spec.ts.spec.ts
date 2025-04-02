import { test, expect } from '@playwright/test';
test.describe('Website QADEMO Radio', () => {
    // npx playwright test "9_Website_DemoQA_Radio.spec.ts.spec.ts" -g "Website QADEMO Radio"

    test('TC01_checked_false', async ({ page }) => {
        // npx playwright test "9_Website_DemoQA_Radio.spec.ts.spec.ts" -g "TC01_checked_false"
        // เมื่อเปิดหน้าเว็บครั้งแรก ให้ตรวจสอบว่าไม่มี radio button ตัวใดถูกเลือก
        // สิ่งที่ควรตรวจสอบ: Radio button ทั้ง 3 ตัว (Yes, Impressive, No) มี checked เป็น false
        await page.goto('https://demoqa.com/radio-button', { waitUntil: 'domcontentloaded' });
        // ไปที่ Web ตาม URL
        const RadioName = ['yesRadio','impressiveRadio','noRadio']
        // สร้างตัวแปล RadioName เก็บชื่อ Radio
        for (const radioname of RadioName){
         await expect.soft(page.locator(`//div[contains(@class,'custom-radio')]/input[@id='${radioname}']`)).not.toBeChecked();
         
        }
        // ตรวจสอบว่า ไม่มีการ checked
        // await page.pause();
        
    })
    
    test('TC02_checked_Verify_Text', async ({ page }) => {
        // npx playwright test "9_Website_DemoQA_Radio.spec.ts.spec.ts" -g "TC02_checked_Verify_Text"
        // เลือก radio button และตรวจสอบข้อความ
        // เลือก radio button ตัว Impressive แล้วตรวจสอบว่ามีข้อความแสดงว่า You have selected Impressive 
        await page.goto('https://demoqa.com/radio-button', { waitUntil: 'domcontentloaded' });
        // ไปที่ Web ตาม URL
        await page.locator("//input[@id='impressiveRadio']").click({force: true});
        // สั่งให้คลิ๊ก Impressive และใช้ {force: true} เนื่องจากไม่สนว่า Element จะแสดงมั้ย
        await expect.soft(page.locator("//span[@class='text-success']/parent::p")).toHaveText('You have selected Impressive');
        // ตรวจสอบว่ามีข้อความแสดงว่า You have selected Impressive 
        // await page.pause();
        
    })

    test('TC03_checked_change', async ({ page }) => {
        // npx playwright test "9_Website_DemoQA_Radio.spec.ts.spec.ts" -g "TC03_checked_change"
        // เลือก radio button และตรวจสอบข้อความ
        // เลือก radio button ตัว Impressive แล้วตรวจสอบว่ามีข้อความแสดงว่า You have selected Impressive 
        await page.goto('https://demoqa.com/radio-button', { waitUntil: 'domcontentloaded' });
        // ไปที่ Web ตาม URL
        await page.locator("//input[@id='impressiveRadio']").click({force: true});
        // สั่งให้คลิ๊ก Impressive และใช้ {force: true} เนื่องจากไม่สนว่า Element จะแสดงมั้ย
        await expect.soft(page.locator("//span[@class='text-success']/parent::p")).toHaveText('You have selected Impressive');
        // ตรวจสอบว่ามีข้อความแสดงว่า You have selected Impressive 
        await page.locator("//input[@id='yesRadio']").click({force: true});
        // สั่งให้คลิ๊ก Impressive และใช้ {force: true} เนื่องจากไม่สนว่า Element จะแสดงมั้ย
        await expect.soft(page.locator("//span[@class='text-success']/parent::p")).toHaveText('You have selected Yes');

        await expect.soft(page.locator(`//div[contains(@class,'custom-radio')]/input[@id='yesRadio']`)).toBeChecked();
        // await page.pause();
        
    })

    test('TC04_Loop_checked_Verifytext', async ({ page }) => {
        // npx playwright test "9_Website_DemoQA_Radio.spec.ts.spec.ts" -g "TC04_Loop_checked_Verifytext"
        // เลือก radio button และตรวจสอบข้อความ
        // เลือก radio button ตัว Impressive แล้วตรวจสอบว่ามีข้อความแสดงว่า You have selected Impressive 
        await page.goto('https://demoqa.com/radio-button', { waitUntil: 'domcontentloaded' });
        // ไปที่ Web ตาม URL
        const RadioButtons = [
            { id: 'yesRadio', expectedText: 'You have selected Yes' },
            { id: 'impressiveRadio', expectedText: 'You have selected Impressive' },
            { id: 'noRadio', expectedText: 'You have selected No' }
        ];

        for (const radio of RadioButtons) {
            const RadioLocator = page.locator(`//div[contains(@class,'custom-radio')]/input[@id='${radio.id}']`);
            
            // เช็คว่า radio button สามารถเลือกได้ก่อนทำการ check
            if (await RadioLocator.isEnabled()) {
                await RadioLocator.click({ force: true });
                await expect.soft(page.locator("//span[@class='text-success']/parent::p")).toHaveText(radio.expectedText);
                await expect.soft(RadioLocator).toBeChecked(); // ตรวจสอบว่าเลือกจริง
            } else {
                console.log(`ไม่สามารถเลือก ${radio.id} ได้ เพราะถูก disable`);
            }
        }
        // await page.pause();
        
    })
})
