// import css from './CamperPage.module.css';
import AppBar from '../../components/AppBar/AppBar.jsx';
import { useDispatch, useSelector } from 'react-redux';
import CamperItem from '../../components/CamperItem/CamperItem.jsx';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchCamperById } from '../../redux/campers/operations.js';
import { selectCamperById } from '../../redux/campers/selectors.js';

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  const camper = useSelector(selectCamperById);

  return (
    <>
      <AppBar />
      <CamperItem />
    </>
  );
};

export default CamperPage;
