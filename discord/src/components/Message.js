import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

function Message({ timestamp, user, message }) {
  return (
    <Msg>
      <Avatar src={user.photo} />
      <Info>
        <h4>
          {user.displayName}
          <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </Info>
    </Msg>
  );
}

const Msg = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  color: white;
`;
const Info = styled.div`
  margin-left: 20px;
  span {
    color: gray;
    margin-left: 20px;
    font-size: x-small;
  }
`;
export default Message;
