import React from "react";
import UserItem from "./UserItem";

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="user-item">
        <UserItem />
      </div>
      <div className="chat-screen"></div>
    </div>
  );
};

export default Dashboard;
