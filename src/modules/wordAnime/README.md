# 형석.

나의 편지다.

## Example

```javascript
import Banjjag from './component/Banjjag' // 상대경로 잘 잡아서 쓰도록

function App() {

  const color = ["#123456", "#789abc"]
  const backgroundColor = '#fff'
  const fontFamily = "NotoSansKR"

  return (
    <Banjjag
      color={color}
      backgroundColor={backgroundColor}
      fontFamily={fontFamily}/>
  );
}

```

- templates 내부 js파일은 컴포넌트가 아님.
- 너가 써야하는건 component 폴더 내부의 컴포넌트를 임포트해야함.

- 대표적으로 조정 할 수 있는 공통 파라미터는 저렇게 3개. [ color, backgroundColor, fontFamily]
- color는 한개 값이더라도 array로 넣어주기 바람. 예외처리 안했음.
    하려면 두가지 타입을 가정하는 방법을 찾아야하는데 지금 잠온다 형석
- 폰트는 당연히 현재 웹에서 가지고있는 폰트만 적용 할 수 있음.
- 이외에도 최대 오브젝트 개수(maxObjectCount), 생성 주기(maxCooltime), 캔버스 너비와 높이(width, height) 는 파라미터로 넣을 수 있음.
- 그러나 테스트 제대로 안해봤으니까 안넣는거 권장ㅋㅋ.

### 현재 사용 할 수 있는 캔버스는 총 4개
- Tong
- Kick
- Warr
- Banjjag

위 예제에서 Banjjag만 다른 변수로 바꿔주면됨.



