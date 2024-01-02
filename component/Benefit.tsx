import styles from "@/styles";
import React from "react";
import Image from "next/image";


const Benefit = () => {
  return (
    <div className={`${styles.innerWidth} bg-gray-200`}>
      <div className="px-6 lg:px-12 py-6 lg:py-10">
        <h2 className={`${styles.h2Style} text-center text-green-500 lg:text-3xl text-xl font-bold`}>
          Benefits
        </h2>
        <h5 className={`${styles.h5Style} text-center text-lg lg:text-xl`}>
          Why Choose Our Sustainable Marketplace?
        </h5>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly p-6">
          {/* Benefit 1 */}
          <div className="flex items-center justify-center flex-col max-w-[300px] mb-4 lg:mb-8 lg:mr-4 bg-gray-200 rounded-lg p-5 shadow-lg transition duration-300 hover:bg-gray-300">
            <div className="max-w-300px h-auto">
              <Image src="/benefit1.png" width={200} height={100} alt="Wide Selection" />
            </div>

            <h5 className={`${styles.h5Style} mt-6 text-l lg:text-xl font-bold text-green-500`}>Wide Selection</h5>
            <p className={`${styles.pStyle} text-center text-sm lg:text-base text-gray-700`}>
              Explore a diverse range of eco-friendly products, carefully
              curated to suit your sustainable lifestyle.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="flex items-center justify-center flex-col max-w-[300px] mb-4 lg:mb-8 lg:mr-4 bg-gray-200 rounded-lg p-5 shadow-lg transition duration-300 hover:bg-gray-300">
            <div>
              <Image src="/benefit2.png" width={200} height={200} alt="High Quality" />
            </div>

            <h5 className={`${styles.h5Style} mt-6 text-l lg:text-xl font-bold text-green-500`}>High Quality</h5>
            <p className={`${styles.pStyle} text-center text-sm lg:text-base text-gray-700`}>
              Our marketplace is committed to providing you with products of the highest quality.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="flex items-center justify-center flex-col max-w-[300px] mb-4 lg:mb-8 lg:mr-4 bg-gray-200 rounded-lg p-5 shadow-lg transition duration-300 hover:bg-gray-300">
            <div>
              <Image src="/benefit3.png" width={200} height={200} alt="Eco-friendly Practices" />
            </div>

            <h5 className={`${styles.h5Style} mt-6 text-l lg:text-xl font-bold text-green-500`}>Eco-friendly</h5>
            <p className={`${styles.pStyle} text-center text-sm lg:text-base text-gray-700`}>
              Choose with confidence, knowing that each product is sourced and produced with the environment in mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;


// const Benefit = () => {
//   return (
//     <div className={`${styles.innerWidth} bg-gray-200`}>
//       <div className="px-12 py-6">
//         <h2
//           className={`${styles.h2Style} text-center text-green-400 lg:text-[38px] text-[28px] `}
//         >
//           Benefits
//         </h2>
//         <h5 className={`${styles.h5Style} text-center`}>
//           Why Choose Our Sustainable Marketplace?
//         </h5>

//         <div className='flex flex-col lg:flex-row justify-evenly'>
//           <div className="flex items-center justify-center flex-col max-w-[1000px]">
//             <div>
//               <Image src="/show3.webp" width={200} height={200} alt="" />
//             </div>

//             <h5 className={`${styles.h5Style}`}>Wide Selection</h5>
//             <p className={`${styles.pStyle} max-w-[700px]`}>
//               Explore a diverse range of eco-friendly products, carefully
//               curated to suit your sustainable lifestyle. From clothing to home
//               goods, we offer a wide selection to cater to every need.
//             </p>
//           </div>
//           <div>
//             <div>
//               <Image src="/show2.webp" width={200} height={200} alt="" />
//             </div>

//             <h5 className={`${styles.h5Style}`}>Wide Selection</h5>
//             <p className={`${styles.pStyle}`}>
//               Explore a diverse range of eco-friendly products, carefully
//               curated to suit your sustainable lifestyle. From clothing to home
//               goods, we offer a wide selection to cater to every need.
//             </p>
//           </div>
//           <div>
//             <div>
//               <Image src="/show3.webp" width={200} height={200} alt="" />
//             </div>

//             <h5 className={`${styles.h5Style}`}>Wide Selection</h5>
//             <p className={`${styles.pStyle}`}>
//               Explore a diverse range of eco-friendly products, carefully
//               curated to suit your sustainable lifestyle. From clothing to home
//               goods, we offer a wide selection to cater to every need.
//             </p>
//           </div>
//           <div></div>
//           <div></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Benefit;
