import CartLink from './cart-link';
import Logo from './logo';

const HeaderContainer = () => {
  return (
    <header className="bg-[#9d74d7] z-50 flex justify-between items-center w-full h-[60px] p-4 fixed inset-0">
      <Logo />
      <CartLink />
    </header>
  );
};

export default HeaderContainer;
