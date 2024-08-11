import React from "react";

const commentData = [
  {
    name: "MysteryCheta",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    replies: [
      {
        name: "MysteryCheta",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        replies: [
          {
            name: "MysteryCheta",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            replies: [
              {
                name: "MysteryCheta",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
                replies: [
                  {
                    name: "MysteryCheta",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
                  },
                  {
                    name: "MysteryCheta",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
                  },
                ],
              },
            ],
          },
          {
            name: "MysteryCheta",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          },
        ],
      },
    ],
  },
  {
    name: "MysteryCheta",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    name: "MysteryCheta",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    name: "MysteryCheta",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    name: "MysteryCheta",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    name: "MysteryCheta",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
];

const Comment = ({ info }) => {
  const { name, text } = info;
  return (
    <div className="flex mt-2 ml-4 px-2 border border-l-black bg-gray-200 rounded-md dark:bg-gray-800">
      <img
        className="border border-black mt-1 w-6 rounded-bl-full rounded-full object-covern"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpPwM5mR5lNHGg9vxaoUgcnAIBOJumsoJrg&s"
        alt="user"
      />
      <div className="ml-2 text-sm">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ data }) => {
  return (
    <div className="mx-2">
      {data.map((comment, index) => (
        <div key={index}>
          <Comment info={comment} />
          {/* Render replies if they exist */}
          {comment.replies && comment.replies.length > 0 && (
            <div className="ml-6 border-l-2 border-gray-300 pl-2">
              <CommentList data={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold px-4">Comments:</h1>
      <CommentList data={commentData} />
    </div>
  );
};

export default CommentsContainer;
