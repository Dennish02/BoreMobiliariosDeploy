import '../public/static/css/app.css';
import firebase , {FirebaseContext} from '../firebase';
import useAutentication from '../hooks/useAutentication';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function MyApp({ Component, pageProps }) {
  const usuario =useAutentication();

  return (
    <FirebaseContext.Provider
    value={{
      firebase,
      usuario
    }}
    >
      <>
      <Component {...pageProps}/>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      </>
     
    </FirebaseContext.Provider> 
    )
}

export default MyApp
