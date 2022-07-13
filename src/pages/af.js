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
      <h1>마치며...</h1>
      <p>
        수고하셨습니다. 다 못 풀었더라도 괜찮습니다.
        <br />
        <br />
        갑자기 이런 과제를 낸 이유는 사실... 이번 정보과 부스 운영에서 여러분이
        참여했다는 증거를 남기기 위해서입니다!
        <br />
        이 과제를 완료함으로써, 여러분은 정보과 부스의 '학생 여론 설문조사'
        프로젝트에 기여하셨습니다.
        <br />
        <br />
        요번 생기부에 이 내용을 적는다면 참 좋지 않을까요...? ㅎㅎ
        <br />
        <br />
        <Divider />
        <br />
        여러분은 이 과제를 수행하시면서 아마 Documentation을 많이 읽으셨을
        겁니다.
        <br />
        <br />
        이미 그 중요성을 느끼신 분도 있겠지만, 개발에 있어 Documentation은,
        그리고 그걸 잘 읽는 능력은 정말 중요합니다.
        <br />
        <br />
        앞으로도, 개발을 이어 나가면서 공식 Documentation을 한 번 찾아 보세요.
        <br />
        그만큼 좋은 코딩 교재가 또 없구요, 예상치 못한 유용한 기능을 발견한다면
        코드의 품질을 크게 향상시킬 수도 있답니다.
        <br />
        물론, 오류가 났을 때도 유용하지요.
        <br />
        <br />
        <Divider />
        <br />
        1학기 동안 부족한 제게서 복잡한 웹을 배우시느라 수고 많으셨습니다.
      </p>
    </Box>
  );
};

export default Q1;
