import { useState } from 'react';
import { BUTTON, CONTAINER, DIVINPUT, FORM, INPUT, LOGO } from '../components/auth';
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
        <DIVINPUT>
          <INPUT label="E-mail" type="text" placeholder="Insira seu email" value={email} onChange={e => setEmail(e.target.value)} />
          <INPUT label="Senha" type="password" placeholder="Insira sua senha" value={password} onChange={e => setPassword(e.target.value)} />
          <INPUT label="Repita sua senha" type="password" placeholder="Confirme sua senha" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        </DIVINPUT>
        <BUTTON type="submit" disabled={loadingSignUp}>Criar Conta</BUTTON>
      </FORM>
      <Link to="/sign-in">Já possui conta? Faça login</Link>
    </CONTAINER>
  );
}
