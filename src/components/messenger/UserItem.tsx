import React, { useState } from "react";
import newMessageButton from "../../assets/img/add_comment_white_24dp.svg";
import moreButton from "../../assets/img/more_horiz_white_24dp.svg";
import videoCallButton from "../../assets/img/video_call_white_24dp.svg";

const mockData = [
  {
    id: 1,
    name: "Kitsada Khamthamun",
    imageUrl: "https://picsum.photos/id/",
    messages: [],
    latestMessage: "55555",
    sendTime: "1",
    sendTimeUnitId: 1,
    read: null,
  },
  {
    id: 11,
    name: "รุ่งทิวา อินทรมา",
    imageUrl: "https://picsum.photos/id/",
    messages: [],
    latestMessage: "รุ่งทิวา ได้ส่งรูปภาพ",
    sendTime: "32",
    sendTimeUnitId: 2,
    read: null,
  },
  {
    id: 21,
    name: "ปาป้า ไหน ❤️",
    imageUrl: "https://picsum.photos/id/",
    messages: [],
    latestMessage: "55555",
    sendTime: "1",
    sendTimeUnitId: 3,
    read: null,
  },
  {
    id: 31,
    name: "Waint Klinkasen",
    imageUrl: "https://picsum.photos/id/",
    messages: [],
    latestMessage: "",
    sendTime: "1",
    sendTimeUnitId: 3,
    read: null,
  },
  {
    id: 41,
    name: "Odds CB",
    imageUrl: "https://picsum.photos/id/",
    messages: [],
    latestMessage: "Nuttawut ได้ส่งไฟล์แนบ",
    sendTime: "2",
    sendTimeUnitId: 3,
    read: null,
  },
];

const UserItem: React.FC = () => {
  const [searchMessage, setSearchMessage] = useState<string | undefined>("");
  const [activeItem, setActiveItem] = useState<number | undefined>(0);

  const handleOnClickItem = (indexItem: number) => {
    setActiveItem(indexItem);
  };

  const getTextEllipsis = (text: string): string => {
    return text.length > 25 ? text.slice(0, 25).concat("...") : text;
  };

  const getSendUnitTime = (unitTimeId: number): string => {
    switch (unitTimeId) {
      case 1:
        return "วินาที";
      case 2:
        return "นาที";
      case 3:
        return "ชม.";
      case 4:
        return "วัน";
      case 5:
        return "สัปดาห์";
      case 6:
        return "เดือน";
      case 7:
        return "ปี";
      default:
        return "";
    }
  };

  return (
    <div>
      <div className="header-mobile flex justify-between items-center mb-4">
        <label className="label">แชท</label>
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
            className="new-message-button icon-background cursor-pointer ml-2"
            id="new_message"
          >
            <img src={newMessageButton} />
          </div>
        </div>
      </div>

      <div className="search-box mb-4">
        <input
          className="search-input w-full"
          placeholder="ค้นหา Messenger"
          value={searchMessage}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchMessage(event.target.value)
          }
        />
      </div>

      <div className="user-list-box">
        {mockData.map((data, index) => {
          return (
            <div
              key={data.id}
              className={
                activeItem === index ? "user-list active" : "user-list"
              }
              onClick={() => handleOnClickItem(index)}
            >
              <div className="image-container mr-3">
                <img
                  className="user-image"
                  alt="."
                  key={data.id}
                  src={data.imageUrl + `${data.id}/200/300`}
                />
                <div className="status-circle online"></div>
              </div>
              <div className="user-content">
                <label className="font-medium">{data.name}</label>
                <div className="flex">
                  <p>You: &nbsp;</p>
                  <p>{getTextEllipsis(data.latestMessage)}</p>
                  <p className="ml-1 mr-1"> · </p>
                  <p>
                    {data.sendTime} {getSendUnitTime(data.sendTimeUnitId)}
                  </p>
                </div>
              </div>
              <div className="text-right flex-auto">Hi</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserItem;
