class MainPage {

    get closeCoockieButton(){ return $('.c-jVWmKv')}

    get socialButtons(){ return $$('[class="c-cLfYON"] [class="c-PJLV"]')}

    get seeProductsButton(){ return $$('[class*="c-kDQqQr c-kDQqQr-fw"]')[0]}

    get createFreeAccountButton(){ return $$('[class*="c-kDQqQr c-kDQqQr-fw"]')[1]}

    get learnEdgeButton(){ return $$('[class*="c-kDQqQr c-kDQqQr-fw"]')[2]}

    get signUpButton(){ return $$('[class*="c-kDQqQr c-kDQqQr-fw"]')[3]}

    get footerButtons(){ return $$('[class="c-vEkoU mchNoDecorate"]')}

    clickCloseCoockieButton(){
        this.closeCoockieButton.click()
    }

    async checkLinkedInButton(){
        await this.socialButtons[0].scrollIntoView()
        await expect(this.socialButtons[0]).toBeDisplayed()
    }

    async checkTwitterButton(){
        await this.socialButtons[1].scrollIntoView()
        await expect(this.socialButtons[1]).toBeDisplayed()
    }

    async checkFacebookButton(){
        await this.socialButtons[2].scrollIntoView()
        await expect(this.socialButtons[2]).toBeDisplayed()
    }

    async checkLinkedInButtonRedirection(){
        await this.socialButtons[0].click()
        await browser.switchWindow('linkedin')
        await expect(browser).toHaveUrlContaining('https://www.linkedin.com/')
        browser.closeWindow()
        browser.switchWindow('telnyx')
    }

    async checkTwitterButtonRedirection(){
        await this.socialButtons[1].click()
        await browser.switchWindow('twitter')
        await expect(browser).toHaveUrlContaining('https://twitter.com/telnyx')
        browser.closeWindow()
        browser.switchWindow('telnyx')
    }

    async checkFacebookButtonRedirection(){
        await this.socialButtons[2].click()
        await browser.switchWindow('facebook')
        await expect(browser).toHaveUrlContaining('https://www.facebook.com/Telnyx/')
        browser.closeWindow()
        browser.switchWindow('telnyx')
    }

    async clickSeeProductsButton(){
        await this.seeProductsButton.scrollIntoView()
        await this.seeProductsButton.click()
    }

    async clickCreateFreeAccountButton(){
        await this.createFreeAccountButton.scrollIntoView()
        await this.createFreeAccountButton.click()
    }

    async clickLearnEdgeButtonButton(){
        await this.learnEdgeButton.scrollIntoView()
        await this.learnEdgeButton.click()
    }

    async clickSignUpButtonButton(){
        await this.signUpButton.scrollIntoView()
        await this.signUpButton.click()
    }

    async clickAcceptableUseButton(){
        await this.footerButtons[6].scrollIntoView()
        await this.footerButtons[6].click()
    }

    async clickCookiePolicyButton(){
        await this.footerButtons[4].scrollIntoView()
        await this.footerButtons[4].click()
    }

    async clickPrivacyPolicyButton(){
        await this.footerButtons[3].scrollIntoView()
        await this.footerButtons[3].click()
    }

    async checkRedirectingToTelnyxMainPage() {
        await expect(browser).toHaveUrlContaining('https://telnyx.com/')
    }
}
export default new MainPage();