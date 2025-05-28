import { Form, type FormField } from '../Form';
import type { ValidationRules } from '../../hooks';
import './Signin.scss';

const mockSigninInputs: FormField[] = [
  {
    name: 'email',
    variant: 'filled',
    label: 'Email',
    description: 'Введите email',
    type: 'email',
    placeholder: 'email',
    required: true,
    size: 'md',
    radius: 'md'
  },
  {
    name: 'password',
    variant: 'filled',
    label: 'Password',
    description: 'Введите пароль',
    type: 'password',
    placeholder: 'password',
    required: true,
    size: 'md',
    radius: 'md'
  }
];

const signinValidationRules: ValidationRules = {
  email: {
    required: true,
    email: true
  },
  password: {
    required: true,
    minLength: 6
  }
};

export function Signin() {
  const handleSigninSubmit = (data: Record<string, string>) => {
    console.log('Форма входа отправлена! Данные для вхада:', data);
  };

  return (
    <div className="signin">
      <Form
        title="Signin form"
        fields={mockSigninInputs}
        validationRules={signinValidationRules}
        onSubmit={handleSigninSubmit}
        submitButtonText="Войти"
        className="signin__form"
      />
    </div>
  );
}
