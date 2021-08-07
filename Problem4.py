class Path:
    def __init__(self,path):
        self.path = path

    def cd(self,newPath):

        if(newPath[0] == '/'):
                self.path = newPath
                return

        newPathLength = len(newPath)
        for l in newPath:
            if newPathLength > 1:
                if newPath[0] == '.' and newPath[1] == '.':
                    if len(self.path) != 0:
                        last = self.path.rindex('/')
                        self.path = self.path[0:last:]
                        if len(self.path) == 0:
                            self.path = '/'
                    newPath = newPath[2:]
                    continue

            if newPath[0] == '/':
                newPath = newPath[1:]
                if newPath[0] == '.':
                    continue

            if self.path[len(self.path)-1] != '/':
                self.path = self.path + '/'


            if newPath.find('/') == -1:
                self.path = self.path + newPath
                newPath = ''
                break

            else:
                self.path = self.path + newPath[0:newPath.find('/')]
                newPath = newPath[newPath.find('/')+1]

p = Path("/a/b/c/d")
p.cd('../x')
print(p.path)

