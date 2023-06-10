import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/ServiceList";
import { Provider } from 'react-redux'
import store from "./redux/store"

 
function App() {
  return (
    <Provider  store={store}>
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
            <div className="w-full shadow-lg  p-6 bg-white">
                <Header/>
                <hr className="mt-4" />
                <Services/>
                <hr className="mt-4" />
                <Footer/>
            </div>
        </div>
    </Provider>
     
  );
}

export default App;
