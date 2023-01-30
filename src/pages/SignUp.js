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
      toast('Passwords must be equal!');
    } else {
      try {
        await signUp(email, password);
        toast('Successfully enrolled! Please login.');
        navigate('/sign-in');
      } catch (error) {
        toast('Unable to register! (password must be at least 6 characters long)');
      }
    }
  }
  return (
    <CONTAINER>
      <LOGO src={logoicon}/>
      <FORM onSubmit={submit}>
        <DIVINPUT>
          <INPUT label="E-mail" type="text" placeholder="Insert your email" value={email} onChange={e => setEmail(e.target.value)} />
          <INPUT label="Password" type="password" placeholder="Insert your password" value={password} onChange={e => setPassword(e.target.value)} />
          <INPUT label="Repeat your password" type="password" placeholder="Confirm your password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        </DIVINPUT>
        <BUTTON type="submit" disabled={loadingSignUp}>Create account</BUTTON>
      </FORM>
      <Link to="/sign-in">Already have an account? Sign in</Link>
    </CONTAINER>
  );
}
