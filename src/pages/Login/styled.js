import styled from 'styled-components'

const DivStyled = styled.main`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
place-content: center;
flex-direction: column;
`

const LoginStyled = styled.div`
@media only screen and (max-width: 425px) {
    width: 300px;
}
width: 500px;

display: flex;
align-items: center;
justify-content: center;
place-content: center;
flex-direction: column;
padding-top: 15px;
padding-bottom: 20px;

border: 3px solid green;
border-radius: 10px;

h1 {
    width: 300px;
    
    text-align: center;
    margin: 0px;
    margin-bottom: 30px;
    padding-top: 10px;
    padding-bottom: 30px;
    border-bottom: 2px solid aquamarine;
}
`

const FormStyled = styled.form`
input {
    width: 250px;
    margin-top: 10px;
    margin-bottom: 20px;
    display: block;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(255, 0, 0));
    
    :focus{
        /* border: 3px solid red; */
    }

    /* :invalid{
        border-color: red;
        border-radius: 5px;

    }
    :valid{
        border-color: green;
        border-radius: 5px;
    } */
}

/* input[required] {
    :focus{
        border-color: red;

    }
} */

Link {
 
}
`

const ButtonDiv = styled.div`
width: 100%; 
display: flex; 
justify-content: flex-end;

button {
    margin-top: 20px;
    width: 100px;
    background-color: aquamarine;
    border-radius: 5px;
    border-color: lightgreen;
}
`

export { DivStyled, LoginStyled, FormStyled, ButtonDiv }



export const ButtonArea = styled.div`

margin-top: 40px;
margin-bottom: 20px;
width: 100%;
display: flex;
flex-direction: column;
/* align-self: center; */
align-items: flex-end;

button{
    width: 120px;
    height: 35px;
    font-size: 12px;
    background-color: lightcyan;
    border: 2px solid lightblue;

    :hover{
        background-color: lightgreen;

    }
}
`