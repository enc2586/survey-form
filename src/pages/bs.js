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
      <h1>Before you start</h1>
      <p style={{ "font-size": 20 }}>
        이번 미션은 좀 난이도가 높습니다.
        <br />
        <br />
        1, 2번 문제는 초급으로, Material UI에 대한 지식과 Documentation(공식
        문서)을 참조하는 능력(영어 독해능력)이 필요합니다.
        <br />
        <br />
        3번 문제는 중급으로, 상기한 1, 2번 풀이에 필요한 능력과 함께
        Firestore(데이터베이스)에 대한 간단한 이해가 필요합니다.
        <br />
        <br />
        4, 5번 문제는 고급으로, 상기한 1, 2, 3번 풀이에 필요한 능력과 함께
        Firestore의 Documentation을 참조하는 능력이 필요합니다.
        <br />
        <br />
        <Divider />
        <br />
        원래 13일 동아리 시간에 <b>함께</b> 진행하려 했던 문제였기에 혼자 풀기는
        굉장히 어려울 것 같습니다.
        <br />
        최대한 조건을 통해 자세히 설명해드리려 노력했지만, 그래도 어렵다면
        1~3번까지만 풀고 4~5번은 풀지 못해도 괜찮습니다.
        <br />
        <br />
        언제든지 모르는 내용은 저에게 직접 혹은 카톡을 통해 질문해주세요.
        <br />
        또한 공식 Documentation을 참조한다면 맞닥뜨리는 많은 문제들을 해결할 수
        있을 겁니다.
        <br />
        <br />
        <Divider />
        <br />
        <b>참고할 만한 Documentation 모음:</b>
        <br />
        <br />
        <a target="_blank" href="https://mui.com/material-ui/react-button/">
          Material UI Documentation
        </a>{" "}
        : 접속 후, 좌측 리스트 메뉴에서 원하는 컴포넌트를 찾아 들어가셔야
        합니다.
        <br />
        <br />
        <a
          target="_blank"
          href="https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ko"
        >
          Firestore Documentation
        </a>{" "}
        : 접속 후, 좌측 리스트 메뉴에서 원하는 항목을 클릭해 골라 볼 수
        있습니다.
        <br />
        <br />
        *각 조건별로 관련 내용이 있는 Documentation의 링크를 따로 달아
        드리겠습니다.
      </p>
    </Box>
  );
};

export default Q1;
