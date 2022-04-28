import React from 'react'
import {
  ProductsContainer,
  ProductsHeading,
  ProductWrapper,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductsEelements'

const Products = ({heading, data}) => {
  return (
    <ProductsContainer>
      <ProductsHeading>
        {heading}
      </ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return(
            <ProductWrapper key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>{product.name}</ProductInfo>
              <ProductDesc>{product.desc}</ProductDesc>
              <ProductPrice>{product.price}</ProductPrice>
              <ProductButton>{product.button}</ProductButton>
            </ProductWrapper>
          )
        })}
      </ProductWrapper>
    </ProductsContainer>
  )
}

export default Products