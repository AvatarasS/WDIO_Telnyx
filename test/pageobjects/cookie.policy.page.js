class CookiePolicyPage {

    get privacyPolicyButton(){ return $('[class="c-gsmDXe c-irapcY mchNoDecorate"]')}

    async checkRedirectingToCookiePolicyPage() {
        await expect(browser).toHaveUrlContaining('https://telnyx.com/cookie-policy')
    }

    async clickPrivacyPolicyButton(){
        await this.privacyPolicyButton.click()
    }
}
export default new CookiePolicyPage();