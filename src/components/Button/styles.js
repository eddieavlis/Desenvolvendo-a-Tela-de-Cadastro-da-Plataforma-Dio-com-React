import styled, {css}  from 'styled-components';

export const ButtonContainer = styled.button`
    background: #7f28b5;
    border-radius: 4px;
    position: relative;

    color: #ffffff;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    
    ${({variant}) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        
        background: #7f28b5;

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #7f28b5;
            top: -4px;
            left: -4px;
            right: -4px;
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            border-radius: 4px;
        }
    `}
`
