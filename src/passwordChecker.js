export class Main {

    isvalidatePassword(password) {
        const hasMinimumLength = password.length >= 8;
        const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        return hasMinimumLength && hasSpecialCharacter;
    }
}