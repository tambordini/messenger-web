import React, { useState } from "react";
import newMessageButton from "../../assets/img/add_comment_white_24dp.svg";
import moreButton from "../../assets/img/more_horiz_white_24dp.svg";
import videoCallButton from "../../assets/img/video_call_white_24dp.svg";

const UserItem: React.FC = () => {
  const numberOfUser = Array.of(1);
  const [searchMessage, setSearchMessage] = useState<string | undefined>("");

  return (
    <div>
      <div className="header-mobile flex justify-between items-center mb-4">
        <label className="label">Chat</label>
        <div className="flex">
          <div
            className="more-button icon-background cursor-pointer ml-2 mr-2"
            id="more-button"
          >
            <img src={moreButton} />
          </div>
          <div
            className="video-call-button icon-background cursor-pointer ml-2 mr-2"
            id="video_call"
          >
            <img src={videoCallButton} />
          </div>
          <div
            className="new-message-button icon-background cursor-pointer"
            id="new_message"
          >
            <img src={newMessageButton} />
          </div>
        </div>
      </div>

      <div className="search-box">
        <input
          className="search-input w-full"
          placeholder="Search Messenger"
          value={searchMessage}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchMessage(event.target.value)
          }
        />
      </div>
      {/* {numberOfUser.map((_, index) => {
        return <img key={index} src={"https://source.unsplash.com/random"} />;
      })} */}
    </div>
  );
};

export default UserItem;
