import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useNavigate
} from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    navigate('/login', {replace: true})
  }
  return <button onClick={logoutHandler}>Log out</button>
}
const Todo = () => {
  return <>
    <Logout/>
    <p>這是 Todo 頁面</p>
  </> 
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const Home = () => {
  return <p>這是首頁</p>;
};
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
        {/* 練習區 */}
      </BrowserRouter>
    </div>
  );
}

export default App;
