import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../Colors/Colors'
import Icon from './Icon'

const LabelledButton = styled.button`
    width: 78px;
    height: 20px;
    border: none;
    color: ${colors.success200};
    background: ${colors.statusGreen};
    opacity: 0.75;
    border-radius: 5px;
    span {
        text-align: right;
        position: relative;
        left: 5px;
    }
`
// fixme
export const LabelledPrimaryButton = ({ children, className, icon }) => {
    return (
        <LabelledButton className={className}>
            <Icon/>
            <span>{children}</span>
            </LabelledButton>
    )
}

export default LabelledPrimaryButton;