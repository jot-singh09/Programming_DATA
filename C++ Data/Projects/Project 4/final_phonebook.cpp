#include <iostream> // main Liabrary Function
#include <cstdio>   // useing this we do printf & scanf
#include <iomanip>  // use for text manuplating
#include <cstring>  // use for   string
#include <fstream>  // for file handling
#include <unistd.h> // for sleep

using namespace std; // for string

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
        cin.ignore();
        getline(cin, save_open);

        save_file = save_open + "_Detail_.txt";
        display = "display_.txt";
        mobile = save_open + "_mobile_.txt";
        all_ph = save_open + "_display_.txt";
        overwriteadd = save_open + "_count_.txt";

        ifstream File1(save_file);

        // -------------------------------------------------
        // IF FILE ALREADY EXISTS
        // -------------------------------------------------
        if (File1)
        {
            cout << "This Contact Name Already Exists\n\n";
            cout << "Want to Overwrite it? (Y/N)\n";
            cout << setw(4) << "Y" << setw(15) << "N" << endl;
            cin >> check;

            if (check == "y" || check == "Y")
            {
                // Read count
                ifstream read(overwriteadd);
                int num = 0;
                read >> num;
                read.close();

                cout << "\nDuplicate Contact Available:\n";
                cout << save_open << "(0)" << endl;

                for (int i = 1; i <= num; i++)
                {
                    cout << save_open << "(" << i << ")" << endl;
                }

                cout << "\nSelect Contact number starting from (0): ";
                cin >> enter_num;

                int selected = stoi(enter_num);

                // ------------------------------------------------------------
                // CASE: (0)  → Overwrite the main file
                // ------------------------------------------------------------
                if (selected == 0)
                {
                    cout << "Enter The Phone Number" << endl;
                    cin >> p_no;
                    cout << "Enter The Email" << endl;
                    cin.ignore();
                    getline(cin, email);

                    ofstream zero(save_file);
                    zero << "--------------------------------------------------" << endl;
                    zero << "name " << setw(15) << "phone" << setw(16) << "email" << endl;
                    zero << save_open << setw(18) << p_no << setw(29) << email << endl;
                    zero.close();

                    ofstream zero1(mobile);
                    zero1 << p_no << endl;
                    zero1.close();
                }
                // ------------------------------------------------------------
                // CASE: 1,2,3,... → Overwrite duplicate file
                // ------------------------------------------------------------
                else
                {
                    int index = selected;

                    string suff = to_string(index);
                    new_overwite = save_open + "_Detail_" + suff + "_.txt";
                    new_mobile = save_open + "_mobile_" + suff + "_.txt";

                    cout << "Enter The Phone Number" << endl;
                    cin >> p_no;
                    cout << "Enter The Email" << endl;
                    cin.ignore();
                    getline(cin, email);

                    // Write overwrite file
                    ofstream add_phone(new_overwite);
                    add_phone << "--------------------------------------------------" << endl;
                    add_phone << "name " << setw(15) << "phone" << setw(16) << "email" << endl;
                    add_phone << save_open << setw(18) << p_no << setw(29) << email << endl;
                    add_phone.close();

                    // Append display
                    ifstream read_dis(display);
                    stringstream buffer;
                    buffer << read_dis.rdbuf();
                    string dis0 = buffer.str();
                    read_dis.close();

                    ofstream display_all(display);
                    display_all << dis0;
                    display_all << save_open << setw(17) << p_no << endl;
                    display_all.close();

                    ofstream mobile_add(new_mobile);
                    mobile_add << p_no << endl;
                    mobile_add.close();
                }
            }
            // =====================================================================
            // If user selects "N" → Create a new duplicate file
            // =====================================================================
            else
            {
                ifstream readcount(overwriteadd);
                int last = -1;
                readcount >> last;
                readcount.close();

                int next = last + 1;

                ofstream count(overwriteadd);
                count << next;
                count.close();

                string s = to_string(next);
                overwrite = save_open + "_Detail_" + s + "_.txt";
                over = save_open + "_mobile_" + s + "_.txt";

                cout << "Enter The Phone Number" << endl;
                cin >> p_no;
                cout << "Enter The Email" << endl;
                cin.ignore();
                getline(cin, email);

                ofstream add_phone(overwrite);
                add_phone << "--------------------------------------------------" << endl;
                add_phone << "name " << setw(15) << "phone" << setw(16) << "email" << endl;
                add_phone << save_open << setw(18) << p_no << setw(29) << email << endl;
                add_phone.close();

                // Update display
                ifstream read_dis(display);
                stringstream buffer;
                buffer << read_dis.rdbuf();
                string dis0 = buffer.str();
                read_dis.close();

                ofstream display_all(display);
                display_all << dis0;
                display_all << save_open << setw(17) << p_no << endl;
                display_all.close();

                ofstream mobile_add(over);
                mobile_add << p_no << endl;
                mobile_add.close();
            }
        }

        // =====================================================================
        // FILE DOES NOT EXIST → CREATE NEW
        // =====================================================================
        else
        {
            cout << "Enter The Phone Number" << endl;
            cin >> p_no;
            cout << "Enter The Email" << endl;
            cin.ignore();
            getline(cin, email);

            ofstream add_phone(save_file);
            add_phone << "--------------------------------------------------" << endl;
            add_phone << "name " << setw(15) << "phone" << setw(16) << "email" << endl;
            add_phone << save_open << setw(18) << p_no << setw(29) << email << endl;
            add_phone.close();

            // Update count
            ifstream readcount(overwriteadd);
            int last = -1;
            readcount >> last;
            readcount.close();

            int next = last + 1;

            ofstream count(overwriteadd);
            count << next;
            count.close();

            // Update display
            ifstream read_dis(display);
            stringstream buffer;
            buffer << read_dis.rdbuf();
            string dis0 = buffer.str();
            read_dis.close();

            ofstream display_all(display);
            display_all << dis0;
            display_all << save_open << setw(17) << p_no << endl;
            display_all.close();

            ofstream mobile_add(mobile);
            mobile_add << p_no << endl;
            mobile_add.close();
        }
    }
};

class delete_no
{
    string name = "karan", save, delete_filedetail, delete_filemobile;
    string conform, save1, save2;
    string check_file2, check_file3;

public:
    void delete_(void)
    {
        //---- enter the name for file----
        // cout << "Enter The Name" << endl;
        // cin.ignore();
        // getline(cin, name);

        save = name + "_Detail_.txt";
        save1 = name + "_count_.txt";
        save2 = name + "_mobile_.txt";
        ifstream checkfile_detail;   // any name for set
        checkfile_detail.open(save); // replace File to your set name
        if (checkfile_detail)
        {
            ifstream checkfile_mobile;    // any name for set
            checkfile_mobile.open(save2); // replace File to your set name
            if (checkfile_mobile)
            {
                checkfile_detail.close(); // replace the File to your set name
                checkfile_mobile.close(); // replace the File to your set name
                ifstream checkcount;
                checkcount.open(save1);
                int num;
                checkcount >> num;

                if (num == 0)
                {
                    checkcount.close();
                    cout << "Enter Conform to Delete Contact" << endl;
                    cin >> conform;
                    if (conform == "Conform" || conform == "conform" || conform == "CONFORM")
                    {
                        delete_filedetail = save; // converint save data in new varible
                        delete_filemobile = save2;

                        if (remove(delete_filedetail.c_str()) == 0)
                        {
                            if (remove(delete_filemobile.c_str()) == 0)
                            {
                            }
                            cout << "Contact'" << "' deleted successfully." << endl;
                        }
                        else
                        {
                            perror("Error deleting file");
                        }
                    }
                    else
                    {
                        cout << "Try again!" << endl;
                    }
                }
                else if (num != 0)
                {
                    int loop_num = num;
                    cout << "\nDuplicate Contact Available:\n";
                    for (int i = 0; i <= loop_num; i++)
                    {
                        cout << name << "(" << i << ")" << endl;
                    }
                    int enter;
                    cout << "\nSelect Name number starting from (0): ";
                    cin >> enter;
                    cin.ignore();

                    string enter_num1 = to_string(enter);

                    check_file2 = name + "_Detail_" + enter_num1 + "_.txt";
                    check_file3 = name + "_mobile_" + enter_num1 + "_.txt";

                    if (enter == 0)
                    {
                        cout << "Enter Conform to Delete Contact" << endl;
                        cin >> conform;
                        if (conform == "Conform" || conform == "conform" || conform == "CONFORM")
                        {
                            delete_filedetail = save; // converint save data in new varible
                            delete_filemobile = save2;
                            cout << delete_filedetail << endl;
                            if (remove(delete_filedetail.c_str()) == 0)
                            {
                                if (remove(delete_filemobile.c_str()) == 0)
                                {
                                }
                                cout << "Contact'" << "' deleted successfully." << endl;
                            }
                            else
                            {
                                perror("Error deleting file");
                            }
                        }
                        else
                        {
                            cout << "Try again!" << endl;
                        }
                    }
                    else if (enter != 0)
                    {
                        cout << "Enter Conform to Delete Contact" << endl;
                        cin >> conform;
                        if (conform == "Conform" || conform == "conform" || conform == "CONFORM")
                        {
                            delete_filedetail = save; // converint save data in new varible
                            delete_filemobile = save2;
                            cout << delete_filedetail << endl;
                            if (remove(check_file2.c_str()) == 0)
                            {
                                if (remove(check_file3.c_str()) == 0)
                                {
                                }
                                cout << "Contact'" << "' deleted successfully." << endl;
                            }
                            else
                            {
                                perror("Error deleting file");
                            }
                        }
                        else
                        {
                            cout << "Try again!" << endl;
                        }
                    }
                    else
                    {
                        cout << "Something went Wrong!" << endl;
                    }
                }
            }
            else
            {
                cout << " Contact Not Found!" << endl;
            }
        }
        else
        {
            cout << " Contact Not Found!" << endl;
        }
    }
};

class Search_mobile
{
    string file, file_input;
    string overwriteadd, overwrite, enter_num;
    string file3;

public:
    void search(void)
    {
        cout << "Enter The Name" << endl;
        cin.ignore();
        getline(cin, file_input);

        file = file_input + "_count_.txt";
        ifstream readcount;   // any name for set
        readcount.open(file); // replace File to your set name
        int read;

        file3 = file_input + "_Detail_.txt";
        readcount >> read;
        ifstream File;    // any name for set
        File.open(file3); // replace File to your set name
        if (!File)
        {
            cout << "Name Not Found!" << endl;
        }
        else
        {

            File.close(); // replace the File to your set name

            for (int i = 1; i <= read; i++)
            {
                cout << file_input << "(" << i << ")" << endl;
            }
            if (read == 0)
            {
                string file2;
                file2 = file_input + "_mobile_" + ".txt";

                ifstream readm;    // any name for set
                readm.open(file2); // replace File to your set name
                string m_no1;
                readm >> m_no1;
                cout << "The Number is :" << m_no1 << endl;
                readm.close(); // replace the File to your set name
            }
            else
            {
                cout << "\nDuplicate Contact Available:\n";
                cout << file_input << "(0)" << endl;

                readcount.close(); // replace the File to your set name
                cout << "\nSelect Name number starting from (0): ";
                int enter_num;
                cin >> enter_num;
                string new_file_input = to_string(enter_num), file1;
                if (enter_num != 0)
                {
                    file1 = file_input + "_mobile_" + new_file_input + "_.txt";
                    ifstream readmobile;    // any name for set
                    readmobile.open(file1); // replace File to your set name
                    string m_no;
                    readmobile >> m_no;
                    cout << "The Number is :" << m_no << endl;
                    readmobile.close(); // replace the File to your set name
                }
                else if (enter_num == 0)
                {
                    string file2;
                    file2 = file_input + "_mobile_" + ".txt";

                    ifstream readm;    // any name for set
                    readm.open(file2); // replace File to your set name
                    string m_no1;
                    readm >> m_no1;
                    cout << "The Number is :" << m_no1 << endl;
                    readm.close(); // replace the File to your set name
                }
            }
        }
    }
};

class display_all
{
    string file;

public:
    void Display()
    {
        file = "display_.txt";

        ifstream File;
        File.open(file);
        string line;
        while (getline(File, line))
        {
            cout << line << endl; // print each line
        }

        File.close();
    }
};

class options : public add, public delete_no, public Search_mobile, public display_all
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
        switch (num)
        {
        case 1:
            add_ph();
            break;
        case 2:
            delete_();
            break;
        case 3:
            search();
            break;
        case 4:
            Display();
            break;

        default:
            cout << "Something went wrong" << endl;
            break;
        }
    }
};

int main()
{
       options obj;
       obj.select();
    
    return 0;
}