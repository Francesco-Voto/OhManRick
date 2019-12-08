import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Theme } from 'config/theme';

const styles = StyleSheet.create({
    h1: {
        fontSize: Theme.baseValue * Theme.text.h1,
        color: Theme.colors.primaryText,
    },
    h2: {
        fontSize: Theme.baseValue * Theme.text.h2,
        color: Theme.colors.primaryText,
    },
    h3: {
        fontSize: Theme.baseValue * Theme.text.h3,
        color: Theme.colors.primaryText,
    },
    paragraph: {
        fontSize: Theme.baseValue * Theme.text.paragraph,
        color: Theme.colors.secondaryText,
    }
});

export const H1 = ({ style, ...props}) => <Text style={[styles.h1, style ]} {...props} />
export const H2 = ({ style, ...props}) => <Text style={[styles.h2, style ]} {...props} />
export const H3 = ({ style, ...props}) => <Text style={[styles.h3, style ]} {...props} />
export const Paragraph = ({ style, ...props}) => <Text style={[styles.paragraph, style ]} {...props} />