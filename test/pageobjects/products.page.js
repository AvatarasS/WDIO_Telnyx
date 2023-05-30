class ProductsPage{

    get contactUsButton(){ return $('[class="c-gsmDXe c-irapcY mchNoDecorate"]')}

    async clickContactUsButton(){
        await this.contactUsButton.click()
    }

    async checkRedirectingToProductsPage(){
        await expect(browser).toHaveUrlContaining('https://telnyx.com/products')
    }

}
export default new ProductsPage();