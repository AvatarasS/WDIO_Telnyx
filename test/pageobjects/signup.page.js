class SignupPage{

    get promoCodeButton(){ return $$('[class*="c-edMhbw c-cXPFLv"]')[0]}

    get promoCodeInputField(){ return $$('[class="c-bwSdyA"] input')[4]}

    get passwordEyeButton(){ return $('[class="c-bWwiBK"]')}

    get passwordField(){ return $('#password')}

    async checkRedirectingToSignupPage(){
        await expect(browser).toHaveUrlContaining('https://telnyx.com/sign-up')
    }

    async clickPromoCodeButton(){
        await this.promoCodeButton.click()
    }

    async checkPromoCodeField(){
        await expect(this.promoCodeInputField).toBeDisplayed();
    }

    async fillPasswordField(){
        await this.passwordField.setValue('randompassword')
    }

    async clickPasswordEyeButton(){
        await this.passwordEyeButton.click()
    }

    async checkPasswordIsHidden(){
        await expect(this.passwordField).toHaveAttribute('type', 'password')
    }

    async checkPasswordIsVisible(){
        await expect(this.passwordField).toHaveAttribute('type', 'text')
    }
}
export default new SignupPage();