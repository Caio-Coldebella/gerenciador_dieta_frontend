import { IoMdBody, IoMdNutrition } from 'react-icons/io';
import { CONTENT } from '../../components/bars';
import { useNavigate } from 'react-router-dom';

export default function Bottombar() {
  const navigate = useNavigate();
  return (
    <CONTENT>
      <IoMdNutrition size={40} onClick={() => {navigate('/home/diet');}}/>
      {/*<IoIosFitness size={40}/>  // insert train route*/}
      {/*<IoMdGlobe size={40} //social media route/>*/}
      <IoMdBody size={40} onClick={() => {navigate('/home/personal-info');}}/>
    </CONTENT>
  );
}
