"use client";
import { useState } from "react";
import CloseIcon from "../ui/CloseIcon";
import Burger from "../ui/Burger";
import { libre, pacifico } from "../ui/fonts";

function Header() {
  const [showMobMenu, setShowMobMenu] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showDoor, setShowDoor] = useState(false);
  const [showVorota, setShowVorota] = useState(false);
  const [showRoletu, setShowRoletu] = useState(false);
  const [showJaluzi, setShowJaluzi] = useState(false);
  const [showComplekt, setShowComplekt] = useState(false);

  return (
    <header className="header">
      <div className="header-wrap">
        <div className="adress-block">
          <a href="#" className={`main-link  ${libre.className}`}>
            Віконний майстер
          </a>
          <div className="two-block">
            <p>
              Чернівці,
              <br /> 29 Березня, 45а
            </p>
            <div className="tel-block">
              <a href="tel:+380503745265" className="nav-link header-tel">
                050-374-52-65
              </a>
              <a href="tel:+380673723780" className="nav-link header-tel">
                067-372-37-80
              </a>
            </div>
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
              <div className="nav-link  drop-list">
                ремонт та обслуговування <span>⏷</span>
                <div className="drop-down-list-wrap">
                  <ul className="drop-down-list">
                    <li>
                      <a href="/service" className="nav-link">
                        Ролети
                      </a>
                    </li>
                    <li>
                      <a href="/service" className="nav-link">
                        Двері будь-які
                      </a>
                    </li>
                    <li>
                      <a href="/service" className="nav-link">
                        Вікна
                      </a>
                    </li>
                    <li>
                      <a href="/service" className="nav-link">
                        Ворота
                      </a>
                    </li>
                    <li>
                      <a href="/service" className="nav-link">
                        Фурнітура
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a href="/window" className="nav-link">
                Металопластикові вікна
              </a>
            </li>
            <li>
              <div className="nav-link drop-list">
                двері <span>⏷</span>
                <div className="drop-down-list-wrap">
                  <ul className="drop-down-list">
                    <li>
                      <a href="#" className="nav-link">
                        Металопластикові двері
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Броньовані двері{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Міжкімнатні двері
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Двері протипожежні
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Технічні двері
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="nav-link drop-list">
                ворота <span>⏷</span>
                <div className="drop-down-list-wrap">
                  <ul className="drop-down-list">
                    <li>
                      <a href="/garage" className="nav-link">
                        Гаражні ворота
                      </a>
                    </li>
                    <li>
                      <a href="/garage" className="nav-link">
                        Відкатні ворота
                      </a>
                    </li>
                    <li>
                      <a href="/garage" className="nav-link">
                        Автоматика
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="nav-link drop-list">
                ролети <span>⏷</span>
                <div className="drop-down-list-wrap">
                  <ul className="drop-down-list">
                    <li>
                      <a href="/jaluzi" className="nav-link">
                        Алюмінієві
                      </a>
                    </li>
                    <li>
                      <a href="/jaluzi" className="nav-link">
                        Ролетні ворота
                      </a>
                    </li>
                    <li>
                      <a href="/jaluzi" className="nav-link">
                        Ролети на вікна
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="nav-link drop-list">
                жалюзі <span>⏷</span>
                <div className="drop-down-list-wrap">
                  <ul className="drop-down-list">
                    <li>
                      <a href="/jaluzi" className="nav-link">
                        День-ніч
                      </a>
                    </li>
                    <li>
                      <a href="/jaluzi" className="nav-link">
                        Горизонтальні
                      </a>
                    </li>
                    <li>
                      <a href="/jaluzi" className="nav-link">
                        Вертикальні
                      </a>
                    </li>
                    <li>
                      <a href="/jaluzi" className="nav-link">
                        Рулонні штори
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="nav-link drop-list">
                Комплектуючі <span>⏷</span>
                <div className="drop-down-list-wrap">
                  <ul className="drop-down-list">
                    <li>
                      <a href="/grid" className="nav-link">
                        Підвіконня
                      </a>
                    </li>
                    <li>
                      <a href="/grid" className="nav-link">
                        Відливи
                      </a>
                    </li>
                    <li>
                      <a href="/grid" className="nav-link">
                        Москітні сітки
                      </a>
                    </li>
                    <li>
                      <a href="/grid" className="nav-link">
                        Фурнітура
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
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
        <a href="#" className={`main-link  ${libre.className}`}>
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
              <a href="/" className="nav-link">
                ГОЛОВНА
              </a>
            </li>
            <li>
              <div className="nav-link mob-menu-drop">
                <p onClick={() => setShowService(!showService)}>
                  {" "}
                  РЕМОНТ ТА ОБСЛУГОВУВАННЯ <span>⏷</span>{" "}
                </p>

                <div
                  className={`mob-menu-drop-list-wrap ${
                    showService ? "showService" : null
                  }`}
                >
                  <ul>
                    <li>
                      <a href="/" className="nav-link">
                        Pолети
                      </a>
                    </li>
                    <li>
                      <a href="/" className="nav-link">
                        Двері будь-які
                      </a>
                    </li>
                    <li>
                      <a href="/" className="nav-link">
                        Вікна
                      </a>
                    </li>
                    <li>
                      <a href="/" className="nav-link">
                        Ворота
                      </a>
                    </li>
                    <li>
                      <a href="/" className="nav-link">
                        Фурнітура
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="nav-link">
                металопластикові ВІКНА
              </a>
            </li>
            <li>
              <div className="nav-link mob-menu-drop">
                <p onClick={() => setShowDoor(!showDoor)}>
                  ДВЕРІ <span>⏷</span>
                </p>
                <div
                  className={`mob-menu-drop-list-wrap ${
                    showDoor ? "showDoor" : null
                  }`}
                >
                  <ul>
                    <li>
                      <a href="/" className="nav-link">
                        Металопластикові двері
                      </a>
                    </li>
                    <li>
                      <a href="/" className="nav-link">
                        Броньовані двері
                      </a>
                    </li>
                    <li>
                      <a href="/" className="nav-link">
                        Міжкімнатні двері
                      </a>
                    </li>
                    <li>
                      <a href="/" className="nav-link">
                        Двері протипожежні
                      </a>
                    </li>
                    <li>
                      <a href="/" className="nav-link">
                        Технічні двері
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="nav-link mob-menu-drop">
                <p onClick={() => setShowVorota(!showVorota)}>
                  ВОРОТА <span>⏷</span>
                </p>
                <div   className={`mob-menu-drop-list-wrap ${
                    showVorota ? "showVorota" : null
                  }`}>
                    <ul>
                      <li><a href="/" className="nav-link">Гаражні ворота</a></li>
                      <li><a href="/" className="nav-link">Відкатні ворота</a></li>
                      <li><a href="/" className="nav-link">Автоматика</a></li>
                    </ul>
                  </div>
              </div>
            </li>
            <li>
              <div className="nav-link mob-menu-drop">
                <p onClick={() => setShowRoletu(!showRoletu)}>Ролети <span>⏷</span></p>
                <div className={`mob-menu-drop-list-wrap ${
                    showRoletu ? "showRoletu" : null
                  }`}>
                  <ul>
                    <li><a a href="/" className="nav-link">Алюмінієві</a></li>
                    <li><a a href="/" className="nav-link">Ролетні ворота</a></li>
                    <li><a a href="/" className="nav-link">Ролети на вікна</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="nav-link mob-menu-drop">
                <p onClick={() => setShowJaluzi(!showJaluzi)}>ЖАЛЮЗІ <span>⏷</span></p>
                 <div className={`mob-menu-drop-list-wrap ${
                    showJaluzi ? "showJaluzi" : null
                  }`}>
                  <ul>
                    <li><a href="/" className="nav-link">День-ніч</a></li>
                    <li><a href="/" className="nav-link">Горизонтальні</a></li>
                    <li><a href="/" className="nav-link">Вертикальні</a></li>
                    <li><a href="/" className="nav-link">Рулонні штори</a></li>
                  </ul>
                 </div>
              </div>
            </li>
            <li>
              <div className="nav-link mob-menu-drop">
              <p onClick={() => setShowComplekt(!showComplekt)}>Комплектуючі <span>⏷</span></p>
                <div className={`mob-menu-drop-list-wrap ${
                    showComplekt ? "showComplekt" : null
                  }`}>
                    <ul>
                      <li><a href="/" className="nav-link">Підвіконня</a></li>
                      <li><a href="/" className="nav-link">Відливи</a></li>
                      <li><a href="/" className="nav-link">Москітні сітки</a></li>
                      <li><a href="/" className="nav-link">Фурнітура</a></li>
                    </ul>
                  </div>
              </div>
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
