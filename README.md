nomadcoders 실전형 리액트 Hooks 강의를 들으며 작성하는 project

Hooks
======
movie_app_2020에서는 state를 관리하기 위해서 class component를 사용헀다. 
Hooks를 이용하면 함수형 컴포넌트에서도 state를 관리할 수 있다.




useState
------
``` const [value, setValue] = useState(initialValue); ```

state 변수인 value와 value 값을 설정하는 setValue 메소드를 동시에 제공한다.
useState의 인자로는 value의 초기값으로 설정한다.

useEffect
------
componentWillUnmount, componentDidmount, componentWillUpdate 함수와 비슷한 역할을 한다.

``` function func = useEffect(effect, deps) ```

- 첫번째 인자 : effect function <br>
- 두번째 인자 (deps) : deps 리스트에 존재하는 변수가 변할때만 componentWillUpdate가 동작한다.
리스트 내의 변수들은 useEffect 메소드 이전에 초기화되어야 한다. 
<br> (초기화하지 않을 시, 다음과 같은 에러 발생 => Uncaught ReferenceError: Cannot access 'number' before initialization) 


- 반환 메소드 (func) : componentWillUnMount시 수행할 function을 반환한다.


useRef
------ 
모든 Component는 reference element를 가지는데 useRef를 이용해 reference 값을 조정할 수 있다.
``` const ref = useRef(); ```
``` <tag ref = {ref}/> ```


---

Issue
------
issue1. React Hook "useEffect" is called conditionally. React Hooks must be called in the exact same order in every component render. Did you accidentally call a React Hook after an early return?

=> https://ko.reactjs.org/docs/hooks-rules.html 참조
