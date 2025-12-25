import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@components/Button/Button';
import { useContext, useState } from 'react';
import { ToastContext } from '@/contexts/Toastprovider';
import { register, login } from '@/apis/authService';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/Sidebarprovider';
import { StoreContext } from '@/contexts/Storeprovider';
function Login() {
    const { container, title, boxRememberMe, lostPW } = styles;
    const [isRegister, setIsRegister] = useState(false);
    const handleToggle = () => {
        setIsRegister(!isRegister);
        formik.resetForm();
    };
    const { toast } = useContext(ToastContext);
    const [isLoading, setIsLoading] = useState(false);
    const { setOpen } = useContext(SideBarContext);
    const { setUserId } = useContext(StoreContext);
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
                .required('Password is required'),
            cfmpassword: Yup.string().oneOf(
                [Yup.ref('password'), null],
                'Password must match'
            )
        }),
        onSubmit: async (values) => {
            if (isLoading) return;
            const { email: username, password } = values;
            setIsLoading(true);

            if (isRegister) {
                return await register({ username, password })
                    .then((res) => {
                        toast.success(res.data.message);
                        setIsLoading(false);
                    })
                    .catch((err) => {
                        toast.error(err.response.data.message);
                        setIsLoading(false);
                    });
            }
            if (!isRegister) {
                return await login({ username, password })
                    .then((res) => {
                        setIsLoading(false);
                        const { id, token, refreshToken } = res.data;
                        setUserId(id);
                        Cookies.set('token', token);
                        Cookies.set('useId', id);
                        Cookies.set('refreshToken', refreshToken);
                        setOpen(false);
                    })
                    .catch(() => {
                        setIsLoading(false);
                    });
            }
        }
    });
    return (
        <div className={container}>
            <div className={title}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>
            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id='email'
                    label={'Email'}
                    type={'text'}
                    isRequired
                    formik={formik}
                />
                <InputCommon
                    id='password'
                    label={'Password'}
                    type={'password'}
                    isRequired
                    formik={formik}
                />
                {isRegister && (
                    <InputCommon
                        id='cfmpassword'
                        label={'Confirm password'}
                        type={'password'}
                        isRequired
                        formik={formik}
                    />
                )}
                {!isRegister && (
                    <div className={boxRememberMe}>
                        <input type='checkbox' />
                        <span>Remember me</span>
                    </div>
                )}
                <Button
                    content={
                        isLoading
                            ? 'LOADING...'
                            : isRegister
                            ? 'REGISTER'
                            : 'LOGIN'
                    }
                    type={'submit'}
                    // onClick={() => toast.success('success')}
                />
            </form>
            <Button
                content={
                    isRegister
                        ? 'Already have an account?'
                        : 'Don’t have an account?'
                }
                isPrimary={false}
                style={{ marginTop: '10px' }}
                onClick={handleToggle}
            />
            {!isRegister && <div className={lostPW}>Lost your password?</div>}
        </div>
    );
}

export default Login;
