import { Switch, Route } from 'react-router-dom';
// Pages
import HomePage from 'src/pages/HomePage';
import LabPage from 'src/pages/LabPage';
import NotFound from 'src/pages/NotFound';
// hook
import useWebAccessibility from 'src/lib/hooks/useWebAccessibility';

const App = () => {
  const isMouseDown = useWebAccessibility();

  return (
    <div className={isMouseDown ? 'mousedown' : ''}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/lab" component={LabPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
