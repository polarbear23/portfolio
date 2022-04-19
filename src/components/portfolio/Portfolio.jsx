import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';
import { useEffect, useState } from 'react';
import { featuredPortfolio, websitePortfolio, webAppPortfolio, mobilePortfolio, gamesPortfolio } from '../../data';

export default function Portfolio() {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);

  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },

    {
      id: 'web',
      title: 'Websites',
    },
    {
      id: 'games',
      title: 'Games',
    },
    {
      id: 'FullStack',
      title: 'Full Stack Web Apps',
    },
    {
      id: 'mobile',
      title: 'Mobile Apps',
    },
  ];

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'web':
        setData(websitePortfolio);
        break;
      case 'FullStack':
        setData(webAppPortfolio);
        break;
      case 'mobile':
        setData(mobilePortfolio);
        break;
      case 'games':
        setData(gamesPortfolio);
        break;
      default:
        setData(featuredPortfolio);
        break;
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt=""></img>
            <h3>{d.title}</h3>
          </div>
        ))}

        <div className="wrapper">
          <a href="#works">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
