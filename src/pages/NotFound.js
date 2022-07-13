import { useNavigate } from "react-router-dom";

const { Box } = require("@mui/system");

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ m: 5, p: 0 }}>
      <h1>There's no such page :(</h1>
      <p>그런 페이지는 없는 것 같아요...</p>
      <p style={{ color: "blue" }}>
        <u>
          <a onClick={() => navigate("/")}>홈으로 가기</a>
        </u>
      </p>
    </Box>
  );
};

export default NotFound;
