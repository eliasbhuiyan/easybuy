import {IoIosArrowForward} from 'react-icons/io'
import { Link } from 'react-router-dom';
const Breadcrumd = ({space}) => {
  
  let name = window.window.location.pathname.split("/")[1].slice()
  const str = name;
  const index = str.indexOf(`${space}`);
  const padMiddle = str.slice(0, index) + ' '.repeat(3) + str.slice(index);

  return (
    <div className='my-12 md:my-32'>
       <h1 className='mb-3 font-dm font-bold text-5xl text-primary capitalize'>{space ?padMiddle:name }</h1>
        <p className='flex items-center font-dm font-norma text-xl text-secondary capitalize'><Link to="/">Home</Link> <IoIosArrowForward/> {space ?padMiddle:name }</p>
    </div>
  )
}

export default Breadcrumd