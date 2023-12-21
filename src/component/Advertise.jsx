import { Link } from 'react-router-dom'
const Advertise = () => {
  return (
    <div>
       <div className="container">
            <div className="flex gap-x-5 md:gap-x-10 py-14 md:py-32">
                <div className='w-1/2'>
                    <Link to="#">
                     <img className="w-full" src={"images/advertise-1.png"}/>
                    </Link>
                </div>
                <div className='w-1/2 flex flex-col justify-between'>
                    <Link to="#">
                        <img className="w-full" src={"images/advertise-2.png"}/>
                    </Link>
                    <Link to="#">
                        <img className="w-full" src={"images/advertise-2.png"}/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Advertise
