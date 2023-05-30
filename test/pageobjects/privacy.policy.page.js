class PrivacyPolicyPage{

    get textLinkButtons(){ return $$('[class*="c-gsmDXe c-irapcY"]')}

    async checkRedirectingToPrivacyPolicyPage(){
        await expect(browser).toHaveUrlContaining('https://telnyx.com/privacy-policy')
    }

    async clickTelnyxMainPageLinkButton(){
        await this.textLinkButtons[0].click()
    }

    async clickCookiePolicyButton(){
        await this.textLinkButtons[5].click()
    }
}
export default new PrivacyPolicyPage();