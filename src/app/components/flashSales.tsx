/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


import Image from "next/image"

function FlashSales(){
    return (
        <main>
         <div className="w-full flex justify-center items-center mt-10 mb-1 ">
            {/* container */}
            <div className="w-[80%]">
                {/* container boxes */}
                <div className="flex flex-col">
                    <h3 className="text-red-500 font-bold border-l-8  border-red-400 pl-3 ml-1">Today&apos;s</h3>
                    <div className="flex ">
                    <h1 className="text-gray-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-4">Flash Sales</h1> 
                    <Image src={"/images/flash/freesh.png"}
                    width={200}
                    height={200}
                    className="ml-10 sm:hidden md:block"
                     alt="flash sales"></Image> </div>
                </div>
                <div className="flex sm:flex-col md:flex-row lg:flex-row justify-between mt-5 sm:flex-nowrap md:flex-wrap lg:flex-nowrap">
                    {/* box1 */}
                    <div>
                    <div className="group shadow-md bg-neutral-100 sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
                  {/* Image */}
                  <Image
                    src={"/images/flash/gaming.png"}
                    width={150}
                    height={100}
                    alt="game-images"
                  />
            <span className='bg-red-500 px-2 rounded-md text-white  absolute top-0 left-0'>-40%</span>
            <span className='absolute top-1 right-1 text-red rounded-full'><FontAwesomeIcon icon={faHeart} className='text-xl  ' /></span>

                  {/* Add to Cart */}
                  <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to Cart
                  </button>
                 </div>

                    <h1 className="font-bold font-sans pt-2 ">HAVIT HV-G92 Gamepad</h1>
                    <span className="text-red-500 font-bold">$120</span> <span className="text-gray-400 font-bold line-through ml-2">$160</span>
                    
                    <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
                      <span className='text-gray-400'>(88)</span>

                     </div>
                    </div>
                    {/* box2 */}
                    <div>
                    <div className="group bg-neutral-100 shadow-md sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
                  {/* Image */}
                  <Image
                    src={"/images/flash/keyboard.png"}
                    width={150}
                    height={100}
                    alt="game-images"
                  />
            <span className='bg-red-500 px-2 rounded-md text-white  absolute top-0 left-0'>-25%</span>
            <span className='absolute top-1 right-1 text-red rounded-full'><FontAwesomeIcon icon={faHeart} className='text-xl  ' /></span>

                  {/* Add to Cart */}
                  <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to Cart
                  </button>
                 </div>
                    <h1 className="font-bold font-sans pt-2 ">AK-900 Wired Keyboard</h1>
                    <span className="text-red-500 font-bold">$920</span> <span className="text-gray-400 font-bold line-through ml-2">$1160</span>
                    <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
                      <span className='text-gray-400'>(90)</span>

                     </div>
                    </div>
                    {/* box 3 */}
                    <div>
                    <div  className=" group relative shadow-md bg-neutral-100 cursor-pointer sm:w-full md:w-[300px] lg:w-[220px]  h-[180px] flex justify-center items-center"> 
                        <Image src={"/images/flash/lcd.png"}
                        width={150} height={100} 
                        alt="game-images">
                        </Image>
                        <span className='bg-red-500 px-2 rounded-md text-white  absolute top-0 left-0'>-32%</span>
            <span className='absolute top-1 right-1 text-red rounded-full'><FontAwesomeIcon icon={faHeart} className='text-xl  ' /></span>

                  {/* Add to Cart */}
                  <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to Cart
                  </button>
                    </div>
                    <h1 className="font-bold font-sans pt-2">IPS LCD Gaming Monitor</h1>
                    <span className="text-red-500 font-bold">$1500</span> <span className="text-gray-400 font-bold line-through ml-2">$2240</span>
                    <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
                      <span className='text-gray-400'>(95)</span>

                     </div>
                    </div>
                    {/* box4 */}
                   <div>
                   <div className="group relative shadow-md bg-neutral-100 cursor-pointer sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center"> 
                        <Image src={"/images/flash/chair.png"}
                        width={150} height={100} 
                        alt="game-images">
                        </Image>
                        <span className='bg-red-500 px-2  rounded-md text-white  absolute top-0 left-0'>-40%</span>
            <span className='absolute top-1 right-1 text-red rounded-full'><FontAwesomeIcon icon={faHeart} className='text-xl  ' /></span>

                  {/* Add to Cart */}
                  <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to Cart
                  </button>
                    </div>
                    <h1 className="font-bold font-sans pt-2">S-Series Comfort Chair </h1>
                    <span className="text-red-500 font-bold">$320</span> <span className="text-gray-400 font-bold line-through ml-2">$630</span>
                    <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 ">
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
                      <span className='text-gray-400'>(99)</span>
                     </div>
                   </div>
                   {/* box complete */}
                   
                </div>
            </div>
         </div>
        <div className='w-full flex justify-center items-center'>
        <div className='w-[80%] flex justify-center  border-b-2 border-neutral-100 pb-10'>
        <button className='bg-red-500 hover:bg-red-600 py-2 px-5 text-white rounded-sm  '>View All Products</button>
        </div>
        </div>
    
         </main>
    )
}
export default FlashSales;