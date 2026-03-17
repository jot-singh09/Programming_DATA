#include <iostream>
#include <cstdio> // for remove()
using namespace std;

int main()
{
    // we can change name and also that name from if and cout 
    string hi = "test.txt";  // 🔧 Manually enter the file name here

    if (remove(hi.c_str()) == 0) {
        cout << "File '" <<   "' deleted successfully." << endl;
    } else {
        perror("Error deleting file");
    }

    return 0;
}
