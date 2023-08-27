import {
  useLazyGetUserInfoQuery,
  useLazyGetUserInstructionQuery,
  useLazyGetUserExportingQuery,
  useLazyGetServiceManagementQuery,
  useLazyListMemoQuery,
} from "@services/member-detail";
import { useLazyFindMemberQuery } from "@services/members";
import React, { useEffect, useState } from "react";

export const useIndividual = () => {
  const [getUserInfo, { data: userData }] = useLazyGetUserInfoQuery();
  console.log(userData);
  const [getExportData, { data: exportData }] = useLazyGetUserExportingQuery();
  const [getServiceData, { data: serviceData }] =
    useLazyGetServiceManagementQuery();
  const [listMemo, { data: memoData }] = useLazyListMemoQuery();
  const [findMember, { data: memberSearchData }] = useLazyFindMemberQuery();
  const [getUserInstruction, { data: instructionData }] =
    useLazyGetUserInstructionQuery();
  const [uniqueId, setUniqueId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const [userId, setUserId] = useState<number | undefined>(undefined);
  const [basicServiceInputs, setBasicServiceInputs] = useState<{
    material: string;
    exporting: string;
    exportDate: string;
  }>({
    material: "X",
    exporting: "X",
    exportDate: "",
  });
  const [additionalService1Inputs, setAdditionalService1Inputs] = useState<{
    [key: string]: string;
  }>({});
  const [additionalService2Inputs, setAdditionalService2Inputs] = useState<{
    [key: string]: string;
  }>({ phoneNotified: "X", visited: "X", service: "" });

  useEffect(() => {
    if (!userId) return;

    getUserInfo({ id: userId });
    getUserInstruction({ id: userId });
    getExportData({ id: userId });
    getServiceData({ id: userId });
    listMemo({ id: userId, type: "all" });
  }, [userId]);

  useEffect(() => {
    if (serviceData) {
      setBasicServiceInputs({
        material: serviceData?.material?.requested ? "O" : "X",
        exporting: serviceData?.exporting?.requested ? "O" : "X",
        exportDate: serviceData?.exporting?.date
          ? serviceData?.exporting?.date
          : "",
      });

      setAdditionalService1Inputs({
        current: serviceData?.as1?.age?.current
          ? serviceData?.as1?.age?.current.toString()
          : "미등록",
        fulfilled: serviceData?.as1?.age?.fulfilled ? "O" : "X",
        notified: serviceData?.as1?.notified ? "O" : "X",
        dementiaProved: serviceData?.as1?.dementia?.proved ? "O" : "X",
        dementiaPaper: serviceData?.as1?.dementia?.paper
          ? (serviceData?.as1?.dementia?.paper as string)
          : "X",
        exporting: serviceData?.as1?.delivery ? "O" : "X",
        exportingDate: serviceData?.as1?.delivery?.sendAt
          ? serviceData?.as1?.delivery?.sendAt
          : "",
      });

      setAdditionalService2Inputs({
        phoneNotified: serviceData?.as2?.contacted ? "O" : "X",
        visited: serviceData?.as2?.visited ? "O" : "X",
        service: serviceData?.as2?.notarizing?.service
          ? (serviceData?.as2?.notarizing?.service as unknown as string)
          : "기타",
      });
    }
  }, [serviceData]);

  const searchUser = (page?: number) => {
    findMember({ name: name, phone: phone, uniqueId: uniqueId, page: page });
  };

  return {
    userId,
    setUserId,
    memberSearchData,
    userData,
    paymentData: userData?.paymentInfo,
    exportData,
    serviceData,
    instructionData,
    basicServiceInputs,
    setBasicServiceInputs,
    additionalService1Inputs,
    setAdditionalService1Inputs,
    additionalService2Inputs,
    setAdditionalService2Inputs,
    memoData,
    fileViewURL: exportData?.fileViewUrl || "",
    searchUser,
    getServiceData,
    listMemo,
    uniqueId,
    setUniqueId,
    name,
    setName,
    phone,
    setPhone,
  };
};
