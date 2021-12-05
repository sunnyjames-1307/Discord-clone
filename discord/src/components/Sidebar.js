import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import Sidebar_Channel from "./Sidebar_Channel";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import { useEffect } from "react";

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const user = useSelector(selectUser);
  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({ id: doc.id, channel: doc.data() }))
      )
    );
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt("Enter a new Channel Name");

    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };

  return (
    <Container>
      <Top>
        <h3>Clever Programmer</h3>
        <ExpandMoreIcon />
      </Top>
      <Channels>
        <Channels_Header>
          <Sidebar_Header>
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </Sidebar_Header>
          <AddChannels onClick={handleAddChannel} />
        </Channels_Header>
        <div>
          {channels.map(({ id, channel }) => (
            <Sidebar_Channel
              key={id}
              id={id}
              channelName={channel.channelName}
            />
          ))}
        </div>
      </Channels>
      <Voice>
        <VoiceIcon />
        <VoiceInfo>
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </VoiceInfo>
        <Icons>
          <InfoOutlinedIcon />
          <CallIcon />
        </Icons>
      </Voice>
      <Profile>
        <Avatar onClick={() => auth.signOut()} src={user.photo} />
        <ProfileInfo>
          <h3>{user.displayName}</h3>
          <p>{user.uid.substring(0, 5)}</p>
        </ProfileInfo>
        <ProfileIcons>
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </ProfileIcons>
      </Profile>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.25;
  height: 100vh;
  background-color: #2f3135;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #2f3135;
  color: rgb(249, 249, 249);
  border-bottom: 3px solid #26282c;
`;

const Channels = styled.div`
  flex: 1;
`;

const AddChannels = styled(AddIcon)`
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
const Channels_Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #2f3135;
  color: gray;
`;
const Sidebar_Header = styled.div`
  display: flex;
  align-items: center;
`;

const Voice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
  background-color: #2f3135;
  padding: 10px;
  border-top: 1px solid gray;
`;
const VoiceIcon = styled(SignalCellularAltIcon)`
  font-size: large;
  color: #4fb185;
`;
const VoiceInfo = styled.div`
  padding: 10px;
  flex: 1;
  h3 {
    color: #4fb185;
    transform: translateY(13px);
  }
  p {
    font-size: smaller;
    padding-top: -2px;
  }

  .MuiSvgIcon {
    padding: 10px;
  }
`;
const Icons = styled.div``;
const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
  background-color: #2f3135;
  padding: 10px;
  border-top: 1px solid gray;
`;

const ProfileInfo = styled.div`
  padding: 10px;
  flex: 1;
  h3 {
    color: #4fb185;
    transform: translateY(13px);
  }
  .MuiSvgIcon {
    padding: 10px;
  }
`;

const ProfileIcons = styled.div``;
export default Sidebar;
