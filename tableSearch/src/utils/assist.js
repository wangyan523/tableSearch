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

// 由一个组件，向下找到最近的指定组件
function findComponentDownWard (context, componentName) {
  const childrens = context.$children
  let children = null
  if (childrens.length) {
    for (const child of childrens) {
      let name = child.$options.name
      if (name === componentName) {
        children = child
        break
      } else {
        children = findComponentDownWard(child, componentName)
        if (children) break
      }
    }
  }
  return
}
export { findComponentDownWard }

// 向下找到所有指定的组件——findComponentsDownward
function findComponentsDownWard (context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child) 
    const foundchilds = findComponentsDownWard(child, componentName)
    return components.concat(foundchilds)
  }, [])
}
export { findComponentsDownWard }

// 由一个组件，找到指定组件的兄弟组件
function findBrothersComponents(context, componentName, exceptMe = true) {
  let res = context.$parent.$children.filter(item => {
    return item.$options.name === componentName
  })
  let index = res.findIndex(item => item._uid === context._uid)
  if (exceptMe) res.splice(index, 1)
  return res
}
export { findBrothersComponents }





