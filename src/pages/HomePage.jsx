import React from "react";
import { useSelector, useDispatch } from "react-redux";
import HobbyList from "../components/Home/HobbyList";
import { addNewHobby, setActiveHobby } from "../actions/hobby.action";
import { genKeys } from "../utils/tools";

HomePage.propTypes = {

};

function HomePage(props) {
  const hobbyList = useSelector(state => state.hobby.list);
  const activeId = useSelector(state => state.hobby.activeId);

  // const hobbyState = useSelector(state => ({
  //   list: state.hobby.list,
  //   activeId: state.hobby.activeId,
  // }), shallowEqual);

  const dispatch = useDispatch();

  const handleAddHobbyClick = () => { 
    // Random a hobby object: id + title
    const newHobby = {
      id: genKeys(),
      title: `Title ${genKeys()}`,
    }
    // Dispatch action to add a new hobby to redux store
    const action = addNewHobby(newHobby);
    dispatch(action);
  }

  const handleHobbyOnClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  }

  return (
    <div className="home-page">
      <h1>REDUX HOOKS - HOME PAGES</h1>
      <button onClick={handleAddHobbyClick}>Random Hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyOnClick}
      />
    </div>
  )
}

export default HomePage;
