import React from 'react';
import { TouchableHighlight } from 'react-native';

// TODO: example
const Button: React.FC = ({ children }) => {
    return (
        <TouchableHighlight>
            {children}
        </TouchableHighlight>
    );
}

export default Button;