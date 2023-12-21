import Breadcrumd from "../component/Breadcrumd"
export const About = () => {
  return (
    <section>
        <div className='container'>
          <Breadcrumd/>
          <div className='flex gap-5 md:gap-10'>
            <div>
                <img className="w-full" src="images/aboutOne.png"/>
            </div>
            <div>
                <img className="w-full" src="images/aboutTwo.png"/>
            </div>
          </div>
           <h4 className='py-14 md:py-32 font-dm font-normal text-lg md:text-4xl text-primary'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h4>
          <div className='flex flex-col md:flex-row gap-10'>
            <div className='w-full md:w-1/3'>
                <h3 className='font-dm font-bold text-lg md:text-4xl text-primary mb-3'>Our Vision</h3>
                <p className='font-dm font-normal text-base text-secondary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='w-full md:w-1/3'>
                <h3 className='font-dm font-bold text-lg md:text-4xl text-primary mb-3'>Our Story</h3>
                <p className='font-dm font-normal text-base text-secondary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='w-full md:w-1/3'>
                <h3 className='font-dm font-bold text-lg md:text-4xl text-primary mb-3'>Our Brands</h3>
                <p className='font-dm font-normal text-base text-secondary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
        </div>
    </section>
    )
}