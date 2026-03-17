#include <iostream>  // main Liabrary Function
#include <cstdio>    // useing this we do printf & scanf
#include <iomanip>   // use for text manuplating
#include <cstring>   // use for   string
#include <fstream>   // for file handling
#include <unistd.h>  // for sleep
using namespace std; // for string

class options
{
    int num;

public:
    void select()
    {
        cout << "1. Add New Mobile No :" << endl;
        cout << "2. Delete Mobile No :" << endl;
        cout << "3. Search Mobile No :" << endl;
        cout << "4. Display All Mobile No :" << endl;
        cin >> num;
    }
};

class add
{
    string p_no, name, email;
    string save_open, save_file, all_ph;
    string check, overwrite;
    string overwriteadd;
    string display, mobile, over, new_overwite;
    string enter_num, new_mobile;

public:
    void add_ph()
    {
        cout << "Enter The Name" << endl;
        getline(cin, save_open);

        save_file = save_open + "_Detail_.txt";
        display = "display_.txt";
        mobile = save_open + "_mobile_.txt";
        all_ph = save_open + "_display_.txt";
        overwriteadd = save_open + "_count_.txt";

        ifstream File1(save_file);

        // --------------------------
        // IF File Already Exists
        // --------------------------
        if (File1)

        {

            cout << "This Contact Name Already Exists\n\n";
            cout << "Want to Overwrite it? (Y/N)\n";
            cout << setw(4) << "Y" << setw(15) << "N" << endl;
            cin >> check;

            if (check == "y" || check == "Y")
            {
                // checking same name file like karan(1),2,3,4,etc

                ifstream read(overwriteadd);
                int num;
                read >> num;
                read.close();
               

                cout << save_open << endl;
                for (int i = 1; i <= num; i++)
                {
                    cout << save_open << "(" << i << ")" << endl;
                }

                cout << "Select Name number starting from (0)" << endl;
                cin >> enter_num;

                if (enter_num=="0")
                { cout << "Enter The Phone Number" << endl;
                cin >> p_no;
                cout << "Enter The Email" << endl;
                cin.ignore();
                getline(cin, email);
                    ofstream zero;//any name for set
                    zero.open(save_file);//replace File to your set name 
                     zero << "--------------------------------------------------" << endl;
                zero<< "name " << setw(15) << "phone" << setw(16) << "email" << endl;
                zero << save_open << setw(18) << p_no << setw(29) << email << endl;
                    zero.close();//replace the File to your set name 
                     ofstream zero1;//any name for set
                     zero1.open(mobile);//replace File to your set name 
                      zero1 << p_no << endl;
                     zero1.close();//replace the File to your set name 
                      
                }
                else if (enter_num!="0")
                {
                     
                int num1 = stoi(enter_num);
                int num2 = num1 - 1;
                string num3 = to_string(num2);
                // new file for rename file
                
                new_overwite = save_open + "_Detail_" + num3 + "_.txt";
                new_mobile= save_open + "_mobile_" + num3 + "_.txt";

                // ---- INPUT ----
                cout << "Enter The Phone Number" << endl;
                cin >> p_no;
                cout << "Enter The Email" << endl;
                cin.ignore();
                getline(cin, email);

                // ---- WRITE OVERWRITE FILE ----
                ofstream add_phone(new_overwite);
                add_phone << "--------------------------------------------------" << endl;
                add_phone << "name " << setw(15) << "phone" << setw(16) << "email" << endl;
                add_phone << save_open << setw(18) << p_no << setw(29) << email << endl;
                add_phone.close();

                // ---- READ FULL DISPLAY FILE ----
                ifstream read_dis(display);
                stringstream buffer;
                buffer << read_dis.rdbuf();
                string dis0 = buffer.str();
                read_dis.close();

                // ---- WRITE NEW DISPLAY ----
                ofstream display_all(display);
               
                display_all << dis0;
                display_all << save_open << setw(17) << p_no << endl;
                display_all.close();
                // --- mobile adding ---
                ofstream mobile_add;     // any name for set
                mobile_add.open(new_mobile); // replace File to your set name
                mobile_add << p_no << endl;
                mobile_add.close(); // replace the File to your set name
                }
              
            }
            else // (N)
            {
                // ---- READ COUNT ----
                ifstream readcount(overwriteadd);
                int i = -1;
                readcount >> i;
                readcount.close();

                int j = i + 1;

                // ---- UPDATE COUNT ----
                ofstream count(overwriteadd);
                count << j;
                count.close();

                // ---- NEW FILE NAME ----
                string d = to_string(j);
                overwrite = save_open + "_Detail_" + d + "_.txt";
                over = save_open + "_mobile_" + d + "_.txt";

                // ---- INPUT ----
                cout << "Enter The Phone Number" << endl;
                cin >> p_no;
                cout << "Enter The Email" << endl;
                cin.ignore();
                getline(cin, email);

                // ---- WRITE NEW FILE ----
                ofstream add_phone(overwrite);
                add_phone << "--------------------------------------------------" << endl;
                add_phone << "name " << setw(15) << "phone" << setw(16) << "email" << endl;
                add_phone << save_open << setw(18) << p_no << setw(29) << email << endl;
                add_phone.close();

                // ---- READ FULL DISPLAY ----
                ifstream read_dis(display);
                stringstream buffer;
                buffer << read_dis.rdbuf();
                string dis0 = buffer.str();
                read_dis.close();

                // ---- REWRITE DISPLAY ----
                ofstream display_all(display);
              
                display_all << dis0;
                display_all << save_open << setw(17) << p_no << endl;
                display_all.close();
                // --- mobile adding ---

                ofstream mobile_add;   // any name for set
                mobile_add.open(over); // replace File to your set name
                mobile_add << p_no << endl;
                mobile_add.close(); // replace the File to your set name
            }
        }

        // ------------------------------
        // If  File Does NOT Exist
        // ------------------------------
        else
        {
            cout << "Enter The Phone Number" << endl;
            cin >> p_no;
            cout << "Enter The Email" << endl;
            cin.ignore();
            getline(cin, email);

            // ---- CREATE NEW FILE ----
            ofstream add_phone(save_file);
            add_phone << "--------------------------------------------------" << endl;
            add_phone << "name " << setw(15) << "phone" << setw(16) << "email" << endl;
            add_phone << save_open << setw(18) << p_no << setw(29) << email << endl;
            add_phone.close();

            // ---- READ AND UPDATE COUNT ----
            ifstream readcount(overwriteadd);
            int i = -1;
            readcount >> i;
            readcount.close();

            int j = i + 1;

            ofstream count(overwriteadd);
            count << j;
            count.close();

            // ---- READ FULL DISPLAY ----
            ifstream read_dis(display);
            stringstream buffer;
            buffer << read_dis.rdbuf();
            string dis0 = buffer.str();
            read_dis.close();

            // ---- REWRITE DISPLAY ----
            ofstream display_all(display);
   
            display_all << dis0;
            display_all << save_open << setw(17) << p_no << endl;
            display_all.close();
            // --- mobile adding ---

            ofstream mobile_add;     // any name for set
            mobile_add.open(mobile); // replace File to your set name
            mobile_add << p_no << endl;
            mobile_add.close(); // replace the File to your set name
        }
    }
};
class delete_no
{
    string name, save, save_name;
    string conform;

public:
    void delete_(void)
    {
        //---- enter the name for file----
        cout << "Enter The Name" << endl;
        getline(cin, name);
        save = name + "_Detail_.txt";
        // --- Deleting the file---

        // --- cheking the file is exsist---

        string hi = save;
        ifstream File; // any name for set
        File.open(save);

        //--- if file exist---

        if (File)
        {
            File.close(); // replace the File to your set name
            cout << "Enter Conform To Delete file.." << endl;
            cin >> conform;

            //--- if enter conform wright---

            if (conform == "Conform" || conform == "conform")
            {

                //-- file deleteing function---

                if (remove(hi.c_str()) == 0)
                {
                    cout << "File '" << "' deleted successfully." << endl;
                }
                else
                {
                    perror("Error deleting file");
                }
            }

            //-- if dont write conform wright

            else
            {
                cout << "Try Again!" << endl;
            }
        }

        //--- if file not exist---

        else
        {
            cout << "File Not Found!" << endl;
        }
    }
};

int main()
{
    add obj;
    obj.add_ph();
    return 0;
}