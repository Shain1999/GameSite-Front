import React, { ChangeEventHandler, MouseEventHandler } from "react";
import "./discoverButton.scss";
export interface IDiscoverButton {
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
}
function DiscoverButton(props: IDiscoverButton) {
  return (
    <button
      className="discoverBtn"
      name="Discover"
      type="submit"
      onClick={props.onClickHandler}
    >
      Discover
    </button>
  );
}

export default DiscoverButton;
