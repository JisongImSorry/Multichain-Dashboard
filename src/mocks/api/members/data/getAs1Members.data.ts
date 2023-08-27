export const getAs1MembersOkData: TResGetAs1Members = [
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
      age: {
        fulfilled: true,
        current: 65,
      },
      notified: true,
      dementia: {
        proved: true,
        paper: "https://www.google.com",
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
      age: {
        fulfilled: false,
        current: 64,
      },
      notified: false,
      dementia: {
        proved: false,
        paper: null,
      },
      exporting: {
        requested: true,
        date: "2021-01-01 00:00:00",
        delivery: null,
      },
    },
  },
];
