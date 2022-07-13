# CRA 프로젝트 Git에서 다운받아 작동하기

## 1. Git 설치 확인

터미널(cmd, powershell 등도 가능)을 열고, 다음과 같이 입력해 보세요.

### `git --version`

`git version n.nn.n~`과 같이 뜬다면 정상적으로 설치되어 있는 거니 2번으로 넘어가주세요

설치되어 있지 않다면, [안내](https://taewow.tistory.com/13)에 따라 설치해주세요.  
(설치 시 모든 옵션은 다 기본으로 하시면 됩니다.)

## 2. Git Clone

터미널 속에서 내가 프로젝트를 다운받을 폴더로 이동한 뒤, 다음과 같이 입력해 주세요.

### `git clone https://github.com/enc2586/survey-form`

이 코드를 통해 프로젝트가 컴퓨터에 자동으로 다운로드됩니다.

## 3. 프로젝트 구성 및 실행

아래 명령어를 연달아 쳐 주세요.

### `cd survey-form`

### `npm install`

이 코드를 통해 프로젝트에 필요한 패키지들이 자동으로 설치됩니다.
그 다음에는 vscode를 실행해야겠죠?

### `code .`

위 코드를 통해 해당 디렉토리의 vscode를 열 수 있습니다.
이후, 아래 명령어로 프로젝트를 실행하세요.

### `npm start`

이제 한쪽에는 웹페이지가, 다른 한 쪽에는 vscode가 열렸을 겁니다.
vscode에서 `src/pages/Dashboard.js`를 열고 안내에 따라 수정하시면 됩니다.
