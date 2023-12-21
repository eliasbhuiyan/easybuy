import {MdLocalShipping} from 'react-icons/md'
import {TbReload} from 'react-icons/tb'

const AdditionalInfo = () => {
  return (
    <div className='border-y-2 mt-[-6px]'>
        <div className="container">
            <div className="flex justify-between py-3 md:py-7">
                <div>
                    <h2 className='font-dm font-normal text-xl text-secondary text-center'><span className='text-primary font-bold text-2xl block md:inline-block'>2</span> Two years warranty</h2>
                </div>
                <div>
                    <h2 className='font-dm font-normal text-xl text-secondary flex flex-col md:flex-row items-center gap-2'><MdLocalShipping className='text-primary text-2xl'/>Free shipping</h2>
                </div>
                <div>
                    <h2 className='font-dm font-normal text-xl text-secondary flex flex-col md:flex-row items-center gap-2'><TbReload className='text-primary text-2xl'/>Return policy</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdditionalInfo
