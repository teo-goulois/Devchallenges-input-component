import React from "react";
import "./App.scss";
// components
import Sidebar from "./components/sidebar/Sidebar";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <section className="main">
        <h1>Inputs</h1>
        {/* INPUT */}
        <div className="inputs-container">
          <div className="input-container">
            <p className="label">{"<Input />"}</p>
            <Input />
          </div>
          <div className="input-container">
            <p className="label active">{"&:hover"}</p>
            <Input hover />
          </div>
          <div className="input-container">
            <p className="label active">{"&:focus"}</p>
            <Input focus />
          </div>
        </div>
        {/* ERROR */}
        <div className="inputs-container">
          <div className="input-container">
            <p className="label">{"<Input error />"}</p>
            <Input error />{" "}
          </div>
          <div className="input-container">
            <p className="label active">{"&:hover"}</p>
            <Input hover error />
          </div>
          <div className="input-container">
            <p className="label active">{"&:focus"}</p>
            <Input focus error />
          </div>
        </div>
        {/* DISABLED */}
        <div className="inputs-container">
          <div className="input-container">
            <p className="label">{"<Input disabled />"}</p>
            <Input disabled />
          </div>
        </div>

        {/* HELPERTEXT */}
        <div className="inputs-container">
          <div className="input-container">
            <p className="label">
              {'<Input helperText="Some interesting text" />'}
            </p>
            <Input helperText="Some interesting text" />
          </div>
          <div className="input-container">
            <p className="label">
              {'<Input helperText="Some interesting text" error />'}
            </p>
            <Input helperText="Some interesting text" error />
          </div>
        </div>
        {/* ICONS */}
        <div className="inputs-container">
          <div className="input-container">
            <p className="label">{"<Input startIcon />"}</p>
            <Input startIcon="call" />
          </div>
          <div className="input-container">
            <p className="label">{"<Input endIcon />"}</p>
            <Input endIcon="lock" />
          </div>
        </div>
        {/* VALUE */}
        <div className="inputs-container">
          <div className="input-container">
            <p className="label">{'<Input value="text" />'}</p>
            <Input value="text" />
          </div>
        </div>
        {/* SIZE */}
        <div className="inputs-container">
          <div className="input-container">
            <p className="label">{'<Input size="sm" />'}</p>
            <Input size="sm" />
          </div>
          <div className="input-container">
            <p className="label">{'<Input size="md" />'}</p>
            <Input size="md" />
          </div>
        </div>
        {/* FULLWIDTH */}
        <div  className="inputs-container">
          <div  className="input-container">
            <p className="label">{"<Input fullWidth />"}</p>
            <Input fullWidth />
          </div>
        </div>
        {/* MULTILINE */}
        <div className="inputs-container">
          <div className="input-container">
            <p className="label">{'<Input multiline row="4" />'}</p>
            <Input multiline row={4} />
          </div>
        </div>

        <p className="created-by">
          created by <span>téo goulois</span> - devChallenges.io
        </p>
      </section>
    </div>
  );
}

export default App;
