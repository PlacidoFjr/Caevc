# Portfólios da Cidade - Prefeitura

Este projeto é um site de portfólios desenvolvido em React, com design atualizado para a prefeitura, incluindo uma nova paleta de cores verdes e o slogan "Dê a primeira oportunidade para quem é da terra".

## Funcionalidades Principais

- **Design Moderno:** Paleta de cores baseada em tons de verde, com gradientes e elementos visuais atualizados.
- **Slogan Integrado:** O slogan "Dê a primeira oportunidade para quem é da terra" é exibido de forma destacada na seção principal.
- **Componentes Reutilizáveis:** Estrutura de componentes React para fácil manutenção e escalabilidade.
- **Responsividade:** Layout adaptável para diferentes tamanhos de tela (desktop, tablet, mobile).
- **Tipografia Profissional:** Utilização de fontes Playfair Display para títulos e Inter para textos, conferindo um visual mais sofisticado.
- **Efeitos Visuais:** Cards com sombras e efeitos de hover, e um botão CTA com gradiente e animação.
- **Imagem de Fundo Sutil:** A imagem de referência da CAEVC é utilizada como fundo da seção principal com um efeito desfocado e sutil.

## Como Usar

Para configurar e executar este projeto localmente, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o Node.js e o pnpm instalados em sua máquina.

- [Node.js](https://nodejs.org/en/download/)
- [pnpm](https://pnpm.io/installation)

### Instalação

1.  **Clone o repositório (ou descompacte o arquivo zip):**

    Se você recebeu um arquivo zip, descompacte-o em um diretório de sua escolha.

2.  **Navegue até o diretório do projeto:**

    ```bash
    cd portfolio-prefeitura
    ```

3.  **Instale as dependências:**

    ```bash
    pnpm install
    ```

### Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
pnpm run dev
```

O aplicativo estará disponível em `http://localhost:5173` (ou outra porta disponível, se 5173 estiver em uso).

### Construindo para Produção

Para criar uma versão otimizada para produção:

```bash
pnpm run build
```

Os arquivos de produção serão gerados na pasta `dist/`.

## Estrutura do Projeto

```
portfolio-prefeitura/
├── public/                 # Arquivos estáticos (favicon, etc.)
├── src/
│   ├── assets/             # Imagens e outros assets (inclui background.png)
│   ├── components/         # Componentes React reutilizáveis
│   │   ├── ui/             # Componentes de UI (shadcn/ui)
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── PortfolioCard.jsx
│   │   ├── PortfolioModal.jsx
│   │   ├── PortfoliosSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── data/               # Dados (ex: portfolios.json)
│   ├── hooks/              # Hooks personalizados
│   ├── lib/                # Funções utilitárias
│   ├── App.css             # Estilos globais e customizados (inclui novas cores e fontes)
│   ├── App.jsx             # Componente principal da aplicação
│   ├── index.css           # Estilos CSS base
│   └── main.jsx            # Ponto de entrada da aplicação
├── components.json         # Configuração do shadcn/ui
├── eslint.config.js        # Configuração do ESLint
├── index.html              # Arquivo HTML principal
├── package.json            # Dependências e scripts do projeto
├── pnpm-lock.yaml          # Lock file do pnpm
└── vite.config.js          # Configuração do Vite
```

## Contribuição

Para contribuir com o projeto, siga as boas práticas de desenvolvimento React e Tailwind CSS. Certifique-se de testar suas alterações e manter a responsividade do site.

---

