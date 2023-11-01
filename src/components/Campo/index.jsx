import styled from "styled-components"

const CampoEstilizado = styled.div`
    margin: 10px 0;
`
const Label = styled.label`
    color: black;
    display: block;
    margin-bottom: 2px;
    font-size: 24px;
    
`
const Input = styled.input`
    background: #FFFFFF;
    border-radius: 10px;
    width: 90%;
    border: 1px solid rgba(0, 0, 0, 0.01);
    font-size: 20px;
    padding: 20px;
    box-sizing: border-box;

`

function Campo({ type = 'text', placeholder, label }) {
    return (
        <CampoEstilizado>
            <Label>{label}</Label>
            <Input
                required
                type={type}
                placeholder={placeholder}
            />
        </CampoEstilizado>
    )
}
export default Campo