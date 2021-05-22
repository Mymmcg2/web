import React from 'react';
import './App.css';
import Navbar from './์Component/Navbar/Navbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import BisectionMethod from './์Component/ฺBisection/BisectionMethod';
import falseposition from './์Component/FalsePosition/falseposition';
import onepoint from './์Component/onepoint/onepoint';
import NewtonRaphson from './์Component/NewtonRapson/NewtonRapson';
import SecantMethod from './์Component/SecantMethod/SecantMethod';
import CramerRule from './์Component/CramerRule/CramerRule';
import GaussElimination from './์Component/GaussElimination/GaussElimination';
import GaussJordan from './์Component/GaussJordan/GaussJordanMethod';
import LuDecomposition from './์Component/LU_Decomposition/LuDecomMethod';
import JacobiMethod from './์Component/Jacobi/JacobiMethod';
import GaussSeidel from './์Component/GaussSeidel/Gauss_Seidel_Method';
import ConjugateGradient from './์Component/Conjugate/ConjugateGradient';
import LagrangeMethod from './์Component/Lagrange/LagrangeMethod';
import Linear from './์Component/Linear/LinerRegression';
import NewtonDivide from './์Component/NewtonDivide/NewtonDivide';
import Cubic_spline from './์Component/Spline/Spline';
import Polynomial from './์Component/Polynomial/Polynomial';
import Home from './์Component/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/bisection' exact component={BisectionMethod} />
        <Route path='/falseposition' exact component={falseposition} />
        <Route path='/onepoint' exact component={onepoint} />
        <Route path='/newtonrapson' exact component={NewtonRaphson} />
        <Route path='/secantmethod' exact component={SecantMethod} />
        <Route path='/Cramer' exact component={CramerRule} />
        <Route path='/GaussElimination' exact component={GaussElimination} />
        <Route path='/GaussJordan' exact component={GaussJordan} />
        <Route path='/LU' exact component={LuDecomposition} />
        <Route path='/JacobiIteration' exact component={JacobiMethod} />
        <Route path='/GaussSeidel' exact component={GaussSeidel} />
        <Route path='/ConjugateGradient' exact component={ConjugateGradient} />
        <Route path='/lagrange' exact component={LagrangeMethod} />
        <Route path='/LinearRegression' exact component={Linear} />
        <Route path='/newtondivide' exact component={NewtonDivide} />
        <Route path='/spline' exact component={Cubic_spline} />
        <Route path='/Polynomial' exact component={Polynomial} />
      </Switch>
    </Router>
  );
}

export default App;
