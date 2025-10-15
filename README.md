
# Aplicação para gerenciamento de professores e aulas particulares

## índice

- [Descrição](#descrição)
- [Front-end](#front-end)
- [Back-end](#back-end)

## Descrição

Uma aplicação desenvolvida com Next, para que alunos possam contratar professores para dar aulas particulares. O sistema permiti que professores realizem seu cadastro e gerenciem suas aulas, além de permitir que alunos busquem professores por descrição.


## Front-end

#### Clonando o projeto da API
```bash
git clone https://github.com/higorgustavo/frontend_contratacao_professores.git
```

#### Instalação de dependências
Após clonar o projeto, execute o comando:
```bash
npm install
```
Concluída a instalação de dependências, inicie a aplicação com o comando:

```bash
npm run dev
# ou
yarn dev
```

## Back-end

Para baixar e ativar o back-end da aplicação siga os passos a seguir.

#### Clonando o projeto da API
```bash
git clone https://github.com/higorgustavo/api_contratacao_professores.git
```

#### Instalação de dependências
Após clonar o projeto, crei e ative seu Ambiente Virtual Python.

No Windows com o comando: `python -m venv .venv` e para ativar: `.venv\Scripts\activate`

No Linux com o comando: `python3 -m venv .venv` e para ativar: `source .venv/bin/activate`

Instale as dependências do projeto: 
```bash
pip install -r requirements.txt
```

#### Configuração das variáveis de ambiente
Renomeie o `.env.example` removendo ".example" e defina as variáveis de ambiente.

#### Banco de Dados
Após criar o banco de dados com o mesmo nome que foi informado no `DATABASE_URL` do arquivo `.env`.
Execute o comando:

```bash
python manage.py migrate
```

Para inciar o servidor execute o comando:

```bash
python manage.py runserver
```

*Obs.: A aplicação está configurada para executar localmente, devido aos parâmetros de configuração do S3 estarem desativados na API. Configure `.env` com a porta que estiver executando o back-end.*