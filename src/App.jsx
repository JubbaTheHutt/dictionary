import './App.css';
import Header from './components/header/Header.jsx';
import Content from './components/content/Content.jsx';

function App() {
    //TODO: #050505 color for dark mode
    return (
        <div className={'bg-white w-3/5 m-auto'}>
            <Header />
            <Content />
        </div>
    );
}

export default App;
