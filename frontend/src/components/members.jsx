import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import * as MembersPhotos from "../assets/MembersPhoto";

const membersData = [
  {
    id: 1,
    img: MembersPhotos.ShravaniPawar,
    name: "Shravani Pawar",
    info: "Creatives/Social Media",
    insta: "https://www.instagram.com/its_saau_225",
    mail: "srpawar370123@kkwagh.edu.in",
  },
  {
    id: 2,
    img: MembersPhotos.SamyakRaka,
    name: "Samyak Raka",
    info: "Creatives/Social Media",
    insta: "https://www.instagram.com/_samyakraka",
    mail: "rakasamyak@gmail.com",
  },
  {
    id: 3,
    img: MembersPhotos.AtharvaGhayal,
    name: "Atharva Ghayal",
    info: "Treasurer",
    insta: "https://www.instagram.com/the_atharva_ghayal_",
    mail: "atharvaghayal04@gmail.com",
  },
  {
    id: 4,
    img: MembersPhotos.PayalPachorkar,
    name: "Payal Pachorkar",
    info: "Placement Coordinator",
    insta: "https://www.instagram.com/payal_pachorkar_",
    mail: "payalpachorkar0208@gmail.com",
  },
  {
    id: 5,
    img: MembersPhotos.TejasNanoti,
    name: "Tejas Nanoti",
    info: "Alumni Co-ordinator",
    insta: "https://www.instagram.com/tejasssssssss__",
    mail: "tejasnanoti2@gmail.com",
  },
  {
    id: 16,
    img: MembersPhotos.KhushiKshatriya,
    name: "Khushi Kshatriya",
    info: "Core Committee",
    insta: "https://www.instagram.com/Core Committee",
    mail: "kmkshatriya370122@kkwagh.edu.in",
  },
  {
    id: 6,
    img: MembersPhotos.PriyankaKolhe,
    name: "Priyanka Kolhe",
    info: "Core Committee",
    insta: "https://www.instagram.com/priyankakolhe_12",
    mail: "pykolhe370122@kkwagh.edu.in",
  },
  {
    id: 7,
    img: MembersPhotos.PriyankaKshirsagar,
    name: "Priyanka Kshirsagar",
    info: "Core Committee",
    insta: "https://www.instagram.com/priyankakshirsagar514",
    mail: "kshirsagarpriyanka60@gmail.com",
  },
  {
    id: 8,
    img: MembersPhotos.RohitGavale,
    name: "Rohit Gavale",
    info: "Workshop/Expert Talk",
    insta: "https://www.instagram.com/@rohit_gavale04",
    mail: "rohitgavale0045@gmail.com",
  },
  {
    id: 9,
    img: MembersPhotos.SakshiNehe,
    name: "Sakshi Nehe",
    info: "Vice President",
    insta: "https://www.instagram.com/_sakshiiinehe",
    mail: "sakshinehe22@gmail.com",
  },
  {
    id: 10,
    img: MembersPhotos.AdityaJadhav,
    name: "Aditya Jadhav",
    info: "Core Committee",
    insta: "https://www.instagram.com/@jadhavaditya72",
    mail: "aditya29jadhav@gmail.com",
  },
  {
    id: 11,
    img: MembersPhotos.AachalPatani,
    name: "Aachal Patani",
    info: "Core Committee",
    insta: "https://www.instagram.com/aachalpatani",
    mail: "akpatani370123@kkwagh.edu.in",
  },
  {
    id: 12,
    img: MembersPhotos.SiddhiKarwar,
    name: "Siddhi Karwar",
    info: "Creatives/Social Media",
    insta: "https://www.instagram.com/Siddhi_karwar",
    mail: "Snkarwar370122@kkwagh.edu.in",
  },
  {
    id: 13,
    img: MembersPhotos.PranjalWagh,
    name: "Pranjal Wagh",
    info: "Core Committee",
    insta: "https://www.instagram.com/pranjalwagh_31",
    mail: "pmwagh370122@kkwagh.edu.in",
  },
  {
    id: 14,
    img: MembersPhotos.SobiyaShaikh,
    name: "Sobiya Shaikh",
    info: "Secretary",
    insta: "https://www.instagram.com/sobiya_22",
    mail: "sobiyashaikh22@gmail.com",
  },
  {
    id: 15,
    img: MembersPhotos.SnehaMohanty,
    name: "Sneha Mohanty",
    info: "Core Committee",
    insta: "https://www.instagram.com/_snehaaa.m",
    mail: "mohantysneha007@gmail.com",
  },
  {
    id: 17,
    img: MembersPhotos.RuchaMore,
    name: "Rucha More",
    info: "Core Committee",
    insta: "https://www.instagram.com/rucha_5052",
    mail: "rrmore370122@kkwagh.edu.in",
  },
  {
    id: 18,
    img: MembersPhotos.SakshiMalpure,
    name: "Sakshi Malpure",
    info: "Core Committee",
    insta: "https://www.instagram.com/spmalpure011",
    mail: "spmalpure370122@kkwagh.edu.in",
  },
  {
    id: 19,
    img: MembersPhotos.SakshiDhurandhar,
    name: "Sakshi Dhurandhar",
    info: "Workshop/Expert Talk",
    insta: "https://www.instagram.com/sakshi30_05_",
    mail: "sakshidhurandhar30@gmail.com",
  },
  {
    id: 20,
    img: MembersPhotos.VaibhaviDhokale,
    name: "Vaibhavi Dhokale",
    info: "Website/ERP Coordinator",
    insta: "https://www.instagram.com/vaibhavi_d_",
    mail: "veee.038@gmail.com",
  },
  {
    id: 21,
    img: MembersPhotos.AdityaChavan,
    name: "Aditya Chavan",
    info: "Discipline Committee",
    insta: "https://www.instagram.com/@itsadityachavan",
    mail: "adityaachavan1234@gmail.com",
  },
  {
    id: 22,
    img: MembersPhotos.BhagwanSinghChavan,
    name: "Bhagwan Singh Chavan",
    info: "Alumni Co-ordinator",
    insta: "https://www.instagram.com/_the_false_god",
    mail: "bschavan370122@kkwagh.edu.in",
  },
  {
    id: 23,
    img: MembersPhotos.SamruddhiDharne,
    name: "Samruddhi Dharne",
    info: "Core Committee",
    insta: "https://www.instagram.com/Core Committee",
    mail: "spdharne370122@kkwagh.edu.in",
  },
  {
    id: 24,
    img: MembersPhotos.SharvariPawar,
    name: "Sharvari Pawar",
    info: "Discipline Committee",
    insta: "https://www.instagram.com/sharvari4417",
    mail: "sharvarip842@gmail.com",
  },
  {
    id: 25,
    img: MembersPhotos.AnujDhamne,
    name: "Anuj Dhamne",
    info: "Core Committee",
    insta: "https://www.instagram.com/Core Committee",
    mail: "anujdhamne10@gmail.com",
  },
  {
    id: 26,
    img: MembersPhotos.VidhiGujar,
    name: "Vidhi Gujar",
    info: "Secretary",
    insta: "https://www.instagram.com/vidhig_7_",
    mail: "vagujar370122@kkwagh.edu.in",
  },
  {
    id: 27,
    img: MembersPhotos.NishantShelke,
    name: "Nishant Shelke",
    info: "Treasurer",
    insta: "https://www.instagram.com/nish_shelke",
    mail: "nishantshelke62@gmail.com",
  },
  {
    id: 28,
    img: MembersPhotos.PushkarajKhairnar,
    name: "Pushkraj Khairnar",
    info: "Website/ERP Co-ordinator",
    insta: "https://www.instagram.com/Core Committee",
    mail: "pushkrajkhairnar9@gmail.com",
  },
  {
    id: 29,
    img: MembersPhotos.SurajYeola,
    name: "Suraj Yeola",
    info: "President",
    insta: "https://www.instagram.com/surajyeola",
    mail: "syyeola370122@kkwagh.edu.in",
  },
];

const Members = () => {
  const [hoverStates, setHoverStates] = useState(membersData.map(() => false));

  const handleMouseEnter = (index) => {
    setHoverStates((prevStates) => {
      const newState = [...prevStates];
      newState[index] = true;
      return newState;
    });
  };

  const handleMouseLeave = (index) => {
    setHoverStates((prevStates) => {
      const newState = [...prevStates];
      newState[index] = false;
      return newState;
    });
  };

  const settings = {
    infinite: true,

    slidesToShow: 2,
    speed: 2000,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      id="member1"
      className="member1 flex flex-col justify-center items-center relative w-full h-2/3 sm:h-3/4 md:h-lvh overflow-hidden">
      <div className="relative justify-center items-center text-center">
        <a>
          <h2 className="text-4xl md:text-6xl lg:text-9xl font-sans font-light text-indigo-900 ">
            Committee
          </h2>
          <p className="mt-2 text-xl xl:text-2xl font-thin">
            Members of the Debuggers Club 2024-25.
          </p>
        </a>
      </div>
      <div className="relative w-1/2 h-96 sm:h-screen m-4 mt-20 overflow-hidden">
        <Slider {...settings}>
          {membersData.map((memb) => (
            <div key={memb.id} className="mb-14">
              <Card
                name={memb.name}
                img={memb.img}
                info={memb.info}
                insta={memb.insta}
                //linkedin={memb.linkedin}
                mail={memb.mail}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Members;
