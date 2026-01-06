export const chain = (data) => {
  let result = [...data]

  const api = {
    map(fn) { result = result.map(fn); return api },
    filt(fn) { result = result.filter(fn); return api },
    uniq() { result = [...new Set(result)]; return api },
    take(n) { result = result.slice(0, n); return api },
    val() { return result }
  }

  return api
}

/* Note : chaining order can be changed, but the output depends on the sequence */
/* Example :
chain(arr).map().filt().uniq().take().val()
chain(arr).filt().map().uniq().take().val()
chain(arr).uniq().map().take().val()
All will give different outputs based on the order of operations.
*/
