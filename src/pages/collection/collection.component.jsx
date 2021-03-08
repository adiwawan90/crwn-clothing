import React from 'react'

import './collection.styles.scss'
import { connect } from 'react-redux'
import { selectCollectionCategory } from '../../redux/shop/shop.selector'

const CollectionPage = ({ collections, match }) => {
  console.log(match);
  console.log(collections)
  return (
    <div className="collection-page">
      Collection Page
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({ //parameter1 state, parameter2: ownProps
  collections: selectCollectionCategory(ownProps.match.params.collectionId)(state) // ini ditulis seperti ini krn fungsi yg mengembalikan fungsi selector
})

export default connect(mapStateToProps)(CollectionPage)