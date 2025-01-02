## cypress-basico-v2

Este é um exemplo de projeto desenvolvido para o curso básico da escola online `Talking About Testing`.

## Pré-requisitos

Antes de começar, garanta que os seguintes sistemas estejam instalados em seu computador.

`Node.js` e `npm`: Este projeto foi testado com as versões `v16.13.2` do Node.js e `8.3.2` do npm. Recomenda-se usar estas ou versões posteriores.

`Git`: (opcional, mas recomendado para controle de versão).

Para verificar se as ferramentas estão instaladas e suas versões, execute o seguinte comando no terminal: `git --version && node --version && npm --version`


## Instalação

Execute `npm install` (ou `npm i` para a versão curta) para instalar as dependências de desenvolvimento. Ao instalar o Node.js o npm é instalado junto. 


## Testes

Esse projeto você poderá simular em modo desktop ou mobile viewport.

### Desktop

Execute `npm test` (ou `npm t` para a versão curta) para executar o teste no modo headless em uma janela de visualização de desktop. 

Ou execute `npm run cy:open` para abrir o Cypress no modo interativo em uma janela de visualização de desktop.

### Mobile

Execute `npm run test:mobile` para executar o teste no modo headless uma janela de visualização móvel.

Ou execute `npm run cy:open:mobile` para abrir o Cypress no modo interativo uma janela de visualização móvel.