import React from "react";
import "./Video.scss"
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import oval from "../../Images/Oval2.png"
import share from "../../Images/Fill 62.png"
import more from "../../Images/More.png"
import auto from "../../Images/AutoPlay.svg"

function Video() {
  const { user_id } = useParams();
  const [user, setUser] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/" + user_id)
      .then((res) => res.json())
      .then((data) => {
        if (!data?.data) {
          setUser(data);
          setLoading(false);
        }
      });
  }, [user_id]);


  const [vds, setVds] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos")
      .then(response => {
        setVds(response.data.slice(0, 7));
      })
      .catch(error => {
        console.error("Xatolik", error);
      });
  }, []);

  return (
    <>
      <section className="video">
        <div className="container">

          <div className="video__boxes">

            <div className="video__play">
              {user && (
                <div className="video__box">
                  <img
                    className="video__mainpic"
                    src={user.url}
                    alt={"picture of the" + user.title}
                    width={450}
                    height={350}
                  />
                  <h2 className="video__title">{user.title}</h2>
                </div>
              )}
              {loading && <h1>Loading...</h1>}
            </div>

            <div className="video__tBox">
              <p className="video__p">123k views</p>

              <div className="video__threeBox">
                <button className="video__button">
                  <p className="video__icon">👍 123k</p>
                </button>

                <button className="video__button">
                  <p className="video__icon">👎 435k</p>
                </button>

                <button className="video__button">
                  <img className="video__icon" src={share} alt="share" width={14} height={13} /> Share
                </button>

                <img className="video_more" src={more} alt="More" />
              </div>
            </div>

            <span className="video__span"></span>

            <ul className="video__twoList">
              <li className="video__twoItem">
                <img className="video__twoImg" src={oval} alt="Icon" width={80} height={80} />

                <div className="video__twoBox">
                  <h3 className="video__twoT">Food & Drink</h3>
                  <span className="head__pt">Published on 14 Jun 2019</span>
                  <p className="video__twoP">
                    A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad.
                  </p>

                  <p className="head__pt video__more">Show more...</p>
                </div>

              </li>

              <li className="video__twoSub">
                <button className="video__twobtn">Subscribe2.3m</button>
              </li>
            </ul>
          </div>

          <ul className="video__list">

            <div className="video__list--boxes">
              <h2 className="list__boxes--title">Next</h2>
              <div className="video__list--box">
                <h5 className="list__box--text">AUTOPLAY</h5>
                <img className="list__box--img" src={auto} alt="AutoPlay" />
              </div>
            </div>

            {vds.map(vdss => (
              <NavLink key={vdss.id} to={'/video/' + vdss.id} className={"linktwo"}>
                <li key={vdss.id} className="head__item">
                  <img
                    className="head__img"
                    src={vdss.thumbnailUrl}
                    alt={"picture of the" + vdss.title} />
                  <h2 className="head__title">{vdss.title}</h2>
                  <p className="head__text">80k views  ·  3 days ago  Dollie Blair</p>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Video;