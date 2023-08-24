class FormValidation 
{
    static validateForm(email, password) 
    {
        let isValid = true;
        var errors = {
            email: '',
            password: ''
        };

        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/;

        const isemailValid = emailPattern.test(email);
        const isPasswordValid = password.length >= 6;

        isValid = isemailValid && isPasswordValid;

        if(!isemailValid){
            errors.email = 'Invalid email!';
        }
        if(!isPasswordValid){
            errors.password = 'Invalid password!';
        }
        return { isValid, errors };
    }
}
export default FormValidation;
