import './App.scss';
import Header from 'components/Header';
import Home from 'components/Home';
import Footer from 'components/Footer';
import LogInForm from 'components/LogInForm';
import SignUpForm from 'components/SignUpForm';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogInForm />} />
        <Route path='/register' element={<SignUpForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
