import React from "react";
import styled from "styled-components";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
function ChatHeader({ channelName }) {
  return (
    <Chatheader>
      <Header_left>
        <h3>
          <span>#</span>
          {channelName}
        </h3>
      </Header_left>
      <Header_right>
        <NotificationsIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />
        <Search>
          <input placeholder="Search" />
          <SearchRoundedIcon />
        </Search>
        <SendRoundedIcon />
        <HelpRoundedIcon />
      </Header_right>
    </Chatheader>
  );
}

const Chatheader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
  padding: 10px;
`;
const Header_left = styled.div`
  span {
    color: gray;
    font-size: 30px;
    padding: 10px;
  }
  h3 {
    display: flex;
    align-items: center;
    color: white;
  }
`;
const Header_right = styled.div`
  display: flex;
  align-items: center;
  flex: 0.5;
  justify-content: space-between;

  .MuiSvgIcon-root {
    padding: 5px;
    cursor: pointer;
  }

  .MuiSvgIcon-root:hover {
    color: red;
  }
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  background-color: #2f3135;
  border-radius: 3px;
  padding: 3px;

  input {
    background: transparent;
    outline-width: 0;
    color: white;
    border: none;
  }
`;

export default ChatHeader;
