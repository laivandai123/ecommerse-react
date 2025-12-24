import { useState } from 'react';
import styles from './styles.module.scss';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
function InputCommon({ label, type, isRequired = false, ...props }) {
    const { labelInput, boxInput, container, boxIcon, errMessage } = styles;
    const [showPassword, setShowpassword] = useState(false);
    const isPassword = type === 'password';
    const isShowpassword = type === 'password' && showPassword ? 'text' : type;
    const { formik, id } = props;
    const isErr = formik.touched[id] && formik.errors[id];
    const messageErr = formik.errors[id];
    return (
        <div className={container}>
            <div className={labelInput}>
                {label} {isRequired && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input
                    type={isShowpassword}
                    {...props}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values[id]}
                />
                {isPassword && (
                    <div
                        className={boxIcon}
                        onClick={() => setShowpassword(!showPassword)}
                    >
                        {showPassword ? (
                            <AiOutlineEyeInvisible />
                        ) : (
                            <AiOutlineEye />
                        )}
                    </div>
                )}
                {isErr && <div className={errMessage}>{messageErr}</div>}
            </div>
        </div>
    );
}

export default InputCommon;
