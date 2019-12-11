import React from 'react';
import { TextStyle, StyleSheet } from 'react-native';
import { Theme } from 'config/theme';
import { Status } from 'types';
import { H3 } from './Typography';

type StatusMap = {
    [key in Status]: TextStyle;
};

const StatusMap: StatusMap = {
    'Alive': { color: Theme.colors.accent, borderColor: Theme.colors.accent },
    'Dead': { color: Theme.colors.danger, borderColor: Theme.colors.danger },
    'unknown': { color: Theme.colors.secondaryAccent, borderColor: Theme.colors.secondaryAccent },
};

type Props = {
    style: TextStyle;
    status: Status;
};

const styles = StyleSheet.create({
    base: {
        borderWidth: Theme.baseValue * Theme.dimension.small * Theme.dimension.small,
        borderRadius: 4,
        paddingHorizontal: Theme.baseValue * Theme.dimension.medium,
    }
});

export const StatusBadge = ({ status, style }: Props) => (
    <H3 style={[ style, styles.base, StatusMap[status] ]}>{status}</H3>
);