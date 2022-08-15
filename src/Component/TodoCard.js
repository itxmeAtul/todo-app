import React from "react";

const TodoCard = ({
  title,
  time,
  priority,
  tags,
  onTodoClick,
  description,
  disable,
  cardStyle,
}) => {
  return (
    <div
      className={`border border-gray-400 rounded-md flex my-4 p-2 ${
        !disable ? "cursor-pointer" : ""
      } ${cardStyle}`}
      onClick={onTodoClick}
    >
      <div className="flex items-center">
        <div>
          <div
            className={`rounded-full border-[3px] ${
              priority === "l"
                ? "border-blue-500"
                : priority === "m"
                ? "border-orange-500"
                : priority === "h"
                ? "border-red-500"
                : "bg-purple-500"
            } w-[18px] h-[18px]`}
          ></div>
        </div>
        {/* Priority or Complete Status */}
      </div>
      <div className="flex-1 px-2">
        <div className="font-bold text-[1em]">{title}</div>
        <div className="text-sm">{description}</div>
      </div>
      <div className=" flex justify-between items-center">
        {tags.split(",").map((el, idx) => {
          return (
            <span
              key={idx}
              className="text-[0.6em] font-bold p-1 bg-gray-300 rounded-md mr-[5px]"
            >
              {el}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TodoCard;
