function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.querySelector('#nested .target')
}
function deepestChild(){
  let node = document.getElementById('grand-node')
  let deeperChild = node.children[0]

  while (deeperChild) {
    node = deeperChild
    deeperChild = node.children[0]
  }
  return node;
}
function increaseRankBy(n){
  let node = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < node.length; i ++) {
    let currentNode = node[i].children;
    for (let j = 0; j < currentNode.length; j++) {
      currentNode[j].innerHTML = parseInt(currentNode[j].innerHTML) + n
    }
  }

}
