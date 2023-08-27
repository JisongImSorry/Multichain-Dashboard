import RowSection from "../component/RowSection";
import QRCode from "react-qr-code";
import { useContext } from "react";
import { IndividualContext } from "@context/individual/IndividualContext";

export const Export = () => {
  const { fileViewURL, exportData, userId } = useContext(IndividualContext);

  return (
    <div className="grid grid-cols-3 bg-white rounded-lg shadow-md p-4">
      <RowSection
        title="실물 전달"
        args={[
          {
            title: "실물 받아보기",
            type: "value",
            options: [
              exportData?.materialRequested ? "신청함" : "신청하지않음",
            ],
          },
          {
            title: "실물 전달예정주소",
            type: "value",
            options: [
              `${exportData?.materialRequested?.address} ${exportData?.materialRequested?.detailedAddress}`,
            ],
          },
          {
            title: "내 뜻 전달 예정일",
            type: "value",
            options: [exportData?.materialRequested?.sendDate],
          },
        ]}
      />
      <RowSection
        title="내 뜻 전달 대상자"
        args={[
          {
            title: "대상자",
            type: "value",
            options: exportData?.memoryCommunicator.map((item) => item.name),
          },
        ]}
      />
      <RowSection
        title="PDF"
        args={[
          {
            title: "내 뜻 전달서 PDF 생성",
            type: "value",
            options: [
              <a href={`${window.location.origin}/paper/${userId}`}>클릭</a>,
            ],
          },
          {
            title: "사진, 음성, 고객 확인페이지 링크",
            type: "value",
            options: [fileViewURL],
          },
          {
            title: "사진, 음성, 고객 확인페이지 QR",
            type: "value",
            options: [<QRCode value={fileViewURL} />],
          },
        ]}
      />
    </div>
  );
};
