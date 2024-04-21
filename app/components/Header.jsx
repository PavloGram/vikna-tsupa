"use client";
import { useState } from "react";
import CloseIcon from "../ui/CloseIcon";
import Burger from "../ui/Burger";
import { libre, pacifico } from "../ui/fonts";
import Link from "next/link";

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
          <Link href="/" className={`main-link  ${libre.className}`}>
            Віконний майстер
          </Link>
          <div className="two-block">
            <p>
              Чернівці,
              <br /> 29 Березня, 45а
            </p>
            <div className="tel-block">
              <Link href="tel:+380503745265" className="nav-link header-tel">
                050-374-52-65
              </Link>
              <Link href="tel:+380673723780" className="nav-link header-tel">
                067-372-37-80
              </Link>
            </div>
          </div>
        </div>

        <nav className="header-nav">
          <ul className="main-menu">
            <li>
              <Link href="/" className="nav-link">
                головна
              </Link>
            </li>
            <li>
              <div className="nav-link  drop-list">
                ремонт та обслуговування <span>⏷</span>
                <div className="drop-down-list-wrap">
                  <ul className="drop-down-list">
                    <li>
                      <Link href="/service/remont-rolet" className="nav-link">
                        Ролети
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/remont-dverey" className="nav-link">
                        Двері будь-які
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/remont-vikon" className="nav-link">
                        Вікна
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/remont-vorit" className="nav-link">
                        Ворота
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/furnitura" className="nav-link">
                        Фурнітура
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link href="/window" className="nav-link">
                Металопластикові вікна
              </Link>
            </li>
            <li>
              <div className="nav-link drop-list">
                двері <span>⏷</span>
                <div className="drop-down-list-wrap">
                  <ul className="drop-down-list">
                    <li>
                      <Link href="/dveri/metaloplastukovi-dveri" className="nav-link">
                        Металопластикові двері
                      </Link>
                    </li>
                    <li>
                      <Link href="/dveri/broniovani-dveri" className="nav-link">
                        Броньовані двері{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="/dveri/mijkimnatni-dveri" className="nav-link">
                        Міжкімнатні двері
                      </Link>
                    </li>
                    <li>
                      <Link href="/dveri/protupojejni-dveri" className="nav-link">
                        Двері протипожежні
                      </Link>
                    </li>
                    <li>
                      <Link href="/dveri/tehnichni-dveri" className="nav-link">
                        Технічні двері
                      </Link>
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
                      <Link href="/vorota/garajni-vorota" className="nav-link">
                        Гаражні ворота
                      </Link>
                    </li>
                    <li>
                      <Link href="/vorota/vidkatni-vorota" className="nav-link">
                        Відкатні ворота
                      </Link>
                    </li>
                    <li>
                      <Link href="/vorota/avtomatuka" className="nav-link">
                        Автоматика
                      </Link>
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
                      <Link href="/roletu/aluminievi-roletu" className="nav-link">
                        Алюмінієві
                      </Link>
                    </li>
                    <li>
                      <Link href="/roletu/roletni-vorota" className="nav-link">
                        Ролетні ворота
                      </Link>
                    </li>
                    <li>
                      <Link href="/roletu/roletu-na-vikna" className="nav-link">
                        Ролети на вікна
                      </Link>
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
                      <Link href="/jaluzi/den-nich" className="nav-link">
                        День-ніч
                      </Link>
                    </li>
                    <li>
                      <Link href="/jaluzi/horuzontalni" className="nav-link">
                        Горизонтальні
                      </Link>
                    </li>
                    <li>
                      <Link href="/jaluzi/vertukalni" className="nav-link">
                        Вертикальні
                      </Link>
                    </li>
                    <li>
                      <Link href="/jaluzi/rulonni-chtoru" className="nav-link">
                        Рулонні штори
                      </Link>
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
                      <Link href="/complektuychi/pidvikonnia" className="nav-link">
                        Підвіконня
                      </Link>
                    </li>
                    <li>
                      <Link href="/complektuychi/vidluvu" className="nav-link">
                        Відливи
                      </Link>
                    </li>
                    <li>
                      <Link href="/complektuychi/moskitni-sitku" className="nav-link">
                        Москітні сітки
                      </Link>
                    </li>
                    <li>
                      <Link href="/complektuychi/furnitura" className="nav-link">
                        Фурнітура
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <Link href="/contact" className="nav-link">
                контакти
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mob-menu">
        <Link href="/" className={`main-link  ${libre.className}`}>
          Віконний майстер
        </Link>
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
              <Link href="/" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>
                ГОЛОВНА
              </Link>
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
                  <ul className="mob-menu-drop-list">
                    <li>
                      <Link href="/service/remont-rolet" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>
                        Pолети
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/remont-dverey" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>
                        Двері будь-які
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/remont-vikon" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>
                        Вікна
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/remont-vorit" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>
                        Ворота
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/furnitura" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>
                        Фурнітура
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link href="/window" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>
                металопластикові ВІКНА
              </Link>
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
                      <Link href="/dveri/metaloplastukovi-dveri" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>
                        Металопластикові двері
                      </Link>
                    </li>
                    <li>
                      <Link href="/dveri/broniovani-dveri" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>
                        Броньовані двері
                      </Link>
                    </li>
                    <li>
                      <Link href="/dveri/mijkimnatni-dveri" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>
                        Міжкімнатні двері
                      </Link>
                    </li>
                    <li>
                      <Link href="/dveri/protupojejni-dveri" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>
                        Двері протипожежні
                      </Link>
                    </li>
                    <li>
                      <Link href="/dveri/tehnichni-dveri" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>
                        Технічні двері
                      </Link>
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
                      <li><Link href="/vorota/garajni-vorota" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>Гаражні ворота</Link></li>
                      <li><Link href="/vorota/vidkatni-vorota" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>Відкатні ворота</Link></li>
                      <li><Link href="/vorota/avtomatuka" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>Автоматика</Link></li>
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
                    <li><Link  href="/roletu/aluminievi-roletu" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>Алюмінієві</Link></li>
                    <li><Link  href="/roletu/roletni-vorota" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>Ролетні ворота</Link></li>
                    <li><Link  href="/roletu/roletu-na-vikna" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>Ролети на вікна</Link></li>
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
                    <li><Link href="/jaluzi/den-nich" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>День-ніч</Link></li>
                    <li><Link href="/jaluzi/horuzontalni" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>Горизонтальні</Link></li>
                    <li><Link href="/jaluzi/vertukalni" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>Вертикальні</Link></li>
                    <li><Link href="/jaluzi/rulonni-chtoru" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>Рулонні штори</Link></li>
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
                      <li><Link href="/complektuychi/pidvikonnia" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>Підвіконня</Link></li>
                      <li><Link href="/complektuychi/vidluvu" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>Відливи</Link></li>
                      <li><Link href="/complektuychi/moskitni-sitku" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>Москітні сітки</Link></li>
                      <li><Link href="/complektuychi/furnitura" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>Фурнітура</Link></li>
                    </ul>
                  </div>
              </div>
            </li>
         
            <li>
              <Link href="/contact" className="nav-link" onClick={() => setShowMobMenu(!showMobMenu)}>
                КОНТАКТИ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
