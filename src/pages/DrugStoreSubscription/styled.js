import styled from 'styled-components'

export const DivStyled = styled.div`
min-height: 65vh;
width: 740px;
/* margin-left: 340px; */
margin-left: calc((100% - 800px) / 2);
/* display: flex;
place-content: center; */
/* direction: column; */
/* justify-self: center; */
/* align-self: center; */
`

export const ButtonArea = styled.div`

margin-top: 40px;
margin-bottom: 20px;
width: 100%;
display: flex;
flex-direction: column;
/* align-self: center; */
align-items: center;

button{
    width: 250px;
    height: 35px;
    font-size: 12px;
    background-color: lightcyan;
    border: 2px solid lightblue;

    :hover{
        background-color: lightgreen;

    }
}
`