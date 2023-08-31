import styled from 'styled-components'

export const PageNotFound = styled.div`
height: 100vh;
width: 100%;
/* background-color: #fbb5cd; */
/* background-color: #ffd2e7; */
background-color: #fca3b7;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
/* place-items: center; */

section {
    padding: 30px; 
    padding-Bottom: 60px;
    background-color: white;
    border: 4px solid pink; 
    border-Radius: 15px;
    box-shadow: 5;
}

h1{
    font-size: 40px;
    margin-bottom: 50px;
}

p{
    align-self: center;
    font-size: 22px;
    color: red;
}

h3{
    margin-top: 50px;
    margin-Bottom: 25px;
}
`
export const ButtonArea = styled.div`

margin-top: 40px;
width: 100%;
display: flex;
flex-direction: column;
/* align-self: center; */
align-items: center;

button{
    width: 300px;
    background-color: lightcyan;
    border: 2px solid lightblue;

    :hover{
        background-color: lightgreen;

    }
}
`