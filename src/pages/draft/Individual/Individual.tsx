import React, { useMemo, useState, useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Basic } from "./pages/Basic";
import { Inputs } from "./pages/Inputs";
import { Export } from "./pages/Export";
import { Service } from "./pages/Service";
import { Memo } from "./pages/Memo";
import { useIndividual } from "@hooks/useIndividual";
import { IndividualContext } from "@context/individual/IndividualContext";
import InputWithLabel from "@components/general/InputWithLabel";
import GeneralButton from "@components/general/GeneralButton";
import NavigationBar from "@components/general/NavigationBar";

export function Individual() {
  const individualControls = useIndividual();
  const { userId, memberSearchData, setUserId, searchUser } =
    individualControls;
  console.log(memberSearchData);

  const navigationItems = [
    {
      title: "기본정보/결제정보",
      dest: "basic",
      tag: "basic",
    },
    {
      title: "내뜻전달서 입력내용",
      dest: "inputs",
      tag: "inputs",
    },
    {
      title: "내보내기",
      dest: "export",
      tag: "export",
    },
    {
      title: "서비스 제공관리",
      dest: "service",
      tag: "service",
    },
    {
      title: "메모",
      dest: "memo",
      tag: "memo",
    },
  ];
  return (
    <IndividualContext.Provider value={individualControls}>
      <div className="mt-12 mb-8">
        <FindUser />
        <div className="bg-green-500 h-1 mt-4 mb-4"></div>
        <NavigationBar items={navigationItems} />
        <div className="p-10">
          {userId ? (
            <Routes>
              <Route path="/" element={<Navigate to="basic" />} />
              <Route path="/basic" element={<Basic />} />
              <Route path="/inputs" element={<Inputs />} />
              <Route path="/export" element={<Export />} />
              <Route path="/service" element={<Service />} />
              <Route path="/memo" element={<Memo />} />
            </Routes>
          ) : (
            <div className="bg-white w-full h-full rounded-xl flex justify-center items-center font-bold text-2xl">
              {memberSearchData?.res && memberSearchData?.res.length > 0 ? (
                <div className="flex flex-col h-full">
                  {memberSearchData?.res.map((member, idx) => {
                    return (
                      <div
                        key={idx}
                        className="border-2"
                        onClick={() => {
                          setUserId(member.id);
                        }}
                      >
                        {member.name} {"("}
                        {member.birth}
                        {")"}
                      </div>
                    );
                  })}
                  <div className="flex items-center justify-center space-x-2">
                    <div
                      onClick={() => {
                        if (memberSearchData?.page! > 1)
                          searchUser(memberSearchData?.page! - 1);
                      }}
                      className="px-3 py-2 text-gray-500 rounded-md hover:text-gray-700"
                    >
                      {"<"}
                    </div>
                    {
                      // map component by page num
                      [...Array(memberSearchData?.totalPages).keys()].map(
                        (i) => {
                          return (
                            <div
                              onClick={() => {
                                searchUser(i + 1);
                              }}
                              className={`px-3 py-2 text-gray-700 font-semibold ${
                                memberSearchData.page === i + 1
                                  ? "bg-gray-200"
                                  : ""
                              } rounded-md hover:bg-gray-300`}
                            >
                              {i + 1}
                            </div>
                          );
                        }
                      )
                    }
                    <div
                      onClick={() => {
                        if (
                          memberSearchData?.page! <
                          memberSearchData?.totalPages!
                        )
                          searchUser(memberSearchData?.page! + 1);
                      }}
                      className="px-3 py-2 text-gray-500 rounded-md hover:text-gray-700"
                    >
                      {">"}
                    </div>
                  </div>
                </div>
              ) : (
                "사용자 정보가 없습니다"
              )}
            </div>
          )}
        </div>
      </div>
    </IndividualContext.Provider>
  );
}

const FindUser = () => {
  const {
    searchUser,
    setUserId,
    uniqueId,
    setUniqueId,
    name,
    setName,
    phone,
    setPhone,
  } = useContext(IndividualContext);

  return (
    <div className="grid grid-cols-4 items-center">
      <InputWithLabel
        title="고유번호"
        value={uniqueId}
        onChange={setUniqueId}
        onEnter={() => {
          searchUser();
          setUserId(undefined);
        }}
      />
      <InputWithLabel
        title="이름"
        value={name}
        onChange={setName}
        onEnter={() => {
          searchUser();
          setUserId(undefined);
        }}
      />
      <InputWithLabel
        title="휴대전화"
        value={phone}
        onChange={setPhone}
        onEnter={() => {
          searchUser();
          setUserId(undefined);
        }}
      />

      <div className="ml-2">
        <GeneralButton
          title="검색"
          onClick={() => {
            searchUser();
            setUserId(undefined);
          }}
        />
      </div>
    </div>
  );
};
