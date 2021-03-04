function reallocate(arr, from, to) {
  return from === to
    ? arr
    : from < to
      ? [
        ...arr.slice(0, from),
        ...arr.slice(from + 1, to + 1),
        arr[from],
        ...arr.slice(to + 1),
      ]
      : [
        ...arr.slice(0, to),
        arr[from],
        ...arr.slice(to, from),
        ...arr.slice(from + 1),
      ]
}

export default reallocate;
