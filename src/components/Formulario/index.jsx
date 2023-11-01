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
    margin-top: -90px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 600px;
    background-color: #ccc;
    border-radius: 20px;
    padding: 36px 36px;
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.3);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Altere para "space-between" para criar duas colunas. */
  flex-wrap: wrap; /* Isso permite que as colunas se quebrem para uma nova linha quando o espaço for insuficiente. */
`;

const Column = styled.div`
  flex: 1; /* Isso faz com que cada coluna ocupe metade da largura do container. */
  padding: 10px; /* Adicione um espaçamento entre as colunas, se desejar. */
`;

function Formulario() {
    const generos = ['Masculino', 'Feminino', 'Outro'];

    return (
        <Section>

            <Form method="post">
                <Container>
                    <Column>
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
                    </Column>
                    <Column>
                        <ListaSuspensa
                            label="Gênero"
                            options={generos}
                        />
                        <Campo
                            type="date"
                            label="Data de nascimento"
                        />
                        <Campo
                            label="Cidade"
                            placeholder="Digite sua cidade"
                        />
                        <Campo
                            label="País"
                            placeholder="Digite seu país"
                        />
                    </Column>
                </Container>
                <Button>Cadastrar</Button>
            </Form>
        </Section>
    );
}

export default Formulario;
