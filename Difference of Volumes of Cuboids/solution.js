function findDifference(a, b) {
    const cuboidA = a[0] * a[1] * a[2]
    const cuboidB = b[0] * b[1] * b[2]
    if (cuboidA > cuboidB) {
      return cuboidA - cuboidB
    } else {
      return cuboidB - cuboidA
    }
  }