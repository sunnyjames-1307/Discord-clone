import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setChannelInfo } from "../features/appSlice";

function Sidebar_Channel({ id, channelName }) {
  const dispatch = useDispatch();
  return (
    <Container
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channelName,
          })
        )
      }
    >
      <h4>
        <span>#</span>
        {channelName}
      </h4>
    </Container>
  );
}

const Container = styled.div`
  h4 {
    display: flex;
    padding-left: 15px;
    align-items: center;
    background-color: #2f3135;
    color: gray;
    cursor: pointer;
  }
  h4:hover {
    color: white;
    background-color: #40464b;
  }
  span {
    font-size: 30px;
    padding: 8px;
  }
`;

export default Sidebar_Channel;
