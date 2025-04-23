import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Defines the size of the button',
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      description: 'Defines variant,
      control: { type: 'select' },
      options: ['primary', 'secondary', 'back'],
    },
    children: {
      description: 'Text inside the button',
      control: 'text',
    },
  },
};

export const Default = {
  args: {
    children: 'Click Me',
    size: 'small',
    variant: 'primary',
  },
};

export const Primary = {
  args: {
    children: 'primary',
    size: 'small',
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    children: 'secondary',
    size: 'small',
    variant: 'secondary',
  },
};

export const Medium = {
  args: {
    children: 'medium',
    size: 'medium',
    variant: 'primary',
  },
};

export const Large = {
  args: {
    children: 'large',
    size: 'large',
    variant: 'primary',
  },
};

export const Back = {
  args: {
    children: 'back',
    size: 'small',
    variant: 'back',
  },
};

export const Disabled = {
  args: {
    children: 'disabled',
    size: 'small',
    variant: 'primary',
  },
};
