import { useContext, useState } from 'react';
import { CONTAINER, FORM, LOGO, DIVINPUT, INPUT, BUTTON } from '../components/auth';
import Link from '../components/Link';
import useSignIn from '../hooks/api/useSignIn';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logoicon from '../assets/logos/icon-initial.png';
import UserContext from '../contexts/UserContext';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loadingSignIn, signIn } = useSignIn();
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);  
  async function submit(event) {
    event.preventDefault();
    try {
      const userData = await signIn(email, password);
      setUserData(userData);
      toast('Login realizado com sucesso!');
      navigate('/home');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  } 
  return (
    <CONTAINER>
      <LOGO src={logoicon}/>
      <FORM onSubmit={submit} height="35%">
        <DIVINPUT height="75%">
          <INPUT height="40%" label="E-mail" type="text" placeholder="Insira seu email" value={email} onChange={e => setEmail(e.target.value)} />
          <INPUT height="40%" label="Senha" type="password" placeholder="Insira sua senha" value={password} onChange={e => setPassword(e.target.value)} />
        </DIVINPUT>
        <BUTTON height="15%" type="submit" disabled={loadingSignIn}>Entrar</BUTTON>
      </FORM>
      <Link to="/sign-up">Ainda não possui uma conta? Cadastre-se</Link>
    </CONTAINER>
  );
}
