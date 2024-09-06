import React from 'react';

const ProductComparisonTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="py-3 px-4 text-left">내용/구분</th>
            <th className="py-3 px-4 text-left">유사제품</th>
            <th className="py-3 px-4 text-left">약쑥 홈 사우나기</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-3 px-4 font-semibold">사우나방식</td>
            <td className="py-3 px-4">대류/분사식/저기압 습식</td>
            <td className="py-3 px-4 text-blue-600 font-medium">약쑥 또는 허브식물 활용한 기능성 습식</td>
          </tr>
          <tr className="border-b bg-gray-50">
            <td className="py-3 px-4 font-semibold">차별성</td>
            <td className="py-3 px-4">
              <ul className="list-disc list-inside">
                <li>온열 (긴 예열시간, 준비, 정소, 정리, 정돈과정 수반)</li>
                <li>절제된 고정장소 필요</li>
                <li>단순습식/ 땀만내는 사우나</li>
              </ul>
            </td>
            <td className="py-3 px-4">
              <ul className="list-disc list-inside text-blue-600">
                <li>접단 전자회로에 의한 순간 가열식</li>
                <li>간편성 (복잡한 전, 후 과정 불필요)</li>
                <li>사용장소와 키높이 구애없음</li>
                <li>다용도(전신과 반신사우나)</li>
                <li>약용 습식 사우나</li>
              </ul>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4 font-semibold">
              가격<br/>
              (소비자 가)
            </td>
            <td className="py-3 px-4">
              <ul className="list-disc list-inside">
                <li>박스형 편백나무식: 1.5~3백만원</li>
                <li>단순 습식: 10만원 전후</li>
              </ul>
            </td>
            <td className="py-3 px-4 text-blue-600 font-medium">
              약쑥 훈증 포터블식: 50만원 ~ 예정
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductComparisonTable;