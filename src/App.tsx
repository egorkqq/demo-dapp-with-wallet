import './App.scss';
import './trackers';
import {THEME, TonConnectUIProvider, UIWallet} from "@tonconnect/ui-react";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import {TxForm} from "./components/TxForm/TxForm";

const { fetch: originalFetch } = window;

window.fetch = async (...args) => {
    let [resource, config ] = args;
  
    if (resource === "https://raw.githubusercontent.com/ton-blockchain/wallets-list/main/wallets-v2.json") {
      resource =  "https://gist.githubusercontent.com/egorkqq/061e7ac0901feb0b7fdfaf0ab2335412/raw/a83db621f84accf8aaee10759e8c3b6941d9637b/wallets-v2.json"
    }
  
    const response = await originalFetch(resource, config);
  
    return response;
};


const arcWallet =  {
              appName: "Architec.ton",
              name: "Architec.ton",
              imageUrl: "https://static.tildacdn.com/tild3333-3864-4236-a261-353164396136/IMG_9778.PNG",
              aboutUrl: "https://architecton.tech/",
              universalLink: "https://t.me/dzapmap_bot?attach=wallet",
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
