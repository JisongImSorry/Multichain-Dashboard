import { LogoSvg } from "src/svg/Logo";
import { Photo } from "src/svg/Photo";
import { Record } from "src/svg/Record";
import React, { useState, useContext, useEffect } from "react";
import { createContext } from "react";
import {
  useGetUserInfoQuery,
  useGetUserInstructionQuery,
} from "@services/member-detail";
import { useIndividual } from "@hooks/useIndividual";
import { useParams } from "react-router-dom";

import QRCode from "react-qr-code";
import "./index.css";
import "./print.css";

const useExport = (id: number) => {
  const { data: userData } = useGetUserInfoQuery({ id: id });
  const { data: instructionData } = useGetUserInstructionQuery({ id: id });
  const [guardians, setGuardians] = useState<string[]>([]);
  const [guardianSet, setGuardianSet] = useState<
    { name: string; role: string }[]
  >([]);

  useEffect(() => {
    //if (userData && instructionData) window.print();
  }, [userData, instructionData]);

  useEffect(() => {
    const mySet = new Set<string>();
    const mySet2 = new Set<{ name: string; role: string }>();
    if (instructionData) {
      let filt = instructionData.guardian.result.filter((item) => {
        return item.type === "GUARDIAN";
      });
      filt.forEach((item) => {
        console.log(item);
        try {
          mySet.add(item.input_item[0].answer + "");
          mySet2.add({
            name: item.input_item[0].answer + "",
            role: item.input_item[0].tag + "",
          });
        } catch (e) {}
      });
      setGuardians(Array.from(mySet));
      setGuardianSet(Array.from(mySet2));
    }
  }, [instructionData]);

  return {
    userData,
    instructionData,
    guardians,
    guardianSet,
  };
};

const ExportPaperContext = createContext<ReturnType<typeof useExport>>(
  {} as ReturnType<typeof useExport>
);

const ExportPaper = () => {
  // get user id from url param
  const { id } = useParams<{ id: string }>();

  let idx = 1;

  useEffect(() => {
    document.getElementById("root")?.classList.add("export-paper-full-screen");
  }, []);

  const exportController = useExport(Number(id));
  const { userData, guardians, guardianSet } = exportController;

  return (
    <ExportPaperContext.Provider value={exportController}>
      <div className="export-paper">
        <main className="page">
          <LogoSvg className="logo-svg" />
          <p className="title">치매전, 내 뜻 전달서</p>
          <p className="desc">
            당신의 삶이 어떠한 상황 속에서도 늘 온전하길 바랍니다
          </p>
          <p className="name">{userData?.name} 님</p>
          <QRSection />
          <img
            src="https://www.온전함.com/assets/common/sectionlogo.svg"
            alt="logo"
            className="img-bg"
          />
        </main>
        <ExportPage idx={idx++} title="01 건강관련 정보">
          <p className="sub-page">
            <p className="ans-type">
              <p className="green-circle" />
              기본인적사항
            </p>
            <p className="profile">
              <p className="profile-col">
                <p className="left">본인 인적 정보</p>
                <p className="right">
                  <p className="info">
                    <p className="key">이름</p>
                    <p className="value">{userData?.name}</p>
                  </p>
                  <p className="info">
                    <p className="key">성별</p>
                    <p className="value">
                      {userData?.gender === "M" ? "남" : "여"}{" "}
                    </p>
                  </p>
                  <p className="info">
                    <p className="key">생년월일</p>
                    <p className="value">{userData?.birth}</p>
                  </p>
                </p>
              </p>
              <p className="pider" />
              <p className="profile-col">
                <p className="left">본인 추가 정보</p>
                <p className="right">
                  <p className="info">
                    <p className="key">이메일</p>
                    <p className="value">{userData?.email}</p>
                  </p>
                  <p className="info">
                    <p className="key">주소</p>
                    <p className="value">{`${userData?.address} ${userData?.detailedAddress}`}</p>
                  </p>
                </p>
              </p>
              <p className="pider" />
              <p className="profile-col">
                <p className="left">보호자 정보</p>
                <p className="right">
                  {guardians.map((guardian) => {
                    return (
                      <p className="info">
                        <p className="key">{guardian}</p>
                        <p className="value">
                          {guardianSet
                            .filter((res) => {
                              return res.name === guardian;
                            })
                            .map((guardian) => {
                              return <>{`${guardian.role}, `}</>;
                            })}
                        </p>
                      </p>
                    );
                  })}
                </p>
              </p>
            </p>
          </p>
          <p className="sub-page">
            <QuestionSection>
              <DPQuestion
                type="health"
                category="신체 기본정보"
                name={userData?.name!}
                to={5}
              />
            </QuestionSection>
          </p>
        </ExportPage>
        <div className="page-break" />
        <ExportPage idx={idx++} title="01 건강관련 정보">
          <Header />
          <p className="sub-page">
            <QuestionSection>
              <DPQuestion
                type="health"
                category="신체 기본정보"
                name={userData?.name!}
                from={6}
              />
            </QuestionSection>
            <QuestionSection>
              <DPQuestion
                type="health"
                category="과거병력"
                name={userData?.name!}
              />
            </QuestionSection>
          </p>
        </ExportPage>
        <ExportPage idx={idx++} title="01 건강관련 정보">
          <Header />
          <p className="sub-page">
            <QuestionSection>
              <DPQuestion
                type="health"
                category="현재 질병상황"
                name={userData?.name!}
              />
            </QuestionSection>
          </p>
        </ExportPage>
        <ExportPage idx={idx++} title="02 의료적 결정">
          <p className="sub-page">
            <p className="section-title">
              <p className="left">02</p> <p className="right">의료적 결정</p>
            </p>
            <QuestionSection>
              <DPQuestion
                type="medical"
                category="돌봄"
                name={userData?.name!}
              />
            </QuestionSection>
          </p>
        </ExportPage>
        <ExportPage idx={idx++} title="02 의료적 결정">
          <p className="sub-page">
            <p className="section-title">
              <p className="left">02</p> <p className="right">의료적 결정</p>
            </p>
            <QuestionSection>
              {["의료비용", "응급 시 관리", "심리지원", "장기기증"].map(
                (category) => {
                  return (
                    <DPQuestion
                      type="medical"
                      category={category}
                      name={userData?.name!}
                    />
                  );
                }
              )}
            </QuestionSection>
          </p>
        </ExportPage>
        <ExportPage idx={idx++} title="03 경제적 결정">
          <p className="sub-page">
            <p className="section-title">
              <p className="left">03</p> <p className="right">경제적 결정</p>
            </p>
            <QuestionSection>
              {["생활비", "병원비", "치료비"].map((category) => {
                return (
                  <DPQuestion
                    type="economical"
                    category={category}
                    name={userData?.name!}
                  />
                );
              })}
            </QuestionSection>
          </p>
        </ExportPage>
        <ExportPage idx={idx++} title="03 경제적 결정">
          <p className="sub-page">
            <QuestionSection>
              {["부동산", "반려동물", "기타자산", "경제활동 지속여부"].map(
                (category) => {
                  return (
                    <DPQuestion
                      type="economical"
                      category={category}
                      name={userData?.name!}
                    />
                  );
                }
              )}
            </QuestionSection>
          </p>
        </ExportPage>
        <ExportPage idx={idx++} title="04 생활전반정보">
          <p className="sub-page">
            <p className="section-title">
              <p className="left">04</p> <p className="right">생활전반정보</p>
            </p>
            <QuestionSection>
              {["운동 및 활동", "외부활동", "종교", "음식"].map((category) => {
                return (
                  <DPQuestion
                    type="lifestyle"
                    category={category}
                    name={userData?.name!}
                  />
                );
              })}
            </QuestionSection>
          </p>
        </ExportPage>
        <ExportPage idx={idx++} title="04 생활전반정보">
          <p className="sub-page">
            <QuestionSection>
              {["취미활동", "민감사항"].map((category) => {
                return (
                  <DPQuestion
                    type="lifestyle"
                    category={category}
                    name={userData?.name!}
                  />
                );
              })}
            </QuestionSection>
          </p>
        </ExportPage>
        <ExportPage idx={idx++} title="04 생활전반정보">
          <p className="sub-page">
            <QuestionSection>
              <DPQuestion
                type="lifestyle"
                category="반려동물"
                name={userData?.name!}
              />
            </QuestionSection>
          </p>
        </ExportPage>
        <ExportPage idx={idx++} title="05 죽음준비">
          <p className="sub-page">
            <p className="section-title">
              <p className="left">05</p> <p className="right">죽음준비</p>
            </p>
            <QuestionSection>
              {["죽음불안", "죽음준비", "유언", "임종"].map((category) => {
                return (
                  <DPQuestion
                    type="death"
                    category={category}
                    name={userData?.name!}
                  />
                );
              })}
            </QuestionSection>
          </p>
        </ExportPage>
        <ExportPage idx={idx++} title="05 죽음준비">
          <p className="sub-page">
            <QuestionSection>
              {["장례"].map((category) => {
                return (
                  <DPQuestion
                    type="death"
                    category={category}
                    name={userData?.name!}
                  />
                );
              })}
            </QuestionSection>
          </p>
        </ExportPage>
        <ExportPage idx={idx++} title="05 죽음준비">
          <p className="sub-page">
            <QuestionSection>
              {["재산"].map((category) => {
                return (
                  <DPQuestion
                    type="death"
                    category={category}
                    name={userData?.name!}
                  />
                );
              })}
            </QuestionSection>
            <QuestionSection>
              {["추모"].map((category) => {
                return (
                  <DPQuestion
                    type="death"
                    category={category}
                    name={userData?.name!}
                  />
                );
              })}
            </QuestionSection>
          </p>
        </ExportPage>
        <ExportPage idx={idx++} title="06 보호자 지정 및 권한 정도">
          <p className="sub-page">
            <p className="section-title">
              <p className="left">06</p>{" "}
              <p className="right">보호자 지정 및 권한 정도</p>
            </p>
            <QuestionSection>
              <DPQuestion
                type="guardian"
                category={"신변관리 보호자"}
                name={userData?.name!}
              />
            </QuestionSection>
          </p>
        </ExportPage>
        <ExportPage idx={idx++} title="06 보호자 지정 및 권한 정도">
          <p className="sub-page">
            <QuestionSection>
              <DPQuestion
                type="guardian"
                category={"의료관리보호자"}
                name={userData?.name!}
              />
            </QuestionSection>
          </p>
        </ExportPage>
        <ExportPage idx={idx++} title="06 보호자 지정 및 권한 정도">
          <p className="sub-page">
            <QuestionSection>
              <DPQuestion
                type="guardian"
                category={"간단한 재산관리보호자"}
                name={userData?.name!}
              />
            </QuestionSection>
          </p>
        </ExportPage>
        <ExportPage idx={idx++} title="06 보호자 지정 및 권한 정도">
          <p className="sub-page">
            <QuestionSection>
              <DPQuestion
                type="guardian"
                category={"중요 재산관리보호자"}
                name={userData?.name!}
              />
            </QuestionSection>
          </p>
        </ExportPage>
      </div>{" "}
    </ExportPaperContext.Provider>
  );
};

const ExportPage = (props: any) => {
  return (
    <section className="page">
      <Header />
      {props.children}
      <Footer page={props.idx!} title={props.title!} />
    </section>
  );
};

interface IDPQuestion {
  type: string;
  category: string;
  name: string;
  from?: number;
  to?: number;
}
const DPQuestion = ({ type, category, name, from, to }: IDPQuestion) => {
  const { instructionData } = useContext(ExportPaperContext);
  let qdata;
  let qIdx = 0;
  if (type === "lifestyle") {
    qIdx = 4;
    qdata = instructionData?.lifestyle;
  } else if (type === "death") {
    qIdx = 5;
    qdata = instructionData?.death;
  } else if (type === "guardian") {
    qIdx = 6;
    qdata = instructionData?.guardian;
  } else if (type === "economical") {
    qIdx = 3;
    qdata = instructionData?.economical;
  } else if (type === "health") {
    qIdx = 1;
    qdata = instructionData?.health;
  } else if (type === "medical") {
    qIdx = 2;
    qdata = instructionData?.medical;
  }

  const subclasses = [
    "",
    "본인 인적정보",
    "본인 추가정보",
    "가족정보",
    "가족 외 보호자 정보",
    "신체 기본정보",
    "과거병력",
    "현재 질병상황",
    "돌봄",
    "의료비용",
    "응급 시 관리",
    "심리지원",
    "장기기증",
    "생활비",
    "병원비",
    "치료비",
    "요양비",
    "부동산",
    "반려동물",
    "기타자산",
    "경제활동 지속여부",
    "운동 및 활동",
    "외부활동",
    "종교",
    "음식",
    "취미활동",
    "민감사항",
    "반려동물",
    "죽음불안",
    "죽음준비",
    "유언",
    "임종",
    "장례",
    "재산",
    "추모",
    "신변관리 보호자",
    "의료관리보호자",
    "간단한 재산관리보호자",
    "중요 재산관리보호자",
  ];

  return (
    <div style={{ marginBottom: "0.5rem" }}>
      <h1>{category}</h1>
      {
        qdata?.result
          .filter((item) => {
            return subclasses[item.subclass] === category;
          })
          // sort by question_id
          .sort((a, b) => {
            return a.question_id - b.question_id;
          })
          .map((item) => {
            if (from && item.question_id < from) return;
            if (to && item.question_id > to) return;
            return (
              <QuestionContent
                qNum={`${qIdx}-${item.question_id}`}
                title={item.title
                  .replaceAll("{username}", name!)
                  .replaceAll("<br/>", "")
                  .replaceAll("<br />", "")}
                answer={
                  item.input_item[0]?.answer ? item.input_item[0].answer : ""
                }
                hasPhoto={
                  item.file_item.find((file) => file.type === "IMAGE")
                    ? true
                    : false
                }
                hasRecord={
                  item.file_item.find((file) => file.type === "VOICE")
                    ? true
                    : false
                }
                input_item={item.input_item}
              />
            );
          })
        /*layout[type].q
        ?.filter((item: any) => {
          return item.category === category;
        })
        .map((item: any) => {
          let ans = layout[type].a?.find((answer: any) => {
            return answer.question_id === item.question_id;
          });
          return (
            <QuestionContent
              title={item.title
                .replaceAll("{username}", name!)
                .replaceAll("<br/>", "")
                .replaceAll("<br />", "")}
              answer={ans && ans.input_item ? ans.input_item[0].answer : ""}
            />
          );
        })*/
      }
    </div>
  );
};

const QuestionSection = (props: any) => {
  return <p className="sub-page-wrapper">{props.children}</p>;
};

interface IQuestionContent {
  qNum?: string;
  title?: string;
  answer?: string | number;
  hasPhoto?: boolean;
  hasRecord?: boolean;
  input_item?: any;
  answerType?: string;
}

const QuestionContent = ({
  qNum,
  title,
  answer,
  hasPhoto,
  hasRecord,
  input_item,
}: IQuestionContent) => {
  return (
    <p className="question-element">
      <p className="title">
        <QMark />
        <p className="qnum">{qNum}</p>
        <div
          className="title-text"
          dangerouslySetInnerHTML={{
            __html: title!,
          }}
        />
        {hasPhoto ||
        (qNum === "5-7" &&
          answer?.toString().startsWith("https://onjeon-hm-cloud")) ? (
          <Photo />
        ) : (
          <></>
        )}
        {hasRecord && <Record />}
      </p>
      <p className="answer">
        <span className="text-answer">
          {qNum === "5-7"
            ? input_item?.find((item: any) => {
                return item.type === "SHORTTEXT";
              })?.answer
            : input_item.length > 1
            ? input_item[0]?.answer.split(".")[0] + ", " + input_item[1]?.answer
            : input_item[0]?.type === "NUMBER"
            ? `${(answer + "").replace(
                /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                ","
              )} 원`
            : answer}
        </span>
      </p>
    </p>
  );
};

const Header = () => {
  return (
    <p className="header">
      <p>
        <p className="title">치매전, 내 뜻 전달서</p>
        <p className="desc">
          당신의 삶이 어떠한 상황 속에서도 늘 온전하길 바랍니다
        </p>
      </p>
      <LogoSvg className="logo-svg" />
      <svg
        viewBox="0 0 148 74"
        fill="#608643"
        xmlns="http://www.w3.org/2000/svg"
        className="header-bg"
      >
        <path
          d="M165.718 101H2.73915C1.22765 101 0.0228271 99.7733 0.0228271 98.2837V-18.9562C0.0228271 -19.92 0.526661 -20.7963 1.35908 -21.3001L82.8268 -69.9091C83.6811 -70.4129 84.7545 -70.4129 85.6088 -69.9091L167.098 -21.3001C167.931 -20.8182 168.435 -19.92 168.435 -18.9562V98.2837C168.435 99.7952 167.208 101 165.718 101ZM5.45547 95.5455H163.002V-17.4228L84.2288 -64.4108L5.45547 -17.4228V95.5455Z"
          fill="#608643"
        />
        <path
          d="M55.4216 99.9046L51.0624 96.6188L107.295 21.7666C108.324 20.3866 110.624 20.3866 111.654 21.7666L167.886 96.6188L163.527 99.9046L109.463 27.966L55.3997 99.9046H55.4216Z"
          fill="#608643"
        />
        <path
          d="M165.717 20.6934H56.4075V26.1479H165.717V20.6934Z"
          fill="#608643"
        />
        <path
          d="M18.4009 37.1007C12.9682 37.1007 7.49179 36.4874 2.12486 35.2826C0.876232 34.9978 0 33.9025 0 32.632V-18.9562C0 -19.9201 0.503833 -20.7963 1.33625 -21.3001L81.9715 -69.4053C82.6287 -69.7996 83.4392 -69.8872 84.184 -69.6682C84.9288 -69.4491 85.5203 -68.9015 85.8489 -68.2005C90.3615 -58.4086 92.6616 -47.9595 92.6616 -37.138C92.6616 3.80392 59.3647 37.1007 18.4228 37.1007H18.4009ZM5.45455 30.4195C9.74809 31.2519 14.0854 31.6462 18.4009 31.6462C56.3417 31.6462 87.1851 0.780907 87.1851 -37.138C87.1851 -46.1413 85.4765 -54.8598 82.0811 -63.1183L5.45455 -17.4228V30.3976V30.4195Z"
          fill="#608643"
        />
      </svg>
    </p>
  );
};

interface IFooter {
  page: number;
  title: string;
}
const Footer = ({ page, title }: IFooter) => {
  return (
    <p className="footer">
      <p className="left">
        <p className="text bold">치매전, 내 뜻 전달서</p>
        <p className="text">{title}</p>
      </p>
      <p className="right">
        <p className="text">{page}/17</p>
      </p>
    </p>
  );
};

const QMark = () => {
  return (
    <svg
      width="1.2rem"
      height="1.2rem"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6Z"
        fill="#A0B68E"
      />
      <path
        d="M6.61045 6.77624L7.12702 7.43923L7.61874 8.01105L8.56349 9.20166H7.46128L6.81211 8.39779L6.48614 7.9337L5.60492 6.77624H6.61045ZM8.65465 5.90608C8.65465 6.50645 8.53955 7.02578 8.30934 7.46409C8.08098 7.90055 7.76699 8.23481 7.36735 8.46685C6.96772 8.69705 6.51561 8.81215 6.011 8.81215C5.5064 8.81215 5.05336 8.69705 4.65189 8.46685C4.25225 8.23481 3.93826 7.89963 3.7099 7.46133C3.48338 7.02302 3.37012 6.5046 3.37012 5.90608C3.37012 5.30571 3.48338 4.78637 3.7099 4.34807C3.93826 3.90792 4.25225 3.57367 4.65189 3.3453C5.05336 3.1151 5.5064 3 6.011 3C6.51561 3 6.96772 3.1151 7.36735 3.3453C7.76699 3.57367 8.08098 3.90792 8.30934 4.34807C8.53955 4.78637 8.65465 5.30571 8.65465 5.90608ZM7.46404 5.90608C7.46404 5.50829 7.40419 5.17035 7.28448 4.89227C7.16662 4.61234 6.99811 4.40055 6.77896 4.25691C6.56165 4.11326 6.30566 4.04144 6.011 4.04144C5.71818 4.04144 5.46312 4.11326 5.24581 4.25691C5.0285 4.40055 4.85999 4.61234 4.74028 4.89227C4.62058 5.17035 4.56072 5.50829 4.56072 5.90608C4.56072 6.30387 4.62058 6.64181 4.74028 6.91989C4.85999 7.19797 5.0285 7.40976 5.24581 7.55525C5.46312 7.6989 5.71818 7.77072 6.011 7.77072C6.30566 7.77072 6.56165 7.6989 6.77896 7.55525C6.99811 7.40976 7.16662 7.19797 7.28448 6.91989C7.40419 6.64181 7.46404 6.30387 7.46404 5.90608Z"
        fill="white"
      />
    </svg>
  );
};

const QRSection = () => {
  const { fileViewURL, setUserId } = useIndividual();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setUserId(Number(id));
  }, [fileViewURL]);
  return (
    <p className="qr-section">
      <p className="left">
        <p className="title">
          사진 및 음성 기록은 QR코드를 통해 확인하실 수 있습니다
        </p>
        <p className="desc">
          온전함 {`<치매전, 내 뜻 전달서>`}에서는 치매 전에 꼭 미리 남겨놓아야
          할 내용들에 대한 기록을 담고있습니다. <br />
          글로 기록된 내용 외의 사진 및 음성으로 기록된 내용들은 QR코드를 통해
          확인하실 수 있습니다.
        </p>
      </p>
      <p className="right">
        <QRCode value={fileViewURL} />
      </p>
    </p>
  );
};

export default ExportPaper;
