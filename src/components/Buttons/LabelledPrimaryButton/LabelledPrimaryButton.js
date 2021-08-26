import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../Colors/Colors'
import Icon from './Icon'

const LabelledButton = styled.button`
    width: 153px;
    height: 35px;
    
    background-color: ${colors.neutral100};
    background-url: "./icon-default-button.png";
    color: ${colors.text};
`
// fixme
export const LabelledPrimaryButton = ({ children, className, icon }) => {
    return (
        <LabelledButton className={className}>
            <Icon/>
            
            </LabelledButton>
        
    )
}

export default LabelledPrimaryButton;