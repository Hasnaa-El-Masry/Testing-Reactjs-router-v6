import { Outlet } from 'react-router-dom';
import Root from '../components/root';

const RootPage = () => {
  return (
    <Root>
      <Outlet/>
    </Root>
  )
}

export default RootPage