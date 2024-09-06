import React from 'react';
import img from '../images/web.svg';
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';
import productImage from '../images/product-image.png';
import productEffect from '../images/effect_of_product.png';

import saunaImage1 from '../images/sauna-image-1.png';
import saunaImage2 from '../images/sauna-image-2.png';
import saunaImage3 from '../images/sauna-image-3.png';
import saunaImage4 from '../images/sauna-image-4.png';

import ProductComparisonTable from './ProductComparisonTable';

const emphasizeText = (text) => {
    const wordsToEmphasize = [
        '대중목욕탕 기피현상', '편리한 시간대', '간편하고 위생적으로, 안락하게',
        '시너지 효과', '농가소득 배가', '대중 목욕시설 기피 해소', '긴요한 제품',
        '세계 최초 개발된 제품', '홈 쇼핑에 기획상품으로 시판', '광고의 효과를 도모',
        '온라인과 판촉을 병행', '사회적 기업', '별도의 영업계획', '적극적으로 홍보',
        '시장을 점유', '해외 시장을 개척'
    ];

    return text.split(' ').map((word, index) => {
        if (wordsToEmphasize.some(phrase => word.includes(phrase))) {
            return <span key={index} className="text-black-600 font-semibold">{word} </span>;
        }
        return word + ' ';
    });
};

const Services = () => {
    return (
        <div id="services" className="bg-gray-100 py-12">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-green-900 uppercase font-bold">제품 소개</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-green-900'></div>
                    </div>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-green-900">약쑥 좌훈 겸용 비데기</h2>

                    <div className="bg-white rounded-lg shadow-xl p-8 flex flex-col md:flex-row">
                        <div className="md:w-1/2 pr-8">
                            <div className="w-full h-80 mb-4 overflow-hidden">
                                <img src={productImage} alt="약쑥 좌훈 겸용 비데기" className="w-full h-full object-contain" />
                            </div>
                            <div className="w-full h-80 overflow-hidden">
                                <img src={productEffect} alt="약쑥 좌훈 겸용 비데기" className="w-full h-full object-contain" />
                            </div>
                        </div>
                        <div className="md:w-1/2 mt-6 md:mt-0">
                            <h3 className="text-2xl font-bold text-green-800 mb-4">다조리 (多助利, 건강365) - 약쑥 좌훈 겸용 비데기</h3>
                            <p className="text-lg text-gray-700 mb-4">
                                전 세계적으로 현존 비데기능에는 물로 세척하는 기능만이 있고 좌훈기능은 없습니다.
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                본 제품은 국내외 특허등록에 의한 한방좌훈과 일반 비데기능이 겸비된 신개념 기능성 대기로서 다음과 같은 효과를 일괄적으로 만끽할 수 있습니다:
                            </p>
                            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                                <li>여성들의 위생기구, 냉 대하, 질염, 가려움증, 산후조리, 요실금 기타 말 못할 고민해결에 큰 도움을 주며.</li>
                                <li>남 여 공히 항문질환 예방 및 치유.</li>
                                <li>대부분 노년남성들의 고민인 전립선의 탁월한 효과와 남성 건강욕구에도 아주 좋다.</li>
                                <li>회음부에 한방 온열효과로 괴변은 물론 경쾌한 하루를 시작할 수 있다.</li>
                            </ul>
                            <p className="text-lg text-gray-700 mb-4">
                                우리나라 인삼이 세계적으로 효능이 특효하듯이 우리나라의 서해 해안가에서 자생하는 약쑥을 비롯하여 효능이 특효한 식물이 많습니다.
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                이제 우리나라만의 고유의 건강 생활가전 제품으로서 글로벌적인 상품으로 발전시켜 인류 건강사회를 이룩하는데 미력하나마 도움을 기하고자 합니다.
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                약쑥과 관련된 업종에 장인정신으로 약 40여년간 종사하여 오면서 80여건 이상의 특허 출원 중 현재 지적 재산권을 보유하고 있습니다.
                            </p>
                            <div className="mt-6 bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
                                <p className="font-bold">특허 정보</p>
                                <p>국내: 특허4건, 디자인1건, 상표2건.</p>
                                <p>해외: 일본, 미국, 러시아, 인도, 특허등록 존속 보유.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-green-800 mb-8">약쑥(아로마) 홈 사우나기</h2>

                    <div className="bg-white p-8 rounded-lg shadow-xl">
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h3 className="text-2xl font-semibold text-green-700 mb-4">개요 및 효과</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>{emphasizeText('코로나의 장기로 대중목욕탕 기피현상.')}</li>
                                    <li>{emphasizeText('각 가정에서 편리한 시간대에 약쑥 홈 사우나기로 간편하고 위생적으로, 안락하게 약용 사우나를 즐길 수 있다.')}</li>
                                    <li>{emphasizeText('우리나라만의 특효한 약쑥을 활용한 약쑥좌훈 비데기와 함께 해외시장 개척에 주력하면 시너지 효과가 높을 것으로 예상.')}</li>
                                    <li>{emphasizeText('약용작물 재배로 농가소득 배가.')}</li>
                                    <li>{emphasizeText('노약자와 거동이 불편한 (예: 지체장애인협회 등록된 정회원 40만명)지체장애인들의 대중 목욕시설 기피 해소.')}</li>
                                    <li>{emphasizeText('목욕시설이 열악한 농,어촌의 긴요한 제품.')}</li>
                                </ul>

                                <br>
                                </br>

                                <div className="mb-8">
                                    <h3 className="text-2xl font-semibold text-green-700 mb-4">마케팅 전략</h3>
                                    <p className="text-gray-700 mb-4">
                                        <strong>국내:</strong> {emphasizeText('"약쑥 훈증 겸용 비데기"에 이어 출시하고자 하는 "포터블식 한방 홈 사우나기"의 두 모델은 세계 최초 개발된 제품들로 홈 쇼핑에 기획상품으로 시판하여 광고의 효과를 도모하면서 온라인과 판촉을 병행할 것이며 한국 장애 경제인 연합회와 연합하여 사회적 기업으로 별도의 영업계획으로 진행하고자 합니다.')}
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>해외:</strong> {emphasizeText('우선적으로 우리나라 한방의학의 인지도가 높은 일본시장부터 온라인을 통하여 적극적으로 홍보하며, 시장을 점유하면서 다음 단계의 해외 시장을 개척해 나가고자 합니다.')}
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <img src={saunaImage1} alt="홈 사우나기 이미지 1" className="rounded-lg shadow-md" />
                                <img src={saunaImage2} alt="홈 사우나기 이미지 2" className="rounded-lg shadow-md" />
                                <img src={saunaImage3} alt="홈 사우나기 이미지 3" className="rounded-lg shadow-md" />
                                <img src={saunaImage4} alt="홈 사우나기 이미지 4" className="rounded-lg shadow-md" />
                            </div>
                        </div>



                        <ProductComparisonTable />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;