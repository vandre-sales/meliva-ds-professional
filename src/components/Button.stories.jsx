import { Button } from './Button';
import { designSystem } from '../tokens';

// A configuração principal continua a mesma
export default {
  title: 'Componentes/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'success', 'danger', 'alert', 'enterprise'],
    },
    children: { control: 'text' },
    icon: { control: 'text' },
  },
};

// --- CORREÇÃO AQUI ---
// Em vez de um loop, definimos cada história explicitamente.

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Botão Primary',
    icon: 'rocket_launch',
  },
};

export const Success = {
  args: {
    variant: 'success',
    children: 'Botão Success',
    icon: 'check_circle',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    children: 'Botão Danger',
    icon: 'delete',
  },
};

export const Alert = {
  args: {
    variant: 'alert',
    children: 'Botão Alert',
    icon: 'warning',
  },
};

export const Enterprise = {
  args: {
    variant: 'enterprise',
    children: 'Botão Enterprise',
    icon: 'business_center',
  },
};