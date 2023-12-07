// 170 pts
export function cyberReindeer(road, time) {
  const result = []
  let sledPosition = 0
  let currentRoad = road

  for (let i = 0; i < time; i++) {
    result.push(currentRoad)
    road = i === 4 ? road.replaceAll('|', '*') : road
    sledPosition += +(road[sledPosition + 1] !== '|')
    currentRoad = `.${road.slice(1, sledPosition)}S${road.slice(
      sledPosition + 1
    )}`
  }

  return result
}
