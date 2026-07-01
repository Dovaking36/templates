class Bolt:
    def __init__(self, length,rezba,shape_of_head):
        self.length = length
        self.rezba = rezba
        self.shape = shape_of_head
        
    def spin(self):
        print(f"БОЛТ {self.shape} БЫЛ ЗАКРУЧЕН")
        
    def __str__(self) -> str:
        return f"Форма: {self.shape}\nДлина: {self.length}\nРезьба: {self.rezba}"
    
        
        
b1 = Bolt(12,"прямая","+")
b2 = Bolt(14,"обратная","-")

print(b1)
print(b2)
