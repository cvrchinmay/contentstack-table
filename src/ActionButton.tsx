
interface props {
  isClicked: boolean;
  onClickHandler: Function;
}
const ActionButton: React.FC<props> = ({ isClicked = false, onClickHandler }) => {
  const size = isClicked ? 40 : 48;
  return (
    <svg className={`flex ${isClicked ? "p-2 ml-4" : "p-1 ml-5" }  text-center cursor-pointer`} width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg"
      onClick={() => {
        onClickHandler();
      }}>
      <path d="M2 3.25C2.69036 3.25 3.25 2.69036 3.25 2C3.25 1.30964 2.69036 0.75 2 0.75C1.30964 0.75 0.75 1.30964 0.75 2C0.75 2.69036 1.30964 3.25 2 3.25Z" fill="#475161"/>
      <path d="M2 11.25C2.69036 11.25 3.25 10.6904 3.25 10C3.25 9.30964 2.69036 8.75 2 8.75C1.30964 8.75 0.75 9.30964 0.75 10C0.75 10.6904 1.30964 11.25 2 11.25Z" fill="#475161"/>
      <path d="M2 19.25C2.69036 19.25 3.25 18.6904 3.25 18C3.25 17.3096 2.69036 16.75 2 16.75C1.30964 16.75 0.75 17.3096 0.75 18C0.75 18.6904 1.30964 19.25 2 19.25Z" fill="#475161"/>
    </svg>
  );
};

export default ActionButton;


