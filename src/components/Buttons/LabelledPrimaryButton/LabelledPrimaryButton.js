import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../Colors/Colors'
import Icon from './Icon'

const LabelledButton = styled.button`
    width: 153px;
    height: 35px;
    border: 1px solid white;
    background-color: ${colors.neutral100};

    span {
        text-align: right;
        position: relative;
        top: 25%;
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