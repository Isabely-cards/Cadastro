import styled from "styled-components"

const DivEstilizada = styled.div`
    display: flex;
    justify-content: center;
`

const ButtonEstilizado = styled.button`
    background-color: #27005D  ;
    color: #ccc;
    font-size: 24px;
    padding: 15px 15px 15px 15px;
    border: 1px solid black;
    border-radius: 10px; 
    

`


function Button({children}) {


    return (
        <DivEstilizada>
            <ButtonEstilizado type="submit">{children}</ButtonEstilizado>
        </DivEstilizada>
    )
}
export default Button