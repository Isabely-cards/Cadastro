import styled from "styled-components"

const ListaEstilizada = styled.div`
    margin-left: -60px;
    margin-right: -200px;
    min-height: 8vh;
    justify-content: space-evenly;
`
const Label = styled.label`
    color: black;
    display: flex;
    margin-bottom: 8px;
    font-size: 24px;
`
const Select = styled.select`
    background: #FFFFFF;
    border-radius: 10px;
    font-size: 24px;
    padding: 15px;
    box-sizing: border-box;
    
`
const Option = styled.option`
    background: #FFFFFF;
    border-radius: 10px;
    width: 90%;
    border: 1px solid rgba(0, 0, 0, 0.01);
    font-size: 20px;
    padding: 20px;
    box-sizing: border-box;
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