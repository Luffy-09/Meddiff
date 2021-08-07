dict = {'Input.txt': 'Randy', 'Code.py': 'Stan', 'Output.txt': 'Randy'}

def group_by_owners(dict):
    resultDict = {}
    for file, owner in dict.items():
        if owner in resultDict:
            resultDict[owner].append(file)
        else:
            resultDict[owner] = [file]

    return resultDict


print(group_by_owners(dict))