import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/index.scss";
import { roboto } from "./ui/fonts";

export const metadata = {
  title: "Віконний майстер",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className}` }>
        <div className="wrapper">
        <Header />
   
         {children} 
     
        
        <Footer />   
        </div>
       
      </body>
    </html>
  );
}
