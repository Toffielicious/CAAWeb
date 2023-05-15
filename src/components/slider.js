import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';

const Slider = () => {


  const images = [
    { src: 'https://cdn.discordapp.com/attachments/1028856288509177991/1107301507168219176/CAA_2.PNG', height: '400px'},
    { src: 'https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/329333478_740065220718338_4634636903674661411_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=udZQ-PWEhZoAX_M-WLc&_nc_ht=scontent.fmnl30-1.fna&oh=00_AfBhfNXtVwQ7qhgRnymOA5b9A-pFTkPMUi83TvAYmWxp0w&oe=64664424', height: '400px'},
    { src: 'https://scontent.fmnl30-3.fna.fbcdn.net/v/t39.30808-6/317722517_2792529520891946_4129367611444756148_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=8jf3tc8_rOsAX8PkI2M&_nc_ht=scontent.fmnl30-3.fna&oh=00_AfA4qz03z9sC4GqxL5GQOLySM3f8AZ0SMkVAXk8nomnFMQ&oe=64655DAC', height: '400px'},
    { src: 'https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/298402538_1273531043413542_6912178550025558253_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=q-ZzXVXWaeIAX8Xdvsh&_nc_ht=scontent.fmnl30-1.fna&oh=00_AfAkAUOfNB_akVtG6bCO8H2pkf2gtrN0cO0iO3ojcsZMvQ&oe=646533F9'},
    { src: 'https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/297289189_1273531093413537_7717435962986754557_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=hX_Qg7K5CwwAX_ifKSy&_nc_ht=scontent.fmnl30-2.fna&oh=00_AfDKit-p4QNw4hC_OmGvSSXRqMYi3EVrCHXK_3crVI2AQg&oe=646652C6'},


  ]



  return (
    <div className='' style={{ height: '400px' }} >
      <Carousel className=''  interval={3500} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay >

        {images.map((img, index) => (
          <img key={index} src={img.src} className='sliderSection object-cover' />
        ))}

      </Carousel>
      {/* <div className='show2'>
                <button class="btn bg-black/25 hover:bg-black/50 hover:cursor-pointer absolute top-1/2 left-0 w-100 h-100" onClick={Prev} style={{width:'100px', height:'100px'}}>
                    <i class="fa fa-sharp fa-solid fa-chevron-left pr-2 text-white" style={{fontSize:'36px'}}></i>
                </button>
                <button class="btn bg-black/25 hover:bg-black/50  hover:bg-black/50 absolute top-1/2 right-0 w-100 h-100" onClick={Next} style={{width:'100px', height:'100px'}}>
                <   i class="fa fa-sharp fa-solid fa-chevron-right pl-2 text-white " style={{fontSize:'36px'}}></i>
                </button>
            </div> */}
    </div>

  );

}

export default Slider

