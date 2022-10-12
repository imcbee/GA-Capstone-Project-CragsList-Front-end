import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JournalEdit from "./pages/JournalEdit";
import JournalIndex from "./pages/JournalIndex";
import JournalShow from "./pages/JournalShow";
import { Context } from "./context/Context";

// ! need to set up userAuth and goes into context

//! ------------------------Backend FETCH URL------------------------
const DB_URL = "http://localhost:4000";

function App() {
  return (
    <div className="App">
      <Context.Provider
        value={{
          DB_URL,
          //! add more context variable
        }}
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/journal/new" element={<JournalEdit />}></Route>
          <Route path="/journal" element={<JournalIndex />}></Route>
          <Route path="/journal/:id" element={<JournalShow />}></Route>
          <Route path="/journal/:id/edit" element={<JournalEdit />}></Route>
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
