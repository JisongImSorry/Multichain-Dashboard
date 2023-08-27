// export const getUserExportingOkData: TResGetUserExporting;
export const getUserExportingOkData = {
  materialRequested: {
    address: "서울시 중구",
    detailedAddress: "용산로", // 상세주소
    sendDate: "2021-01-01", // 실물 받아보기 신청일
  }, // null인 경우 실물 받아보기 신청하지 않음
  memoryCommunicator: [
    {
      id: 2, // user_memory_communicators 테이블의 ID. 기억전달자 식별의 기준
      name: "김창수", // 기억전달자 이름
      relationship: "사촌", // 사용자와의 관계
      contact1: "010-0000-0000", // 연락처 1
      contact2: "010-0000-0000", // 연락처 2
      address: "서울시 중서부", // 주소
      detailedAddress: "3동 2호", // 주소
      birth: "1999-9-9", // 생일
      remarkable: "잘생김", // 특이사항}];
    },
    {
      id: 3, // user_memory_communicators 테이블의 ID. 기억전달자 식별의 기준
      name: "박철민", // 기억전달자 이름
      relationship: "사촌", // 사용자와의 관계
      contact1: "010-0000-0000", // 연락처 1
      contact2: "010-0000-0000", // 연락처 2
      address: "서울시 중서부", // 주소
      detailedAddress: "3동 2호", // 주소
      birth: "1999-9-9", // 생일
      remarkable: "잘생김", // 특이사항}];
    },
  ],
} as TResGetUserExporting;
