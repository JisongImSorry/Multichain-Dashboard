////////// GetUserInfo //////////
// description: 개별 내역보기 → 기본정보/결제정보
// endpoint: /server/admin/detail/:id/user-basic-info
// method: GET
type TReqGetUserInfo = {
  id: number; // 조회 유저 ID [Url Path Param]
};
type TResGetUserInfo = {
  name: string; // 이름
  phone: string; // 연락처(휴대전화 번호)
  gender: string; // 성별(M, F)
  email: string; // 이메일 주소
  address: string; // 주소
  detailedAddress: string; // 상세주소
  birth: string; // 생년월일
  paymentInfo: {
    paymentMethod: string; // 결제수단
    createdAt: string; // 결제시기
    cardCompany: string; // 카드사 이름
    cardNumber: string; // 카드번호
    productInfo: UserPurchasedProduct[];
    VAT: number; // 부가가치세
    couponInfo: {
      couponName: string; // 쿠폰 이름
      couponAmount: number; // 쿠폰 할인액
    } | null;
    totalPrice: number; // 총 결제금액
  } | null;
};
// extra-sub-types
type UserPurchasedProduct = {
  name: string; // 상품 이름
  type: string; // 상품 종류(MAIN, ADDITIONAL)
  price: number; // 상품 가격
};

////////// GetUserInstruction //////////
// description: 개별 내역보기 → 내뜻전달서 입력내용
// endpoint: /server/admin/detail/:id/instruction
// method: GET
type TReqGetUserInstruction = {
  id: number; // 조회 유저 ID [Url Path Param]
};
type TResGetUserInstruction = {
  health: Answers;
  medical: Answers;
  economical: Answers;
  lifestyle: Answers;
  death: Answers;
  guardian: Answers;
};
// extra-sub-types
type InputItem = {
  input_id: number; // survey_item_inputs의 id(사용자 응답 식별의 기준)
  tag: string; // 해당 응답에 대한 설명
  type: string; // 응답 유형
  answer: number | string; // 사용자 응답 내용
};
type FileItem = {
  file_id: number; // survey_item_files의 id(파일 응답 식별의 기준)
  type: "VOICE" | "IMAGE"; // 파일 유형
  location: string; // 파일 저장경로(S3 경로)
};
type InstructionCorpus = {
  question_id: number; // 문항 번호(유형별로 순차적으로 매긴 번호)
  item_id: number; // survey_items 테이블의 id(문항 식별의 기준)
  type: string; // 문항 유형
  subclass: number; /// 문항 세부유형
  title: string; // 질문
  description: string; // 문항 설명
  input_item: InputItem[];
  file_item: FileItem[];
};
type Answers = {
  // 기존 response structure
  result: InstructionCorpus[];
};

////////// GetUserExporting //////////
// description: 개별 내역보기 → 내보내기
// endpoint: /server/admin/detail/:id/exporting
// method: GET
type TReqGetUserExporting = {
  id: number; // 조회 유저 ID [Url Path Param]
};
type TResGetUserExporting = {
  materialRequested: {
    address: string; // 주소
    detailedAddress: string; // 상세주소
    sendDate: string; // 발송 예정일
  } | null; // null인 경우 실물 받아보기 신청하지 않음
  memoryCommunicator: MemoryCommunicatior[];
  fileViewUrl: string; // 내뜻전달서 파일 확인 URL
};
// extra-sub-types
type MemoryCommunicator = {
  id: number; // user_memory_communicators 테이블의 ID. 기억전달자 식별의 기준
  name: string; // 기억전달자 이름
  relationship: string; // 사용자와의 관계
  contact1: string; // 연락처 1
  contact2: string; // 연락처 2
  address: string; // 주소
  detailedAddress: string; // 주소
  birth: string; // 생일
  remarkable: string; // 특이사항
};

////////// GetUserServiceManagement //////////
// description: 개별 내역보기 → 서비스 제공관리
// endpoint: /server/admin/detail/:id/service-management
// method: GET
type TReqGetServiceManagement = {
  id: number; // 조회 유저 ID [Url Path Param]
};
type TResGetServiceManagement = {
  // 서비스 제공관리 조회
  // 기본
  material: {
    // 실물 전달 관련
    requested: boolean; // 실물 전달 신청 여부
    delivery: {
      // 실물 전달 완료 여부, 실물 전달 요청X 또는 전달 배송 아직 안했을 때, null
      invoice: string; // 송장
      company: string; // 택배사
      manager: string; // 담당자
      sendAt: string; // 발송 처리일
    } | null;
  };
  exporting: {
    // 내 뜻 전달 관련 조회
    requested: boolean; // 내뜻 전달 신청 여부,
    date: string | null; // 내 뜻 전달 예정일 (고객 입력 사항)
    delivery: {
      // 내 뜻 전달 완료 여부, 내 뜻 전달 신청X 또는 전달 배송 아직 X 시, null
      invoice: string; // 송장
      company: string; // 택배사
      manager: string; // 담당자
      sendAt: string; // 발송 처리일
    } | null;
  };
  subscribing: {
    // 부가서비스 관련 조회
    dementia: boolean; // 부가서비스1 결제 신청 여부
    legal: boolean; // 부가서비스2 결제 신청 여부
  };
  // 부가서비스1, 신청하지 않았을 경우 null
  as1: {
    age: {
      // 나이 관련 조회
      fulfilled: boolean; // 만 65세 도달 여부
      current: number; // 현재 만 나이
    };
    notified: boolean; // 보호자 통지 여부
    dementia: {
      // 치매 확인 관련 조회
      proved: boolean; // 치매 확인 여부
      paper: string | null; // 치매 진단서 확인증 url
    };
    delivery: {
      // 내 뜻 전달 완료 여부, 내 뜻 전달 신청X 또는 전달 배송 아직 X 시, null
      invoice: string; // 송장
      company: string; // 택배사
      manager: string; // 담당자
      sendAt: string; // 발송 처리일
    } | null;
  } | null;
  // 부가서비스2, 신청하지 않았을 경우 null
  as2: {
    contacted: boolean; // 법적 효력 유선 안내 여부
    visited: boolean; // 법적 효력 상담 내방 여부
    notarizing: {
      // 공증 관련 조회
      service: {
        // 공증 서비스 관련 조회
        category: "사설공증" | "유언공증" | "재산신탁" | "기타"; // 세부서비스
        note: string; // 세부 서비스: 기타 시, 유효값
      };
      office: string; // 공증사무소 이름
      notary: string; // 공증인 이름
      date: string; // 공증 일시
    } | null;
  } | null;
};

////////// SetMaterial //////////
// description: 개별 내역보기 → 서비스 제공관리 → 실물 전달 여부 업데이트
// endpoint: /server/admin/detail/:id/service-management/material-delivery
// method: POST
type TReqSetMaterial = {
  id: number; // 업데이트 유저 ID [Url Path Param]
  invoice: string; // 송장번호
  company: string; // 택배사
  manager: string; // 담당자
  sendAt: string; // 발송 처리일
};
type TResSetMaterial = void;

////////// SetExporting //////////
// description: 서비스 제공관리 → 기본 서비스 → 내뜻전달서 전달여부, 내뜻전달서 전달 배송 업데이트
// endpoint: /server/admin/detail/:id/service-management/exporting-delivery
// method: POST
type TReqSetExporting = {
  id: number; // 업데이트 유저 ID [Url Path Param]
  invoice: string; // 송장번호
  company: string; // 택배사
  manager: string; // 담당자
  sendAt: string; // 발송 처리일
};
type TResSetExporting = void;

////////// SetAs1Notifying //////////
// description: 부가서비스1 → 보호자통지여부 업데이트
// endpoint: /server/admin/detail/:id/service-management/as1/notifying
// method: POST
type TReqSetAs1Notifying = {
  id: number; // 업데이트 유저 ID [Url Path Param]
  notified: boolean; // 보호자 통지 여부
};
type TResSetAs1Notifying = void;

////////// SetAs1Dementia //////////
// description: 부가서비스1 → 치매 확인여부 업데이트
// endpoint: /server/admin/detail/:id/service-management/as1/dementia
// method: POST
type TReqSetAs1Dementia = {
  id: number; // 업데이트 유저 ID [Url Path Param]
  proved: boolean; // 치매 확인 여부
};
type TResSetAs1Dementia = void;

////////// UploadAs1DementiaPaper //////////
// description: 부가서비스1 → 치매 진단서 확인증 업로드
// endpoint: /server/admin/detail/:id/service-management/as1/dementia/paper
// method: POST
type TReqUploadAs1DementiaPaper = {
  id: number; // 업데이트 유저 ID [Url Path Param]
  paper: File;
};
type TResUploadAs1DementiaPaper = void;

////////// SetAs1Exporting //////////
// description: 부가서비스1 → 내뜻전달서 전달여부, 내뜻전달서 전달 배송 업데이트
// endpoint: /server/admin/detail/:id/service-management/as1/dementia-delivery
// method: POST
type TReqSetAs1Exporting = {
  id: number; // 업데이트 유저 ID [Url Path Param]
  invoice: string; // 송장번호
  company: string; // 택배사
  manager: string; // 담당자
  sendAt: string; // 발송 처리일
};
type TResSetAs1Exporting = void;

////////// SetAs2 //////////
// description: 부가서비스2 → 법적 효력 유선 안내 여부, 법적 효력 상담 내방 여부 업데이트
// endpoint: /server/admin/detail/:id/service-management/as2
// method: POST
type TReqSetAs2 = {
  id: number; // 업데이트 유저 ID [Url Path Param]
  contacted: boolean; // 법적 효력 유선 안내 여부
  visited: boolean; // 법적 효력 상담 내방 여부
};
type TResSetAs2 = void;

////////// SetAs2Notarizing //////////
// description: 부가서비스2 → 공증 관련 업데이트
// endpoint: /server/admin/detail/:id/service-management/as2/notarizing
// method: POST
type TReqSetNotarizing = {
  id: number; // 업데이트 유저 ID [Url Path Param]
  service: {
    // 공증 서비스 관련 조회
    category: "사설공증" | "유언공증" | "재산신탁" | "기타"; // 세부서비스
    note: string; // 세부 서비스: 기타 시, 유효값
  };
  office: string; // 공증사무소 이름
  notary: string; // 공증인 이름
  date: string; // 공증 일시
};
type TResSetNotarizing = void;

////////// ListMemo //////////
// description: 메모 리스트 조회
// endpoint: /server/admin/detail/:id/memo
// method: GET
type TReqListMemo = {
  id: number; // 유저 ID [Url Path Param]
  type: "default" | "consult" | "all"; // 기본메모, 상담일지, 혹은 전부 [QueryString]
};
type TResListMemo = {
  id: number; // 메모 ID
  title: string; // 메모 제목
  content: string;
  type: "default" | "consult"; // 기본메모, 상담일지 (추가됨)
  createdAt: string;
  updatedAt: string;
}[];

////////// GetMemoDetail //////////
// description: 메모 상세 조회
// endpoint: /server/admin/detail/:id/memo/:memo_id
// method: GET
type TReqGetMemoDetail = {
  id: number; // 유저 ID [Url Path Param(id)]
  memoId: number; // 메모 ID [Url Path Param(memo_id)]
};
type TResGetMemoDetail = {
  title: string; // 메모 제목
  content: string; // 메모 내용
  type: "default" | "consult"; // 기본메모, 상담일지 (추가됨)
  date?: string; // 상담 일자, (추가됨)
  createdAt: string;
  updatedAt: string;
};

////////// CreateMemo //////////
// description: 메모 생성
// endpoint: /server/admin/detail/:id/memo
// method: POST
type TReqCreateMemo = {
  id: number; // 유저 ID [Url Path Param(id)]
  type: "default" | "consult"; // 기본메모, 상담일지
  title: string; // 메모 제목
  content: string; // 메모 내용
  date?: string; // 상담일자
};
type TResCreateMemo = void;

////////// UpdateMemo //////////
// description: 메모 수정
// endpoint: /server/admin/detail/:id/memo/:memo_id
// method: PUT
type TReqUpdateMemo = {
  id: number; // 유저 ID [Url Path Param(id)]
  memoId: number; // 메모 ID [Url Path Param(memo_id)]
  title?: string; // 메모 제목
  content?: string; // 메모 내용
  date?: string; // 상담일자
};
type TResUpdateMemo = void;

////////// DeleteMemo //////////
// description: 메모 삭제
// endpoint: /server/admin/detail/:id/memo/:memo_id
// method: DELETE
type TReqDeleteMemo = {
  id: number; // 유저 ID [Url Path Param(id)]
  memoId: number; // 메모 ID [Url Path Param(memo_id)]
};
type TResDeleteMemo = void;
