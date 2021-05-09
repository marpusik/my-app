import './App.css';
import Logo from "./components/logo/Logo";
import Search from "./components/search/Search";
import Button from "./components/button/Button";
import Lang from "./components/lang/Lang";


function App() {
    return (
        <div className="App">
            <Logo/>
            <Search placeholder="Hello"/>
            <Search placeholder="goodbye"/>
            <div className="buttons">
                <Button text="Поиск в Google!" style={{backgroundColor:"lightpink", width:"300px"}}/>
                <Button text="Мне повезет!"/>
            </div>
            <Lang/>
        </div>
    );
}

export default App;
