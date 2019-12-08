import React from 'react';
import { TextStyle } from 'react-native';
import { Theme } from 'config/theme';
import { Status } from 'types';
import { H3 } from './Typography';

type StatusMap = {
    [key in Status]: TextStyle;
};

const StatusMap: StatusMap = {
    'Alive': { color: Theme.colors.accent },
    'Dead': { color: Theme.colors.danger },
    'unknown': { color: Theme.colors.secondaryAccent },
};

type Props = {
    style: TextStyle;
    status: Status;
};

export const StatusBadge = ({ status, style }: Props) => (
    <H3 style={[ style, StatusMap[status] ]}>{status}</H3>
);