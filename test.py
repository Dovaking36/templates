from tkinter import *
import time
root = Tk()
root.geometry("800x600")
root.title("Pong")
holste= Canvas(root, width=800, height=600, bg="black" ) 
holste.pack()

class Racketka:
    def __init__(self):
        self.id=None
        self.speed=3
        self.y = 3
    def draw(self):
        holste.move(self.id, 0, self.speed)





class Racketkar(Racketka):          
    def __init__(self):
        super().__init__()
        self.id=holste.create_rectangle(20,10,30,90, fill="white")
    def move(self,event):
        if event.keysym == "w":
            self.speed= -self.y
        if event.keysym == "s":
            self.speed= self.y
class Racketkal(Racketka):          
    def __init__(self):
        super().__init__()
        self.id=holste.create_rectangle(780,10,790,90, fill="red")
    def move(self,event):
        if event.keysym == "Up":
            self.speed= -self.y
        if event.keysym == "Down":
            self.speed= self.y
class Ball():
    def __init__(self):
        super().__init__()
        self.id=holste.create_oval(50, 50, 70, 70, fill="blue")
        self.speed_x = 1
        self.speed_y = 0
    def draw(self):
        holste.move(self.id, self.speed_x, self.speed_y)
        self.collision()
        x,y,x1,y1= holste.coords(self.id)
        if y1 >=600:
            self.speed_y *=-1
        if y <=0:
            self.speed_y *=-1
    def collision(self):
        bx0,by0,bx1,by1=holste.coords(self.id)
        r0x0,r0y0,r0x1,r0y1=holste.coords(b.id)
        r1x0,r1y0,r1x1,r1y1=holste.coords(a.id)
        if bx0 <= r0x1 and by1 >= r0y0 and by0 <= r0y1:
            self.speed_x *= -1
        if bx1>=r1x0 and by0>=r1y0 and by1<=r1y1:
            self.speed_x *= -1
            
a = Racketkal()
b = Racketkar()
c = Ball()
root.bind("<KeyPress>", b.move)
root.bind("<KeyPress>", a.move, True)
while True:
    root.update()
    root.update_idletasks()
    time.sleep(0.01)
    a.draw()
    b.draw()
    c.draw()