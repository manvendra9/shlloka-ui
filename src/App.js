import Footer from './components/ui/Footer';

import './styles/App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/pages/Home/index';
import SignUp from "./components/pages/SignUp"
import Header from './components/utils/Header';
import Dwijass12 from './components/pages/Dwijass12';
import Dwijass21 from './components/pages/Dwijass21';
import YogicFood from './components/pages/YogicFood';
import Yogasanas from './components/pages/Yogasanas';
import SuryaShakti from './components/pages/SuryaShakti';
import SuryaKriya from './components/pages/SuryaKriya';
import Jalaneti from './components/pages/Jalaneti';
import BhutaShuddhi from './components/pages/BhutaShuddhi';
import BhaktiSadhana from './components/pages/BhaktiSadhana';
import Angamardana from './components/pages/Angamardana';

import { useSelector, useDispatch } from 'react-redux';
import { setCommonIsSnackbarOpen } from './redux/common/action';

import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import VerifyEmail from './components/pages/VerifyEmail';
import Signin from './components/pages/Signin';
import BhastrikaKriya from './components/pages/BhastrikaKriya';
import UpaYoga from './components/pages/UpaYoga';
import AboutSadhguru from './components/pages/AboutSadhguru';
import Meditation from './components/pages/Meditation';
import Dinacharya from './components/pages/Dinacharya';
import MantraAndNadaYoga from './components/pages/MantraAndNadaYoga';


export default function App() {

  const myState = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(myState);

  const handleClose = () => {
    dispatch(setCommonIsSnackbarOpen({
      isSnackbarOpen: false,
      snackbarMessage: '',
      snackbarType: myState.commonReducer.snackbarType
    }));
  }

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Router>
      {myState.commonReducer.isLoading ?
        <div style={{ position: 'fixed', top: '50%', left: '50%' }}>
          <h1>Loading...</h1>
        </div>
        : null
      }
      <Snackbar
        open={myState.commonReducer.isSnackbarOpen}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={3000}
        onClose={handleClose}
        action={action}
      >
        <Alert severity={myState.commonReducer.snackbarType} sx={{ width: '100%' }}>
          <h4>{myState.commonReducer.snackbarMessage}</h4>
        </Alert>
      </Snackbar>

      <Switch>
        <Route path="/signup" exact component={SignUp} />
        <Route path="/verify-email" exact component={VerifyEmail} />
        <Route path="/signin" exact component={Signin} />

        <div>
          <Header />
          <Switch>
            <Route exact path="/courses/dwijass-12" component={Dwijass12} />
            <Route exact path="/courses/dwijass-21" component={Dwijass21} />
            <Route exact path="/courses/yogic-food" component={YogicFood} />
            <Route exact path="/courses/yogasanas" component={Yogasanas} />
            <Route exact path="/courses/surya-shakti" component={SuryaShakti} />
            <Route exact path="/courses/surya-kriya" component={SuryaKriya} />
            <Route exact path="/courses/jalaneti" component={Jalaneti} />
            <Route exact path="/courses/bhuta-shuddhi" component={BhutaShuddhi} />
            <Route exact path="/courses/bhakti-sadhana" component={BhaktiSadhana} />
            <Route exact path="/courses/bhastrika-kriya" component={BhastrikaKriya} />
            <Route exact path="/courses/angamardana" component={Angamardana} />
            <Route exact path="/courses/upa-yoga" component={UpaYoga} />
            <Route exact path="/about-sadhguru" component={AboutSadhguru} />
            <Route exact path="/courses/meditation" component={Meditation} />
            <Route exact path="/courses/dinacharya" component={Dinacharya} />
            <Route exact path="/courses/mantra-and-nada-yoga" component={MantraAndNadaYoga} />

            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </Switch>
    </Router>
  );

}