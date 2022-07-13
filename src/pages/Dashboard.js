import * as React from "react";

import { Box, Button } from "@mui/material";

import { db } from "utils/firebase";
import { doc, onSnapshot, updateDoc, increment } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const Q1 = doc(db, "surveys", "Q1");

  React.useEffect(() => {
    onSnapshot(Q1, (doc) => {
      setConsents(doc.data().consents);
      setDissents(doc.data().dissents);
      setDisabled(false);
    });
  }, []);

  const [consents, setConsents] = React.useState("불러오는 중");
  const [dissents, setDissents] = React.useState("불러오는 중");
  const [disabled, setDisabled] = React.useState(true);

  const initializeValues = () => {
    // 초기화 버튼용 함수. 이거 안 써도 무방.
  };

  const consent = () => {
    updateDoc(Q1, {
      consents: increment(1),
    });
  };

  return (
    <Box sx={{ m: 5, p: 0 }}>
      <h1>Q. Rorem Ipsum</h1>
      <h3>
        현재 찬성 수: {consents}
        <br />
        현재 반대 수: {dissents}
      </h3>
      <Box>
        <Button
          variant="contained"
          size="large"
          disableElevation
          sx={{ mr: 1 }}
          onClick={() => consent()}
          disabled={disabled}
        >
          찬성
        </Button>
        <Button
          variant="contained"
          size="large"
          disableElevation
          sx={{ mr: 1 }}
          disabled={disabled}
        >
          반대
        </Button>
      </Box>
      <Box>
        <p>
          아래 목록과 카카오톡에 올린 영상을 참조하여 제대로 기능하는 투표
          사이트를 만들어주세요.
          <br />
          <br />
          보내드린 상태에서는 실시간 투표 수 동기화와 찬성 버튼만 작동하며, 반대
          버튼은 작동하지 않습니다.
          <br />
          개발에 필요한 패키지들은 이미 설치(npm install) 및 import 되어
          있습니다. <b>(단, 아이콘 제외)</b>
          <br />
          <br />
          항목을 누르면 자세한 내용과 힌트를 볼 수 있습니다.
          <Box sx={{ border: 1, borderRadius: 3, pl: 3, mt: 3, mb: 3 }}>
            <p style={{ color: "blue" }}>
              <a onClick={() => navigate("/bs")}>시작하기 전에 읽어주세요</a>
              <br />
              <br />
              <a onClick={() => navigate("/q1")}>
                1. 반대 버튼의 색깔을 <b>빨간색</b>으로 바꿀 것.
              </a>
              <br />
              <br />
              <a onClick={() => navigate("/q2")}>
                2. 찬성 버튼과 반대 버튼의 <b>앞쪽</b>에 알맞은 아이콘을 추가할
                것.
              </a>
              <br />
              <br />
              <a onClick={() => navigate("/q3")}>
                3. 페이지가 로딩된 직후에는 버튼들을 비활성화했다가,{" "}
                <b>투표 집계값(찬성, 반대 투표 수)이 불러와진 뒤에 활성화</b>
                되도록 할 것.
              </a>
              <br />
              <br />
              <a onClick={() => navigate("/q4")}>
                4. 찬성, 반대 버튼 옆에 <b>초기화 버튼</b>을 만들고, 눌렀을 때
                모든 값이 0이 되도록 할 것.
              </a>
              <br />
              <br />
              <a onClick={() => navigate("/q5")}>
                5. 반대 버튼을 눌렀을 때 <b>반대 값에 1씩</b> 추가될 수 있도록
                할 것.
              </a>
              <br />
              <br />
              <a onClick={() => navigate("/af")}>마치며...</a>
            </p>
          </Box>
        </p>
      </Box>
    </Box>
  );
};

export default Dashboard;
