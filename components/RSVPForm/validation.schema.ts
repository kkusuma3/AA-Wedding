import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    phoneNumber: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid'),
    email: Yup.string().email('Invalid email'),
    numberOfGuests: Yup.string().required('Required'),
    attendanceConfirmation: Yup.string().required('Required'),
});
