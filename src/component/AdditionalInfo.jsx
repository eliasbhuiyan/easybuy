import {MdLocalShipping} from 'react-icons/md'
import {TbReload} from 'react-icons/tb'

const AdditionalInfo = () => {
  return (
    <div className='border-y-2 mt-[-6px]'>
        <div className="container">
            <div className="flex justify-between py-3 md:py-7">
                <div>
                    <h2 className='font-dm font-normal text-sm text-secondary text-center'><span className='text-primary text-xl block md:inline-block'>2</span> Two years warranty</h2>
                </div>
                <div>
                    <h2 className='font-dm font-normal text-sm text-secondary flex flex-col md:flex-row items-center gap-2'><MdLocalShipping className='text-primary text-xl'/>Free shipping</h2>
                </div>
                <div>
                    <h2 className='font-dm font-normal text-sm text-secondary flex flex-col md:flex-row items-center gap-2'><TbReload className='text-primary text-xl'/>Free shipping</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdditionalInfo
