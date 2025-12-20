import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
function Login() {
    const { container, title, boxRememberMe, lostPW, boxBtn } = styles;
    return (
        <div className={container}>
            <div className={title}>SIGN IN</div>
            <InputCommon label={'Username or email'} type={'text'} isRequired />
            <InputCommon label={'Password'} type={'password'} isRequired />
            <div className={boxRememberMe}>
                <input type='checkbox' />
                <span>Remember me</span>
            </div>
            {/* <Button content={'LOGIN'} className={boxBtn} /> */}
            <button className={boxBtn}>LOGIN</button>
            <div className={lostPW}>Lost your password?</div>
        </div>
    );
}

export default Login;
