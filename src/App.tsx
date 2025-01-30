import './App.scss';
import './trackers';
import {THEME, TonConnectUIProvider} from "@tonconnect/ui-react";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import {TxForm} from "./components/TxForm/TxForm";

function App() {
  return (
    <TonConnectUIProvider
      manifestUrl="https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json"
      uiPreferences={{theme: THEME.DARK}}
      walletsListConfiguration={{
       includeWallets: [
            {
              appName: "Architec.ton",
              name: "Architec.ton",
              imageUrl: "https://static.tildacdn.com/tild3333-3864-4236-a261-353164396136/IMG_9778.PNG",
              aboutUrl: "https://architecton.tech/",
              universalLink: "https://t.me/dzapmap_bot?attach=wallet",
              bridgeUrl: "https://tonconnect-yac.architecton.site/bridge",
              platforms: ["ios", "android", "macos", "windows", "linux"],
            },

        ]
      }}
      actionsConfiguration={{
        twaReturnUrl: 'https://t.me/architec_ton_bot/wallet_v1'
      }}
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
