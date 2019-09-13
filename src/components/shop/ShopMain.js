import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from 'reactstrap';

import ProductCard from './ProductCard';

class ShopMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortDropDownOpen: false,
      sortBy: 'PRICE_DESC'
    };
  }
  
  toggleSortDropDown = () => {
    this.setState({ sortDropDownOpen: !this.state.sortDropDownOpen });
  }

  setSortBy = (sortByString) => {
    this.setState({ sortBy: sortByString });
  }

  render() {
    // const { data } = this.props;
    const { sortDropDownOpen, sortBy } = this.state;

    const unsortedProducts = this.props.data.allContentfulProduct.edges;
    // const products = sortProducts(unsortedProducts, sortBy);
    // console.log(products);
    
    return (
      <Container className="text-light mb-5 pt-5">
        <Row className="mb-5 text-center">
          <Col>
            <Dropdown isOpen={sortDropDownOpen} toggle={this.toggleSortDropDown}>
              <DropdownToggle caret>
                Sort By
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => this.setSortBy('NAME_ASC')}>
                  Name Ascending
                </DropdownItem>
                <DropdownItem onClick={() => this.setSortBy('NAME_DESC')}>
                  Name Descending
                </DropdownItem>
                <DropdownItem onClick={() => this.setSortBy('PRICE_ASC')}>
                  Price Ascending
                </DropdownItem>
                <DropdownItem onClick={() => this.setSortBy('PRICE_DESC')}>
                  Price Descending
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          <Col>
            {unsortedProducts.map(prod => (
              <ProductCard key={prod.node.contentful_id} data={prod.node} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ShopMain;

const sortProducts = (data, sortBy) => {
  const products = data;

  if(sortBy === 'PRICE_ASC') {
    products.sort((a, b) => (
      a.node.price - b.node.price
    ));
  }

  if(sortBy ==='PRICE_DESC') {
    products.sort((a, b) => (
      a.node.price - b.node.price
    ));
    products.reverse();
  }
  // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
  if(sortBy === 'NAME_ASC') {
    // console.log(sortBy);
    products.sort((a, b) => {
      // console.log(a.node.name < b.node.name);
      return a.node.name === b.node.name ? 0 : +(a.node.name > b.node.name) || -1;
    });
  }

  if(sortBy === 'NAME_DESC') {
    // console.log(sortBy);
    products.sort((a, b) => {
      // console.log(a.node.name < b.node.name);
      return a.node.name === b.node.name ? 0 : +(a.node.name > b.node.name) || -1;
    });
    products.reverse();
  }

  return products;
};