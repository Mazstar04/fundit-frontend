export default function TableStatusComponent(props: {
  status: string;
  count: number;
  color: string;
  isActive?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      className=" flex items-center gap-1 bg-white py-3 px-6 pr-12 rounded-tl-3xl cursor-pointer "
      style={{
        clipPath: `polygon(0 0, 71% 0, 100% 100%, 0% 100%)`,
        backgroundColor: props.isActive ? 'white' : '#DFE5EF',
        border: props.isActive ? '.3px solid #DFE5EF' : '.3px solid #738599',
      }}
      onClick={props.onClick}
    >
      <span className="text-xs">{props.status}</span>
      <div
        className=" text-white  w-4 h-4 rounded-full flex justify-center items-center text-[10px]"
        style={{
          backgroundColor: props.color,
        }}
      >
        {props.count}
      </div>
    </div>
  );
}
