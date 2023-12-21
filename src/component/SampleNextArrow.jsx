import { BsArrowRight} from 'react-icons/bs'
const SampleNextArrow = (props) => {
    const { className, onClick,hover } = props;
    return (
      <span
      className={hover? "bg-third p-2 lg:p-6 rounded-full absolute top-[20%] md:top-[35%] right-0 z-30 cursor-pointer transition-all visible":"bg-third p-2 lg:p-6 rounded-full absolute top-[60%] invisible right-0 cursor-pointer"}
        onClick={onClick}
      ><BsArrowRight className='text-white'/></span>
    );
}

export default SampleNextArrow
