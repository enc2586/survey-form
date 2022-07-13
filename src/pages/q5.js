import { Box, Button, Divider } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import q1_1 from "files/q1_1.png";
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
      <h1>Q5. 반대 버튼을 눌렀을 때 반대 값에 1씩 추가될 수 있도록 할 것.</h1>
      <p>
        <br />*
        <a
          style={{ color: "blue" }}
          target="_blank"
          href="https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ko&authuser=0#increment_a_numeric_value"
        >
          Firestore 데이터 추가: 숫자 값 늘리기
        </a>
        를 참조
        <br />
        <br />
        <Divider />
        <br />
        반드시 위의 Documentation을 읽으세요.
        <br />
        <br />
        <b>그냥 State에 표시되는 값을 증가시키면 안 됩니다.</b> updateDoc을
        활용해 db의 값을 증가시키세요.
        <br />
        *힌트: 찬성 버튼의 매커니즘을 따라해 보세요.
        <br />
        <br />
        <Divider />
        <br />
        5번 문제치곤 쉽지 않나요? ㅎㅎ
      </p>
    </Box>
  );
};

export default Q1;
