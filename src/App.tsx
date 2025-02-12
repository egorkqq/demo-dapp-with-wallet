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
     // resource =  "https://gist.githubusercontent.com/egorkqq/061e7ac0901feb0b7fdfaf0ab2335412/raw/a83db621f84accf8aaee10759e8c3b6941d9637b/wallets-v2.json" // official
     resource =  "https://gist.githubusercontent.com/egorkqq/061e7ac0901feb0b7fdfaf0ab2335412/raw/b96b4307e36ffe6e4e7f7390399196427e9e222d/wallets-v2.json"  // meyson
    }
  
    const response = await originalFetch(resource, config);
  
    return response;
};


function App() {
  return (
    <TonConnectUIProvider
      manifestUrl="https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json"
      uiPreferences={{theme: THEME.DARK}}
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
