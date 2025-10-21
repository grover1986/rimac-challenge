import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './MainLayout.scss';

// Componente MainLayout - Estructura general de la página
const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      
      <main className="main-layout__content">
        {children} {/* Aquí se renderiza el contenido de cada página */}
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;