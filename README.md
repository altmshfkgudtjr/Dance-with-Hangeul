# 한글로 춤추다 [![GitHub license](https://camo.githubusercontent.com/890acbdcb87868b382af9a4b1fac507b9659d9bf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75652e737667)](https://github.com/altmshfkgudtjr/Simple-React-Template/blob/master/LICENSE)

한글의 아름다움을 알리기 위한 프로젝트입니다.

<br />
<br />

## Project Stack 🛠

- Yarn2 + Plug'n'Play
- React
- Redux-toolkit
- Styled Components
- Typescript

<br />
<br />

## How to Use?

해당 프로젝트는 Yarn2 버전의 PnP 전략을 택하여 개발하고 있습니다. 프로젝트를 다음과 같이 설치 및 진행주시길 바랍니다.

1. 프로젝트를 클론해주세요.
 
`git clone https://github.com/altmshfkgudtjr/Dance-with-Hangeul.git`

2. 만약 개발환경에 `yarn`이 설치되어있지 않다면 다음을 실행해주세요.

`npm install -g yarn`

3. 개발환경의 `yarn` 버전이 **1.x.x** 이다면 다음을 실행해주세요.

`yarn set version berry`

4. VScode를 사용한다면 **ZipFS**이라는 확장 프로그램을 추가 설치하는 것을 권장합니다.

5. PnP방식의 타입스크립트 컴파일러를 설치해주세요.

`yarn dlx @yarnpkg/pnpify --sdk vscode`

6. VSCode를 실행하여 Typescript 버전을 선택해주세요.

![image](https://user-images.githubusercontent.com/47492535/118655991-0c9f4f80-b825-11eb-8e1c-b9b2428e6250.png)

위 사진과 같이 version-pnpify 버전을 선택해야 합니다. [작업 영역 버전 사용]

7. `yarn start`를 통해서 개발을 진행해주세요.

Happy Development! 😀

<br />
<br />

## Development Convention

아래는 개발에 관련된 협약 및 구체적인 내용입니다.

<br />

### Branch Strategy

모든 코드는 `develop` 브랜치에서 병합되며, 코드 검증이 끝난 버전은 `master` 브랜치로 올라가게 됩니다.

코드 검증은 코드 작성자를 제외한 코드 리뷰어 최소 1명이 필요합니다.

### Zero-install

본 프로젝트는 PnP 전략의 Zero-install 방식을 사용하고 있습니다. 프로젝트 클론 이 후, 별다른 패키지 설치없이 바로 개발 및 테스트가 가능합니다.

### 절대경로

모든 모듈은 절대경로를 사용하여 **import** 가능합니다. 기준은 `src` 폴더 기준입니다

### 한글 모듈 분리

프로젝트 개발 용이성을 위해서 UI 뷰와 Animation 뷰를 분리하여 개발을 진행합니다.

- Hangeul Animation 관련 뷰 : `/src/modules/wordAnime/*`
- Project UI 관련 뷰 : `/src/*`

`Project UI` 뷰에서는 `Hangeul Animation` 뷰를 호출할 수 있으며, 그 반대는 불가능합니다.

### Code Splitting

모든 한글 애니메이션 템플릿은 **Dynamic Import**를 통해서만 작동하게 됩니다.

이로 인해서, 템플릿의 양에 관계없이 초기 Application 로드 속도를 일정하게 유지하게 됩니다.

<br />
<br />
