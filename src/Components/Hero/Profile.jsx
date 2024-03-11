import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "./Profile.scss";
import channelbg from "../Images/Cover.png";
import notification from "../Images/notification.svg"
import channelSearch from "../Images/Shape.png"
import ChannelVideo from "../Images/Video.png"

import user1 from "../Images/Benson.png";
import user2 from "../Images/Violet.png";
import user3 from "../Images/Mullins.png";
import axios from "axios";


function Channel() {
  const [user, setuser] = React.useState()
  const [loading, setloading] = React.useState(true)
  const { user_id } = useParams()

  React.useEffect(() => {
    fetch("https://reqres.in/api/users/" + user_id)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setuser(data?.data)
          setloading(false)
        }
      })
  }, [user_id])



  const [channel, setUsers] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos")
      .then(response => {
        setUsers(response.data.slice(70, 100));
      })
      .catch(error => {
        console.error("Ma'lumotlarni olishda xatolik:", error);
      });
  }, []);

  return (
    <>
      <section className="channel">
        <div className="container">
          <img className="channelbg" src={channelbg} alt="Img" />

          <ul className="channel__list">
            <li className="channel__item">
              {user && (
                <div className="channel__profile">
                  <img className="channel__useri" src={user.avatar} alt={user.last_name} />
                  <div className="channel__usert">
                    <h2 className="channel__usert--t">{user.first_name + " " + user.last_name}</h2>
                    <p className="head__pt">245K subscribed</p>
                  </div>
                </div>
              )}
              {loading && <h1>Loading...</h1>}
            </li>

            <li className="channel__item">
              <img className="channel__itemI" src={notification} alt="Notificon" />
              <button className="channel__sub">Subscribe2.3m</button>
            </li>
          </ul>

          <div className="channel__center">

            <div className="channel__center--top">

              <ul className="channel__center--list">
                <li className="channel__c--item">Home</li>
                <li className="channel__c--item">Videos</li>
                <li className="channel__c--item">Playlists</li>
                <li className="channel__c--item">Channels</li>
                <li className="channel__c--item">Discussion</li>
                <li className="channel__c--item">About</li>
                <li>
                  <img src={channelSearch} alt="Icon Search" />
                </li>
              </ul>

              <ul className="channel__mobileL">
                <li className="channel__c--item">Home</li>
                <li className="channel__c--item">Videos</li>
                <li className="channel__c--item">Playlists</li>
              </ul>

              <div className="channel__centerC">
                <img className="channel__videoImg" src={ChannelVideo} alt="Img" width={490} height={230} />
 
                <div className="channel__Ctbox">
                  <h3 className="channel__Ct">Choosing The Best Audio Player Software For Your Computer</h3>
                  <p className="channel__Cp">
                    Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is and intrusive pop-ups. Bayles A common medium is the use of banner ads.
                  </p>
                  <span className="head__pt">11k views  ·  6 months ago</span>
                </div>
              </div>
            </div>

            <div className="channel__right">
              <h4 className="head__pt">Recommended channel</h4>

              <div className="chanel__rightU">
                <img className="channel__right--img" src={user1} alt="user icon" />
                <h5 className="channel__rightH">Flora Benson</h5>
              </div>

              <div className="chanel__rightU">
                <img className="channel__right--img" src={user2} alt="user icon" />
                <h5 className="channel__rightH">Violet Cobb</h5>
              </div>

              <div className="chanel__rightU">
                <img className="channel__right--img" src={user3} alt="user icon" />
                <h5 className="channel__rightH">Phillip Mullins</h5>
              </div>
            </div>
          </div>

          <h3 className="channel__endTitle">Margaret Phelps videos</h3>
          
          <ul className="head__list">
            {channel.map(user => (
              <NavLink key={user.id} to={'/video/' + user.id} className={"linkOne"}>
                <li key={user.id} className="head__item">
                  <img className="head__img" src={user.url} alt={user.title + "img"} />
                  <h2 className="head__titles">{user.title}</h2>
                  <p className="head__pt">80k views  ·  3 days ago  Dollie Blair</p>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}


export default Channel;