import { Box, Button, Divider } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import q4_1 from "files/q4_1.png";
import { useNavigate } from "react-router-dom";

const Q1 = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ m: 5, p: 0 }}>
      <Button
        variant="contained"
        startIcon={<HomeIcon />}
        disableElevation
        onClick={() => navigate("/")}
      >
        돌아가기
      </Button>
      <h1>
        Q4. 찬성, 반대 버튼 옆에 초기화 버튼을 만들고, 눌렀을 때 모든 값이 0이
        되도록 할 것.
      </h1>
      <p>
        초기화 버튼을 만들고, 클릭했을 때 값이 초기화되도록 해 보세요.
        <br />
        <img src={q4_1} height={120} />
        <br />
        버튼의 생김새는 상관없습니다. 작동만 잘 하도록 만들어 보세요.
        <br />
        <br />*
        <a
          style={{ color: "blue" }}
          target="_blank"
          href="https://firebase.google.com/docs/firestore/data-model?hl=ko&authuser=0#references"
        >
          Firestore 데이터 모델: 참조
        </a>
        와{" "}
        <a
          style={{ color: "blue" }}
          target="_blank"
          href="https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ko&authuser=0#update-data"
        >
          Firestore 데이터 추가: 문서 업데이트
        </a>
        를 참조
        <br />
        <br />
        <Divider />
        <br />
        버튼을 클릭했을 때 함수를 실행하도록 하려면{" "}
        <b>
          <code>onClick</code>
        </b>{" "}
        props에 실행할 함수를 넣으면 됩니다. 찬성, 반대 버튼을 참고해 보세요.
        <br />
        <br />
        <b>
          <code>updateDoc</code>
        </b>{" "}
        함수를 활용해 db의 값을 바꾸세요.
        <br />
        doc()의 사용법도 잘 연구해 보세요. 코드 속에 제가 이미 한 번
        사용했습니다 :-)
      </p>
    </Box>
  );
};

export default Q1;
