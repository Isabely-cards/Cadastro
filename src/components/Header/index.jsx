import styled from "styled-components";

const HeaderEstilizado = styled.header`
    width: 100%;
    margin: 0 auto; /* Defina a margem superior e inferior como 0 */
    color: white;
    font-size: 30px;
    padding: 60px 0; /* Ajuste o preenchimento superior e inferior conforme necessário */
    background-color: #27005D;
    text-align: center; /* Centralize o texto */
`;

function Header() {
    return (
        <HeaderEstilizado>
            Formulário
        </HeaderEstilizado>
    );
}

export default Header;
