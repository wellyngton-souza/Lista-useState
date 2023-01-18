import styled from "styled-components";

export const Mainbox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    font-family: 'Roboto';

    .spaceEscolha{
        display: block;
    }

    .inserir{
        width: 100px;
    }

    button{
        width: 300px;
        padding: 10px 0;
        margin: 10px 0;
        color: white;
    }

    input{
        width: 300px;
        padding: 10px 0;
        color: white;
    }

    @media (max-width: 768px){
        button{
            width: 100px;
            padding: 10px 0;
            margin: 10px 0;
            color: white;
        }
    
        input{
            width: 100px;
            padding: 10px 0;
            color: white;
        }

        .inserir{
            width: 75px;
        }
    }
`;