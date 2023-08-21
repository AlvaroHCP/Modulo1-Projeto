import styled from "styled-components";

const HeaderStyled = styled.header`
display: flex;
align-items: center;
justify-content: space-evenly;
border-bottom: 1px solid black;
/* position: fixed; */
min-height: 50px;

section {
    display: flex;
    align-items: center;
}

img {
    width: 30px;
    height: 30px;
}


`

export { HeaderStyled }