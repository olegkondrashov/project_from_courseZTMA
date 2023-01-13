import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'
import { ProductCardFooter, ProductCardContainer, ProductCardName, ProductCardPrice } from './product-card.styles';

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);
    
    const addProductToCart = () => addItemToCart(product);

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ProductCardFooter>
                <ProductCardName>{name}</ProductCardName>
                <ProductCardPrice>{price}</ProductCardPrice>
            </ProductCardFooter>
            <Button onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to card</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;