from glob import glob                                                           
import cv2 
path = "./sponsors/*"
format = '.jpeg'
src = glob(path + format)
for j in src:
    img = cv2.imread(j)
    cv2.imwrite(j[:-len(format)+1] + 'png', img)
    print(j)
