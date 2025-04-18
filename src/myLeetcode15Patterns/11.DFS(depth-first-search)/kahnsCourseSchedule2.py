from collections import defaultdict, deque
class Solution: 
  def findOrder(self, numCourses, prerequisites):

    # build adjacency list of prereqs
    prereq = {c: [] for c in range(numCourses)}
    for crs, pre in prerequisites: 
      prereq[crs].append(pre)

    # a course has 3 possible states: 

    # 1. visited -> crs has been added to output
    # 2. visiting -> crs not added to output but added to cycyle
    # 3. unvisited -> crs not added to output or cycle

    output = []
    visit, cycle = set(), set() 
    def dfs(crs):
      if crs in cycle: return False 
      if crs in visit: return True

      cycle.add(crs)

      for pre in prereq[crs]: 
        if dfs(pre) == False : 
          return False
      cycle.remove(crs) 
      visit.add(crs) 
      output.append(crs)
      return True
    


    for c in range(numCourses):
      if dfs(c) == False: 
        return []
      
    return output
  


def test(): 
  numCourses = 4
  prerequisites = [[1,0],[2,1],[3,2]]
  sol = Solution()
  print(sol.findOrder(numCourses, prerequisites))

if __name__ == "__main__":
  test()

