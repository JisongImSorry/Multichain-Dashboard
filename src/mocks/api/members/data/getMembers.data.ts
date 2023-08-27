export const getMembersOkData: TResGetMembers = [
  {
    id: 1,
    name: "김철수",
    createdAt: "2021-01-01 00:00:00",
    phone: "010-1234-5678",
    birthday: "1990-01-01",
    address: "서울특별시 강남구 테헤란로 427",
    usedCoupon: {
      code: "1234",
      name: "신규가입할인",
    },
    payment: {
      amount: 10000,
      createdAt: "2021-01-01 00:00:00",
    },
    management: {
      material: {
        requested: true,
        delivery: {
          invoice: "1234",
          company: "CJ대한통운",
          manager: "김딸기",
          sendAt: "2021-01-01 00:00:00",
        },
      },
      exporting: {
        requested: true,
        date: "2021-01-01 00:00:00",
        delivery: {
          invoice: "1234",
          company: "CJ대한통운",
          manager: "김딸기",
          sendAt: "2021-01-01 00:00:00",
        },
      },
      subscribing: {
        dementia: true,
        legal: true,
      },
    },
  },
  {
    id: 2,
    name: "김영희",
    createdAt: "2021-01-01 00:00:00",
    phone: "010-1234-5678",
    birthday: "1990-01-01",
    address: "서울특별시 강남구 테헤란로 427",
    usedCoupon: null,
    payment: {
      amount: 10000,
      createdAt: "2021-01-01 00:00:00",
    },
    management: {
      material: {
        requested: false,
        delivery: null,
      },
      exporting: {
        requested: false,
        date: null,
        delivery: null,
      },
      subscribing: {
        dementia: true,
        legal: false,
      },
    },
  },
  {
    id: 3,
    name: "우리형",
    createdAt: "2021-01-01 00:00:00",
    phone: "010-1234-5678",
    birthday: "1990-01-01",
    address: "서울특별시 강남구 테헤란로 427",
    usedCoupon: null,
    payment: null,
    management: {
      material: {
        requested: false,
        delivery: null,
      },
      exporting: {
        requested: false,
        date: null,
        delivery: null,
      },
      subscribing: {
        dementia: false,
        legal: false,
      },
    },
  },
];
