import NavBar from './components/Navbar/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

export default function App() {
  const AppBackground = styled.div`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  `;
  return (
    <AppBackground>
      <Router>
        <NavBar />
      </Router>
    </AppBackground>
  );
}
