import {Helmet} from 'react-helmet';
import styles from './App.module.scss';
import { NavBarUrl, RoutingViews} from './componets/Navbar/navBar';
import { SearchBox } from './componets/SearchBox/searchBox';
import { ApiProvider} from './componets/API/ApiProvider';


function App() {

  return (
    <div>
      <Helmet>
        <style type="text/css">{styles.body}</style>   
      </Helmet>
  
        <ApiProvider >
          <NavBarUrl/>
          <SearchBox/>
          <RoutingViews/>
        </ApiProvider> 

    </div>
)}

export default App;

