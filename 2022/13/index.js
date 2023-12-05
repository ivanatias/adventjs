export function getFilesToBackup(lastBackup, changes) {
  const set = new Set()
  const nonBackedUpFiles = changes.filter(change => change[1] > lastBackup)
  nonBackedUpFiles.forEach(file => set.add(file[0]))

  return [...set].sort((a, b) => a - b)
}
