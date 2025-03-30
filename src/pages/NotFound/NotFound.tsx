import { Link } from 'react-router-dom';
import { cocktails } from '../../App';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <Link to={cocktails[0]}>На главную</Link>
    </div>
  );
};

export default NotFound;
