import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@components/Button/Button';
function Login() {
    const { container, title, boxRememberMe, lostPW } = styles;
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required')
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });
    return (
        <div className={container}>
            <div className={title}>SIGN IN</div>
            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id='email'
                    label={'Email'}
                    type={'text'}
                    isRequired
                    // onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                    // value={formik.values.email}
                    formik={formik}
                />
                <InputCommon
                    id='password'
                    label={'Password'}
                    type={'password'}
                    isRequired
                    // onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                    // value={formik.values.password}
                    formik={formik}
                />
                <div className={boxRememberMe}>
                    <input type='checkbox' />
                    <span>Remember me</span>
                </div>
                <Button content={'LOGIN'} type={'submit'} />
            </form>
            <div className={lostPW}>Lost your password?</div>
        </div>
    );
}

export default Login;
