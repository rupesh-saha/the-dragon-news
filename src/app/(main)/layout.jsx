import BreakingNews from '@/Components/BreakingNews';
import Header from '@/Components/Header';
import NavBar from '@/Components/NavBar';

const MainLayout = ({children}) => {
  return (
    <>
      <Header/>
      <BreakingNews/>
      <NavBar/>
      {children}
    </>
  );
};

export default MainLayout;