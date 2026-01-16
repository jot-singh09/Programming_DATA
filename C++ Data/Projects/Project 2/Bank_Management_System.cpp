#include <iostream>  // main Liabrary Function
#include <cstdio>    // useing this we do printf & scanf
#include <iomanip>   // use for text manuplating
#include <cstring>   // use for   string
#include <fstream>   // for file handling
#include <unistd.h>  // for sleep
using namespace std; // for string

class New_account
{
    string name, age, adhar, account_no, DOB, Acc_Opening_Date;
    int deposit;
    string balance;
    string save, save1;
    string Save_pass, account;
    int pass;
    string Save_account;
    string m_no, mobile;

public:
    void Save(void)
    {
        cout << "----------------------------" << endl;
        cout << "Enter The Account No" << endl;
        getline(cin, save1);
        save = save1 + ("_Detail.txt");
        balance = save1 + ("_balance.txt");
        Save_pass = save1 + ("_Pin.txt");
        Save_account = save1 + ("_Account_No.txt");
        mobile = save1 + ("_Mobile.txt");
    }

    void Creating_Account()
    {

        ifstream Check;
        Check.open(save);
        if (Check)
        {
            cout << "The Account Is Arleady Exist :" << save1 << endl;
        }
        else
        {
            account = save1;

            ofstream File;
            File.open(save);
            cout << "Saving The File..." << endl;
            sleep(1);
            cout << "Press Enter To Continue" << endl;
            cin.ignore();
            cout << "----------------------------" << endl;
            cout << "Enter The Name :" << endl;
            getline(cin, name);
            File << "The Name is :" << name << endl;
            cout << "----------------------------" << endl;
            cout << "Enter The Age :" << endl;
            getline(cin, age);
            File << "The Age is :" << age << endl;
            cout << "----------------------------" << endl;
            cout << "Enter The Date of Birth (use / after enter the Date And Month):" << endl;
            getline(cin, DOB);
            File << "The Date Of Birth is :" << DOB << endl;
            cout << "----------------------------" << endl;
            cout << "Enter The Addhar Card No :" << endl;
            getline(cin, adhar);
            File << "The Addhar card No is :" << adhar << endl;
            cout << "----------------------------" << endl;
            cout << "Enter your Mobile No" << endl;
            getline(cin, m_no);
            File << "The Mobile No is " << m_no << endl;
            cout << "----------------------------" << endl;
            cout << "Enter The Account Opening Date  (use / after enter the Date And Month) :" << endl;
            getline(cin, Acc_Opening_Date);
            File << "The Account Opening Date is : " << Acc_Opening_Date << endl;
            cout << "Enter The Deposit Amount :" << endl;
            cin >> deposit;
            cout << "----------------------------" << endl;
            File << "The Opening Balance is :" << deposit << endl;
            ofstream Acc_Balance;
            Acc_Balance.open(balance);
            Acc_Balance << deposit << endl;
            Acc_Balance.close();

            File.close();
            ofstream Mobile(mobile);
            Mobile << m_no << endl;
            cout << "----------------------------" << endl;
            ofstream Pass;
            Pass.open(Save_pass);
            cout << "Choose The Pin" << endl;
            cin >> pass;
            Pass << pass << endl;
            Pass.close();

            ofstream Account;
            Account.open(Save_account);
            Account << account << endl;
            cout << "Account Sucessfully Created" << endl;
        }
    }
};

class View_balance
{
    int Bal;
    string save, save1;
    int pin, check_pin;
    string check_pin1;

public:
    void input()
    {
        cout << "----------------------------" << endl;
        cout << "Enter The Account Number" << endl;
        getline(cin, save1);
        save = save1 + ("_balance.txt");

        check_pin1 = save1 + ("_Pin.txt");
        balance();
    }

    void balance()
    {

        ifstream view;
        view.open(save);
        if (view)
        {
            cout << "Enter Your Pin" << endl;
            cin >> pin;
            ifstream checkpin(check_pin1);
            checkpin >> check_pin;
            if (pin != check_pin)
            {
                checkpin.close();

                cout << "Wrong Pin!" << endl;
            }
            else if (pin == check_pin)
            {
                cout << "----------------------------" << endl;
                view >> Bal;
                cout << "The Balance is :" << Bal << endl;
                view.close();
                /* code */
            }
        }
        else
        {
            cout << "Account Not Fonund!" << endl;
        }
    }
};

class Deposit_or_withdrawal
{
    int pin;
    string Account_no, save, save_pass, Save_Balance;
    int p, ammount, num, Bal, final_bal;
    int with, final_with;

public:
    void Input2(void)
    {
        cout << "----------------------------" << endl;
        cout << "Enter Your Account No" << endl;
        getline(cin, Account_no);
        save = Account_no + ("_Detail.txt");
        save_pass = Account_no + ("_Pin.txt");
        Save_Balance = Account_no + ("_balance.txt");

        ifstream Check(save);
        if (Check)
        {
            cout << "----------------------------" << endl;
            cout << "Enter Your Pin" << endl;
            cin >> pin;
            ifstream Pin(save_pass);
            Pin >> p;

            if (pin == p)
            {
                Pin.close();
                ifstream Balance(Save_Balance);
                Balance >> Bal;
                cout << "1. Deposit " << endl;
                cout << "2. Withdrawal" << endl;
                cin >> num;

                if (num == 1)
                {
                    cout << "----------------------------" << endl;
                    cout << "Enter The Amount" << endl;
                    cin >> ammount;
                    final_bal = ammount + Bal;
                    Balance.close();
                    ofstream Bal(Save_Balance);
                    Bal << final_bal;
                    cout << "The New Balance is :" << final_bal << endl;
                    Bal.close();
                }
                else if (num == 2)
                { // if steam open and minus the bal temp
                    ifstream Balance(Save_Balance);
                    Balance >> Bal;
                    cout << "----------------------------" << endl;
                    cout << "Enter The Withdrawal Amount :" << endl;
                    cout << "----------------------------" << endl;
                    cin >> with;
                    final_with = Bal - with;
                    cout << "The New Balance is :" << final_with << endl;
                    Balance.close(); // file close

                    ofstream Bal(Save_Balance); // ofsteam open and minux bal in file
                    Bal << final_with;

                    Bal.close(); // file close
                }
            }
            else
            {
                cout << "Wrong Pin!" << endl;
            }
        }
        else
        {
            cout << "Account Not Found!" << endl;
        }
    }
};

class Detail
{
    string show, save, save1, save_pass;
    int pin, View;

public:
    void Display()
    {
        cout << "----------------------------" << endl;
        cout << "Enter The Account No :" << endl;
        getline(cin, save1);
        save = save1 + ("_Detail.txt");
        save_pass = save1 + ("_pin.txt");

        ifstream check(save);
        if (check)
        {
            check.close();

            ifstream pass(save_pass);
            pass >> View;
            cout << "----------------------------" << endl;
            cout << "Enter The Pin" << endl;
            cin >> pin;
            if (pin == View)
            {
                pass.close();
                cout << "Loading..." << endl;
                sleep(1.11);
                ifstream Details(save);
                while (Details.eof() == 0)
                {
                    getline(Details, show);
                    cout << show << endl;
                }
                Details.close();
            }
            else
            {
                cout << "Wrong Pin!" << endl;
            }
        }
        else
        {
            cout << "Account Not Found!" << endl;
        }
    }
};

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

        save = save1 + "_balance.txt"; // sender's balance file
        pin_con = save1 + "_Pin.txt";  // sender's PIN file

        ifstream check(save);
        if (!check)
        {
            cout << "Account Not Found!" << endl;
            return;
        }
        check.close();

        cout << "----------------------------" << endl;
        cout << "Enter The Receiver Account No: ";
        getline(cin, send_save1);
        send_save = send_save1 + "_balance.txt";

        if (send_save1 == save1)
        {
            cout << "The Sender and Receiver Account Are Same!" << endl;
            return;
        }

        ifstream receiver_check(send_save);
        if (!receiver_check)
        {
            cout << "Receiver Account Not Found!" << endl;
            return;
        }
        receiver_check.close();

        // ✅ Read sender's current balance
        ifstream sender_balance_file(save);
        if (!sender_balance_file)
        {
            cout << "Error reading sender balance!" << endl;
            return;
        }
        sender_balance_file >> check_bal_amo;
        sender_balance_file.close();

        cout << "----------------------------" << endl;
        cout << "Enter The Amount To Send: ";
        getline(cin, send_amo_str);
        send_amo = stoi(send_amo_str);

        if (send_amo <= 0)
        {
            cout << "Invalid Amount Entered!" << endl;
            return;
        }

        if (send_amo > check_bal_amo)
        {
            cout << "Insufficient balance. Transaction denied." << endl;
            return;
        }

        // ✅ PIN check
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
        cin.ignore(); // clear input buffer

        if (pin != stored_pin)
        {
            cout << "Wrong Pin!" << endl;
            return;
        }

        // Read receiver's current balance
        ifstream recv_file(send_save);
        int recv_balance;
        recv_file >> recv_balance;
        recv_file.close();

        //  Calculate new balances
        int new_sender_balance = check_bal_amo - send_amo;
        int new_receiver_balance = recv_balance + send_amo;

        //  Write updated balances
        ofstream sender_out(save);
        sender_out << new_sender_balance;
        sender_out.close();

        ofstream receiver_out(send_save);
        receiver_out << new_receiver_balance;
        receiver_out.close();

        cout << "----------------------------" << endl;
        cout << "Sending..." << endl;
        sleep(1.5); // optional – C++ doesn't have sleep(seconds) natively; use platform-specific if needed
        cout << "Transfer Successful!" << endl;
        cout << "Your New Balance: " << new_sender_balance << endl;
    }
};
class Setting
{
    int num;
    string acc, check_acc, save;
    string mobile, check_mobile;
    string m, pin1;
    int pin, pin3;
    int pin2;

public:
    void display(void)
    {
        cout << "1. Change Pin" << endl;
        cout << "2. Change Mobile No" << endl;
        cout << "Choose an option: ";
        cin >> num;
        cin.ignore(); // Clear newline character after cin

        if (num == 1)
        {
            cout << "----------------------------" << endl;
            cout << "Enter Your Account No: ";
            getline(cin, acc);

            save = acc + "_Account_No.txt";     // File that represents the account
            pin1 = acc + "_Pin.txt";            // File to store PIN
            check_mobile = acc + "_Mobile.txt"; // File that stores registered mobile number

            // Check if account file exists
            ifstream checkAccFile(save);
            if (!checkAccFile)
            {
                cout << "Account Not Found!" << endl;
                return;
            }
            checkAccFile.close();

            cout << "----------------------------" << endl;
            cout << "Enter Your Registered Mobile No: ";
            getline(cin, mobile);

            ifstream mobileFile(check_mobile);
            getline(mobileFile, m); // Read mobile from file
            mobileFile.close();

            if (m == mobile)
            {
                cout << "----------------------------" << endl;
                cout << "Set New Pin: ";
                cin >> pin;

                ofstream changePinFile(pin1);
                changePinFile << pin;
                changePinFile.close();

                cout << "Pin Changed Successfully." << endl;
            }
            else
            {
                cout << "----------------------------" << endl;
                cout << "Mobile Number Mismatch. Try Again!" << endl;
            }
        }
        else if (num == 2)
        {
            cout << "Enter Your Account No: ";
            getline(cin, acc);
            save = acc + "_Account_No.txt"; // File that represents the account
            pin1 = acc + "_Pin.txt";        // File to store PIN
            check_mobile = acc + "_Mobile.txt";
            ifstream check_account(save);
            if (check_account)
            {
                check_account.close();

                cout << "----------------------------" << endl;
                cout << "Enter Your Pin" << endl;
                cin >> pin3;
                ifstream Pin_Check(pin1);
                Pin_Check >> pin;
                cout << pin << endl;
                Pin_Check.close();

                if (pin3 == pin)
                {
                    cout << "----------------------------" << endl;
                    cin.ignore();
                    cout << "Enter Your Old Mobile No" << endl;
                    ;
                    string m_no;
                    getline(cin, m_no);
                    ifstream check_m(check_mobile);
                    string c_m;
                    check_m >> c_m;
                    if (c_m == m_no)
                    {
                        check_m.close();
                        cout << "----------------------------" << endl;
                        cout << "Set New Mobile No" << endl;
                        string new_m;
                        getline(cin, new_m);
                        ofstream set_mobile(check_mobile);
                        set_mobile << new_m;
                        set_mobile.close();
                        cout << "Mobile No Set Sucessfully" << endl;
                    }
                    else
                    {
                        cout << "----------------------------" << endl;
                        cout << "Wrong Mobile No!" << endl;
                    }
                }
                else
                {
                    cout << "----------------------------" << endl;
                    cout << "Incorrect Pin!" << endl;
                }
            }
            else
            {
                cout << "----------------------------" << endl;
                cout << "Account Not Found!" << endl;
            }
        }
        else
        {
            cout << "----------------------------" << endl;
            cout << "Invalid Option Selected." << endl;
        }
    }
};

class Options : public New_account, public View_balance, public Deposit_or_withdrawal, public Detail, public Send_Money, public Setting
{
    int num;

public:
    void Function1()
    {
        cout << "1. New Account" << endl;
        cout << "2. View Balance" << endl;
        cout << "3. Deposit/Withdrawal" << endl;
        cout << "4. View Account Information" << endl;
        cout << "5. Send Money" << endl;
        cout << "6. Setting" << endl;
        cout << "Choose Any Option" << endl;
        cin >> num;
        cin.ignore();
        Function();
    }
    void Function(void)
    {
        if (num == 1)
        {
            Save();
            Creating_Account();
        }
        else if (num == 2)
        {
            input();
        }
        else if (num == 3)
        {
            Input2();
        }
        else if (num == 4)
        {
            Display();
        }
        else if (num == 6)
        {
            display();
        }
        else if (num == 5)
        {

            Sender_fun();
        }
        else
        {
            cout << "Invaild Option Selected!" << endl;
        }
    }
};

int main()
{
    Options Fun;
    Fun.Function1();

    return 0;
}