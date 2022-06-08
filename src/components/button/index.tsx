import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

const Button: React.FC = ({ children }) => {
    return (
        <TouchableWithoutFeedback>
            {children}
        </TouchableWithoutFeedback>
    );
}

export default Button;