import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { colors } from "@material-tailwind/react/types/generic";

interface IProps {
  color?: string;
  chart: string;
  title: React.ReactNode;
  description: React.ReactNode;
  footer?: React.ReactNode;
}

export function StatisticsChart({
  color = "blue",
  chart,
  title,
  description,
  footer = null,
}: IProps) {
  return (
    <Card>
      <CardHeader variant="gradient" color={color as colors}>
        <img src={chart} className="w-full h-64" />
      </CardHeader>
      <CardBody className="p-6">
        <Typography variant="h6" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="small" className="font-normal text-blue-gray-600">
          {description}
        </Typography>
      </CardBody>
      {footer && (
        <CardFooter className="border-t border-blue-gray-50 px-6 py-5">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}

export default StatisticsChart;
