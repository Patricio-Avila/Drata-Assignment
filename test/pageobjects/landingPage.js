

const { path } = require('chromedriver');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('');
    }
    openDemo() {
        return super.open('/demo');
    }
    openAbout() {
        return super.open('/about');
    }
    openCareers() {
        return super.open('/careers');
    }
    openContact() {
        return super.open('/contact');
    }
    openSecurity() {
        return super.open('/security');
    }
    openSOC() {
        return super.open('/soc-2');
    }
    openISO() {
        return super.open('/iso-27001');
    }
    openHIPAA() {
        return super.open('/hipaa');
    }
    openPCI() {
        return super.open('/pci-dss');
    }
    openIntegrations() {
        return super.open('/integrations');
    }
    openPricing() {
        return super.open('/pricing');
    }
    openPrioSOC() {
        return super.open('/case-studies/prioritizing-security-while-growing-fast');
    }
    openGetSOC() {
        return super.open('/case-studies/getting-soc-2-fast-with-drata');
    }
    openLevSOC() {
        return super.open('/case-studies/confidence-in-a-strong-security-program');
    }
    openAllSOC() {
        return super.open('/resources?tab=case-studies');
    }
    openCustomers() {
        return super.open('/customers');
    }
    openAuditors() {
        return super.open('/auditors');
    }

}

module.exports = new LoginPage();
