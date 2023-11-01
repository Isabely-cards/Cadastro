import styled from "styled-components"

const ListaEstilizada = styled.div`
    margin: 10px 0;

`
const Label = styled.label`
    color: black;
    display: block;
    margin-bottom: 2px;
    font-size: 24px;
`
const Select = styled.select`
    background: #FFFFFF;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.01);
    font-size: 20px;
    padding: 15px;
    width: 90%;
    
`
const Option = styled.option`
    background: #FFFFFF;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.01);
    font-size: 20px;
    padding: 15px;
`

function ListaSuspensa({ label, options }) {

    return (
        <ListaEstilizada>
            <Label>{label}</Label>
            <Select>
                {options.map((option, index) => (
                    <Option key={index} value={option}>
                        {option}
                    </Option>
                ))}
            </Select>
        </ListaEstilizada>
    )
}

export default ListaSuspensa