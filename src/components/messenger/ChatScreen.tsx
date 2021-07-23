import React from "react";
import callButton from "../../assets/img/phone_white_24dp.svg";
import videoCameraButton from "../../assets/img/videocam_white_24dp.svg";
import infoButton from "../../assets/img/info_white_24dp.svg";
import addButton from "../../assets/img/add_circle_white_24dp.svg";

const ChatScreen: React.FC = () => {
  return (
    <>
      <div className="chat-screen-content">
        <div className="flex items-center justify-between">
          <div className="flex">
            <div className="image-container-chat-screen ml-2">
              <img
                className="chat-screen-avatar"
                alt="."
                src={"https://picsum.photos/id/21/300/400"}
              />
              <div className="status-circle online"></div>
            </div>
            <div className="ml-4">
              <label className="font-medium">ปาป้า ไหน ❤️</label>
              <p>กำลังใช้งาน</p>
            </div>
          </div>
          <div className="flex">
            <div className="ml-3 mr-3">
              <img className="chat-screen-header-icon" src={callButton} />
            </div>
            <div className="ml-3 mr-3">
              <img
                className="chat-screen-header-icon"
                src={videoCameraButton}
              />
            </div>
            <div className="ml-3 mr-3">
              <img className="chat-screen-header-icon" src={infoButton} />
            </div>
          </div>
        </div>
      </div>
      <div className="chat-screen-footer flex pl-2 mb-4">
        <div>
          <img className="footer-icon" src={addButton} />
        </div>
      </div>
    </>
  );
};

export default ChatScreen;
