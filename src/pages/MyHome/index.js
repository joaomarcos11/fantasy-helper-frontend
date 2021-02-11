import React from 'react';
import { PageContainer } from './styles';

export default function MyHome() {
  const img2 = 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1367&q=80';

  return (
    <PageContainer imgBg={img2}>
      MyHome
    </PageContainer>
  );
// export default function MyHome() {
//   const img2 = 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1367&q=80';

//   return (
//     <PageContainer imgBg={img2}>
//       <div className="text-bg">
//       <p className="lead">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, asperiores esse facilis rem tempora quas. Aliquam enim facere animi quia provident. Rerum, amet expedita animi maxime quam aut quisquam veritatis.
//       </p>
//       </div>
//     </PageContainer>
//   );
}