import React from 'react'

import './collection.styles.scss'
import { connect } from 'react-redux'
import { selectCollectionCategory } from '../../redux/shop/shop.selector'

import CollectionItem from '../../component/collection-item/collection-item.component'

const CollectionPage = ({ collections, match }) => {
  const { title, items } = collections
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({ //parameter1 state, parameter2: ownProps
  collections: selectCollectionCategory(ownProps.match.params.collectionId)(state) // ini ditulis seperti ini krn fungsi yg mengembalikan fungsi selector
})

export default connect(mapStateToProps)(CollectionPage)