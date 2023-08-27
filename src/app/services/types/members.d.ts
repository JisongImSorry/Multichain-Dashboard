////////// GetMembers //////////
// description: 전체회원보기
// endpoint: /server/admin/members
// method: GET
type TReqGetMembers = void;
type TResGetMembers = {
  id: number; // 고유번호
  name: string; // 성명
  createdAt: string; // 가입시기
  phone: string; // 휴대전화 번호
  birthday: string; // 생년월일
  address: string; // 주소
  usedCoupon: {
    // 결제 시, 사용한 쿠폰
    code: string; // 쿠폰코드
    name: string; // 쿠폰이름
  } | null;
  payment: {
    // 총 결제금액 + 결제시기
    amount: number;
    createdAt: string; // 결제시기;
  } | null;
  management: {
    // 기타 서비스 제공관리 조회
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
      date: string | null; // 내 뜻 전달 시기 (고객 입력 사항)
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
  };
}[];
////////// GetAs1Members //////////
// description: 부가서비스1 가입 회원보기
// endpoint: /server/admin/members/as1
// method: GET
type TReqGetAs1Members = void;
type TResGetAs1Members = {
  id: number; // 고유번호
  name: string; // 성명
  createdAt: string; // 가입시기
  phone: string; // 휴대전화 번호
  birthday: string; // 생년월일
  address: string; // 주소
  usedCoupon: {
    // 결제 시, 사용한 쿠폰
    code: string; // 쿠폰코드
    name: string; // 쿠폰이름
  } | null;
  payment: {
    // 총 결제금액 + 결제시기
    amount: number;
    createdAt: string; // 결제시기
  } | null;
  management: {
    // 기타 서비스 제공관리 조회
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
    exporting: {
      // 내 뜻 전달 관련 조회
      requested: boolean; // 내뜻 전달 신청 여부,
      date: string | null; // 내 뜻 전달 시기 (고객 입력 사항)
      delivery: {
        // 내 뜻 전달 완료 여부, 내 뜻 전달 신청X 또는 전달 배송 아직 X 시, null
        invoice: string; // 송장
        company: string; // 택배사
        manager: string; // 담당자
        sendAt: string; // 발송 처리일
      } | null;
    };
  };
}[];
////////// GetAs2Members //////////
// description: 부가서비스2 가입 회원보기
// endpoint: /server/admin/members/as2
type TReqGetAs2Members = void;
type TResGetAs2Members = {
  id: number; // 고유번호
  name: string; // 성명
  createdAt: string; // 가입시기
  phone: string; // 휴대전화 번호
  birthday: string; // 생년월일
  address: string; // 주소
  usedCoupon: {
    // 결제 시, 사용한 쿠폰
    code: string; // 쿠폰코드
    name: string; // 쿠폰이름
  } | null;
  payment: {
    // 총 결제금액 + 결제시기
    amount: number;
    createdAt: string; // 결제시기;
  } | null;
  management: {
    // 기타 서비스 제공관리 조회
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
  };
}[];

////////// FindMember //////////
// description: 회원 검색
// endpoint: /server/admin/members/search
type TReqFindMember = {
  name?: string; // 성명
  phone?: string; // 휴대전화 번호
  uniqueId?: string; // 고유번호
  page?: number; // 페이지
};
type TResFindMember = {
  res: Array<{ id: number; name: string; birth: string }>;
  page?: number;
  pageSize?: number;
  totalPages?: number;
};
