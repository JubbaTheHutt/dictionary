import './App.css';
import Header from './components/header/Header.jsx';
import Content from './components/content/Content.jsx';
import { useSelector } from 'react-redux';

function App() {
    const colorScheme = useSelector((state) => state.mainSlice.colorMode);
    document.getElementById('root').classList = `${colorScheme}`;

    return (
        <div className={`${colorScheme}`}>
            <div
                className={
                    'bg-white lg:w-3/5 w-[90%]  m-auto dark:bg-[#050505]'
                }
            >
                <Header />
                <Content />
            </div>
        </div>
    );
}

export default App;
