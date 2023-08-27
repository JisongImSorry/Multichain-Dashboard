import React from "react";
import { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import {
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@widgets/cards";
import { StatisticsChart } from "@widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsDataxpla,
  statisticsChartsDataxpla2,
  statisticsChartsData,
  statisticsChartsData2,
  statisticsChartsData3,
  statisticsChartsData4,
  statisticsChartsData5,
  statisticsChartsData6,
  statisticsChartsData7,
  projectsTableData,
  projectsTableData2,
  projectsTableData3,
  projectsTableDataXPLA,
  ordersOverviewData,
} from "@data";
import { SDK, Auth, TEMPLATES, Metadata } from "@infura/sdk";
import Input from "@material-tailwind/react";

import StatisticsChart2 from "@widgets/charts/storigin";
export function Home({ go, page }: { go: any; page: any }) {
  //0x6d2e03b7EfFEae98BD302A9F836D0d6Ab0002766
  useEffect(() => {
    if (go) setNfts(statisticsChartsDataxpla);
  }, [go]);
  const [nfts, setNfts] = useState(statisticsChartsData4);
  const [collections, setCollections] = useState(projectsTableDataXPLA);
  const [chart, setChart] = useState(statisticsChartsDataxpla2);
  return (
    <div className="mt-12">
      {page === "assets" && (
        <>
          <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
            <StatisticsCard
              onclick={() => {
                setNfts(statisticsChartsDataxpla);
              }}
              focus={nfts === statisticsChartsDataxpla}
              color="white"
              value={go ? "1 NFTs" : ""}
              title={"XPLA"}
              icon={
                <img src="https://play-lh.googleusercontent.com/TqNUpppPnSel2wFJpqKP88TMYO8pV0ArT0B-PZbX0Ajo67Hh6R7z0ohl1ODtT4bkPQ" />
              }
              footer={
                <Typography className="font-normal text-blue-gray-600">
                  {go && "0x6d2e03b7EfF....6D0d6Ab0002766"}
                </Typography>
              }
            />
            <StatisticsCard
              onclick={() => {
                setNfts(statisticsChartsData);
              }}
              focus={nfts === statisticsChartsData}
              color="white"
              value={go ? "5 NFTs" : ""}
              title={"Ethereum"}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  imageRendering="optimizeQuality"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  viewBox="0 0 784.37 1277.39"
                  className="w-8 h-8"
                >
                  <g>
                    <g fillRule="nonzero">
                      <path
                        fill="#343434"
                        d="M392.07 0L383.5 29.11 383.5 873.74 392.07 882.29 784.13 650.54z"
                      ></path>
                      <path
                        fill="#8C8C8C"
                        d="M392.07 0L0 650.54 392.07 882.29 392.07 472.33z"
                      ></path>
                      <path
                        fill="#3C3C3B"
                        d="M392.07 956.52L387.24 962.41 387.24 1263.28 392.07 1277.38 784.37 724.89z"
                      ></path>
                      <path
                        fill="#8C8C8C"
                        d="M392.07 1277.38L392.07 956.52 0 724.89z"
                      ></path>
                      <path
                        fill="#141414"
                        d="M392.07 882.29L784.13 650.54 392.07 472.33z"
                      ></path>
                      <path
                        fill="#393939"
                        d="M0 650.54L392.07 882.29 392.07 472.33z"
                      ></path>
                    </g>
                  </g>
                </svg>
              }
              footer={
                <Typography className="font-normal text-blue-gray-600">
                  {go && "0x6d2e03b7EfF....6D0d6Ab0002766"}
                </Typography>
              }
            />
            <StatisticsCard
              focus={nfts === statisticsChartsData2}
              onclick={() => {
                setNfts(statisticsChartsData2);
              }}
              color="white"
              value={go ? "3 NFTs" : ""}
              title={"BNB"}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  enableBackground="new 0 0 2496 2496"
                  version="1.1"
                  viewBox="0 0 2496 2496"
                  xmlSpace="preserve"
                  className="w-8 h-8"
                >
                  <path
                    fill="#F0B90B"
                    fillRule="evenodd"
                    d="M1248 0c689.3 0 1248 558.7 1248 1248s-558.7 1248-1248 1248S0 1937.3 0 1248 558.7 0 1248 0z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M685.9 1248l.9 330 280.4 165v193.2l-444.5-260.7v-524l163.2 96.5zm0-330v192.3l-163.3-96.6V821.4l163.3-96.6L850 821.4 685.9 918zm398.4-96.6l163.3-96.6 164.1 96.6-164.1 96.6-163.3-96.6z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M803.9 1509.6v-193.2l163.3 96.6v192.3l-163.3-95.7zm280.4 302.6l163.3 96.6 164.1-96.6v192.3l-164.1 96.6-163.3-96.6v-192.3zm561.6-990.8l163.3-96.6 164.1 96.6v192.3l-164.1 96.6V918l-163.3-96.6zm163.3 756.6l.9-330 163.3-96.6v524l-444.5 260.7v-193.2l280.3-164.9z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M1692.1 1509.6L1528.8 1605.3 1528.8 1413 1692.1 1316.4 1692.1 1509.6z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M1692.1 986.4l.9 193.2-281.2 165v330.8l-163.3 95.7-163.3-95.7v-330.8l-281.2-165V986.4l164-96.6 279.5 165.8 281.2-165.8 164.1 96.6h-.7zM803.9 656.5l443.7-261.6 444.5 261.6-163.3 96.6-281.2-165.8-280.4 165.8-163.3-96.6z"
                  ></path>
                </svg>
              }
              footer={
                <Typography className="font-normal text-blue-gray-600">
                  {go && "0x6d2e03b7EfF....6D0d6Ab0002766"}
                </Typography>
              }
            />
            <StatisticsCard
              focus={nfts === statisticsChartsData3}
              onclick={() => {
                setNfts(statisticsChartsData3);
              }}
              color="white"
              value={go ? "1 NFTs" : ""}
              title={"Polygon"}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  viewBox="0 0 38.4 33.5"
                  className="w-6 h-6"
                >
                  <path
                    d="M29 10.2c-.7-.4-1.6-.4-2.4 0L21 13.5l-3.8 2.1-5.5 3.3c-.7.4-1.6.4-2.4 0L5 16.3c-.7-.4-1.2-1.2-1.2-2.1v-5c0-.8.4-1.6 1.2-2.1l4.3-2.5c.7-.4 1.6-.4 2.4 0L16 7.2c.7.4 1.2 1.2 1.2 2.1v3.3l3.8-2.2V7c0-.8-.4-1.6-1.2-2.1l-8-4.7c-.7-.4-1.6-.4-2.4 0L1.2 5C.4 5.4 0 6.2 0 7v9.4c0 .8.4 1.6 1.2 2.1l8.1 4.7c.7.4 1.6.4 2.4 0l5.5-3.2 3.8-2.2 5.5-3.2c.7-.4 1.6-.4 2.4 0l4.3 2.5c.7.4 1.2 1.2 1.2 2.1v5c0 .8-.4 1.6-1.2 2.1L29 28.8c-.7.4-1.6.4-2.4 0l-4.3-2.5c-.7-.4-1.2-1.2-1.2-2.1V21l-3.8 2.2v3.3c0 .8.4 1.6 1.2 2.1l8.1 4.7c.7.4 1.6.4 2.4 0l8.1-4.7c.7-.4 1.2-1.2 1.2-2.1V17c0-.8-.4-1.6-1.2-2.1L29 10.2z"
                    style={{
                      fill: "#8247e5",
                    }}
                  />
                </svg>
              }
              footer={
                <Typography className="font-normal text-blue-gray-600">
                  {go && "0x6d2e03b7EfF....6D0d6Ab0002766"}
                </Typography>
              }
            />
          </div>
          <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
            {nfts.map((props) => (
              <StatisticsChart
                key={props.title}
                {...props}
                footer={
                  <Typography
                    variant="small"
                    className="flex items-center font-normal text-blue-gray-600"
                  >
                    <ClockIcon
                      strokeWidth={2}
                      className="h-4 w-4 text-inherit"
                    />
                    &nbsp;{props.footer}
                  </Typography>
                }
              />
            ))}
          </div>
        </>
      )}
      {page === "tracker" && (
        <>
          <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
            <StatisticsCard
              onclick={() => {
                setCollections(projectsTableDataXPLA);
              }}
              focus={collections === projectsTableDataXPLA}
              color="white"
              value={go ? "3 Collections" : ""}
              title={"XPLA"}
              icon={
                <img src="https://play-lh.googleusercontent.com/TqNUpppPnSel2wFJpqKP88TMYO8pV0ArT0B-PZbX0Ajo67Hh6R7z0ohl1ODtT4bkPQ" />
              }
              footer={
                <Typography className="font-normal text-blue-gray-600">
                  {go && "0x6d2e03b7EfF....6D0d6Ab0002766"}
                </Typography>
              }
            />
            <StatisticsCard
              onclick={() => {
                setCollections(projectsTableData);
              }}
              focus={collections === projectsTableData}
              color="white"
              value={"3 Collections"}
              title={"Ethereum"}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  imageRendering="optimizeQuality"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  viewBox="0 0 784.37 1277.39"
                  className="w-8 h-8"
                >
                  <g>
                    <g fillRule="nonzero">
                      <path
                        fill="#343434"
                        d="M392.07 0L383.5 29.11 383.5 873.74 392.07 882.29 784.13 650.54z"
                      ></path>
                      <path
                        fill="#8C8C8C"
                        d="M392.07 0L0 650.54 392.07 882.29 392.07 472.33z"
                      ></path>
                      <path
                        fill="#3C3C3B"
                        d="M392.07 956.52L387.24 962.41 387.24 1263.28 392.07 1277.38 784.37 724.89z"
                      ></path>
                      <path
                        fill="#8C8C8C"
                        d="M392.07 1277.38L392.07 956.52 0 724.89z"
                      ></path>
                      <path
                        fill="#141414"
                        d="M392.07 882.29L784.13 650.54 392.07 472.33z"
                      ></path>
                      <path
                        fill="#393939"
                        d="M0 650.54L392.07 882.29 392.07 472.33z"
                      ></path>
                    </g>
                  </g>
                </svg>
              }
              footer={
                <Typography className="font-normal text-blue-gray-600"></Typography>
              }
            />
            <StatisticsCard
              focus={collections === projectsTableData2}
              onclick={() => {
                setCollections(projectsTableData2);
              }}
              color="white"
              value={"3 Collections"}
              title={"BNB"}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  enableBackground="new 0 0 2496 2496"
                  version="1.1"
                  viewBox="0 0 2496 2496"
                  xmlSpace="preserve"
                  className="w-8 h-8"
                >
                  <path
                    fill="#F0B90B"
                    fillRule="evenodd"
                    d="M1248 0c689.3 0 1248 558.7 1248 1248s-558.7 1248-1248 1248S0 1937.3 0 1248 558.7 0 1248 0z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M685.9 1248l.9 330 280.4 165v193.2l-444.5-260.7v-524l163.2 96.5zm0-330v192.3l-163.3-96.6V821.4l163.3-96.6L850 821.4 685.9 918zm398.4-96.6l163.3-96.6 164.1 96.6-164.1 96.6-163.3-96.6z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M803.9 1509.6v-193.2l163.3 96.6v192.3l-163.3-95.7zm280.4 302.6l163.3 96.6 164.1-96.6v192.3l-164.1 96.6-163.3-96.6v-192.3zm561.6-990.8l163.3-96.6 164.1 96.6v192.3l-164.1 96.6V918l-163.3-96.6zm163.3 756.6l.9-330 163.3-96.6v524l-444.5 260.7v-193.2l280.3-164.9z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M1692.1 1509.6L1528.8 1605.3 1528.8 1413 1692.1 1316.4 1692.1 1509.6z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M1692.1 986.4l.9 193.2-281.2 165v330.8l-163.3 95.7-163.3-95.7v-330.8l-281.2-165V986.4l164-96.6 279.5 165.8 281.2-165.8 164.1 96.6h-.7zM803.9 656.5l443.7-261.6 444.5 261.6-163.3 96.6-281.2-165.8-280.4 165.8-163.3-96.6z"
                  ></path>
                </svg>
              }
              footer={
                <Typography className="font-normal text-blue-gray-600"></Typography>
              }
            />
            <StatisticsCard
              focus={collections === projectsTableData3}
              onclick={() => {
                setCollections(projectsTableData3);
              }}
              color="white"
              value={"1 Collections"}
              title={"Polygon"}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  viewBox="0 0 38.4 33.5"
                  className="w-6 h-6"
                >
                  <path
                    d="M29 10.2c-.7-.4-1.6-.4-2.4 0L21 13.5l-3.8 2.1-5.5 3.3c-.7.4-1.6.4-2.4 0L5 16.3c-.7-.4-1.2-1.2-1.2-2.1v-5c0-.8.4-1.6 1.2-2.1l4.3-2.5c.7-.4 1.6-.4 2.4 0L16 7.2c.7.4 1.2 1.2 1.2 2.1v3.3l3.8-2.2V7c0-.8-.4-1.6-1.2-2.1l-8-4.7c-.7-.4-1.6-.4-2.4 0L1.2 5C.4 5.4 0 6.2 0 7v9.4c0 .8.4 1.6 1.2 2.1l8.1 4.7c.7.4 1.6.4 2.4 0l5.5-3.2 3.8-2.2 5.5-3.2c.7-.4 1.6-.4 2.4 0l4.3 2.5c.7.4 1.2 1.2 1.2 2.1v5c0 .8-.4 1.6-1.2 2.1L29 28.8c-.7.4-1.6.4-2.4 0l-4.3-2.5c-.7-.4-1.2-1.2-1.2-2.1V21l-3.8 2.2v3.3c0 .8.4 1.6 1.2 2.1l8.1 4.7c.7.4 1.6.4 2.4 0l8.1-4.7c.7-.4 1.2-1.2 1.2-2.1V17c0-.8-.4-1.6-1.2-2.1L29 10.2z"
                    style={{
                      fill: "#8247e5",
                    }}
                  />
                </svg>
              }
              footer={
                <Typography className="font-normal text-blue-gray-600"></Typography>
              }
            />
          </div>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {[
                    "collection",
                    "users",
                    "minted",
                    "mint completion percentage",
                  ].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-6 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-medium uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {collections.map(
                  ({ img, name, members, budget, completion }, key) => {
                    const className = `py-3 px-5 ${
                      key === projectsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={name}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <Avatar src={img} alt={name} size="sm" />
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {name}
                            </Typography>
                          </div>
                        </td>
                        <td className={className}>
                          {members.map(({ img, name }, key) => (
                            <Tooltip key={name} content={name}>
                              <Avatar
                                src={img}
                                alt={name}
                                size="xs"
                                variant="circular"
                                className={`cursor-pointer border-2 border-white ${
                                  key === 0 ? "" : "-ml-2.5"
                                }`}
                              />
                            </Tooltip>
                          ))}
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            {budget}
                          </Typography>
                        </td>
                        <td className={className}>
                          <div className="w-10/12">
                            <Typography
                              variant="small"
                              className="mb-1 block text-xs font-medium text-blue-gray-600"
                            >
                              {completion}%
                            </Typography>
                            <Progress
                              value={completion}
                              variant="gradient"
                              color={completion === 100 ? "green" : "blue"}
                              className="h-1"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </>
      )}
      {page === "bridge" && (
        <>
          <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
            <StatisticsCard
              onclick={() => {
                setChart(statisticsChartsDataxpla2);
              }}
              focus={chart === statisticsChartsDataxpla2}
              color="white"
              value="+ 5 new users"
              title={"XPLA"}
              icon={
                <img src="https://play-lh.googleusercontent.com/TqNUpppPnSel2wFJpqKP88TMYO8pV0ArT0B-PZbX0Ajo67Hh6R7z0ohl1ODtT4bkPQ" />
              }
              footer={
                <Typography className="font-normal text-blue-gray-600"></Typography>
              }
            />
            <StatisticsCard
              onclick={() => {
                setChart(statisticsChartsData5);
              }}
              focus={chart === statisticsChartsData5}
              color="white"
              value="+ 5 new users"
              title={"Ethereum"}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  imageRendering="optimizeQuality"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  viewBox="0 0 784.37 1277.39"
                  className="w-8 h-8"
                >
                  <g>
                    <g fillRule="nonzero">
                      <path
                        fill="#343434"
                        d="M392.07 0L383.5 29.11 383.5 873.74 392.07 882.29 784.13 650.54z"
                      ></path>
                      <path
                        fill="#8C8C8C"
                        d="M392.07 0L0 650.54 392.07 882.29 392.07 472.33z"
                      ></path>
                      <path
                        fill="#3C3C3B"
                        d="M392.07 956.52L387.24 962.41 387.24 1263.28 392.07 1277.38 784.37 724.89z"
                      ></path>
                      <path
                        fill="#8C8C8C"
                        d="M392.07 1277.38L392.07 956.52 0 724.89z"
                      ></path>
                      <path
                        fill="#141414"
                        d="M392.07 882.29L784.13 650.54 392.07 472.33z"
                      ></path>
                      <path
                        fill="#393939"
                        d="M0 650.54L392.07 882.29 392.07 472.33z"
                      ></path>
                    </g>
                  </g>
                </svg>
              }
              footer={
                <Typography className="font-normal text-blue-gray-600"></Typography>
              }
            />
            <StatisticsCard
              onclick={() => {
                setChart(statisticsChartsData6);
              }}
              focus={chart === statisticsChartsData6}
              color="white"
              value="+ 2 new users"
              title={"BNB"}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  enableBackground="new 0 0 2496 2496"
                  version="1.1"
                  viewBox="0 0 2496 2496"
                  xmlSpace="preserve"
                  className="w-8 h-8"
                >
                  <path
                    fill="#F0B90B"
                    fillRule="evenodd"
                    d="M1248 0c689.3 0 1248 558.7 1248 1248s-558.7 1248-1248 1248S0 1937.3 0 1248 558.7 0 1248 0z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M685.9 1248l.9 330 280.4 165v193.2l-444.5-260.7v-524l163.2 96.5zm0-330v192.3l-163.3-96.6V821.4l163.3-96.6L850 821.4 685.9 918zm398.4-96.6l163.3-96.6 164.1 96.6-164.1 96.6-163.3-96.6z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M803.9 1509.6v-193.2l163.3 96.6v192.3l-163.3-95.7zm280.4 302.6l163.3 96.6 164.1-96.6v192.3l-164.1 96.6-163.3-96.6v-192.3zm561.6-990.8l163.3-96.6 164.1 96.6v192.3l-164.1 96.6V918l-163.3-96.6zm163.3 756.6l.9-330 163.3-96.6v524l-444.5 260.7v-193.2l280.3-164.9z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M1692.1 1509.6L1528.8 1605.3 1528.8 1413 1692.1 1316.4 1692.1 1509.6z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M1692.1 986.4l.9 193.2-281.2 165v330.8l-163.3 95.7-163.3-95.7v-330.8l-281.2-165V986.4l164-96.6 279.5 165.8 281.2-165.8 164.1 96.6h-.7zM803.9 656.5l443.7-261.6 444.5 261.6-163.3 96.6-281.2-165.8-280.4 165.8-163.3-96.6z"
                  ></path>
                </svg>
              }
              footer={
                <Typography className="font-normal text-blue-gray-600"></Typography>
              }
            />
            <StatisticsCard
              onclick={() => {
                setChart(statisticsChartsData7);
              }}
              focus={chart === statisticsChartsData7}
              color="white"
              value="+ 1 new users"
              title={"Polygon"}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  viewBox="0 0 38.4 33.5"
                  className="w-6 h-6"
                >
                  <path
                    d="M29 10.2c-.7-.4-1.6-.4-2.4 0L21 13.5l-3.8 2.1-5.5 3.3c-.7.4-1.6.4-2.4 0L5 16.3c-.7-.4-1.2-1.2-1.2-2.1v-5c0-.8.4-1.6 1.2-2.1l4.3-2.5c.7-.4 1.6-.4 2.4 0L16 7.2c.7.4 1.2 1.2 1.2 2.1v3.3l3.8-2.2V7c0-.8-.4-1.6-1.2-2.1l-8-4.7c-.7-.4-1.6-.4-2.4 0L1.2 5C.4 5.4 0 6.2 0 7v9.4c0 .8.4 1.6 1.2 2.1l8.1 4.7c.7.4 1.6.4 2.4 0l5.5-3.2 3.8-2.2 5.5-3.2c.7-.4 1.6-.4 2.4 0l4.3 2.5c.7.4 1.2 1.2 1.2 2.1v5c0 .8-.4 1.6-1.2 2.1L29 28.8c-.7.4-1.6.4-2.4 0l-4.3-2.5c-.7-.4-1.2-1.2-1.2-2.1V21l-3.8 2.2v3.3c0 .8.4 1.6 1.2 2.1l8.1 4.7c.7.4 1.6.4 2.4 0l8.1-4.7c.7-.4 1.2-1.2 1.2-2.1V17c0-.8-.4-1.6-1.2-2.1L29 10.2z"
                    style={{
                      fill: "#8247e5",
                    }}
                  />
                </svg>
              }
              footer={
                <Typography className="font-normal text-blue-gray-600"></Typography>
              }
            />
          </div>
          <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
            {chart.map((props) => (
              <StatisticsChart2
                key={props.title}
                {...props}
                footer={
                  <Typography
                    variant="small"
                    className="flex items-center font-normal text-blue-gray-600"
                  >
                    <ClockIcon
                      strokeWidth={2}
                      className="h-4 w-4 text-inherit"
                    />
                    &nbsp;{props.footer}
                  </Typography>
                }
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
