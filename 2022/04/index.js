export function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => a.h - b.h)
    .every((box, index) => {
      const nextBox = boxes[index + 1]
      if (!nextBox) return true

      return box.w < nextBox.w && box.l < nextBox.l && box.h < nextBox.h
    })
}
