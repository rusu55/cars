import '@styles/globals.css';
import {NavBar, Footer} from '@components';

export const metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
