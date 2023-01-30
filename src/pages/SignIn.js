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
      toast('Login successful!');
      navigate('/home');
    } catch (err) {
      toast('Unable to login!');
    }
  } 
  return (
    <CONTAINER>
      <LOGO src={logoicon}/>
      <FORM onSubmit={submit} height="35%">
        <DIVINPUT height="75%">
          <INPUT height="40%" label="E-mail" type="text" placeholder="Inser your email" value={email} onChange={e => setEmail(e.target.value)} />
          <INPUT height="40%" label="Password" type="password" placeholder="Insert your password" value={password} onChange={e => setPassword(e.target.value)} />
        </DIVINPUT>
        <BUTTON height="15%" type="submit" disabled={loadingSignIn}>Sign-in</BUTTON>
      </FORM>
      <Link to="/sign-up">Don't have an account yet? Register</Link>
    </CONTAINER>
  );
}
