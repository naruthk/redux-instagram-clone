// Increment likes when people press the like button
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index     // index: index
  }
}

// Add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// Remove comment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}