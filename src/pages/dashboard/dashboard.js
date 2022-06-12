import React,{useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth,db,logout } from '../../config';


const Dashboard=()=>{
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
      }, [user, loading]);
    return(
        <React.Fragment>
            <div>
                <h1>Hello</h1>
                <Button onClick={logout}>Logout</Button>
            </div>
        </React.Fragment>
    )
}
export default Dashboard;