import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ActionType } from "../../redux/action-type";
import Button from "../UI/Button/Button";
import DiscoverButton from "../UI/DiscoverButton/DiscoverButton";
import { useNavigate } from "react-router-dom";
import "./discover.scss";
import bgImg from "../../assests/img/BG-Img.jpg"
import Title from "../UI/Title/Title";
function Discover() {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState<Object>({});
  const [categoriesCounter, setCategoriesCounter] = useState(0);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    dispatch({ type: ActionType.ChangeBgImg, payload: bgImg });
  }, []);

  const removeKey = (e: any) => {
    setSelectedCategories((current) => {
      // 👇️ create copy of state object
      const copy: any = { ...current };
      // find key by value
      let indexToRemove = Object.values(copy).indexOf(e.target.name);
      let keyName = `catId${indexToRemove + 1}`;

      // 👇️ remove key from object
      delete copy[keyName];

      return copy;
    });
  };

  const onChangeHandlerSelectedCategories = (e: any) => {
    if (e.target.className == `submitBtn`) {
      if (categoriesCounter == 5) {
        alert("5 chosen");
        return;
      }
      e.target.className = `submitBtn selected`;
      e.target.parentElement.className = `discoverBtnDiv selected`;

      setSelectedCategories((prev: any) => ({
        ...prev,
        [`catId${categoriesCounter + 1}`]: e.target.name,
      }));
      setCategoriesCounter((prev) => prev + 1);
    } else {
      e.target.className = `submitBtn`;
      e.target.parentElement.className = `discoverBtnDiv`;
      removeKey(e);
      setCategoriesCounter((prev) => prev - 1);
    }
  };
  useEffect(() => {
    getAllCategories();
  }, []);
  const getAllCategories = async () => {
    try {
      let categories = await axios.get("http://localhost:3001/categories");
      setCategories(categories.data);
      console.log(categories.data);
      
    } catch (error) {
      alert(error);
    }
  };
  const discoverGames = async () => {
    const chosenCategories = Object.values(selectedCategories);

    // let url = `http://localhost:3001/games/discoverByCategories?`;
    let apiUrl =`http://localhost:3001/games/api?`;
    let queryString = `catId1=${chosenCategories[0]}&catId2=${chosenCategories[1]}&catId3=${chosenCategories[2]}&catId4=${chosenCategories[3]}&catId5=${chosenCategories[4]}`;
    try {
      let gamesArray = await axios.get(apiUrl + queryString);
      if (gamesArray.data != null) {
        dispatch({ type: ActionType.DiscoverGames, payload: gamesArray.data });
        navigate("/showGames");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className="discover">
        <Title name="Choose Your Categories"/>
        <div className="grid">
          {categories.map((category: any, idx) => {
            return (
              <Button
                btnValue={category.name}
                key={category.id}
                id={category.id}
                onClickHandler={onChangeHandlerSelectedCategories}
              />
            );
          })}
        </div>
          <div className="sendBtn">
            {categoriesCounter == 5 && (
              <DiscoverButton onClickHandler={discoverGames} />
            )}
          </div>
      </div>
    </>
  );
}

export default Discover;
