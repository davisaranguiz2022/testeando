import { browser, element, by} from 'protractor';

describe('Mi prueba',()=>{
    // codigo de configuración
    beforeEach(()=>{
        browser.get("/");
    });
    // Prueba 1
    it("El tab 1 se muestra por defecto",()=>{
        expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Tab 1");
    });
    // Prueba 2
    it("El usuario puede navegar a la pestaña Tab 2",async ()=>{
        await element(by.css("[tab=tab2]")).click();
        browser.driver.sleep(500);
        expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Tab 2");
    });
});