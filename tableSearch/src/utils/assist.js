//由一个组件，向上找到最近的指定组件
function findComponentUpWard (context, componentName) { 
  let parent = context.$parent
  let name = parent.$options.name
  while(parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent
    if(parent) name = parent.$options.name
  }
  return parent
}
export { findComponentUpWard }

// 由一个组件，向上找到所有的指定组件
function findComponentsUpWard (context, componentName) {
  let parents = []
  const parent = context.$parent
  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent)
    return parents.concat(findComponentsUpWard(parent, componentName))
  } else {
    return []
  }
}
export { findComponentsUpWard }

