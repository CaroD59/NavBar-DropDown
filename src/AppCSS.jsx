import styled from 'styled-components';
import img1 from './Images/img-1.jpg';
import img2 from './Images/img-2.jpg';
import img3 from './Images/img-3.jpg';
import img4 from './Images/img-4.jpg';
import img5 from './Images/img-5.jpg';
import img6 from './Images/img-6.jpg';
import img7 from './Images/img-7.jpg';

const AppCSS = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .home,
  .services,
  .products,
  .contact-us,
  .sign-up,
  .marketing,
  .consulting {
    display: flex;
    height: 90vh;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
  }
  .home {
    background-image: url(${img1});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
    font-size: 100px;
  }

  .services {
    background-image: url(${img2});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
    font-size: 100px;
  }

  .products {
    background-image: url(${img3});
    background-position: center;
    background-size: fill;
    background-repeat: no-repeat;
    color: #fff;
    font-size: 100px;
  }

  .contact-us {
    background-image: url(${img4});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
    font-size: 100px;
  }

  .sign-up {
    background-image: url(${img5});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
    font-size: 100px;
  }

  .marketing {
    background-image: url(${img6});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
    font-size: 100px;
  }

  .consulting {
    background-image: url(${img7});
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
    font-size: 100px;
  }
`;

export default AppCSS;
