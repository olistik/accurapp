export function preventingDefault(fn) {
  return (e) => {
    e.preventDefault()
    return fn(e)
  }
}

export function eventValueExtractor(fn) {
  return (e) => fn(e.currentTarget.value)
}

export function eventTargetExtractor(fn) {
  return (e) => fn(e.currentTarget)
}
