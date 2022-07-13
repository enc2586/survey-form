import { Box, Button, Divider } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import q2_1 from "files/q2_1.png";
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
      <h1>Q2. 찬성 버튼과 반대 버튼의 앞쪽에 알맞은 아이콘을 추가할 것.</h1>
      <p>
        아래 사진과 같이, 각 버튼의 앞쪽에 아이콘을 추가해주세요.
        <br />
        <img src={q2_1} height={50} />
        <br />
        찬성 아이콘의 이름은 CheckCircle, 반대 아이콘의 이름은 Cancel입니다.
        <br />
        <br />*
        <a
          style={{ color: "blue" }}
          target="_blank"
          href="https://mui.com/material-ui/material-icons/"
        >
          MUI Material Icons(아이콘 검색기)
        </a>
        와{" "}
        <a
          style={{ color: "blue" }}
          target="_blank"
          href="https://mui.com/material-ui/react-button/#buttons-with-icons-and-label"
        >
          MUI Button Documentation: Buttons with icons and label
        </a>
        를 참조
        <br />
        <br />
        <Divider />
        <br />
        우선 아이콘 검색기를 통해 아이콘을 찾고, 그 아이콘을 import해 보세요.
        <br />
        이후 Button 컴포넌트에 props를 통해 그 아이콘을 전달해 주면 됩니다.
      </p>
    </Box>
  );
};

export default Q1;
