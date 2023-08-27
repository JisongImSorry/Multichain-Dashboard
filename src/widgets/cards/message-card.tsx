import React from "react";
import { Avatar, Typography } from "@material-tailwind/react";

interface IProps {
  img: string;
  name: string;
  message: React.ReactNode;
  action?: React.ReactNode;
}

export function MessageCard({ img, name, message, action = null }: IProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Avatar
          src={img}
          alt={name}
          className="shadow-lg shadow-blue-gray-500/25"
        />
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-1 font-semibold"
          >
            {name}
          </Typography>
          <Typography className="text-xs font-normal text-blue-gray-400">
            {message}
          </Typography>
        </div>
      </div>
      {action}
    </div>
  );
}

export default MessageCard;
