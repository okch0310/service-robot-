import React, { Children, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import DropDownTab from "../components/dropDownTab";
import Header from "../components/header";

const Introduce = (props) => {
  const navigate = useNavigate();

  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    console.warn(val);
    setValue(val);
  };
  return (
    <div>
      <Header headerText={"과학관 소개"} />
      <AppBar position="static">
        <Tabs value={value} onChange={handleTabs}>
          <Tab label="자주하는 질문" />
          <Tab label="과학관 소개" />
          <Tab label="전시" />
          <Tab label="행사" />
          <Tab label="기타" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <DropDownTab
          qText={"온라인~?"}
          aText={
            "이날 서울 외환시장에서 달러 대비 원화 환율은 이날 오전 11시 12분께 1,430.0원을 기록했고, 약 2시간 뒤인 오후 1시 12분께 1,431.3원까지 올랐다. 이는 전 거래일 종가보다 22.0원 오른 수준이다."
          }
        />
        <DropDownTab
          qText={"2번째 질문"}
          aText={
            "이날 서울 외환시장에서 달러 대비 원화 환율은 이날 오전 11시 12분께 1,430.0원을 기록했고, 약 2시간 뒤인 오후 1시 12분께 1,431.3원까지 올랐다. 이는 전 거래일 종가보다 22.0원 오른 수준이다."
          }
        />
        <DropDownTab
          qText={"세번째 질문"}
          aText={
            "이날 서울 외환시장에서 달러 대비 원화 환율은 이날 오전 11시 12분께 1,430.0원을 기록했고, 약 2시간 뒤인 오후 1시 12분께 1,431.3원까지 올랐다. 이는 전 거래일 종가보다 22.0원 오른 수준이다."
          }
        />
        <DropDownTab
          qText={"4번째 질문"}
          aText={
            "이날 서울 외환시장에서 달러 대비 원화 환율은 이날 오전 11시 12분께 1,430.0원을 기록했고, 약 2시간 뒤인 오후 1시 12분께 1,431.3원까지 올랐다. 이는 전 거래일 종가보다 22.0원 오른 수준이다."
          }
        />
        <DropDownTab
          qText={"5번째 질문"}
          aText={
            "이날 서울 외환시장에서 달러 대비 원화 환율은 이날 오전 11시 12분께 1,430.0원을 기록했고, 약 2시간 뒤인 오후 1시 12분께 1,431.3원까지 올랐다. 이는 전 거래일 종가보다 22.0원 오른 수준이다."
          }
        />
        <DropDownTab
          qText={"5번째 질문"}
          aText={
            "이날 서울 외환시장에서 달러 대비 원화 환율은 이날 오전 11시 12분께 1,430.0원을 기록했고, 약 2시간 뒤인 오후 1시 12분께 1,431.3원까지 올랐다. 이는 전 거래일 종가보다 22.0원 오른 수준이다."
          }
        />
        <DropDownTab
          qText={"5번째 질문"}
          aText={
            "이날 서울 외환시장에서 달러 대비 원화 환율은 이날 오전 11시 12분께 1,430.0원을 기록했고, 약 2시간 뒤인 오후 1시 12분께 1,431.3원까지 올랐다. 이는 전 거래일 종가보다 22.0원 오른 수준이다."
          }
        />
        <DropDownTab
          qText={"5번째 질문"}
          aText={
            "이날 서울 외환시장에서 달러 대비 원화 환율은 이날 오전 11시 12분께 1,430.0원을 기록했고, 약 2시간 뒤인 오후 1시 12분께 1,431.3원까지 올랐다. 이는 전 거래일 종가보다 22.0원 오른 수준이다."
          }
        />
        <DropDownTab
          qText={"5번째 질문"}
          aText={
            "이날 서울 외환시장에서 달러 대비 원화 환율은 이날 오전 11시 12분께 1,430.0원을 기록했고, 약 2시간 뒤인 오후 1시 12분께 1,431.3원까지 올랐다. 이는 전 거래일 종가보다 22.0원 오른 수준이다."
          }
        />
        <DropDownTab
          qText={"5번째 질문"}
          aText={
            "이날 서울 외환시장에서 달러 대비 원화 환율은 이날 오전 11시 12분께 1,430.0원을 기록했고, 약 2시간 뒤인 오후 1시 12분께 1,431.3원까지 올랐다. 이는 전 거래일 종가보다 22.0원 오른 수준이다."
          }
        />
        <DropDownTab
          qText={"5번째 질문"}
          aText={
            "이날 서울 외환시장에서 달러 대비 원화 환율은 이날 오전 11시 12분께 1,430.0원을 기록했고, 약 2시간 뒤인 오후 1시 12분께 1,431.3원까지 올랐다. 이는 전 거래일 종가보다 22.0원 오른 수준이다."
          }
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        222222
      </TabPanel>
      <TabPanel value={value} index={2}>
        333333
      </TabPanel>
      <TabPanel value={value} index={3}>
        44444
      </TabPanel>
      <TabPanel value={value} index={4}>
        55555
      </TabPanel>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Main
      </button>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
}
export default Introduce;
