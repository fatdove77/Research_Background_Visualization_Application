import cv2

cap = cv2.VideoCapture(0)

flag = 1
num = 1

while(cap.isOpened()):  #检测是否开启状态
    ret_flag,Vshow = cap.read() #得到每帧图像
    cv2.imshow("Capture_Test",Vshow)#显示图像
    k = cv2.waitKey(1) & 0xFF
    if k==ord('s'):
        cv2.imwrite('D:/graduation_project/face_python/data/'+str(num)+".zjx"+".jpg",Vshow)
        print("success to save"+str(num)+".jpg")
        print("-----------")
        num+=1
    elif k==ord(' '):
        break

cap.release()
cv2.destroyAllWindows()