import Users from "./components/Users";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counter";

const users = [
  { name: "John", age: 25 },
  { name: "Anne", age: 18 },
  { name: "Frank", age: 52 },
];

const App = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="center">List of Users:</div>
      <div>
        <Users users={users} />
      </div>
      <p>Counter: {count}</p>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
};

export default App;
