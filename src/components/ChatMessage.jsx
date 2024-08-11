import React from "react";

const ChatMessage = ({ name, text }) => {
  return (
    <div className="flex items-center shadow-sm mt-2">
      <img
        className="border border-black mt-1 w-6 rounded-bl-full rounded-full object-covern"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpPwM5mR5lNHGg9vxaoUgcnAIBOJumsoJrg&s"
        alt="user"
      />
      <span className="text-sm px-3 font-bold">{name}</span>
      <span className="text-xs">{text}</span>
    </div>
  );
};

export default ChatMessage;
