import React, { useState, useEffect } from "react";
import "./Head.scss";
import axios from "axios";
import Oval from "../../Images/Oval.png";
import Oval2 from "../../Images/Oval2.png"
import { NavLink } from "react-router-dom";

function Head() {
    const [users, setUsers] = useState([]);
    const [users2, setUsers2] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(response => {
                setUsers(response.data.slice(0, 10));
                setLoading(false);
            })
            .catch(error => {
                console.error("Ma'lumotlarni olishda xatolik:", error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(response => {
                setUsers2(response.data.slice(-7));
                setLoading(false);
            })
            .catch(error => {
                console.error("Ma'lumotlarni olishda xatolik:", error);
                setLoading(false);
            });
    }, []);

    return (
        <section className="head" /*id="#Userlar"*/>
            <div className="container">
                <div className="head__info">
                    <img src={Oval} alt="oval" />
                    <h1 className="head__title">Dollie Blair</h1>
                </div>


                <div className="head__item--box">
                    <ul className="head__list head__grid">
                        {users.map(user => (
                            <NavLink key={user.id} to={'/video/' + user.id} className={"head__link"}>
                                <li key={user.id} className="head__item">
                                    <img className="head__img" src={user.url} alt={user.title + "img"} />
                                    <h2 className="head__titles">{user.title}</h2>
                                    <p className="head__pt">80k views  ·  3 days ago  Dollie Blair</p>
                                </li>
                            </NavLink>
                        ))}
                    </ul>

                    <h1 className="head__title">Recommended</h1>

                    <ul className="head__list head__list--dva">
                        {users2.map(user => (
                            <NavLink key={user.id} to={'/video/' + user.id} className={"head__link"}>
                                <li key={user.id} className="dva__items">
                                    <img className="dva__render" src={user.url} alt={user.title + "img"} />
                                    <h2 className="head__titles">{user.title}</h2>
                                    <div className="head__list--box">
                                        <p className="head__p">54k views  ·  7 days ago</p>
                                        <p className="head__p">Edward Osbome</p>
                                    </div>
                                </li>
                            </NavLink>
                        ))}
                    </ul>

                    <div className="head__info">
                        <img src={Oval2} alt="oval2" />
                        <h1 className="head__title">Food & Drink</h1>
                    </div>

                    <ul className="head__list head__list--tri">
                        {users.map(user => (
                            <NavLink key={user.id} to={'/video/' + user.id} className={"head__link"}>
                                <li key={user.id} className="head__item">
                                    <img className="head__img" src={user.url} alt={user.title + "img"} />
                                    <h2 className="head__titles">{user.title}</h2>
                                    <p className="head__pt">80k views  ·  3 days ago  Dollie Blair</p>
                                </li>
                            </NavLink>
                        ))}
                    </ul>
                </div>

                {loading && <h1>Loading...</h1>}
            </div>
        </section>
    );
}

export default Head;
