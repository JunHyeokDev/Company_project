import React from 'react';
import img from '../images/president_pic.jpeg';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <>
      <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about'>
        <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
          <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
            <img alt="card img" className="rounded-lg shadow-xl" src={img} />
          </div>
          <div className="flex-col my-4 lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
            <h3 className="text-4xl text-blue-900 font-bold mb-6 border-b-2 border-blue-900 pb-2">인사 말씀</h3>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                우리나라 인삼이 세계적으로 약성이 특효하듯이, <span className="font-semibold">약쑥 또한 약성이 신비하도록 특효</span>합니다.
              </p>
              <p>
                <span className="text-green-600 text-xl font-bold mx-1  decoration-green-500 decoration-2">약쑥</span>
                은 아주 옛날부터 현재에 이르기까지 민간요법으로, 또는 치유목적으로 다방면으로 활용되어지고 있습니다.
              </p>
              <p>
                이와 같이 우리나라만의 <span className="text-green-600 text-xl font-bold mx-1  decoration-green-500 decoration-2">천혜의 신비한 약쑥</span>
                을 활용한 제품 개발에만 약 <span className="text-black-600 text-xl font-bold mx-1">40여년 동안 장인정신</span>
                으로 <span className="text-black-600 text-xl font-bold mx-1  decoration-black-500 decoration-2">개발 경륜의 결정체</span>로써 우리 인체의 배설과 생식기관의 건강생활을 위한 절대적인 필수품으로 자기매길 될 것으로 에상되는
                <span className="text-black-600 text-xl font-bold mx-1">세계 최초 특허상품인</span>
                <span className="text-green-600 text-xl font-bold mx-1  decoration-green-500 decoration-2">약쑥훈증 기능성 비데기</span>과
                <span className="text-green-600 text-xl font-bold mx-1  decoration-green-500 decoration-2">약쑥 홈 사우나기</span>를
                생산하고자 합니다.
              </p>

              <p>
                이는 우리 인체의 <span className="font-semibold">배설과 생식기관의 건강생활을 위한 절대적인 기능성 건강생활 필수품</span>으로써
                <span className="text-red-600 font-semibold"> 세계 시장을 점유하고, 세계 제일</span> 이라는 찬사를 받고 싶은 소망을 이루고자 합니다.
              </p>
            </div>
            <br>
            </br>
            <p className='text-xl font-semibold text-blue-900 text-right mt-8'>
              대표이사 <span className="border-blue-900">공병성</span>
            </p>
          </div>
        </div>
      </div>        </>
  )
}

export default Intro;