import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getPokemonTypes, createOnePokemon } from '../store/pokemon';
import { createOneClass } from '../../store/classes';
import { useHistory } from 'react-router-dom';

const CreateClassForm = () => {
//   const pokeTypes = useSelector(state => state.pokemon.types);
  const dispatch = useDispatch();
  const history = useHistory();
//   const [no, setNo] = useState(1);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
//   const [userId, setUserId] = useState('');
  const [requiredTime, setRequiredTime] = useState('');
  const [price, setPrice] = useState('');
  const [availableTimes, setAvailableTimes] = useState('');
  const [videoLink, setVideoLink] = useState('');

//   const updateNo = (e) => setNo(e.target.value);
  const updateTitle = (e) => setTitle(e.target.value);
  const updateBody = (e) => setBody(e.target.value);
//   const updateUserId = (e) => setUserId(e.target.value);
  const updateRequiredTime = (e) => setRequiredTime(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
  const updateAvailableTimes = (e) => setAvailableTimes(e.target.value);
  const updateVideoLink = (e) => setVideoLink(e.target.value);
  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser.id

//   useEffect(() => {
//     dispatch(getPokemonTypes());
//   }, [dispatch]);

//   useEffect(() => {
//     if (pokeTypes.length && !type) {
//       setType(pokeTypes[0]);
//     }
//   }, [pokeTypes, type]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title,
      body,
      userId,
      requiredTime,
      price,
      availableTimes,
      videoLink
    };

    let createdClass = await dispatch(createOneClass(payload));
    if (createdClass) {
      history.push(`/classes`);
    //   hideForm();
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    // hideForm();
  };

  return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          min="3"
          max="50"
          required
          value={title}
          onChange={updateTitle} />
        <input
          type="text"
          placeholder="Description"
          min="5"
          max="300"
          required
          value={body}
          onChange={updateBody} />
        <input
          type="hidden"
          value={userId} />
        <input
          type="integer"
          placeholder="Required Time"
          value={requiredTime}
          onChange={updateRequiredTime} />
        <input
          type="text"
          placeholder="Available times"
          value={availableTimes}
          onChange={updateAvailableTimes} />
        <input
          type="integer"
          placeholder="Price in $"
          value={price}
          onChange={updatePrice} />
        <input
          type="text"
          placeholder="Video Link"
          value={videoLink}
          onChange={updateVideoLink} />
        <button type="submit">Create New Class</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
  );
};

export default CreateClassForm;
