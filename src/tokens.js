export const designSystem = {
    colors: [
        { name: 'Blue Standard', var: '--color-blue-standard', hex: '#4b9cd6', desc: { dark: 'Tom oficial da marca, usado para logos e títulos principais.', light: 'Cor de destaque para links e elementos <strong>.' } },
        { name: 'Blue Enterprise', var: '--color-blue-enterprise', hex: '#1a4f75', desc: { dark: 'Tom para produtos enterprise, usado em bordas e hovers.', light: 'Cor principal para toda a tipografia (títulos e parágrafos).' } },
        { name: 'Blue Light', var: '--color-blue-light', hex: '#dbebf6', desc: { dark: 'Cor principal para textos de parágrafo em fundos escuros.', light: 'Cor de fundo suave para o corpo da página (body).' } },
        { name: 'Blue Dark', var: '--color-blue-dark', hex: '#081521', desc: { dark: 'Fundo de containers primários para criar contraste.', light: 'Usado como fundo do rodapé para manter contraste.' } },
        { name: 'Background Dark', var: '--color-background-dark', hex: '#112d47', desc: { dark: 'Cor de fundo padrão do corpo da página (body).', light: 'Fundo para os cards de componentes dentro das seções.' } },
        { name: 'Success', var: '--color-success', hex: '#2eb23c', desc: { dark: 'Representa sucesso, segurança e confirmações positivas.', light: 'Representa sucesso, segurança e confirmações positivas.' } },
        { name: 'Alert', var: '--color-alert', hex: '#f4ac45', desc: { dark: 'Representa alertas, avisos e pontos de atenção.', light: 'Representa alertas, avisos e pontos de atenção.' } },
        { name: 'Danger', var: '--color-danger', hex: '#eb5757', desc: { dark: 'Representa perigo, ações destrutivas e feedback negativo.', light: 'Representa perigo, ações destrutivas e feedback negativo.' } },
        { name: 'White', var: '--color-white', hex: '#ffffff', desc: { dark: 'Usado em textos sobre botões coloridos e em destaques.', light: 'Fundo principal para os contêineres de seção.' } }
    ],
    typography: [
        { tag: 'h1', name: 'Heading 1', family: 'Varela Round', size: '40px', weight: '500' },
        { tag: 'h2', name: 'Heading 2', family: 'Montserrat', size: '36px', weight: '500' },
        { tag: 'h3', name: 'Heading 3', family: 'Varela Round', size: '30px', weight: '500' },
        { tag: 'h4', name: 'Heading 4', family: 'Varela Round', size: '24px', weight: '500' },
        { tag: 'h5', name: 'Heading 5', family: 'Varela Round', size: '20px', weight: '500' },
        { tag: 'h6', name: 'Heading 6', family: 'Varela Round', size: '16px', weight: '500' },
        { tag: 'p', name: 'Paragraph', family: 'Montserrat', size: '15px', weight: '300' },
        { tag: 'strong', name: 'Highlight', family: 'Montserrat', size: '15px', weight: '600' }
    ],
    buttons: [
        { name: 'Primary', class: 'btn-primary', icon: 'rocket_launch' },
        { name: 'Success', class: 'btn-success', icon: 'check_circle' },
        { name: 'Danger', class: 'btn-danger', icon: 'delete' },
        { name: 'Alert', class: 'btn-alert', icon: 'warning' },
        { name: 'Enterprise', class: 'btn-enterprise', icon: 'business_center' }
    ],
    logos: [
        { name: 'Horizontal Branca', url: 'https://meliva.ai/wp-content/uploads/2025/05/Logo_Horizontal_Meliva_ai_Full_White_FFFFFF.png', theme: 'dark' },
        { name: 'Horizontal Azul', url: 'https://meliva.ai/wp-content/uploads/2025/05/Logo_Horizontal_Meliva_ai_Standard_Blue_4B9CD6.png', theme: 'light' },
        { name: 'Box Branca', url: 'https://meliva.ai/wp-content/uploads/2025/06/Logo_Box_Meliva_ai_Full_White_FFFFFF.png', theme: 'dark' },
        { name: 'Box Azul', url: 'https://meliva.ai/wp-content/uploads/2025/06/Logo_Box_Meliva_ai_Standard_Blue_4B9CD6.png', theme: 'light' },
        { name: 'Símbolo Quadrado Branco', url: 'https://meliva.ai/wp-content/uploads/2025/06/Logo_Symbol_Meliva_ai_Full_White_FFFFFF.png', theme: 'dark' },
        { name: 'Símbolo Quadrado Azul', url: 'https://meliva.ai/wp-content/uploads/2025/06/Logo_Symbol_Meliva_ai_Standard_Blue_4B9CD6.png', theme: 'light' },
        { name: 'Símbolo Animado (Giro)', url: 'https://meliva.ai/wp-content/uploads/2025/06/Symbol_Meliva_Full_Spin_Blue_Standard_4b9cd6_64.svg', theme: 'any' },
        { name: 'Símbolo Animado (Pontos)', url: 'https://meliva.ai/wp-content/uploads/2025/06/Symbol_Meliva_Full_Spin_Dots_Blue_Standard_4b9cd6_128.svg', theme: 'any' }
    ]
};