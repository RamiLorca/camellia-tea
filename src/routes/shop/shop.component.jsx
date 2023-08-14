import './shop.styles.scss';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {
    return (
        <div>
            <p className='weight-info'>* All teas are sold in 5 oz units.</p>
            <Routes>
                <Route index element={ <CategoriesPreview/> } />
                <Route path=':category' element={ <Category/> } />
            </Routes>
        </div>
    );
};

export default Shop;