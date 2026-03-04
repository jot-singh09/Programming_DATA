#include <iostream>  // main Liabrary Function
#include <cstdio>    // useing this we do printf & scanf
#include <iomanip>   // use for text manuplating
#include <cstring>   // use for   string
#include <fstream>   // for file handling
#include <unistd.h>  // for sleep
using namespace std; // for string

class Options
{
public:
    void options()
    {
        cout << "1. Add New Parking :" << endl;
        cout << "2. Exit The Vehical:" << endl;
        cout << "3. Check The Sloat :" << endl;
    }
};

class Add_new_parking
{
    string M_no;
    string v_no, date, time;

    float par_Time;
    int par_num;   // this select the parking days or num
    float par_cal; // this cal days in hour
    string par_fees_file;
    string vehnumber, vehnosave;

public:
    void new_parking(void)
    {
        string file_open, file_save;

          cout << "Enter Vehicle Number: (e.g., HR-38-B-3243) ";
        cin >> file_open;
        file_save = file_open + "_vehical_info_.txt";
        par_fees_file = file_open + "_fees_cal.txt";
        vehnumber = file_open + "_vehical_Number.txt";
        ifstream File; // any name for set
        File.open(file_save);
        if (File)
        {
            cout << "The File Is Arleady Exist!" << endl;
            File.close(); // replace the File to your set name
        }

        else
        {

         

            cout << "Enter Mobile Number: ";
            cin >> M_no;
            cout << "Enter Parking Time (e.g., 10:30 AM): ";
            getline(cin, time);
            cin.ignore();
            cout << "Enter Parking Date (e.g., 30/10/2025): ";
            getline(cin, date);

            cout << "Select the Parking time " << endl;
            cout << "1. Days" << endl;
            cout << "2 Hours" << endl;
            cin >> par_num;
            if (par_num == 1)
            {
                cout << "Enter The Days of Parking" << endl; // entering the days of parking
                cin >> par_Time;
                par_cal = par_Time * 24; // converting The Paking Days into Hours
            }
            else if (par_num == 2)
            {

                cout << "Enter The Parking Hours " << endl;
                cin >> par_Time;
                par_cal = par_Time;
            }

            ofstream add_par_detail;        // any name for set
            add_par_detail.open(file_save); // replace File to your set name
            add_par_detail << "The Vehical no is :" << file_open << endl;
            add_par_detail << "The Mobile no is :" << M_no << endl;
            add_par_detail << "The Time is :" << time << endl;
            add_par_detail << "The Date is :" << date << endl;
            add_par_detail << "The Parking Time is : " << par_Time << endl;
            cout << "The Parking fees is :" << par_cal * 20 << endl;
            add_par_detail.close(); // replace the File to your set name

            ofstream fees;            // any name for set
            fees.open(par_fees_file); // replace File to your set name
            fees << par_cal * 20 << endl << "The Parking fess for " << par_cal << "Hours" << endl;
            fees.close(); // replace the File to your set name

            ofstream vehno;        // any name for set
            vehno.open(vehnumber); // replace File to your set name
            vehno << v_no << endl;
            vehno.close(); // replace the File to your set name
        }
    }
};

class Exit_vehical
{
    
    string feesacess;

public:
    void vehical_exitfun()
    {
        string file_open, file_save, par_fees_file, veh_numbersave;

        cout << "Enter The Vehical Number " << endl;
        cin >> file_open;
        file_save = file_open + "_vehical_info_.txt";
        par_fees_file = file_open + "_fees_cal.txt";
        veh_numbersave = file_open + "_vehical_Number.txt";
        ifstream File;//any name for set
        File.open(veh_numbersave);//replace File to your set name 
        if (File)
        {
            File.close();//replace the File to your set name 
            ifstream fees;//any name for set
            fees.open(par_fees_file);//replace File to your set name 
            fees>>feesacess;
          
            cout << "The Parking Fees is :" << feesacess  <<   endl;
            fees.close();//replace the File to your set name 
             
            ofstream date_ease;// erasing all data of file without information 
            date_ease.open(par_fees_file);//replace File to your set name 
         date_ease<<"0"<<endl;
            date_ease.close();//replace the File to your set name 
            } 
             
            else  {
                cout << "File Does't Exist!" <<   endl;
            }
            
        }
      
        
        

        
        } ;
    


int main()
{
    
     Exit_vehical obj1;
  obj1.vehical_exitfun();

    return 0;
}