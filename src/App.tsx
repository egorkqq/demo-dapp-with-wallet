import './App.scss';
import './trackers';
import {THEME, TonConnectUIProvider, UIWallet} from "@tonconnect/ui-react";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import {TxForm} from "./components/TxForm/TxForm";
const arcWallet =  {
              appName: "Architec.ton",
              name: "Architec.ton",
              imageUrl: "https://static.tildacdn.com/tild3333-3864-4236-a261-353164396136/IMG_9778.PNG",
              aboutUrl: "https://architecton.tech/",
              universalLink: "https://t.me/dzapmap_bot?attach=wallet",
              bridgeUrl: "https://architec-bridge-jnvqzp-e228fe-194-164-235-187.traefik.me/bridge",
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
