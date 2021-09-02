import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../Colors/Colors'
import Icon from './Icon'

const LabelledButton = styled.button`
    width: 175px;
    height: 20px;
    border: none;
    color: ${colors.warning200};
    background: ${colors.statusYellow};
    opacity: 0.75;
    border-radius: 5px;
    span {
        text-align: left;
        position: relative;
        left: -43.5px;
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