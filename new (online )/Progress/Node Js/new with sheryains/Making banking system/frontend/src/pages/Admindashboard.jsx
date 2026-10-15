
import { useNavigate } from "react-router-dom";
import Adminpage from '../components/admin/Adminpage'
import axios from 'axios'
axios.defaults.withCredentials = true;

const Admindashboard = () => {
  const Navigate = useNavigate()
  // useEffect(() => {

    const fetchdata = async () => {
      let islogin =await axios.get(import.meta.env.VITE_URL + "/checkcookies");
      if (islogin.data.message == 'NotLog' && islogin.data.message!='Log') {
        Navigate('/register')
      }
      
    }
    fetchdata();

  return (
    <div>
      <Adminpage/>
    </div>
  )
}

export default Admindashboard
