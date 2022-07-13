import { Box, Button, Divider } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import q1_1 from "files/q1_1.png";
import q1_2 from "files/q1_2.png";
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
      <h1>Q1. 반대 버튼의 색깔을 빨간색으로 바꿀 것.</h1>
      <p>
        반대 버튼의 색깔을 "error" 색깔로 바꾸세요.
        <br />
        <img src={q1_2} height={50} />
        <br />
        <br />*
        <a
          style={{ color: "blue" }}
          target="_blank"
          href="https://mui.com/material-ui/api/button/"
        >
          Button API에 대한 MUI Documentation
        </a>
        을 참조
        <br />
        <br />
        <Divider />
        <br />
        특정 컴포넌트(Button, h1, Box 등)의 속성을 바꾸기 위해서, props라는 것을
        활용합니다.
        <br />
        <img src={q1_1} height={150} />
        <br />
        Button API Documentation에서는 Button에 대한 props의 사용법을 모아
        두었습니다.
        <br />
        그 중 색깔에 대한 prop을 찾아 사용하면 될 겁니다.
        <br />
        prop는 위 사진과 같이 사용해야 합니다.
      </p>
    </Box>
  );
};

export default Q1;
