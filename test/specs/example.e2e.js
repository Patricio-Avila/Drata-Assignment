const { assert } = require('chai');
const LoginPage = require('../pageobjects/landingPage');

describe('Drata Landing Page', () => {
    it('Drata landing page', async () => {
        await LoginPage.open();

        var pageTitle = await browser.getTitle();
        console.log(pageTitle);
        
        assert.strictEqual('Drata - Put SOC 2, ISO 27001, and HIPAA Compliance On Autopilot',pageTitle, 'Page does not open');
    
    });
}); 

describe('Drata Demo Screen', () => {

   
    it('Get Schedule Screen shall open correctly', async () => {
        await LoginPage.openDemo();
        
        var pageDemo = await browser.getTitle();
        console.log(pageDemo);
    
        assert.strictEqual('Drata - Request a Demo Today',pageDemo, 'Page does not open');
    
    }); 
}); 

describe('About Drata Screen', () => {

   
    it('About Screen shall open correctly', async () => {
        await LoginPage.openAbout();
        
        var pageAbout = await browser.getTitle();
        console.log(pageAbout);
    
        assert.strictEqual('Drata - About Us',pageAbout, 'Page does not open');
    
    }); 
});

describe('Drata Careers Screen', () => {

   
    it('About Screen shall open correctly', async () => {
        await LoginPage.openCareers();
        
        var pageCareers = await browser.getTitle();
        console.log(pageCareers);
    
        assert.strictEqual('Careers - Drata',pageCareers, 'Page does not open');
    
    }); 
});

describe('Drata Contact Us Screen', () => {

   
    it('Contact Us Screen shall open correctly', async () => {
        await LoginPage.openContact();
        
        var pageContactUs = await browser.getTitle();
        console.log(pageContactUs);
    
        assert.strictEqual('Contact Us - Drata',pageContactUs, 'Page does not open');
    
    }); 
});

describe('Drata Contact Us Screen', () => {

   
    it('Security Screen shall open correctly', async () => {
        await LoginPage.openSecurity();
        
        var pageSecurity = await browser.getTitle();
        console.log(pageSecurity);
    
        assert.strictEqual('Drata - Security at Drata',pageSecurity, 'Page does not open');
    
    }); 
});

describe('Product SOC 2 Screen', () => {

   
    it('Product SOC 2 Screen shall open correctly', async () => {
        await LoginPage.openSOC();
        
        var pageSOC = await browser.getTitle();
        console.log(pageSOC);
    
        assert.strictEqual('Drata - Put SOC 2 on Autopilot',pageSOC, 'Page does not open');
    
    }); 
});

describe('Product ISO-27001 Screen', () => {

   
    it('Product ISO-27001 Screen shall open correctly', async () => {
        await LoginPage.openISO();
        
        var pageISO = await browser.getTitle();
        console.log(pageISO);
    
        assert.strictEqual('Drata - Put ISO 27001 on Autopilot',pageISO, 'Page does not open');
    
    }); 
});

describe('Product HIPAA Screen', () => {

   
    it('Product HIPAA Screen shall open correctly', async () => {
        await LoginPage.openHIPAA();
        
        var pageHIPAA = await browser.getTitle();
        console.log(pageHIPAA);
    
        assert.strictEqual('Drata - Put HIPAA on Autopilot',pageHIPAA, 'Page does not open');
    
    }); 
});

describe('Product PCI-DSS Screen', () => {

   
    it('Product PCI-DSS Screen shall open correctly', async () => {
        await LoginPage.openPCI();
        
        var pagePCI = await browser.getTitle();
        console.log(pagePCI);
    
        assert.strictEqual('Drata - Put PCI on Autopilot',pagePCI, 'Page does not open');
    
    }); 
});


describe('Product Integrations Screen', () => {

   
    it('Product Integrations Screen shall open correctly', async () => {
        await LoginPage.openIntegrations();
        
        var pageInt = await browser.getTitle();
        console.log(pageInt);
    
        assert.strictEqual('Drata - More Integrations Means More Automation',pageInt, 'Page does not open');
    
    }); 
});


describe('Product Pricing Screen', () => {

   
    it('Product Pricing Screen shall open correctly', async () => {
        await LoginPage.openPricing();
        
        var pagePricing = await browser.getTitle();
        console.log(pagePricing);
    
        assert.strictEqual('Drata - Transparent Pricing',pagePricing, 'Page does not open');
    
    }); 
});


describe('Resources SOC 2 Prioritizing Screen', () => {

   
    it('Resources SOC 2 Prioritizing Screen shall open correctly', async () => {
        await LoginPage.openPrioSOC();
        
        var pagePrioSOC = await browser.getTitle();
        console.log(pagePrioSOC);
    
        assert.strictEqual('Drata - Case Study: Prioritizing Security while Growing Fast',pagePrioSOC, 'Page does not open');
    
    }); 
});


describe('Resources Get SOC 2 Screen', () => {

   
    it('Resources Get SOC 2 Screen shall open correctly', async () => {
        await LoginPage.openGetSOC();
        
        var pageGetSOC = await browser.getTitle();
        console.log(pageGetSOC);
    
        assert.strictEqual('Drata - Case Study: Getting SOC 2 Fast on a Deadline',pageGetSOC, 'Page does not open');
    
    }); 
});


describe('Resources Leveling SOC 2 Screen', () => {

   
    it('Resources Leveling SOC 2 Screen shall open correctly', async () => {
        await LoginPage.openLevSOC();
        
        var pageLevSOC = await browser.getTitle();
        console.log(pageLevSOC);
    
        assert.strictEqual('Drata - Case Study: Confidence In a Strong Security Program',pageLevSOC, 'Page does not open');
    
    }); 
});

describe('Resources All case Studies Screen', () => {

   
    it('Resources All case Studies Screen shall open correctly', async () => {
        await LoginPage.openLevSOC();
        
        var pageLevSOC = await browser.getTitle();
        console.log(pageLevSOC);
    
        assert.strictEqual('Drata - Case Study: Confidence In a Strong Security Program', pageLevSOC, 'Page does not open');
    
    }); 
});

describe('Customer Screen', () => {

   
    it('Customer Screen shall open correctly', async () => {
        await LoginPage.openCustomers();
        
        var pageCutomers = await browser.getTitle();
        console.log(pageCutomers);
    
        assert.strictEqual('Drata - Customers', pageCutomers, 'Page does not open');
    
    }); 
});

describe('Auditors Screen', () => {

   
    it('Auditors Screen shall open correctly', async () => {
        await LoginPage.openAuditors();
        
        var pageAuditors = await browser.getTitle();
        console.log(pageAuditors);
    
        assert.strictEqual('Auditors - Drata', pageAuditors, 'Page does not open');
    
    }); 
});


