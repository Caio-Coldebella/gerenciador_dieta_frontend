import { useState } from 'react';
import { BUTTON, CONTAINER, FORM, INPUT, LOGO } from '../components/auth';
import Link from '../components/Link';
import useSignUp from '../hooks/api/useSignUp';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logoicon from '../assets/logos/icon-initial.png';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { loadingSignUp, signUp } = useSignUp();
  const navigate = useNavigate();
  
  async function submit(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast('As senhas devem ser iguais!');
    } else {
      try {
        await signUp(email, password);
        toast('Inscrito com sucesso! Por favor, faça login.');
        navigate('/sign-in');
      } catch (error) {
        toast('Não foi possível fazer o cadastro! (a senha precisa possuir pelo menos 6 caracteres)');
      }
    }
  }
  return (
    <CONTAINER>
      <LOGO src={logoicon}/>
      <FORM onSubmit={submit}>
        <INPUT label="E-mail" type="text" value={email} onChange={e => setEmail(e.target.value)} />
        <INPUT label="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <INPUT label="Repita sua senha" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        <BUTTON type="submit" disabled={loadingSignUp}>Inscrever</BUTTON>
      </FORM>
      <Link to="/sign-up">cadastroooo</Link>
    </CONTAINER>
  );
}
