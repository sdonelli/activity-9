const RegisterPage = require('../pageobjects/register.page');

describe('Register in the App', () => {
    it('should register when data is valid', () => {
        RegisterPage.open();
        RegisterPage.setupInterceptor();
        RegisterPage.expectSuccessRequest();
        RegisterPage.register('Sincere@april.biz', 'Leanne Graham', '12345678', '12345678');

        expect(RegisterPage.getMessage()).toHaveTextContaining('Email: Sincere@april.biz Full name: Leanne Graham Password: 12345678 Confirm password: 12345678');

        expect(RegisterPage.emailError).toHaveText('');
        expect(RegisterPage.fullNameError).toHaveText('');
        expect(RegisterPage.passwordError).toHaveText('');
        expect(RegisterPage.confirmPasswordError).toHaveText('');

        RegisterPage.assertRequests();
        expect(RegisterPage.getRegisterResponse()).toBe('User has been created.');
    });

    it('should not register when email and full name are invalid', () => {
        RegisterPage.open();
        RegisterPage.register('Sincere@', 'Leanne', '12345678', '12345678');
        RegisterPage.forceOnBlur();

        expect(RegisterPage.emailError).toHaveText('Valid email is required.');
        expect(RegisterPage.fullNameError).toHaveText('Full name should only contains letters and spaces.');

    });

    it('should return error message when password does not match', () => {
        RegisterPage.open();
        RegisterPage.register('Sincere@april.biz', 'Leanne Graham', '12345678', '12345679');
        RegisterPage.forceOnBlur();

        expect(RegisterPage.confirmPasswordError).toHaveText('Password and confirm password should match.');

    });

    it('should return error message when password has less than 8 characters', () => {
        RegisterPage.open();
        RegisterPage.register('Sincere@april.biz', 'Leanne Graham', '1234', '1234');
        RegisterPage.forceOnBlurIn(RegisterPage.inputPassword, RegisterPage.inputEmail);

        expect(RegisterPage.passwordError).toHaveText('Password should have at least 8 characters.');

    });

});
