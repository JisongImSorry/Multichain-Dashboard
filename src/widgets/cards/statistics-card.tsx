import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { colors } from "@material-tailwind/react/types/generic";

interface IProps {
  color?: string;
  icon: React.ReactNode;
  title: React.ReactNode;
  value: React.ReactNode;
  footer?: React.ReactNode;
  onclick?: () => void;
  focus?: boolean;
}

export function StatisticsCard({
  color = "blue",
  icon,
  title,
  value,
  footer = null,
  onclick,
  focus = false,
}: IProps) {
  return (
    <Card onClick={onclick}>
      <CardHeader
        variant="gradient"
        color={color as colors}
        className="absolute -mt-4 grid h-16 w-16 place-items-center"
      >
        {icon}
      </CardHeader>
      <CardBody className={`p-4 text-right ${focus && "bg-gray-300"}`}>
        <Typography variant="small" className="font-normal text-blue-gray-600">
          {title}
        </Typography>
        <Typography variant="h4" color="blue-gray">
          {value}
        </Typography>
      </CardBody>
      {footer && (
        <CardFooter className="border-t border-blue-gray-50 p-4 ">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}

export default StatisticsCard;
