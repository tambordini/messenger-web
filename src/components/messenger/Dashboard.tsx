import React from "react";
import ChatScreen from "./ChatScreen";
import UserItem from "./UserItem";

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="user-item">
        <UserItem />
      </div>
      <div className="chat-screen">
        <ChatScreen />
      </div>
    </div>
  );
};

export default Dashboard;
