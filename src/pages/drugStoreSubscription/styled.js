import styled from 'styled-components'

export const DivStyled = styled.div`
min-height: 65vh;
`

export const ButtonArea = styled.div`

margin-top: 40px;
width: 100%;
display: flex;
flex-direction: column;
/* align-self: center; */
align-items: center;

button{
    width: 250px;
    height: 40px;
    background-color: lightcyan;
    border: 2px solid lightblue;

    :hover{
        background-color: lightgreen;

    }
}
`