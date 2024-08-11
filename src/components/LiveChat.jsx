import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { useSelector } from "react-redux";
import { generateMessages } from "../utils/helper";
import { generateRandomNames } from "../utils/helper";
import { LIVE_CHAT_SPEED_FAST } from "../utils/constants";
import { LIVE_CHAT_SPEED_SLOW } from "../utils/constants";

const LiveChat = () => {
  const dispatch = useDispatch();
  const comments = useSelector((store) => store.chat.messages);
  const [liveMsg, setLiveMsg] = useState("");
  const [slow, setSlow] = useState(false);

  useEffect(() => {
    const msg = {
      name: generateRandomNames(),
      text: generateMessages(15) + " 🚀",
    };
    const i = setInterval(
      () => dispatch(addMessages(msg)),
      slow ? LIVE_CHAT_SPEED_SLOW : LIVE_CHAT_SPEED_FAST
    );

    return () => clearInterval(i);
  });

  const handleSend = () => {
    dispatch(
      addMessages({
        name: "Mystery",
        text: liveMsg,
      })
    );
    setLiveMsg("");
  };

  const handleSpeed = () => {
    setSlow(!slow);
  };

  return (
    <div className="bg-slate-100 border border-spacing-2 rounded-md dark:bg-gray-800">
      <div className="flex justify-between dark:border dark:border-b-white">
        <h1 className="font-bold px-1 ">Live Chat : </h1>
        <button
          className="bg-blue-500 my-1 mr-2 px-2 rounded-md"
          onClick={handleSpeed}
        >
          {slow ? "Fast" : "Slow"}
        </button>
      </div>
      <div className=" rounded-md p-2 h-[340px] overflow-y-scroll flex flex-col-reverse">
        {comments.map((comment, index) => (
          <ChatMessage key={index} name={comment.name} text={comment.text} />
        ))}
      </div>
      <form className="w-full p-2 " onSubmit={(e) => e.preventDefault()}>
        <input
          className="w-2/3 px-2 py-1 text-sm"
          type="text"
          value={liveMsg}
          onChange={(e) => {
            setLiveMsg(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 py-1 mx-2 px-2 text-sm rounded-md "
          onClick={handleSend}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
