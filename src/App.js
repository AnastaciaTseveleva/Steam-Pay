import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import paymentsIcon from "./assets/img/icon.svg";
import usersIcon from "./assets/img/icon2.svg";

import PopupWindow from "./components/PopupWindow/PopupWindow";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage/MainPage";
import FaqPage from "./pages/FaqPage/FaqPage";
import PopupLogin from "./components/PopupLogin/PopupLogin";
import PopupContacts from "./components/PopupContacts/PopupContacts";
import PopupPolitics from "./components/PopupPolitics/PopupPolitics";
import PopupRight from "./components/PopupRight/PopupRight";
import OrderPage from "./pages/OrderPage/OrderPage";

import PayContext from "./context/PayContext";
import ProtectedRoute from "./utils/ProtectedRoute";
import BurgerWindow from "./components/BurgerWindow/BurgerWindow";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960); //isMobile-true, если ширина экрана меньше или равна 960 пикселей
  const [isBurgerWindow, setIsBurgerWindow] = useState(
    window.innerWidth <= 575
  );
  const [isBurgerWindowOpen, setIsBurgerWindowOpen] = useState(false);

  const [isOrderBeen, setIsOrderBeen] = useState(false);
  const [isAuth, setIsAuth] = useState(true);

  const [statHeading, setStatHeading] = useState("Пополнение Steam");
  const [payments, setPayments] = useState(210420);
  const [clients, setClients] = useState(97420);
  const [online, setOnline] = useState(3233);
  const [login, setLogin] = useState("");
  const [money, setMoney] = useState("");
  const [number, setNumber] = useState([100, 500, 1000, 2000]);
  const [formData, setFormData] = useState({});

  const [popupWindowIsOpen, setPopupWindowIsOpen] = useState(false);
  const [loginPopupIsOpen, setLoginPopupIsOpen] = useState(false);
  const [contactsPopupIsOpen, setContactsPopupIsOpen] = useState(false);
  const [politicsPopupIsOpen, setPoliticsPopupIsOpen] = useState(false);
  const [rightPopupIsOpen, setRightPopupIsOpen] = useState(false);

  const refillStatsInfo = [
    {
      label: "Пополнений",
      number: payments,
      img: paymentsIcon,
    },
    {
      label: "Клиентов",
      number: clients,
      img: usersIcon,
    },
  ];

  //это для страницы статус заказа в один стейт объединить
  const [orderStatusOkey, setOrderStatusOkey] = useState("");
  const [orderStatusTime, setOrderStatusTime] = useState("");
  const [orderStatusError, setOrderStatusError] = useState();

  const [isLoginInputError, setIsLoginInputError] = useState(false);
  const [isMoneyInputError, setIsMoneyInputError] = useState(false);
  const [isAgreeInputError, setIsAgreeInputError] = useState(false);
  const [isMethodInputError, setisMethodInputError] = useState(false);

  function openBurgerWindow() {
    setIsBurgerWindowOpen(true);
  }
  function hideBurgerWindow() {
    setIsBurgerWindowOpen(false);
  }
  const openPopup = (callback) => {
    setPopupWindowIsOpen(true);
    callback(true);
  };

  const hidePopup = (callback) => {
    setPopupWindowIsOpen(false);
    callback(false);
  };

  function handleInput(e) {
    const oldData = { ...formData };
    oldData[e.target.name] = e.target.value;
    setFormData(oldData);
  }

  function changeMoney(value) {
    const currentMoney = Number.parseFloat(+money.replace("₽", ""));
    const newValue = currentMoney + +value;
    setMoney(`${newValue} ₽`);
    if (value) {
      setIsMoneyInputError(false);
    } else {
      setIsMoneyInputError(true);
    }
  }
  // useEffect выполняет те действия, которые мы не можем выполнить в основной части функционального компонента
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsBurgerWindow(window.innerWidth <= 575);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleMoneyInput(e) {
    const value = e.target.value.replace(/\D/g, "") + " ₽";
    setMoney(value);

    if (e.target.value === " ₽") {
      setMoney("0 ₽");
      return;
    }

    if (money == "0 ₽") {
      setMoney(value.slice(1));
    }

    setTimeout(() => {
      e.target.setSelectionRange(value.length - 2, value.length - 2);
    }, 0);

    setFormData({
      ...formData,
      money: value,
    });
  }

  function changeLogin(e) {
    const value = e.target.value.replace(" ", "");
    setLogin(value);
    handleInput(e);
    if (value) {
      setIsLoginInputError(false);
    } else {
      setIsLoginInputError(true);
    }
  }

  function changeCheckboxInput(e) {
    const value = e.target.checked;
    setFormData({
      ...formData,
      agree: e.target.checked,
    });
    if (value) {
      setIsAgreeInputError(false);
    } else {
      setIsAgreeInputError(true);
    }
  }

  function changeRadioInput(e) {
    const value = e.target.checked;
    setFormData({
      ...formData,
      method: e.target.value,
    });
    if (value) {
      
      setisMethodInputError(false);
    } else {
      setisMethodInputError(true);
    }
  }

  return (
    <div className="App">
      <PayContext.Provider
        value={{
          login,
          money,
          setFormData,
          formData,
          setIsLoginInputError,
          setIsAgreeInputError,
          setisMethodInputError,
          setIsMoneyInputError,
          isLoginInputError,
          isMoneyInputError,
          isAgreeInputError,
          isMethodInputError,
          statHeading,
          refillStatsInfo,
          changeMoney,
          changeLogin,
          openPopup,
          number,
          toggleMoneyInput,
          changeRadioInput,
          changeCheckboxInput,
          setLoginPopupIsOpen,
          isMobile,
          setIsOrderBeen,
        }}
      >
        <BurgerWindow
          openPopup={openPopup}
          setContactsPopupIsOpen={setContactsPopupIsOpen}
          openBurgerWindow={openBurgerWindow}
          isBurgerWindowOpen={isBurgerWindowOpen}
        />
        <Header
          online={online}
          openPopup={openPopup}
          setContactsPopupIsOpen={setContactsPopupIsOpen}
          isBurgerWindow={isBurgerWindow}
          isBurgerWindowOpen={isBurgerWindowOpen}
          openBurgerWindow={openBurgerWindow}
          hideBurgerWindow={hideBurgerWindow}
        />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route
            path="/order"
            element={
              <ProtectedRoute flag={isOrderBeen} Component={OrderPage} />
            }
          />
        
        </Routes>

        <PopupWindow popupWindowIsOpen={popupWindowIsOpen}>
          <PopupLogin
            loginPopupIsOpen={loginPopupIsOpen}
            hidePopup={hidePopup}
            setLoginPopupIsOpen={setLoginPopupIsOpen}
          />
          <PopupContacts
            contactsPopupIsOpen={contactsPopupIsOpen}
            hidePopup={hidePopup}
            setContactsPopupIsOpen={setContactsPopupIsOpen}
          />
          <PopupPolitics
            politicsPopupIsOpen={politicsPopupIsOpen}
            hidePopup={hidePopup}
            setPoliticsPopupIsOpen={setPoliticsPopupIsOpen}
          />
          <PopupRight
            rightPopupIsOpen={rightPopupIsOpen}
            hidePopup={hidePopup}
            setPoliticsPopupIsOpen={setPoliticsPopupIsOpen}
          />
        </PopupWindow>
        <Footer
          openPopup={openPopup}
          setPoliticsPopupIsOpen={setPoliticsPopupIsOpen}
          setRightPopupIsOpen={setRightPopupIsOpen}
          setContactsPopupIsOpen={setContactsPopupIsOpen}
        />
      </PayContext.Provider>
    </div>
  );
}

export default App;
