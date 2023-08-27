import {
  useSetMaterialMutation,
  useSetExportingMutation,
  useSetAs1NotifyingMutation,
  useSetAs1DementiaMutation,
  useUploadAs1DementiaPaperMutation,
  useSetAs1ExportingMutation,
  useSetAs2Mutation,
  useSetNotarizingMutation,
} from "@services/member-detail";
import { useContext } from "react";
import { IndividualContext } from "@context/individual/IndividualContext";
import RowSection from "../component/RowSection";

type category = "사설공증" | "유언공증" | "재산신탁" | "기타";

export const Service = () => {
  const {
    userId,
    basicServiceInputs,
    additionalService1Inputs,
    additionalService2Inputs,
    paymentData,
    exportData,
    serviceData,
    getServiceData,
  } = useContext(IndividualContext);
  const [setMaterial] = useSetMaterialMutation();
  const [setExporting] = useSetExportingMutation();
  const [setAs1Notifying] = useSetAs1NotifyingMutation();
  const [setAs1Dementia] = useSetAs1DementiaMutation();
  const [setAs1Exporting] = useSetAs1ExportingMutation();
  const [setAs2] = useSetAs2Mutation();
  const [setNotarizing] = useSetNotarizingMutation();

  console.log("as2: ", additionalService2Inputs);

  const saveBasicServiceManagement = () => {
    if (userId) {
      if (
        serviceData?.material.requested &&
        basicServiceInputs.material === "O"
      ) {
        setMaterial({
          id: userId,
          invoice: "",
          company: "",
          manager: "",
          sendAt: new Date().toISOString(),
        });
      }
      if (!serviceData?.as1 && basicServiceInputs.exporting === "O") {
        setExporting({
          id: userId,
          invoice: "",
          company: "",
          manager: "",
          sendAt: new Date().toISOString(),
        });
      }
      getServiceData({ id: userId });
    }
  };
  const saveAdditionalService1Management = () => {
    if (userId) {
      console.log("test: ", additionalService1Inputs);

      if (serviceData?.as1 && additionalService1Inputs.notified === "O") {
        setAs1Notifying({
          id: userId,
          notified: additionalService1Inputs.notified === "O" ? true : false,
        });
      }
      if (serviceData?.as1 && additionalService1Inputs.dementiaProved === "O") {
        setAs1Dementia({
          id: userId,
          proved:
            additionalService1Inputs.dementiaProved === "O" ? true : false,
        });
      }
      if (serviceData?.as1 && additionalService1Inputs.exporting === "O") {
        setAs1Exporting({
          id: userId,
          invoice: "",
          company: "",
          manager: "",
          sendAt: additionalService1Inputs.exportingDate
            ? new Date(additionalService1Inputs.exportingDate).toISOString()
            : new Date().toISOString(),
        });
      }

      getServiceData({ id: userId });
    }
  };
  const saveAdditionalService2Management = () => {
    if (userId) {
      if (serviceData?.as2) {
        setAs2({
          id: userId,
          contacted:
            additionalService2Inputs.phoneNotified === "O" ? true : false,
          visited: additionalService2Inputs.visited === "O" ? true : false,
        });
      }
      if (serviceData?.as2 && additionalService2Inputs.notary) {
        setNotarizing({
          id: userId,
          service: {
            category: additionalService2Inputs.service as category,
            note: "",
          },
          notary: additionalService2Inputs.notary,
          office: additionalService2Inputs.office,
          date: additionalService2Inputs.date
            ? new Date(additionalService2Inputs.date).toISOString()
            : new Date().toISOString(),
        });
      }
    }
  };

  return (
    <>
      <div className="text-lg text-red-700 font-bold mb-2">
        결제 여부: {paymentData ? "O" : "X"}
      </div>
      <div className="grid grid-cols-3 bg-white rounded-lg shadow-md p-4">
        <RowSection
          title="기본서비스 제공관리"
          args={[
            {
              title: "실물전달여부",
              type: exportData?.materialRequested ? "select" : "value",
              options: exportData?.materialRequested
                ? ["O", "X"]
                : ["서비스 미신청"],
              tag: "basic-material",
              current: basicServiceInputs?.material,
            },
            {
              title: "내뜻전달예정일",
              type: "value",
              options: [basicServiceInputs?.exportDate],
            },
            {
              title: "내뜻전달여부",
              type: serviceData?.as1 ? "value" : "select",
              options: serviceData?.as1 ? ["부가서비스 1 신청"] : ["O", "X"],
              tag: "basic-exporting",
              current: basicServiceInputs?.exporting,
            },
          ]}
          hasAction={true}
          action={() => {
            saveBasicServiceManagement();
          }}
        />
        {serviceData?.as1 ? (
          <RowSection
            title="부가서비스 1 제공관리"
            args={[
              {
                title: "만 나이",
                type: "value",
                options: [
                  additionalService1Inputs?.current !== "미등록"
                    ? additionalService1Inputs?.current + "세"
                    : "미등록",
                ],
              },
              {
                title: "65세 도달 여부",
                type: "value",
                options: [
                  additionalService1Inputs?.fulfilled === "O" ? "O" : "X",
                ],
              },
              {
                title: "보호자통지여부",
                type: "select",
                options: ["O", "X"],
                tag: "as1-notified",
                current: additionalService1Inputs?.notified === "O" ? "O" : "X",
              },
              {
                title: "치매확인여부",
                type: "select",
                options: ["O", "X"],
                tag: "as1-dementiaProved",
                current:
                  additionalService1Inputs?.dementiaProved === "O" ? "O" : "X",
              },
              {
                title: "내뜻전달서전달여부",
                type: "select",
                tag: "as1-exporting",
                options: ["O", "X"],
                current:
                  additionalService1Inputs?.exporting === "O" ? "O" : "X",
              },
              {
                title: "내뜻전달서전달시기",
                type: "input",
                tag: "as1-exportingDate",
                current: additionalService1Inputs?.exportingDate,
              },
            ]}
            hasAction={true}
            action={() => {
              saveAdditionalService1Management();
            }}
          />
        ) : null}
        {serviceData?.as2 ? (
          <RowSection
            title="부가서비스 2 제공관리"
            args={[
              {
                title: "유선안내여부",
                type: "select",
                options: ["O", "X"],
                tag: "as2-phoneNotified",
                current:
                  additionalService2Inputs?.phoneNotified === "O" ? "O" : "X",
              },
              {
                title: "내방여부",
                type: "select",
                options: ["O", "X"],
                tag: "as2-visited",
                current: additionalService2Inputs?.visited === "O" ? "O" : "X",
              },
              {
                title: "세부 서비스",
                type: "select",
                options: ["사설공증", "유언공증", "재산신탁", "기타"],
                tag: "as2-service",
                current: additionalService2Inputs?.service,
              },
              { title: "공증사무소", type: "input", tag: "as2-office" },
              { title: "공증인", type: "input", tag: "as2-notary" },
              { title: "공증일시", type: "input", tag: "as2-date" },
            ]}
            hasAction={true}
            action={() => {
              saveAdditionalService2Management();
            }}
          />
        ) : null}
      </div>
    </>
  );
};
