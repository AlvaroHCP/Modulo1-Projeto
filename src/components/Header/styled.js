import styled from "styled-components";

const HeaderStyled = styled.header`

border-bottom: 1px solid black;
/* position: fixed; */
min-height: 50px;
/* background-color: darkcyan; */
background-color: #72b1b0;
/* border-radius: 10px; */
border-bottom-left-radius: 8px;
border-bottom-right-radius: 8px;

#grid {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

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