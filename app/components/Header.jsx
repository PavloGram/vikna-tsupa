"use client";
import { useState } from "react";
import CloseIcon from "../ui/CloseIcon";
import Burger from "../ui/Burger";
import { pacifico } from "../ui/fonts";

function Header() {
  const [showMobMenu, setShowMobMenu] = useState(false);

  return (
    <header className="header">
      <div className="header-wrap">
        <div className="adress-block">
          <p>Чернівці, 29 Березня, 45а</p>
          <a href="#" className={`main-link  ${pacifico.className}`}>
            Віконний майстер
          </a>
          <div className="tel-block">
            <a href="tel:+380503745265" className="nav-link header-tel">
              050-374-52-65
            </a>
            <a href="tel:+380673723780" className="nav-link header-tel">
              067-372-37-80
            </a>
          </div>
        </div>
        <nav className="header-nav">
          <ul className="main-menu">
            <li>
              <a href="/" className="nav-link">
                головна
              </a>
            </li>
            <li>
              <a href="/service" className="nav-link">
                ремонт та обслуговування
              </a>
            </li>
            <li>
              <a href="/window" className="nav-link">
                вікна
              </a>
            </li>
            <li>
              <a href="/door" className="nav-link">
                двері
              </a>
            </li>
            <li>
              <a href="/garage" className="nav-link">
                ворота
              </a>
            </li>
            <li>
              <a href="/jaluzi" className="nav-link">
                жалюзі
              </a>
            </li>
            <li>
              <a href="/grid" className="nav-link">
                москітні сітки
              </a>
            </li>
            <li>
              <a href="/pidvikonnia" className="nav-link">
                підвіконня
              </a>
            </li>
            <li>
              <a href="/contact" className="nav-link">
                контакти
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mob-menu">
        
          <a href="#" className={`main-link  ${pacifico.className}`}>
            Віконний майстер
          </a>
          <button
            type="button"
            className="mob-menu-btn"
            onClick={() => setShowMobMenu(!showMobMenu)}
          >
            {showMobMenu ? <CloseIcon /> : <Burger />}
          </button>

          <nav className={`mob-menu-nav ${showMobMenu ? "activeModal" : null}`}>
            <ul className="mob-menu-list">
              <li>
                <a href="#" className="nav-link">
                  ГОЛОВНА
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  РЕМОНТ ТА ОБСЛУГОВУВАННЯ
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  ВІКНА
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  ДВЕРІ
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  ВОРОТА
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  ЖАЛЮЗІ
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  МОСКІТНІ СІТКИ
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  ПІДВІКОННЯ
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  КОНТАКТИ
                </a>
              </li>
            </ul>
          </nav>
       
      </div>
    </header>
  );
}

export default Header;
