import { BsArrowLeft} from 'react-icons/bs'

const SamplePrevArrow = (props) => {
    const { className, onClick,hover } = props;
    return (
      <span
      className={hover? "bg-third p-2 lg:p-6 rounded-full absolute top-[20%] md:top-[35%] left-0 z-30 cursor-pointer transition-all visible":"bg-third p-2 lg:p-6 rounded-full absolute top-[60%] invisible left-0 cursor-pointer"}
        onClick={onClick}
      ><BsArrowLeft className='text-white'/></span>
    );
}

export default SamplePrevArrow
