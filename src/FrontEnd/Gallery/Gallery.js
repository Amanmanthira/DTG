import React from 'react'

const Gallery = () => {
  return (
    <div>
        <div className="bg-gray-800 mx-auto px-5 py-2 lg:px-32 lg:pt-24">
            <h1 className='font-bold text-2xl text-center text-blue-200'>"Capturing the Spark: A Visual Journey Through Our Impeccable TV Repairs – See the Before, Witness the After!"</h1>
  <br/>
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap">
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center border-2 border-blue-500"
          src="https://lh3.googleusercontent.com/p/AF1QipO03sgn53QiQ7ZrI62M3sBcoOEsQ2LBihewgltT=s1360-w1360-h1020" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center border-2 border-blue-500"
          src="./image/g1.jpg" />
      </div>
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center border-2 border-blue-500"
          src="./image/g2.jpg" />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center border-2 border-blue-500"
          src="./image/g3.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center border-2 border-blue-500"
          src="./image/g4.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center border-2 border-blue-500"
          src="./image/g5.jpg" />
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Gallery