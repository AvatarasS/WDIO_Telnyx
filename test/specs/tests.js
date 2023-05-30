import acceptableUsePage from '../pageobjects/acceptable.use.page.js';
import contactUsPage from '../pageobjects/contact.us.page.js';
import cookiePolicyPage from '../pageobjects/cookie.policy.page.js';
import headerPage from '../pageobjects/header.page.js';
import mainPage from '../pageobjects/main.page.js';
import privacyPolicyPage from '../pageobjects/privacy.policy.page.js';
import productsPage from '../pageobjects/products.page.js';
import signupPage from '../pageobjects/signup.page.js';

describe('Testing the Telnyx website', () => {

    beforeEach('', async () => {
        await browser.url('https://telnyx.com/');
        await browser.maximizeWindow();
        mainPage.clickCloseCoockieButton();
    });

    it('#001 Check the availability and correctness of contact information on the Contact Us page.', async () => {
        await headerPage.clickContactusButton();
        await contactUsPage.checkRedirectingToContactUsPage()
        await contactUsPage.checkContacEmail();
        await contactUsPage.checkContactNumber();
    });

    it('#002 Test the redirection to the Login Page when clicking the button in the Contact support block on the Contact Us page.', async () => {
        await headerPage.clickContactusButton();
        await contactUsPage.checkRedirectingToContactUsPage()
        await contactUsPage.checkLoginButton();
    });
    
    it('#003 Test the availability of the "Talk to an expert" form on the Contact Us page.', async () => {
        await headerPage.clickContactusButton();
        await contactUsPage.checkRedirectingToContactUsPage()
        await contactUsPage.checkContactForm();
    });
    
    it('#004 Test the availability of the Talk to a product expert, Contact support, and Report abuse subblocks on the Contact Us page.', async () => {
        await headerPage.clickContactusButton();
        await contactUsPage.checkRedirectingToContactUsPage()
        await contactUsPage.checkTalkToExpertSubblock();
        await contactUsPage.checkContactSupportSubblock();
        await contactUsPage.checkReportAbuseSubblock();
    });
    
    it('#005 Test the availability of the LinkedIn, Twitter, and Facebook link buttons at the footer on the Main page. ', async () => {
        await mainPage.checkLinkedInButton()
        await mainPage.checkTwitterButton()
        await mainPage.checkFacebookButton()
    });
    
    it('#006 Test the redirection to the Telnyx LinkedIn page by clicking the LinkedIn link button in the footer on the Main page.', async () => {
        await mainPage.socialButtons[0].scrollIntoView()
        await mainPage.checkLinkedInButtonRedirection()
    });
    
    it('#007 Test the redirection to the Telnyx Twitter page by clicking the Twitter link button in the footer on the Main page.', async () => {
        await mainPage.socialButtons[1].scrollIntoView()
        await mainPage.checkTwitterButtonRedirection()
    });
    
    it('#008 Test the redirection to the Telnyx Facebook page by clicking the Facebook link button in the footer on the Main page.', async () => {
        await mainPage.socialButtons[2].scrollIntoView()
        await mainPage.checkFacebookButtonRedirection()
    });
    
    it('#009 Test the redirection to the Products page by clicking the "See Products" button at the "Simplifying your workflows" block on the Main page.', async () => {
        await mainPage.seeProductsButton.scrollIntoView()
        await mainPage.clickSeeProductsButton()
        await productsPage.checkRedirectingToProductsPage()
    });
    
    it('#010 Test the redirection to the Sign Up page by clicking the "Create free account" button at the "Delivering transparency" block on the Main page.', async () => {
        await mainPage.createFreeAccountButton.scrollIntoView()
        await mainPage.clickCreateFreeAccountButton()
        await signupPage.checkRedirectingToSignupPage()
    });
    
    it('#011 Test the redirection to the About edge page by clicking the "Learn about the edge" button at the "Helping you reach customers with ease" block on the Main page.', async () => {
        await mainPage.learnEdgeButton.scrollIntoView()
        await mainPage.clickLearnEdgeButtonButton()
        await expect(browser).toHaveUrlContaining('https://telnyx.com/resources/about-edge-connectivity')
    });
        
    it('#012 Test the redirection to the Sign Up page by clicking the Sign Up button at the "Explore our one-stop shop for infra at the edge" block on the Main page.', async () => {
        await mainPage.signUpButton.scrollIntoView()
        await mainPage.clickSignUpButtonButton()
        await signupPage.checkRedirectingToSignupPage()
    });
        
    it('#013 Test the appearance of the "Promo code" field after clicking "Apply a promo code" button in the form on the Sign Up page', async () => {
        await headerPage.clickSignupButton()
        await signupPage.clickPromoCodeButton()
        await signupPage.checkPromoCodeField()
    });
        
    it('#014 Test the redirecting to the Contact Us page after clicking "contact us" on the Products page', async () => {
        await mainPage.clickSeeProductsButton()
        await productsPage.checkRedirectingToProductsPage()
        await productsPage.clickContactUsButton()
        await contactUsPage.checkRedirectingToContactUsPage()
    });
        
    it('#015 Test the redirecting to the Sign Up page after clicking the Link button on the Acceptable Use Policy page', async () => {
        await mainPage.clickAcceptableUseButton()
        await acceptableUsePage.checkRedirectingToAcceptableUsePage()
        await acceptableUsePage.clickSignupButton()
        await signupPage.checkRedirectingToSignupPage
    });
        
    it('#016 Test the redirecting to the Privacy Policy page after clicking the Privacy Policy button on the Telnyx Cookie Policy page', async () => {
        await mainPage.clickCookiePolicyButton()
        await cookiePolicyPage.checkRedirectingToCookiePolicyPage()
        await cookiePolicyPage.clickPrivacyPolicyButton()
        await privacyPolicyPage.checkRedirectingToPrivacyPolicyPage()
    });
        
    it('#017 Test the redirecting to the Telnyx Support Center page after clicking the  "support center" textbutton on the Contact Us page', async () => {
        await headerPage.clickContactusButton()
        await contactUsPage.checkRedirectingToContactUsPage()
        await contactUsPage.checkSupportCenterRedirection()
    });
        
    it('#018 Test the redirecting to the Telnyx Main page after clicking the "Text link" button on the Privacy policy page', async () => {
        await mainPage.clickPrivacyPolicyButton()
        await privacyPolicyPage.checkRedirectingToPrivacyPolicyPage()
        await privacyPolicyPage.clickTelnyxMainPageLinkButton()
        await mainPage.checkRedirectingToTelnyxMainPage()
    });
        
    it('#019 Test the redirecting to the Cookie Policy page after clicking the Cookie Policy textbutton on the Privacy policy page', async () => {
        await mainPage.clickPrivacyPolicyButton()
        await privacyPolicyPage.checkRedirectingToPrivacyPolicyPage()
        await privacyPolicyPage.clickCookiePolicyButton()
        await cookiePolicyPage.checkRedirectingToCookiePolicyPage()
    });
        
    it('#020 Test the revealing of the entered password in the Password field on the Sign Up page by clicking the Password Eye button', async () => {
        await headerPage.clickSignupButton()
        await signupPage.checkRedirectingToSignupPage()
        await signupPage.fillPasswordField()
        await signupPage.checkPasswordIsHidden()
        await signupPage.clickPasswordEyeButton()
        await signupPage.checkPasswordIsVisible()
    });
    
    
});