import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'

// we dont need it anymore bcz we have change shop data as an Object with the key, instead an Arry!
// const COLLECTION_MAP_ID = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// };

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollectionPreview = createSelector(
  [selectShopCollections],
  collections => Object.keys(collections).map(key => collections[key])
)

// export const selectCollectionCategory = (collectionParameterUrl) => createSelector(
//   [selectShopCollections],
//   collections => collections.find(collection => collection.id === COLLECTION_MAP_ID[collectionParameterUrl] )
// )

export const selectCollectionCategory = memoize((collectionParameterUrl) => createSelector(
  [selectShopCollections],
  // collections => collections.find(collection => collection.id === COLLECTION_MAP_ID[collectionParameterUrl] )
  collections => collections[collectionParameterUrl]
))