// export const getUserInfoOkData: TResGetUserInfo
export const getUserInfoOkData: TResGetUserInfo = {
  name: "김철수",
  phone: "010-1234-5678",
  gender: "M",
  email: "cheolsu@gmail.com",
  address: "서울특별시 강남구 테헤란로 427",
  detailedAddress: "테헤란로 427",
  birth: "1999-09-09",
  paymentInfo: {
    createdAt: "2021-01-01 00:00:00",
    cardCompany: "신한카드",
    cardNumber: "1234-5678-1234-5678",
    paymentMethod: "카드",
    productInfo: [
      {
        name: "메인 상품",
        type: "MAIN",
        price: 10000,
      },
      {
        name: "부가 상품",
        type: "ADDITIONAL",
        price: 9999,
      },
    ],
    VAT: 1000,
    couponInfo: {
      couponName: "신규가입할인",
      couponAmount: 10000,
    },
    totalPrice: 10000,
  },
};
