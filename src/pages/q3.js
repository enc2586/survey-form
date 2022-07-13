import { Box, Button, Divider } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import q3_1 from "files/q3_1.png";
import q3_2 from "files/q3_2.png";
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
        Q3. 페이지가 로딩된 직후에는 버튼들을 비활성화했다가, 투표 집계값(찬성,
        반대 투표 수)이 불러와진 뒤에 활성화되도록 할 것.
      </h1>
      <p>
        이 웹 페이지는, 페이지 자체 로딩이 끝난 이후에 DB로부터 데이터를
        (실시간으로) 불러오는 방식으로 작동합니다.
        <br />
        다음과 같이 데이터가 불러와지기 전에는 버튼이 비활성화되도록 하세요.
        <br />
        <img src={q3_1} height={200} />
        <br />
        (데이터를 불러온 후, 버튼을 활성화해야 합니다.)
        <br />*
        <a
          style={{ color: "blue" }}
          target="_blank"
          href="https://firebase.google.com/docs/firestore/query-data/listen?hl=ko&authuser=0#events-local-changes"
        >
          Firestore 실시간 업데이트 가져오기
        </a>
        와{" "}
        <a
          style={{ color: "blue" }}
          target="_blank"
          href="https://mui.com/material-ui/react-button/#contained-button"
        >
          MUI Button Documentation: Contained button
        </a>
        를 참조
        <br />
        <br />
        <Divider />
        <br />
        위에 걸어둔 첫 번째 링크를 반드시 읽어보세요.
        <br />
        <br />
        onSnapshot() 은 처음 한 번만 실행하면 앞으로 해당 데이터베이스 주소의
        정보 변경이 일어날 때마다 입력된 코드를 실행하는 명령어입니다. 다음과
        같은 구조로 이루어집니다:
        <br />
        <br />
        <b>
          <code>onSnapshot( [db주소(ref)], (데이터) => [실행할 명령] )</code>
        </b>
        <br />
        <br />
        따라서 onSnapshot은,
        <br />
        (1) 페이지가 열린 뒤 데이터가 <b>처음 로딩</b>되었을 때
        <br />
        (2) 페이지가 열려 있는 상태에서 db 데이터가 <b>변경</b>되었을 때
        <br />
        <b>
          <code>[실행할 명령]</code>
        </b>{" "}
        속 코드를 실행하겠죠?
        <br />
        <br />
        *참고:{" "}
        <b>
          <code>useEffect({"{}"}, [])</code>
        </b>{" "}
        속 코드는 웹 페이지 로딩 시 처음 한 번만 실행됩니다.
        <br />
        <br />
        *힌트: state를 활용해 보세요! 비활성화 여부는 props로 결정할 수
        있답니다!
        <br />
        <br />
        <Divider />
        <br />
        Chrome 개발자 도구의 Network 탭에서 네트워크 속도를 <b>Fast 3G</b>로
        바꾸면 처음 로딩이 살짝 느려집니다. 이를 통해 비활성화가 잘 되는지
        확인해보세요.
        <br />
        <br />
        <img src={q3_2} height={300} />
      </p>
    </Box>
  );
};

export default Q1;
