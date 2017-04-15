function addChild(children, val) {
  if (Array.isArray(val)) {
    for (var j = 0; j < val.length; j++) {
      children.push(val[j])
    }
  }
  else if (val != null && val !== true && val !== false) {
    children.push(typeof val === 'number' ? val + '' : val)
  }
}

export default function(tag, data, values) {
  var children = []

  if (Array.isArray(values)) {
    for (var i = 0; i < values.length; i++) {
      addChild(children, values[i])
    }
  }
  else {
    for (var i = 2; i < arguments.length; i++) {
      addChild(children, arguments[i])
    }
  }

  return typeof tag === "string"
    ? {
        tag: tag,
        data: data || {},
        children: children
      }
    : tag(data, children)
}
