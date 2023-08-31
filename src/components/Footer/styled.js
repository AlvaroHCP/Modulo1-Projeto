import styled from 'styled-components'

const FooterStyled = styled.footer`
/* display: flex;
align-items: center;
justify-content: space-between; */
/* justify-content: center; */
width: 100%;
/* height: 100px; */
/* height: 100%; */
bottom: 0;
left: 0;
right: 0;
/* position: fixed; */
margin-Top: 30px;
border-top: 1px solid grey;
/* background-color: lightgreen; */
background-color: darkcyan;
/* border-radius: 10px; */
border-top-left-radius: 8px;
border-top-right-radius: 8px;

div {
    margin: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

p{
    margin: 0px;
    /* margin-left: 10px;
    margin-right: 10px; */
    display: flex;
    align-items: center;
    justify-content: center;
}
`

export default FooterStyled