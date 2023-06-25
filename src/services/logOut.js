import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../store/slices/user.slice';
import { clearBag } from '../store/slices/bag.slice';
import { clearCategory } from '../store/slices/category.slice';
import { clearFavorites } from '../store/slices/favorites.slice';
import { clearSearchResult } from '../store/slices/search.slice';

export const useLogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log('wtf');

  dispatch(removeUser());
  dispatch(clearBag());
  dispatch(clearCategory());
  dispatch(clearFavorites());
  dispatch(clearSearchResult());
  navigate('/register');
};
