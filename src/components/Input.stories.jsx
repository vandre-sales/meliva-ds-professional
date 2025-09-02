import { Input } from './Input';

// ESTA PARTE É O "DEFAULT EXPORT" QUE ESTAVA FALTANDO
export default {
  title: 'Componentes/Formulários/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    helpText: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

// Estas são as histórias individuais
export const Default = {
  args: {
    label: 'Nome Completo',
    placeholder: 'Digite seu nome aqui',
    helpText: 'Este é um texto de ajuda para o campo.',
  },
};

export const WithError = {
  args: {
    label: 'Endereço de Email',
    placeholder: 'exemplo@email.com',
    error: 'O formato do email é inválido.',
    value: 'email-errado',
  },
};

export const Disabled = {
  args: {
    label: 'Código de Acesso',
    placeholder: 'Campo desabilitado',
    disabled: true,
  },
};