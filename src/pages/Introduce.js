import React, { Children, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import DropDownTab from "../components/dropDownTab";
import Header from "../components/header";
import Tab2Header from "../components/tab2Header";

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
          qText={"1번째 질문?"}
          aText={
            "26일 코스피가 3% 넘게 급락하며 2년 2개월 만에 최저치를 기록했다. 원·달러 환율 역시 13년 6개월 만에 가장 높은 수준으로 장을 마쳤다.이날 코스피는 전 거래일보다 69.06포인트(3.02%) 내린 2220.94로 마감했다. 종가 기준으로 연저점 경신은 물론 2020년 7월 27일 이후 가장 낮은 수준이다.지수는 전 거래일보다 29.20포인트(1.28%) 내린 2260.80에 개장한 뒤 장 마감 때까지 줄곧 우하향했다. 특히 한때 2215.36까지 밀리며 장중 기준으로도 2020년 7월 27일(2203.48) 이후 2년 2개월 만에 최저치로 떨어지기도 했다.개인투자자들의 매도 폭탄이 지수를 끌어내렸다. 개인은 이날 오후 들어 증시 급락세에 매도 폭을 키우며 양대 시장(코스피·코스닥)에서 4000억 원 넘게 순매도했다. 외국인도 36억 원 순매도했고, 기관은 2800억 원 순매수했다."
          }
        />
        <DropDownTab
          qText={"2번째 질문?"}
          aText={
            "26일 코스피가 3% 넘게 급락하며 2년 2개월 만에 최저치를 기록했다. 원·달러 환율 역시 13년 6개월 만에 가장 높은 수준으로 장을 마쳤다.이날 코스피는 전 거래일보다 69.06포인트(3.02%) 내린 2220.94로 마감했다. 종가 기준으로 연저점 경신은 물론 2020년 7월 27일 이후 가장 낮은 수준이다.지수는 전 거래일보다 29.20포인트(1.28%) 내린 2260.80에 개장한 뒤 장 마감 때까지 줄곧 우하향했다. 특히 한때 2215.36까지 밀리며 장중 기준으로도 2020년 7월 27일(2203.48) 이후 2년 2개월 만에 최저치로 떨어지기도 했다.개인투자자들의 매도 폭탄이 지수를 끌어내렸다. 개인은 이날 오후 들어 증시 급락세에 매도 폭을 키우며 양대 시장(코스피·코스닥)에서 4000억 원 넘게 순매도했다. 외국인도 36억 원 순매도했고, 기관은 2800억 원 순매수했다."
          }
        />
        <DropDownTab
          qText={"3번째 질문"}
          aText={
            "원/달러 환율은 1,430원을 돌파하며 '지붕'을 뚫었고, 코스피와 코스닥지수는 각각 3%, 5% 폭락해 '바닥'을 뚫었다. 국고채 금리도 폭등했다.이날 코스피는 전 거래일보다 69.06포인트(3.02%) 내린 2,220.94에 장을 마쳤다.종가 기준으로 연저점 경신은 물론 지난 2020년 7월 27일(2,217.86) 이후 2년 2개월여 만에 최저 수준이다.이날 코스피 낙폭은 지난 6월 13일(-3.52%) 이후 두 달 만에 가장 컸다.장중에는 2,215.36까지 밀리며 장중 기준으로도 2020년 7월 27일(2,203.48) 이후 2년 2개월 만에 최저치로 떨어졌다."
          }
        />
        <DropDownTab
          qText={"4번째 질문"}
          aText={
            "이날 서울 외환시장에서 달러 대비 원화 환율은 이날 오전 11시 12분께 1,43"
          }
        />
        <DropDownTab
          qText={"5번째 질문"}
          aText={
            "이날 서울 외환시장에서 달러 대비 원화 환율은 이날 오전 11시 12분께 1,43"
          }
        />
        <DropDownTab
          qText={"6번째 질문"}
          aText={
            "이날 서울 외환시장에서 달러 대비 원화 환율은 이날 오전 11시 12분께 1,430.0원을 기록했고, 약 2시간 뒤인 오후 1시 12분께 1,431.3원까지 올랐다. 이는 전 거래일 종가보다 22.0원 오른 수준이다."
          }
        />
        <DropDownTab
          qText={"7번째 질문"}
          aText={
            "이날 서울 외환시장에서 달러 대비 원화 환율은 이날 오전 11시 12분께 1,430.0원을 기록했고, 약 2시간 뒤인 오후 1시 12분께 1,431.3원까지 올랐다. 이는 전 거래일 종가보다 22.0원 오른 수준이다."
          }
        />
        <DropDownTab
          qText={"8번째 질문"}
          aText={
            "이날 서울 외환시장에서 달러 대비 원화 환율은 이날 오전 11시 12분께 1,430.0원을 기록했고, 약 2시간 뒤인 오후 1시 12분께 1,431.3원까지 올랐다. 이는 전 거래일 종가보다 22.0원 오른 수준이다."
          }
        />
        <DropDownTab
          qText={"9번째 질문"}
          aText={
            "이날 서울 외환시장에서 달러 대비 원화 환율은 이날 오전 11시 12분께 1,430.0원을 기록했고, 약 2시간 뒤인 오후 1시 12분께 1,431.3원까지 올랐다. 이는 전 거래일 종가보다 22.0원 오른 수준이다."
          }
        />
        <DropDownTab
          qText={"10번째 질문"}
          aText={
            "이날 서울 외환시장에서 달러 대비 원화 환율은 이날 오전 11시 12분께 1,430.0원을 기록했고, 약 2시간 뒤인 오후 1시 12분께 1,431.3원까지 올랐다. 이는 전 거래일 종가보다 22.0원 오른 수준이다."
          }
        />
        <DropDownTab
          qText={"11번째 질문"}
          aText={
            "이날 서울 외환시장에서 달러 대비 원화 환율은 이날 오전 11시 12분께 1,430.0원을 기록했고, 약 2시간 뒤인 오후 1시 12분께 1,431.3원까지 올랐다. 이는 전 거래일 종가보다 22.0원 오른 수준이다."
          }
        />
        <DropDownTab
          qText={"12번째 질문"}
          aText={
            "이날 서울 외환시장에서 달러 대비 원화 환율은 이날 오전 11시 12분께 1,430.0원을 기록했고, 약 2시간 뒤인 오후 1시 12분께 1,431.3원까지 올랐다. 이는 전 거래일 종가보다 22.0원 오른 수준이다."
          }
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Tab2Header />
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
