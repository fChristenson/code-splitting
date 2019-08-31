const React = require("react");
const ReactDOM = require("react-dom");
const { BrowserRouter, Route, Link } = require("react-router-dom");
const Loadable = require("react-loadable");

const wait = val =>
  new Promise(res => {
    setTimeout(() => res(val), 1000);
  });

const Back = Loadable({
  loader: () =>
    import(/* webpackChunkName: "back" */ "./back").then(val =>
      wait(val.default)
    ),
  loading: () => <p>Loading...</p>
});

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <Link to="/foo">GoToFoo</Link>} />
      <Route path="/foo" component={Back} />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
