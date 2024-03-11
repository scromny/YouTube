import React from 'react';
import "./Menu.scss"
import Home from "../../Images/home.svg"
import Trending from "../../Images/trending.svg"
import Subscriptions from "../../Images/subscribe.svg"
import library from "../../Images/library.svg"
import history from "../../Images/history.svg"
import watch from "../../Images/watch.svg"
import Star from "../../Images/Star.svg"
import Heart from "../../Images/heart.svg"
import music from "../../Images/music.svg"
import Games from "../../Images/games.svg"
import more from "../../Images/more.svg"
import Settings from "../../Images/settings.svg"
import { Link, NavLink } from 'react-router-dom';

const menuItems = [
  { id: 2, name: "Trending", icon: Trending, link: "#icons" },
  { id: 3, name: "Subscriptions", icon: Subscriptions, link: "#icons" },
];

const menuItemsTwo = [
  { id: 0, name: "Library", icon: library, link: "#icons" },
  { id: 1, name: "History", icon: history, link: "#icons" },
  { id: 2, name: "Watch later", icon: watch, link: "#icons" },
  { id: 3, name: "Favourites", icon: Star, link: "#icons" },
  { id: 4, name: "Liked videos", icon: Heart, link: "#icons" },
  { id: 5, name: "Music", icon: music, link: "#icons" },
  { id: 6, name: "Games", icon: Games, link: "#icons" },
  { id: 7, name: "Show more", icon: more, link: "#icons" },
];

function Menu() {

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://reqres.in/api/users?page=1");
      const data = await res.json();

      if (data?.data) {
        setUsers(data?.data);
      }
    })();
  }, []);
  return (
    <section className="menu">
      <div className="container__menu">
        <ul className="menu__list">
          <Link to={"/Home"}>
            <a className="menu__link" href={'#Home'}>
              <img className='menu__icon' src={Home} alt={'Home'} />
              <div>Home</div>
            </a>
          </Link>
          {menuItems.map(item => (
            <li key={item.id} className="menu__item">
              <a className="menu__link" href={item.link}>
                <img className='menu__icon' src={item.icon} alt={`${item.name} Icon`} />
                <div>{item.name}</div>
              </a>
            </li>
          ))}
        </ul>
        <ul className="menu__items">
          {menuItemsTwo.map(item => (
            <li key={item.id} className="menu__item">
              <a className="menu__link" href={item.link}>
                <img className='menu__icon' src={item.icon} alt={`${item.name} Icon`} />
                <div>{item.name}</div>
              </a>
            </li>
          ))}
        </ul>
        <ul className='subscribtion'>
          <h4 className='s_h4'>Subscribtion</h4>
          {users?.length > 0 && users.map((user) => (
            <NavLink key={user.id} to={'/profile/' + user.id} className="s__links">
              <li className='s_item' key={user.id}>
                <img className='s_item--img' src={user.avatar}
                  alt={user.first_name + " " + user.last_name + "s avatar"} />
                <h2 className='s_item--h2'>{user.first_name + " " + user.last_name}</h2>
              </li>
            </NavLink>
          ))}
        </ul>
        <ul className="menu__items setting">
          <li className="menu__item">
            <a className="menu__link" href="#link">
              <img className='menu__icon' src={Settings} alt="icon" />
              <div>Setting</div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Menu;