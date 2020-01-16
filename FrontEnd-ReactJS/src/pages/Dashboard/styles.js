import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 30px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;

    form {
        margin-top: 30px;

        > button {
            width: 100%;
            border: 0;
            margin-top: 30px;
            background: #7d40e7;
            border-radius: 4px;
            padding: 15px 20px;
            font-size: 16px;
            font-weight: bold;
            color: #fff;

            &:hover {
                background: #6931ca;
                transition: background 0.5s;
            }
        }
    }
`;

export const Aside = styled.aside`
    width: 320px;
    background: #fff;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    padding: 30px 20px;

    strong {
        font-size: 20px;
        text-align: center;
        display: block;
        color: #333;
    }
`;

export const Main = styled.main`
    flex: 1;
    margin-left: 30px;

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        list-style: none;
    }
`;
