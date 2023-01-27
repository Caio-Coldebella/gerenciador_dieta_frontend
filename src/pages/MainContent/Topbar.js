import { IoIosAddCircle } from 'react-icons/io';
import { CONTENT, DIVOPTIONS } from '../../components/bars';
import { useNavigate } from 'react-router-dom';

export default function Topbar() {
  const navigate = useNavigate();
  return (
    <CONTENT>
      <DIVOPTIONS>
        <IoIosAddCircle size={40} onClick={() => {navigate('/home/insert-food');}}/>
      </DIVOPTIONS>
    </CONTENT>
  );
}
