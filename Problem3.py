logFile = open("mylog.log","r")

def logDetails(logFile):
    f = open("logFile.txt","w")
    detail = ""
    for line in logFile:
        if "ERROR" in line:
            detail = line
            f.write(detail)
        if "WARN" in line:
            detail = line
            f.write(detail)

    f.close()

logDetails(logFile)