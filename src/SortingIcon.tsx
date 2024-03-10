import { useState } from "react";
import { SortType } from "./Utils/Utils";

interface props {
  sorting?: SortType,
  onClickHandler: Function
}

const SortingIcon: React.FC<props> = ({ sorting = SortType.ASC, onClickHandler }) => {
  const [color1, setColor1] = useState<string>("#DDE3EE");
  const [color2, setColor2] = useState<string>("#DDE3EE");

  return (
    <svg className="cursor-pointer" width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
      let newSortType = sorting; 
      if (sorting === SortType.NO_SORT || sorting === SortType.DEC) {
        setColor1('#6C5CE7')
        setColor2('#DDE3EE')
        newSortType = SortType.ASC   
      } else {
        setColor1('#DDE3EE')
        setColor2('#6C5CE7')
        newSortType = SortType.DEC  
      }
      onClickHandler(newSortType);
    }}>
      <path d="M4.89402 1.11987C5.04415 0.930747 5.33129 0.930747 5.48142 1.11987L10.0635 6.89174C10.2586 7.1375 10.0835 7.4999 9.76976 7.4999H0.605681C0.291896 7.4999 0.11688 7.1375 0.311978 6.89174L4.89402 1.11987Z"
        fill={`${color1}`}
      />
      <path d="M5.48143 16.8799C5.33129 17.069 5.04415 17.069 4.89402 16.8799L0.311979 11.1081C0.116881 10.8623 0.291897 10.4999 0.605682 10.4999L9.76976 10.4999C10.0835 10.4999 10.2586 10.8623 10.0635 11.1081L5.48143 16.8799Z"
        fill={`${color2}`}
      />
    </svg>
  );
};

export default SortingIcon;