class AcceptableUsePage{

    get signupButton(){ return $$('[class="c-gsmDXe c-irapcY mchNoDecorate"]')[0]}

    async checkRedirectingToAcceptableUsePage(){
        await expect(browser).toHaveUrlContaining('https://telnyx.com/acceptable-use-policy')
    }

    async clickSignupButton(){
        await this.signupButton.click()
    }

}
export default new AcceptableUsePage();