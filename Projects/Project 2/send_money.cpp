#include <iostream> // main Liabrary Function
 #include <cstdio> // useing this we do printf & scanf  
#include <iomanip>    // use for text manuplating 
#include <cstring>   // use for   string
#include <fstream> // for file handling
#include <unistd.h> // for sleep
using namespace std; // for string
     class Send_Money
{
    string save, save1, save_balance_file;
    string send_save, send_save1;
    string pin_con;
    string send_amo_str, check_bal_amo_str;
    int send_amo, check_bal_amo;
    int pin, stored_pin;

public:
    
        
     
    
    void Sender_fun()
    {
        cout << "----------------------------" << endl;
        cout << "Enter Your Account No: "; // your acc
        getline(cin, save1);

        save = save1 + "_balance.txt"; // check balance
        pin_con = save1 + "_Pin.txt";  // Set pin file here
      
        
        ifstream check(save);
        if (!check)
        {
            cout << "Account Not Found!" << endl;
            return;
        }

  
        check.close();
        



        cout << "----------------------------" << endl;
        cout << "Enter The Receiver Account No: "; // enter receiver acc
        getline(cin, send_save1);
        send_save = send_save1 + "_balance.txt";
        if (send_save1==save1)
        {
            cout << "The Sender and Receiver Account Are Same!" <<   endl;
            return;
        }
        

        ifstream receiver_check(send_save);
        if (!receiver_check)
        {
            cout << "Receiver Account Not Found!" << endl;
            return;
        }
        receiver_check.close();
        cout << "----------------------------" << endl;
        cout << "Enter The Amount To Send: ";
        getline(cin, send_amo_str);
        send_amo = stoi(send_amo_str);
// Read the sender's current balance from the file
ifstream sender_balance_file(save);
if (!sender_balance_file) {
    cout << "Error reading sender balance!" << endl;
    return;
}
sender_balance_file >> check_bal_amo;  // ✅ Store correct balance in variable
sender_balance_file.close();

        // PIN check
        ifstream pin_file(pin_con);
        if (!pin_file)
        {
            cout << "Pin file not found!" << endl;
            return;
        }
        pin_file >> stored_pin;
        pin_file.close();
        cout << "----------------------------" << endl;
        cout << "Enter Your Account Pin: ";
        cin >> pin;

        if (pin != stored_pin)
        {
            cout << "Wrong Pin!" << endl;
            return;
        }

        // Proceed with transfer
        int new_sender_balance = check_bal_amo - send_amo; //  Less the send ammount to receiver account
        ofstream sender_out(save);
        sender_out << new_sender_balance;
        sender_out.close();
        
        // Read receiver's current balance
        ifstream recv_file(send_save);
        int recv_balance;
        recv_file >> recv_balance;
        recv_file.close();

        int new_receiver_balance = recv_balance + send_amo; // add the send ammount to receiver account

        // Write updated balances

        ofstream receiver_out(send_save);
        receiver_out << new_receiver_balance;
        receiver_out.close();
        cout << "----------------------------" << endl;
        cout << "Sending..." <<   endl;
        sleep(1.5);
        ifstream chekbal(save);
        int ball;
        chekbal>>ball;
        cout << "Transfer Successful!" << endl;
        cout << "Your New Balance: " << ball << endl;
    }
};
int main()
{
    
Send_Money S;
S.Sender_fun();
}