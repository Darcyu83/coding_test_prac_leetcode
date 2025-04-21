// visited state :
//  0 = unvisited
//  1 = visiting
//  2 = visited

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const UNVISITED = 0;
  const VISITING = 1;
  const VISITED = 2;

  const visitedState = new Array(numCourses).fill(0);
  const graph = new Map<number, number[]>();

  for (const [course, pre] of prerequisites) {
    if (!graph.has(course)) graph.set(course, []);
    graph.get(course)!.push(pre);
  }

  function hasCycleDFS(course: number): boolean {
    if (visitedState[course] === VISITING) return true;
    if (visitedState[course] === VISITED) return false;

    visitedState[course] = VISITING;

    for (const prereq of graph.get(course) || []) {
      if (hasCycleDFS(prereq)) return true;
    }

    visitedState[course] = VISITED;
    return false;
  }

  for (let course = 0; course < numCourses; course++) {
    if (hasCycleDFS(course)) return false;
  }

  return true;
}

function canFinish1(numCourses: number, prerequisites: number[][]): boolean {
  const visited = new Set<number>();
  const preMap = new Map<number, number[]>();

  for (const [course, pre] of prerequisites) {
    if (!preMap.has(course)) preMap.set(course, []);
    preMap.get(course)!.push(pre);
  }

  function checkIfPossibleToFinish(course: number): boolean {
    // cycle detected
    if (visited.has(course)) return false;
    // no prerequsites left to take
    if (preMap.has(course) && preMap.get(course)!.length === 0) return true;

    visited.add(course);

    for (const pre of preMap.get(course) || []) {
      // if prerequisite can't be completed,
      if (!checkIfPossibleToFinish(pre)) return false;
    }

    visited.delete(course);
    preMap.set(course, []); // Mark as visited by emptying prerequisites

    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!checkIfPossibleToFinish(i)) return false;
  }

  // All courses can be completed
  return true;
}
