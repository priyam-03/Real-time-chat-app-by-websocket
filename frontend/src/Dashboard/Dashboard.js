import React, { useEffect } from "react";
import { styled } from "@mui/system";
import SideBar from "./SideBar/SideBar";
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";
import { useSelector } from "react-redux";
// import { connect } from "react-redux";
// import { getActions } from "../store/actions/authActions";
import {
  connectWithSocketServer,
  disconnect,
} from "../realtimeCommunication/socketConnection";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);
  useEffect(() => {
    // const userDetails = localStorage.getItem("user");
    console.log("called__new user added clientside");
    connectWithSocketServer(userInfo);
    return () => {
      disconnect();
    };
  }, []);

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

// const mapActionsToProps = (dispatch) => {
//   return {
//     ...getActions(dispatch),
//   };
// };

// export default connect(null, mapActionsToProps)(Dashboard);
export default Dashboard;
