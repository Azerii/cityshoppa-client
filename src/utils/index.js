import { setModalData, setModalOpen } from '../redux/actions';
import { store } from '../redux/store';

export const loadModal = async id => {
  const dispatch = store.dispatch;

  if (!id) return;

  const modalData = {
    contentType: 'products',
    id
  };

  dispatch(setModalData(modalData));
  setTimeout(() => {
    dispatch(setModalOpen(true));
  });
};

export const shuffleArray = array => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const getRandomRange = (width, max) => {
  let lower = Math.floor(Math.random() * (max - width));
  let upper = lower + width;

  return {
    lower,
    upper
  };
};
