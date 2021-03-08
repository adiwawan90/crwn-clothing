import React from 'react';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopCollections } from '../../redux/shop/shop.selector'

import CollectionPreview from '../../component/collection-preview/preview-collection.component'

const ShopPage = ({collections}) => {
  return (
    <div className="shop-page">
      {
        collections.map(({id, ...otherCollectionProps}) => {
          return <CollectionPreview key={id} {...otherCollectionProps} />
        })
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(ShopPage);