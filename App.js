import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import NavBar from "./components/navBar/navBar";
import Home from "./components/home/home";
import store from "./redux/store/store";
import Cards from "./components/cards/cards";
import Phone from "./components/phone/phone";

import { NativeRouter, Route, Routes } from "react-router-native";

export default function App() {
  return (
    <PaperProvider>
      <Provider store={store}>
        <NativeRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/phones/:id" element={<Cards />} />
            <Route path="/phone/:id" element={<Phone />} />
          </Routes>
        </NativeRouter>
      </Provider>
    </PaperProvider>
  );
}
