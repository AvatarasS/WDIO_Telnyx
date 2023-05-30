class HeaderPage {
    
    get contactusButton(){ return $('[class*="ideTXhm-css"] a[href*="contact"]')}

    get signupButton(){ return $$('header [class="c-hakyQ"]')[0]}

    async clickContactusButton(){
        await this.contactusButton.click()
    }

    async clickSignupButton(){
        await this.signupButton.click()
        await expect(browser).toHaveUrlContaining('https://telnyx.com/sign-up')
    }

 }
export default new HeaderPage();