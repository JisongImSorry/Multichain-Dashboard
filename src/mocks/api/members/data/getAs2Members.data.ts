export const getAs2MembersOkData: TResGetAs2Members = [
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
      contacted: true,
      visited: true,
      notarizing: {
        service: {
          category: "사설공증",
          note: "",
        },
        office: "미래공인중개사사무소",
        notary: "이미래",
        date: "2021-01-01 00:00:00",
      },
    },
  },
];
