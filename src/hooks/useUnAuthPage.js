import { useContext, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../services/Auth";

const useUnAuthPage = () => {

  const history = useHistory();
  const { currentUser } = useContext(AuthContext);

  useLayoutEffect(() => {
    if(!!currentUser){
      history.push('/books')
    }
  },[history, currentUser])
  
}
  
export default useUnAuthPage