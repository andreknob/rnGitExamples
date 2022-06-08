import React from 'react';
import Button from '../button';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    button: {
      padding: 8,
      backgroundColor: "#eaeaea"
    },
  })

const StyledButton: React.FC = ({ children }) => {
    return (
        <Button style={Styles.button}>{children}</Button>
    )
}

export default StyledButton;
