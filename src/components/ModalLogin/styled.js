import styled from 'styled-components'

const ButtonAreaStyled = styled.div`
margin-top: 6px;
height: 40px;
display: flex;
align-content: center; 
justify-content: space-evenly;

    Button {
    margin-left: 4px;
    margin-right: 4px;
    margin-bottom: 5px;
    border: 1px solid lightblue;
    :hover{
        border: 1px solid ;
    }
}
`

const ModalStyled = styled.div`
    Dialog {
        background-color: red;
    }
`

export { ButtonAreaStyled, ModalStyled }