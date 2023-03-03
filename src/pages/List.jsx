import React, {useContext, useEffect} from 'react'
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import EditIcon from '@mui/icons-material/Edit';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Typography } from '@mui/material';

import { CarsContext } from '../components/contexts/car.context';

import CarsList from '../components/CarsList';

function CarsListPage() {
  const {cars, fetchCars, deleteCar} = useContext(CarsContext)

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  const deleteHandler = (id) => {
    deleteCar(id);
  };

  return (
    <>
      <Typography variant="h3" component="h2">
        Cars
      </Typography>
      <CarsList cars={cars} deleteHandler={deleteHandler} />
    </>
  )
}

export default CarsListPage;