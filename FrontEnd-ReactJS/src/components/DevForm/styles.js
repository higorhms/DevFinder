import styled from 'styled-components';

export const InputBlock = styled.div`
    & + div {
        margin-top: 20px;
    }

    label {
        color: #acacac;
        font-size: 14px;
        font-weight: bold;
        display: block;
    }

    input {
        width: 100%;
        height: 32px;
        font-size: 14px;
        color: #666;
        border: 0;
        border-bottom: 1px solid #eee;
    }
`;

export const InputGroup = styled.div`
    margin: 20px;
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;

    div {
        margin: 0;
    }
`;
