import { chartsConfig } from "@configs";

const websiteViewsChart = {
  type: "bar",
  height: 220,
  series: [
    {
      name: "Views",
      data: [50, 20, 10, 22, 50, 10, 40],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#fff",
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
  },
};

const dailySalesChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#fff"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};

const completedTasksChart = {
  ...dailySalesChart,
  series: [
    {
      name: "Tasks",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    },
  ],
};

export const statisticsChartsDataxpla = [
  {
    color: "blue",
    title: "Legendary Loot Box #963",
    description:
      "Legendary Loot Box. Each box promises to contain at least one LEGENDARY item, reserved for the most dedicated of adventurers. ",
    footer: "2 days left",
    chart:
      "https://assetsio.reedpopcdn.com/overwatch_loot_box.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
  },
];

export const statisticsChartsDataxpla2 = [
  {
    color: "blue",
    title: "New User",
    description: "Number of new users graph",
    footer: "updated 1 min ago",
    chart: websiteViewsChart,
  },
  {
    color: "pink",
    title: "Daily Mint",
    description: "Number of minted items graph",
    footer: "updated 4 min ago",
    chart: dailySalesChart,
  },
  {
    color: "green",
    title: "Revenue",
    description: "Revenue graph, in USD",
    footer: "updated 1 min ago",
    chart: completedTasksChart,
  },
];

export const statisticsChartsData = [
  {
    color: "blue",
    title: "Legendary Loot Box #824",
    description:
      "Legendary Loot Box. Each box promises to contain at least one LEGENDARY item, reserved for the most dedicated of adventurers. ",
    footer: "2 days left",
    chart:
      "https://assetsio.reedpopcdn.com/overwatch_loot_box.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
  },
  {
    color: "blue",
    title: "Legendary Loot Box #251",
    description:
      "Legendary Loot Box. Each box promises to contain at least one LEGENDARY item, reserved for the most dedicated of adventurers. ",
    footer: "5 days left",
    chart:
      "https://assetsio.reedpopcdn.com/overwatch_loot_box.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
  },
  {
    color: "blue",
    title: "The King's Sword #842",
    description: "King''s sword. Only kings can equip it. Atk +100",
    footer: "10 days left",
    chart:
      "https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-beautiful-game-long-sword-illustration-image_1446457.jpg",
  },
  {
    color: "blue",
    title: "Mystery Money Bag #144",
    description: "A mysterious money bag. You can get up to 1000 golds.",
    footer: "13 days left",
    chart:
      "https://cdna.artstation.com/p/assets/images/images/030/449/870/large/joanna-casaje-fantasyicons-moneybags-bag01.jpg?1600649348",
  },
  {
    color: "blue",
    title: "Mystery Money Bag #203",
    description: "A mysterious money bag. You can get up to 1000 golds.",
    footer: "15 days left",
    chart:
      "https://cdna.artstation.com/p/assets/images/images/030/449/870/large/joanna-casaje-fantasyicons-moneybags-bag01.jpg?1600649348",
  },
];

export const statisticsChartsData2 = [
  {
    color: "blue",
    title: "Gold Loot Box #562",
    description:
      "Gold Loot Box. Each box promises to contain at least one GOLD item, reserved for the most dedicated of adventurers.",
    footer: "2 days left",
    chart: "https://cdn.mos.cms.futurecdn.net/dNptjMuP9QKbNv3ogAFsJ9.jpg",
  },
  {
    color: "blue",
    title: "Legendary Loot Box #13",
    description:
      "Legendary Loot Box. Each box promises to contain at least one LEGENDARY item, reserved for the most dedicated of adventurers. ",
    footer: "5 days left",
    chart:
      "https://assetsio.reedpopcdn.com/overwatch_loot_box.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
  },
  {
    color: "blue",
    title: "The King's Sword #842",
    description: "King''s sword. Only kings can equip it. Atk +100",
    footer: "10 days left",
    chart:
      "https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-beautiful-game-long-sword-illustration-image_1446457.jpg",
  },
];

export const statisticsChartsData3 = [
  {
    color: "blue",
    title: "Wooden Shield #14",
    description:
      "Cheap and hard wooden shield. It can protect you from some attacks. Def + 50",
    footer: "2 days left",
    chart:
      "https://i.pinimg.com/originals/cc/a8/d6/cca8d6f77c1079c91995b99a6b7ca064.png",
  },
];

export const statisticsChartsData4 = [
  {
    color: "tray",
    title: "",
    description: "",
    footer: "",
    chart:
      "https://htmlcolorcodes.com/assets/images/colors/dark-gray-color-solid-background-1920x1080.png",
  },
];

export const statisticsChartsData5 = [
  {
    color: "blue",
    title: "New User",
    description: "Number of new users graph",
    footer: "updated 1 min ago",
    chart: websiteViewsChart,
  },
  {
    color: "pink",
    title: "Daily Mint",
    description: "Number of minted items graph",
    footer: "updated 4 min ago",
    chart: dailySalesChart,
  },
  {
    color: "green",
    title: "Revenue",
    description: "Revenue graph, in USD",
    footer: "updated 1 min ago",
    chart: completedTasksChart,
  },
];
export const statisticsChartsData6 = [
  {
    color: "blue",
    title: "New User",
    description: "Number of new users graph",
    footer: "updated 1 min ago",
    chart: websiteViewsChart,
  },
  {
    color: "pink",
    title: "Daily Mint",
    description: "Number of minted items graph",
    footer: "updated 4 min ago",
    chart: dailySalesChart,
  },
  {
    color: "green",
    title: "Revenue",
    description: "Revenue graph, in USD",
    footer: "updated 1 min ago",
    chart: completedTasksChart,
  },
];
export const statisticsChartsData7 = [
  {
    color: "blue",
    title: "New User",
    description: "Number of new users graph",
    footer: "updated 1 min ago",
    chart: websiteViewsChart,
  },
  {
    color: "pink",
    title: "Daily Mint",
    description: "Number of minted items graph",
    footer: "updated 4 min ago",
    chart: dailySalesChart,
  },
  {
    color: "green",
    title: "Revenue",
    description: "Revenue graph, in USD",
    footer: "updated 1 min ago",
    chart: completedTasksChart,
  },
];

export default statisticsChartsData;
