import './App.scss';
import './trackers';
import {THEME, TonConnectUIProvider, UIWallet} from "@tonconnect/ui-react";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import {TxForm} from "./components/TxForm/TxForm";
const arcWallet =  {
              appName: "architec.ton",
              name: "Architec.ton",
              imageUrl: "https://raw.githubusercontent.com/Architec-Ton/wallet-tma/refs/heads/dev/public/images/arcwallet_logo.png",
              aboutUrl: "https://architecton.tech/",
              universalLink: "https://t.me/architec_ton_bot/?attach=wallet",
              bridgeUrl: "https://tonconnect.architecton.site/bridge",
              platforms: ["ios", "android", "macos", "windows", "linux"],
            };

const arrayOfWallets = [arcWallet] as UIWallet[];


const TC_CFG = {
       includeWallets: arrayOfWallets
      };

function App() {
  return (
    <TonConnectUIProvider
      manifestUrl="https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json"
      uiPreferences={{theme: THEME.DARK}}
      walletsListConfiguration={TC_CFG}
    >
      <div className="app">
        <Header/>
        <TxForm/>
        {/*<TonProofDemo />*/}
        <Footer/>
      </div>
    </TonConnectUIProvider>
  )
}

export default App
