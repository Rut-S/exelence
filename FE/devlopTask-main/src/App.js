import './App.css';
import { MuiThemeProvider } from 'material-ui'
import AddCustomer from './component/AddCustomer';
import CustomersList from './component/CustomersList';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AddCustomer />} />
            <Route path="/CustomerList" element={<CustomersList />} />
          </Routes>
        </BrowserRouter>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
