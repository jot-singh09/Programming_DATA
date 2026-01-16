#include <iostream>
using namespace std;

// Upper/Base class
class Animal {
public:
    void eat() {
        cout << "Animal eats food!" << endl;
    }
};

// Child/Derived class
class Dog : public Animal {
public:
eat();
    void bark() {
        cout << "Dog barks! Woof!" << endl;
    }
    
    void callBase() {
        Animal::eat(); // Calling base class function ✅
    }
};

int main() {
    Dog d;
    d.callBase(); // Derived class calling upper class function
    d.bark();
    return 0;
}
