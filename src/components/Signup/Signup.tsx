import type { ValidationRules } from '../../hooks';
import { Icon } from '../../icons';
import { Form, type FormField } from '../Form';

const mockSignupInputs: FormField[] = [
  {
    name: 'name',
    variant: 'default',
    label: 'Имя',
    description: 'Введите имя',
    type: 'text',
    placeholder: 'name',
    required: true,
    size: 'md',
    radius: 'md'
  },
  {
    name: 'nick',
    variant: 'default',
    label: 'Ник',
    description: 'Введите ник',
    type: 'text',
    placeholder: 'nickname',
    required: true,
    size: 'md',
    radius: 'md',
    icon: <Icon size={14} color="#666" />
  },
  {
    name: 'email',
    variant: 'default',
    label: 'Email',
    description: 'Введите email',
    type: 'email',
    placeholder: 'email',
    required: true,
    size: 'md',
    radius: 'md'
  },
  {
    name: 'gender',
    variant: 'default',
    label: 'Пол',
    description: 'Выберите пол',
    type: 'radio',
    placeholder: 'gender',
    required: true,
    size: 'md',
    radius: 'md',
    radio: true
  },
  {
    name: 'password',
    variant: 'default',
    label: 'Password',
    description: 'Введите пароль',
    type: 'password',
    placeholder: 'password',
    required: true,
    size: 'md',
    radius: 'md'
  },
  {
    name: 'confirmPassword',
    variant: 'default',
    label: 'Password',
    description: 'Повторите пароль',
    type: 'password',
    placeholder: 'password',
    required: true,
    size: 'md',
    radius: 'md'
  }
];

const signupValidationRules: ValidationRules = {
  name: {
    required: true,
    minLength: 2
  },
  nick: {
    required: true,
    startsWith: '@'
  },
  email: {
    required: true,
    email: true
  },
  gender: {
    required: true
  },
  password: {
    required: true,
    minLength: 6
  },
  confirmPassword: {
    required: true,
    match: 'password'
  }
};

export function Signup() {
  const handleSignupSubmit = (data: Record<string, string>) => {
    console.log('Форма регистрации отправлена! Данные регистрации:', data);
  };
  return (
    <div className="signup">
      <Form
        title="Signup form"
        fields={mockSignupInputs}
        validationRules={signupValidationRules}
        onSubmit={handleSignupSubmit}
        submitButtonText="Зарегистрироваться"
        className="signup__form"
      />
    </div>
  );
}
