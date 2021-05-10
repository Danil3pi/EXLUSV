import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
    background-color: ${({primary}) => (primary ? '#000d1a': '#CD853F')};

    border: none;
    min-width: 100px;
    max-width: 200px;

    cursor: pointer;

    text-decoration: none;
    padding: ${({big}) =>( big ? '16px 40px' : '14px 24px')};
    color: ${({primary}) => (primary ? '#fff' : '#000d1a')};
    font-size: ${({big}) => (big ? '20px' : '14px')};

    transition: .3s;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        transform: scale(1.1);//Измененние маштаба элемента

    }
    
`;