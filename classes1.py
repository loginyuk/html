class Flight():
    def __init__(self, capasity):
        self.capasity = capasity
        self.passengers = []

    def add_passenger(self, name):
        if not self.open_seats():
            return False
        self.passengers.append(name)
        return True

    def open_seats(self):
        return self.capasity - len(self.passengers)

flight = Flight(3)
    
people = ["Harry", "Ron", "Hermione", "Ginny"]
for person in people:
    if flight.add_passenger(person):
        print(f"Added {person} to flight seccessfully.")
    else:
        print(f"No available seats for {person}")