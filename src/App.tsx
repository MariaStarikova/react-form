import { useState } from 'react';
import { Signin } from './components/Signin';
import { Signup } from './components/Signup';
import './App.scss';

function App() {
  const [currentForm, setCurrentForm] = useState<'signin' | 'signup'>('signin');
  return (
    <div className="app">
      <div className="form__switcher">
        <button
          onClick={() => setCurrentForm('signin')}
          className={currentForm === 'signin' ? 'active__button' : 'passive__button'}
        >
          Вход
        </button>
        <button
          onClick={() => setCurrentForm('signup')}
          className={currentForm === 'signup' ? 'active__button' : 'passive__button'}
        >
          Регистрация
        </button>
      </div>
      {currentForm === 'signin' ? <Signin /> : <Signup />}
    </div>
  );
}

export default App;
