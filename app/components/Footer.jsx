import { pacifico } from "../ui/fonts";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrap">
        <div>
          <a href="#" className={`footer-logo ${pacifico.className}`}>
            Віконний майстер
          </a>
          <ul className="footer-social-link-list">
            <li>
              <a href="#" className="footer-social-link">
                F
              </a>
            </li>
            <li>
              <a href="#" className="footer-social-link">
                I
              </a>
            </li>
            <li>
              <a href="#" className="footer-social-link">
                Y
              </a>
            </li>
          </ul>
          <p className="footer-copy">&copy; 2024 Віконний майстер </p>
        </div>
        <div  style={{ marginRight:'15px'}}>
          <p className="footer-block-title"  >Продукція</p>
          <ul className="footer-product-link-list">
            <li>
              <a href="#" className="footer-product-link">
                Вікна
              </a>
            </li>
            <li>
              <a href="#" className="footer-product-link">
                Броньовані двері
              </a>
            </li>
            <li>
              <a href="#" className="footer-product-link">
                Пластикові двері
              </a>
            </li>
            <li>
              <a href="#" className="footer-product-link">
                Ворота
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-block-title">Компанія</p>
          <ul className="footer-product-link-list">
            <li>
              <a href="#" className="footer-product-link">
                Про нас
              </a>
            </li>
            <li>
              <a href="#" className="footer-product-link">
                Контакти
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-address-block">
          <p className="footer-block-title">Адреса</p>
          <address className="footer-address">Чернівці <br/> вул. 29 Березня, 45а</address>
          <div className="footer-address-tel">
           <a href="tel:+380503745265" className="footer-address">050-374-52-65</a>
          <a href="tel:+380673723780" className="footer-address">067-372-37-80</a>  
          </div>
         

        </div>
      </div>
    </footer>
  );
}
export default Footer;
