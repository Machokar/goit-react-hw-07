import './App.css';
import { ContactList } from './components/Contactlist/Contactlist';
import { Searchbox } from './components/Searchbox/Searchbox';
import { Contactform } from './components/Contactform/Contactform';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/operation';
import { selectError, selectLoading } from './redux/selectors';
import { Loading } from './components/Loader/Loading';
import { Errormessage } from './components/Error/Errormessage';

export const App = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      {loading && <Loading />}
      {error && <Errormessage />}
      <Contactform />
      <Searchbox />
      <ContactList />
    </div>
  );
};
