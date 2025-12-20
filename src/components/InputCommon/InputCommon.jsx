import { useState } from 'react';
import styles from './styles.module.scss';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
function InputCommon({ label, type, isRequired = false }) {
    const { labelInput, boxInput, container, boxIcon } = styles;
    const [showPassword, setShowpassword] = useState(false);
    const isPassword = type === 'password';
    const isShowpassword = type === 'password' && showPassword ? 'text' : type;
    return (
        <div className={container}>
            <div className={labelInput}>
                {label} {isRequired && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input type={isShowpassword} />
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
            </div>
        </div>
    );
}

export default InputCommon;
