import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import { TbMoon } from 'react-icons/tb';
const Header = () => {
    return (
        <header className={'flex justify-between p-2 py-8'}>
            <div className={''}>
                <img src='' alt='logo' />
            </div>
            <div className={'flex gap-4 justify-center items-center'}>
                <Toggle
                    defaultChecked={false}
                    onChange={(e) => e.target.checked}
                    icons={false}
                    className={'toggler'}
                />
                <TbMoon className={'text-2xl text-[#767676]'} />
            </div>
        </header>
    );
};

export default Header;
