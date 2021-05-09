const LoginPage = require('../pageobjects/login.page');

describe('Login in the App', () => {

    beforeEach(() => {
        LoginPage.resetRequestExpectations();
    });

    it('should login with valid credentials', () => {
        LoginPage.open();
        LoginPage.setupInterceptor();
        LoginPage.expectSuccessRequest();
        LoginPage.login('test@gmail.com', '12345678');

        expect(LoginPage.getMessage()).toHaveTextContaining('Email: test@gmail.com Password: 12345678');

        expect(LoginPage.emailError).toHaveText('');
        expect(LoginPage.emailError).toHaveText('');

        LoginPage.assertRequests();
        expect(LoginPage.getLoginResponse()).toBe('Login success.');
    });

    it('should return error message in email field when email is invalid', () => {
        LoginPage.open();
        LoginPage.login('test', '12345678');
        LoginPage.forceOnBlur();

        expect(LoginPage.emailError).toHaveText('Valid email is required.');
    });

    it('should return error message in password field when password is invalid', () => {
        LoginPage.open();
        LoginPage.login('test@gmail.com', '1234');
        LoginPage.forceOnBlurIn(LoginPage.inputPassword, LoginPage.inputEmail);

        expect(LoginPage.passwordError).toHaveText('Password should have at least 8 characters.');
    });

    it('should go to register page when click on link', () => {
        LoginPage.open();
        LoginPage.goToRegister();

        expect(browser).toHaveTitle('Register');
    });

    it('should not login when credentials are invalid', () => {
        LoginPage.open();
        LoginPage.setupInterceptor();
        LoginPage.expectFailureRequest();
        LoginPage.login('notvalid@gmail.com', 'abcdefghijk');

        LoginPage.assertRequests();
        expect(LoginPage.getLoginResponse()).toBe('Invalid credentials.');
    });
});
