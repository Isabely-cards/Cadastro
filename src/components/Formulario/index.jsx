import Campo from "../Campo";
import styled from "styled-components";
import ListaSuspensa from "../ListaSuspensa";
import Button from "../Button";

const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 100vh;
    align-items: center;
    margin: 90px 90px;
    
    h1 {
        font-size: 29px;
        text-align: center;
    }
`;

const Form = styled.form`
    width: 600px;
    background-color: #ccc;
    border-radius: 20px;
    padding: 36px 36px;
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.3);
`;

const Container = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-around;
`;

function Formulario() {
    const generos = ['Masculino', 'Feminino', 'Outro'];
   
    return (
        <Section>
            <Form method="post">
                <h1>Cadastro</h1>
                <Campo
                    label="Nome" 
                    placeholder="Digite seu nome"
                />
                <Campo
                    label="E-mail" 
                    placeholder="Digite seu email"
                    type="email"

                />
                <Campo
                    label="Senha" 
                    placeholder="Digite sua senha" 
                    type="password"
                />
                <Campo
                    label="Confirmar Senha" 
                    placeholder="Confirmar Senha" 
                    type="password"
                />
                <Container>
                    <ListaSuspensa 
                        label="Gênero" 
                        options={generos} 
                    />
                    <Campo
                        type="date"
                        label="Data de nascimento" 
                    />
                </Container>
                <Campo
                    label="Cidade" 
                    placeholder="Digite sua cidade" 
                />
                <Campo
                    label="País" 
                    placeholder="Digite seu país" 
                />
                <Button>Cadastrar</Button>
            </Form>
        </Section>
    );
}

export default Formulario;
