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
              <div  className="nav-link  drop-list">
                ремонт та обслуговування  <span >⏷</span>
                <div className="drop-down-list-wrap">
                  <ul className="drop-down-list">
                    <li><a href="/service" className="nav-link">Металопластикових вікон та дверей</a></li>
                    <li><a href="/service" className="nav-link">Броньованих дверей</a></li>
                    <li><a href="/service" className="nav-link">Воріт та ролет</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a href="/window" className="nav-link">
              Металопластикові  вікна
              </a>
            </li>
            <li>
              <div className="nav-link drop-list">
                двері <span >⏷</span>
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
                        Фурнітура для дверей
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="nav-link drop-list">
                ворота <span >⏷</span>
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
                        Фурнітура для воріт
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div  className="nav-link drop-list">
                жалюзі та ролети <span >⏷</span>
                <div className="drop-down-list-wrap">
                  <ul className="drop-down-list">
                    <li><a href="/jaluzi" className="nav-link">жалюзі</a></li>
                    <li><a href="/jaluzi" className="nav-link">ролети</a></li>
                    <li><a href="/jaluzi" className="nav-link">штори вертикальні</a></li>
                    <li><a href="/jaluzi" className="nav-link">штори горизонтальні</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="nav-link drop-list">
                Комплектуючі для вікон <span >⏷</span>
                <div className="drop-down-list-wrap">
                  <ul className="drop-down-list">
                    <li><a href="/grid" className="nav-link">Підвіконня</a></li>
                    <li><a href="/grid" className="nav-link">Відливи</a></li>
                    <li><a href="/grid" className="nav-link">Москітні сітки</a></li>
                    <li><a href="/grid" className="nav-link">Фурнітура</a></li>
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
              <div className="nav-link">ДВЕРІ</div>
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
