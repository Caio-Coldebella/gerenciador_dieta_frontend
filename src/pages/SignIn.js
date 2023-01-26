import { CONTAINER, FORM } from '../components/auth';
import Link from '../components/Link';
export default function SignIn() {
  return (
    <CONTAINER>
      <FORM>

      </FORM>
      <Link to="/sign-up">cadastro</Link>
    </CONTAINER>
  );
}
/*
        <form onSubmit={submit}>
          <Input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          <Input label="Senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignIn}>Entrar</Button>
        </form>
*/
