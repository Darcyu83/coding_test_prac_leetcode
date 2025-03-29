// Kahn's Algorithm for Topological sort of a directed graph
// Based on BFS (breadth-first search).
// In-degree는 그래프에서 정점에 들어오는 간선의 수
// Out-degree는 그래프에서 정점에 나가는 간선의 수
function findOrderBFS(numCourses: number, prerequisites: number[][]): number[] {
  // Step 1: Build the graph and calculate in-degrees
  const prereqs: number[][] = Array.from({ length: numCourses }, () => []);
  const inDegree: number[] = new Array(numCourses).fill(0);
  // Build the graph and calculate in-degree for each course

  for (const [course, preReq] of prerequisites) {
    prereqs[preReq].push(course); // Add course to the list of the prerequisite's neighbors
    inDegree[course]++; // Increment in-degree for the course
  }

  // Step 2: Initialize the queue with courses that have no prerequisites (in-degree 0)
  const queue: number[] = [];

  for (let courseIdx = 0; courseIdx < numCourses; courseIdx++) {
    // if (inDegree[i] === 0) queue.push(i);
    const hasNoPrerequisites = inDegree[courseIdx] === 0;
    if (hasNoPrerequisites) queue.push(courseIdx);
  }

  // Step 3: Perform topological sorting using BFS
  const order: number[] = [];
  while (queue.length > 0) {
    const courseIdx = queue.shift()!;
    order.push(courseIdx);

    // Process all neighbors of the current course

    for (const course of prereqs[courseIdx]) {
      inDegree[course]--; // Decrease the in-degree of the neighbor
      // if (inDegree[neighbor] === 0) {
      //   queue.push(neighbor); // If in-degree becomes 0, add it to the queue
      // }

      const isReadyToTake = inDegree[course] === 0;

      if (isReadyToTake) queue.push(course);
    }
  }

  return order.length === numCourses ? order : [];
}

function findOrderDFS(numCourses: number, prerequisites: number[][]): number[] {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  const visited: number[] = new Array(numCourses).fill(0); // 0 = unvisited, 1 = visiting, 2 = visited
  const result: number[] = [];

  for (const [course, preReq] of prerequisites) {
    graph[preReq].push(course);
  }

  // Step 2: DFS helper function for cycle detection and topological sorting
  function dfsAndFindCycleAndTopologicalSort(course: number): boolean {
    // if (visited[course] === 1) return false; // Cycle detected
    // if (visited[course] === 2) return true; // Already processed

    const isInProgress = visited[course] === 1;
    const isAlreadyProcessed = visited[course] === 2;

    if (isInProgress) return false; // Cycle detected
    if (isAlreadyProcessed) return true; // Already visited

    visited[course] = 1;

    // Explore all the neighbors (courses that depend on the current course)
    for (const neighbor of graph[course]) {
      if (!dfsAndFindCycleAndTopologicalSort(neighbor)) return false;
    }

    visited[course] = 2; // Mark as fully processed
    result.push(course);

    return true;
  }

  // Step 3: Apply DFS on each course
  for (let i = 0; i < numCourses; i++) {
    const cycleDetected =
      visited[i] === 0 && !dfsAndFindCycleAndTopologicalSort(i);
    if (cycleDetected) return []; // If a cycle is detected, return an empty array
  }

  // Step 4: Return the result, reverse the result because we added courses in reverse order
  return result.reverse();
}

function findOrder1(numCourses: number, prerequisites: number[][]): number[] {
  const indegree: number[] = Array(numCourses).fill(0);
  const prereq: number[][] = Array.from({ length: numCourses }, () => []);

  for (let i = 0; i < prerequisites.length; i++) {
    indegree[prerequisites[i][1]]++;
    prereq[prerequisites[i][0]].push(prerequisites[i][1]);
  }

  let queue: number[] = [];
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  let order: number[] = Array(numCourses);

  let finish: number = 0;
  let course;

  while (queue.length > 0) {
    course = queue.shift()!;
    order[numCourses - finish - 1] = course;
    for (let i = 0; i < prereq[course].length; i++) {
      indegree[prereq[course][i]]--;
      if (indegree[prereq[course][i]] === 0) queue.push(prereq[course][i]);
    }
    finish++;
  }

  return finish === numCourses ? order : [];
}

// kahn's
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  // build graph
  const prereqs: number[][] = Array.from({ length: numCourses }, () => []);
  const inDegree: number[] = new Array(numCourses).fill(0);

  for (const [course, preReq] of prerequisites) {
    prereqs[preReq].push(course);
    inDegree[course]++;
  }

  // Initialize the queue with courses that have no prerequisites
  const queue: number[] = [];

  for (let courseIdx = 0; courseIdx < numCourses; courseIdx++) {
    const hasNoPrerequisites = inDegree[courseIdx] === 0;
    if (hasNoPrerequisites) queue.push(courseIdx);
  }

  // perform topological sorting using BFS

  const order: number[] = [];
  while (queue.length) {
    const courseIdx = queue.shift()!;
    order.push(courseIdx);

    for (const course of prereqs[courseIdx]) {
      inDegree[course]--;
      const isReadyToTake = inDegree[course] === 0;
      if (isReadyToTake) queue.push(course);
    }
  }
  return order.length === numCourses ? order : [];
}

// kahn's
function findOrderRecap(
  numCourses: number,
  prerequisites: number[][]
): number[] {
  return [];
}
