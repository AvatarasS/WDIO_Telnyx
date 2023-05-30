class ContactUsPage {
    
    get contactEmail(){ return $$('a[class*="c-gsmDXe c-irapcY mchNoDecorate"]')[2];}

    get contactNumber(){ return $$('a[class*="c-gsmDXe c-irapcY mchNoDecorate"]')[3];}

    get loginButton(){ return $$('span[class="c-hakyQ"]')[3];}

    get contactForm() { return $('[class="c-PJLV c-PJLV-itxAgn-form-true"]');}

    get relatedSourcesSubblocks(){ return $$('[class="c-PJLV c-ciZnv"]')}

    get supportCenterButton(){ return $$('[class*="c-gsmDXe c-irapcY"]')[5]}


    async checkRedirectingToContactUsPage(){
        await expect(browser).toHaveUrlContaining('https://telnyx.com/contact-us')
    }

    async checkContacEmail(){
        await this.contactEmail.scrollIntoView()
        await expect(this.contactEmail).toHaveText('sales@telnyx.com')
    }

    async checkContactNumber(){
        await this.contactNumber.scrollIntoView()
        await expect(this.contactNumber).toHaveText('+1 (888) 980-9750')
    }

    async checkLoginButton(){
        await this.loginButton.scrollIntoView()
        await this.loginButton.click()
        await browser.switchWindow('portal')
        await expect(browser).toHaveUrlContaining('https://portal.telnyx.com/');
        browser.closeWindow()
        browser.switchWindow('telnyx')
    }

    async checkContactForm(){
        await expect(this.contactForm).toBeDisplayed();
    }

    async checkTalkToExpertSubblock(){
        await expect(this.relatedSourcesSubblocks[0]).toBeDisplayed();
    }

    async checkContactSupportSubblock(){
        await expect(this.relatedSourcesSubblocks[1]).toBeDisplayed();
    }

    async checkReportAbuseSubblock(){
        await expect(this.relatedSourcesSubblocks[2]).toBeDisplayed();
    }

    async checkSupportCenterRedirection(){
        await this.supportCenterButton.scrollIntoView()
        await this.supportCenterButton.click()
        await browser.switchWindow('support')
        await expect(browser).toHaveUrlContaining('https://support.telnyx.com/en/');
        browser.closeWindow()
        browser.switchWindow('telnyx')
    }
    
 }
export default new ContactUsPage(); 