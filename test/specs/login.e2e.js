const LoginPage = require('../pageobjects/login.page');

describe('Login in the App', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();
        LoginPage.login('test@gmail.com', '12345678');

        expect(LoginPage.getMessage()).toHaveTextContaining('Email: test@gmail.com Password: 12345678');

        expect(LoginPage.emailError).toHaveText('');
        expect(LoginPage.emailError).toHaveText('');
    });

    it('should return error message in email field when email is not valid', () => {
        LoginPage.open();
        LoginPage.setEmail('test');

        expect(LoginPage.emailError).toHaveText('Valid email is required.');
    });

    it('should go to register page when click on link', () => {
        LoginPage.open();
        LoginPage.goToRegister();

        expect(browser).toHaveTitle('Register');
    });
});
