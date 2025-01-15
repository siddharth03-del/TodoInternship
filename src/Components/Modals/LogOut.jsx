import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import LogOutContext from "../../Context/logout";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { LogOutFunc } from "../../Redux/Slices/LoginSlice";
import { useNavigate } from "react-router-dom";
import { LogOut } from "../../Storage/Auth/AuthStorage";
function LogOutModal(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {openModal, setOpenModal} = useContext(LogOutContext);
    function HandleLogOut(){
        dispatch(LogOutFunc());
        LogOut();
        setOpenModal(!openModal);
        navigate("/");

    }
    return(
<>
      {/* <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button> */}
      <Dialog open={openModal} handler={HandleLogOut}>
        <DialogHeader>Logout</DialogHeader>
        <DialogBody>
          Are you sure you want to log out. <br /> After logout you need to signIn again.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={()=>{setOpenModal(!openModal)}}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="red" onClick={HandleLogOut}>
            <span>Logout</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
    )
}
export default LogOutModal;
