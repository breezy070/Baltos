import "./categories.scss";
import { BrowserRouter, Navigate, Routes, Route, Link } from "react-router-dom";

// function Categories() {
//   return (
//     <div className="categories">
//       <div className="wrapper">
//         <div className="left">
//           <div className="left-top">
//             <div className="img-container">
//               <img src="/assets/images/baltos_12.png" alt="" />
//             </div>
//             <Link to={"/artworks/categories/vases"}>Vases</Link>
//           </div>
//           <div className="left-bottom">
//             <Link to={"/artworks/categories/vases"}>Vases</Link>
//           </div>
//         </div>
//         <div className="right">
//           <div className="right-top">
//             <Link to={"/artworks/categories/bowls"}>Bowls</Link>
//           </div>
//           <div className="right-bottom">
//             <Link to={"/artworks/categories/bowls"}>Bowls</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function Categories() {
  return (
    <div className="categories">
      <div className="wrapper">
        <div className="bowls-cat">
          <div className="img-container">
            <img src="/assets/images/Artworks_categories_Bowls_01.png" alt="" />
            <div className="title">
              <Link to={"/artworks/categories/bowls"}>Bowls</Link>
            </div>
          </div>
        </div>
        <div className="vases-cat">
          <div className="img-container">
            <img src="/assets/images/Artworks_categories_Vases_01.png" alt="" />
            <div className="title">
              <Link to={"/artworks/categories/vases"}>Vases</Link>
            </div>
          </div>
        </div>

        <div className="baskets-cat">
          <div className="img-container">
            <img
              src="/assets/images/Artworks_categories_Baskets_01.png"
              alt=""
            />
            <div className="title">
              <Link to={"/artworks/categories/baskets"}>Baskets</Link>
            </div>
          </div>
        </div>
        <div className="sidetables-cat">
          <div className="img-container">
            <img
              src="/assets/images/Artworks_categories_Side_tables_01.png"
              alt=""
            />
            <div className="title">
              <Link to={"/artworks/categories/sidetables"}>Side Tables</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
