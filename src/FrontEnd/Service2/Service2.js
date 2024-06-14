import React from 'react'
import NavBar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Service2 = () => {
  return (
    <div>
        <NavBar/>
        <div className="bg-gray-900 py-28">
    <div className="container mx-auto px-4">
    <div className="floating-text2">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Services </h2>
    </div>
        <hr className='text-6xl'></hr>
        <br/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-300 rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="https://preview.redd.it/7omvghx1t5171.jpg?width=640&crop=smart&auto=webp&s=0b85f1798316b694fc52883cfdb5bf8847ddd2c6" alt="Product"/>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View more</button>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">Old TV Repair</h3>
                <p className="text-gray-500 text-sm mt-2">Is your vintage TV acting up? Trust our seasoned technicians for top-notch old TV repair services. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Whether it's a flickering screen, poor audio, or other issues, we specialize in restoring the charm of your classic television sets. With years of experience, we bring expert solutions to address any malfunction. Don't let time dim the glow of your cherished TV – reach out to us for reliable and specialized old TV repair services today.</p>
                <div className="flex items-center justify-between mt-4">
                </div>
            </div>
            <div className="bg-gray-300 rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="https://img.freepik.com/free-photo/man-watching-his-favorite-movie-tv_23-2149047399.jpg?w=996&t=st=1701581967~exp=1701582567~hmac=16a8d062be7e42e08cb278f7e5b8e4161ab619eadd74b792156062bae03d2fe5" alt="Product"/>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View more</button>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">LCD/LED TV Repair </h3>
                <p className="text-gray-500 text-sm mt-2">Facing issues with your LCD or LED TV? Trust our expert technicians for reliable repair services. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Whether it's a blank screen, distorted images, or sound problems, we diagnose and fix issues promptly. Our team uses advanced technology to ensure high-quality repairs, restoring your TV to optimal performance. Don't let technical glitches disrupt your entertainment – contact us for professional LCD/LED TV repair today.</p>

                <div className="flex items-center justify-between mt-4">
                </div>
            </div>
            <div className="bg-gray-300 rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="https://img.freepik.com/free-photo/checking-current-laptop-circuit-board_1098-13759.jpg?size=626&ext=jpg&ga=GA1.1.296656087.1697620790&semt=ais" alt="Product"/>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View more</button>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">Electric Devices Repair</h3>
                <p className="text-gray-500 text-sm mt-2">Encountering issues with your electronic devices? Our skilled technicians are here to provide comprehensive electric devices repair services. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Whether it's a malfunctioning smartphone, tablet, laptop, or any other electronic gadget, we have the expertise to diagnose and fix the problem efficiently. Our commitment is to ensure your devices are back to optimal functionality. Trust us for reliable and prompt electric devices repair – because your gadgets deserve the best care. Contact us today for expert solutions to your electronic woes.</p>
                <div className="flex items-center justify-between mt-4">
                </div>
            </div>
        </div>

    </div>
</div>
<Footer/>
    </div>
  )
}

export default Service2