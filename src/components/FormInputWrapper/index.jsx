import { Button, Checkbox, Form, Input } from 'antd';
import PropTypes from "prop-types";


const FormInputWrapper = (props) => {
    const {
        label= null,
        rules= [],
        placeholder,
        icon,
        children= null,
        required= false,
        passwordInput= false,
        name,
        id,
        classname = '',
        type,
        value,
        disabled= false,
        allowClear= false,
        changeHandler = () => {},
        min= 0,
        max= 0,
        error,
    } = props;


    return (
        <>
            {children}
            <Form.Item
                label={label}
                name={name}
                rules={rules}
                required={required}
                validateStatus={error ? 'error': undefined}
                help={error}
                hasFeedback
            >
                {
                    passwordInput ? (
                        <Input.Password 
                            className={classname}
                            type={type}
                            id={id}
                            min={min}
                            value={value | ''}
                            max={max}
                            name={name}
                            prefix={icon}
                            placeholder={placeholder}
                            disabled={disabled}
                            onChange={changeHandler}
                            allowClear={allowClear}
                        />
                    ): (
                        <Input 
                            className={classname}
                            type={type}
                            id={id}
                            min={min}
                            value={value | ''}
                            max={max}
                            name={name}
                            prefix={icon}
                            placeholder={placeholder}
                            disabled={disabled}
                            onChange={changeHandler}
                            allowClear={allowClear}
                        />
                    )
                }
            </Form.Item>
        </>
    );
}

FormInputWrapper.propTypes = {
    children: PropTypes.node,
    error: PropTypes.string,
    rules: PropTypes.array,
    min: PropTypes.number,
    max: PropTypes.number,
    allowClear: PropTypes.bool,
    disabled: PropTypes.bool,
    passwordInput: PropTypes.bool,
    label: PropTypes.object,
    name: PropTypes.string,
    id: PropTypes.string,
    classname: PropTypes.string,
    changeHandler: PropTypes.func,
    value: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    icon: PropTypes.object,
};

export default FormInputWrapper;