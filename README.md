nomadcoders 실전형 리액트 Hooks 강의를 들으며 작성하는 project

### Hooks
movie_app_2020에서는 state를 관리하기 위해서 class component를 사용헀는데 
Hooks를 이용하면서 함수형 컴포넌트에서도 state를 관리할 수 있게 되었다.


#### useState
const [value, setValue] = useState(initialValue);
state 변수인 value와 value 값을 설정하는 setValue 메소드를 동시에 제공한다.
useState의 인자로는 value의 초기값으로 설정한다.

#### useEffect 
componentWillUnmount, componentDidmount, componentWillUpdate 함수와 비슷한 역할을 한다.

function func = useEffect(effect, deps)

첫번째 인자 : effect function
두번째 인자 (deps) : deps 리스트에 존재하는 변수가 변할때만 componentWillUpdate가 동작한다.
리스트 내의 변수들은 useEffect 메소드 이전에 초기화되어야 한다. (Uncaught ReferenceError: Cannot access 'number' before initialization)
If present, effect will only activate if the values in the list change.

반환 메소드 (func) : componentWillUnmount

useRef : 모든 Component는 reference element를 가지는데 useRef를 이용해 reference 값을 조정할 수 있다.
const ref = useRef();
<tag ref = {ref}/> 
