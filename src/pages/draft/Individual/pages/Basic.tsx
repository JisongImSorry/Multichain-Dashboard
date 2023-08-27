import RowSection from "../component/RowSection";
import { useContext } from "react";
import { IndividualContext } from "@context/individual/IndividualContext";

export const Basic = () => {
  const { userData, paymentData } = useContext(IndividualContext);
  return (
    <div className="grid grid-cols-2 bg-white rounded-lg shadow-md p-4">
      <RowSection
        title="기본 정보"
        args={[
          { title: "성명", type: "value", options: [userData?.name] },
          { title: "연락처", type: "value", options: [userData?.phone] },
          { title: "성별", type: "value", options: [userData?.gender] },
          { title: "생년월일", type: "value", options: [userData?.birth] },
          { title: "이메일", type: "value", options: [userData?.email] },
          { title: "주소", type: "value", options: [userData?.address] },
        ]}
      />
      <RowSection
        title="결제 정보"
        args={[
          {
            title: "결제시기",
            type: "value",
            options: [paymentData?.createdAt],
          },
          {
            title: "결제방법",
            type: "value",
            options: [paymentData?.paymentMethod],
          },
          {
            title: "기본서비스 내역",
            type: "value",
            options: [
              paymentData?.productInfo.find((v) => v.type === "main")?.name,
            ],
          },
          {
            title: "부가서비스 내역",
            type: "value",
            options: [
              paymentData?.productInfo.find((v) => v.type === "additional")
                ?.name,
            ],
          },
          {
            title: "부가가치세",
            type: "value",
            options: [paymentData?.VAT],
          },
          {
            title: "쿠폰",
            type: "value",
            options: [paymentData?.couponInfo?.couponName],
          },
          {
            title: "총 결제금액",
            type: "value",
            options: [paymentData?.totalPrice],
          },
        ]}
      />
    </div>
  );
};
