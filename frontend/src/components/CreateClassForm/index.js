import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOneClass } from '../../store/classes';
import { useHistory } from 'react-router-dom';
import './CreateClassForm.css'

const CreateClassForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
//   const [userId, setUserId] = useState('');
  const [requiredTime, setRequiredTime] = useState('');
  const [price, setPrice] = useState('');
  const [availableTimes, setAvailableTimes] = useState('');
  const [videoLink, setVideoLink] = useState('');

  const updateTitle = (e) => setTitle(e.target.value);
  const updateBody = (e) => setBody(e.target.value);
//   const updateUserId = (e) => setUserId(e.target.value);
  const updateRequiredTime = (e) => setRequiredTime(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
  const updateAvailableTimes = (e) => setAvailableTimes(e.target.value);
  const updateVideoLink = (e) => setVideoLink(e.target.value);
  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser.id

  // console.log("7887878787878787877878")


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
    <div id='classFormHolder'>
      <form onSubmit={handleSubmit} id="classForm">
        <h3 id="createClassTitle">Create a Class</h3>
        <input
          type="text"
          placeholder="Title"
          min="3"
          max="50"
          required
          value={title}
          onChange={updateTitle}
          className="classInput" />
        <input
          type="text"
          placeholder="Description"
          min="5"
          max="300"
          required
          value={body}
          onChange={updateBody}
          className="classInput"
          id='description' />
        <input
          type="hidden"
          value={userId} />
        <input
          type="integer"
          placeholder="Required Time (minutes)"
          value={requiredTime}
          onChange={updateRequiredTime}
          className="classInput" />
        <input
          type="text"
          placeholder="Available times"
          value={availableTimes}
          onChange={updateAvailableTimes}
          className="classInput" />
        <input
          type="integer"
          placeholder="Price in $"
          value={price}
          onChange={updatePrice}
          className="classInput" />
        <input
          type="text"
          placeholder="Video Link"
          value={videoLink}
          onChange={updateVideoLink}
          className="classInput" />
        <button type="submit" id='submitNewClass'>Create New Class</button>
        <button type="button" id="cancelClass" onClick={handleCancelClick}>Cancel</button>
      </form>
    </div>
  );
};

export default CreateClassForm;
