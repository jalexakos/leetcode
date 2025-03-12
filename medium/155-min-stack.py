# Min Stack
# https://leetcode.com/problems/min-stack/
class MinStack:

    def __init__(self):
        self.stack = []
        self.min = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        if  len(self.min) == 0 or val <= self.min[-1]:
            self.min.append(val)

    def pop(self) -> None:
        popped_val = self.stack.pop()
        if popped_val == self.min[-1]:
            self.min.pop()


    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min[-1]


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()

# runtime 83rd percentile
# memory 90th percentile
