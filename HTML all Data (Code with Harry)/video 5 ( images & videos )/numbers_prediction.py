# ''''
# 0=3%            (n0)
# 1=2%            (n1)
# 2=2%            (n2)
# 3=2%            (n3)
# 4=2%            (n4)
# 5=3%            (n5)
# 6=2%            (n6)
# 7=2%            (n7)
# 8=2%            (n8)
# 9=2%            (n9)
# 10=3%           (n10)

# if each user invest $1

# '''

# n0=int(input("Enter The value of zero:"))
# n1=int(input("Enter The value of first:"))
# n2=int(input("Enter The value of secound:"))
# n3=int(input("Enter The value of third:"))
# n4=int(input("Enter The value of fourth:"))
# n5=int(input("Enter The value of fifth:"))
# n6=int(input("Enter The value of sixth:"))
# n7=int(input("Enter The value of seventh:"))
# n8=int(input("Enter The value of eighth:"))
# n9=int(input("Enter The value of ninth:"))
# n10=int(input("Enter The value of tenth:"))

# muln0=n0+n0
# muln1=n1+n1
# muln2=n2+n2
# muln3=n3+n3
# muln4=n4+n4
# muln5=n5+n5
# muln6=n6+n6
# muln7=n7+n7
# muln8=n8+n8
# muln9=n9+n9
# muln10=n10+n10

# if(n0>n1 and n0>n2 and n0>n3 and n0>n4 and n0>n5 and n0>6 and n0>n7 and n0>n8 and n0>n9 and n0>10):
#     sum_num=n1+n2+n3+n4+n5+n6+n7+n8+n9
#     if(sum_num>muln0):
#         user_distribution=(n0*20)/100 # distribution in user 
#         print("Distributed in users :",user_distribution)
#         sum_num-user_distribution # subtract the user distribution in total of green and voilet

#         distributed_levels=(n0*30)/100 # disbtribution in levels
#         print(f"Fund Collect for levels :{distributed_levels}" )
#         eachuser_distribution=(distributed_levels*n0)/100 # distribute in each red user levels
#         print(f"Fund Distribute in all red user level : {eachuser_distribution}")
#         sum_num- distributed_levels # subtract the level distribution in total of green and voilet
#         print("\n")
#         print(f"The Rest amount of admin is:{sum_num}")
#         print("\n")

#         sum_num=n0+n2+n3+n4+n5+n6+n7+n8+n9
#     elif(sum_num>muln1):
#         user_distribution=(n1*20)/100 # distribution in user 
#         print("Distributed in users :",user_distribution)
#         sum_num-user_distribution # subtract the user distribution in total of green and voilet

#         distributed_levels=(n1*30)/100 # disbtribution in levels
#         print(f"Fund Collect for levels :{distributed_levels}" )
#         eachuser_distribution=(distributed_levels*n1)/100 # distribute in each red user levels
#         print(f"Fund Distribute in all red user level : {eachuser_distribution}")
#         sum_num- distributed_levels # subtract the level distribution in total of green and voilet
#         print("\n")
#         print(f"The Rest amount of admin is:{sum_num}")
#         print("\n")




# Percentage rates for each number (20% or 30%)
PERCENTAGE_MAP = {
    0: 20,   # 20%
    1: 20,   # 20%
    2: 20,   # 20%
    3: 20,   # 20%
    4: 20,   # 20%
    5: 30,   # 30%
    6: 20,   # 20%
    7: 20,   # 20%
    8: 20,   # 20%
    9: 20,   # 20%
    10: 30   # 30%
}

def main():
    print("=" * 80)
    print("COMPLETE NUMBER DISTRIBUTION SYSTEM")
    print("=" * 80)
    
    # Get user counts and investments
    user_counts = {}
    all_investments = {}
    all_totals = {}
    
    for i in range(11):
        user_counts[i] = int(input(f"Enter number of users for n{i}: "))
        investments = []
        total = 0
        if user_counts[i] > 0:
            print(f"\n--- Enter investments for n{i} users ---")
            for j in range(user_counts[i]):
                amount = float(input(f"Enter investment amount for n{i} user {j+1}: $"))
                investments.append(amount)
                total += amount
        all_investments[i] = investments
        all_totals[i] = total
    
    # Display totals
    print("\n" + "=" * 80)
    print("TOTAL INVESTMENTS")
    print("=" * 80)
    for i in range(11):
        print(f"n{i}: ${all_totals[i]:.2f}")
    
    # Find all smallest numbers (handle ties)
    min_value = min(all_totals.values())
    smallest_numbers = [num for num, total in all_totals.items() if total == min_value]
    
    print("\n" + "=" * 80)
    print("DISTRIBUTION CALCULATION")
    print("=" * 80)
    
    if len(smallest_numbers) > 1:
        print(f"Multiple numbers have the smallest value (${min_value:.2f}): {smallest_numbers}")
        print("Processing the first smallest number:", smallest_numbers[0])
    
    smallest_num = smallest_numbers[0]
    smallest_total = all_totals[smallest_num]
    
    # Calculate sum of all other numbers
    other_numbers = [num for num in range(11) if num != smallest_num]
    sum_others = sum(all_totals[num] for num in other_numbers)
    
    print(f"\nSmallest group: n{smallest_num} with ${smallest_total:.2f}")
    print(f"Sum of all other numbers: ${sum_others:.2f}")
    print(f"Double of smallest: ${smallest_total * 2:.2f}")
    
    if sum_others > (smallest_total * 2):
        print(f"\n✓ Distribution condition satisfied: {sum_others:.2f} > {smallest_total * 2:.2f}")
        
        # User distribution (20% of smallest total)
        user_distribution = (smallest_total * 20) / 100
        print(f"\nUser Distribution (20% of ${smallest_total:.2f}): ${user_distribution:.2f}")
        
        # Distribute to individual users proportionally
        if smallest_total > 0:
            print(f"\n--- Individual User Distribution for n{smallest_num} ---")
            for i, investment in enumerate(all_investments[smallest_num]):
                user_share = (investment / smallest_total) * user_distribution
                print(f"  User {i+1} (invested ${investment:.2f}): Receives ${user_share:.2f}")
        else:
            print(f"No users to distribute to for n{smallest_num}")
        
        # Level distribution (30% of smallest total)
        level_distribution = (smallest_total * 30) / 100
        print(f"\nLevel Distribution (30% of ${smallest_total:.2f}): ${level_distribution:.2f}")
        
        # Distribute level funds to users
        if smallest_total > 0:
            print(f"\n--- Level Distribution for n{smallest_num} users ---")
            for i, investment in enumerate(all_investments[smallest_num]):
                level_share = (investment / smallest_total) * level_distribution
                print(f"  User {i+1} Level Distribution: ${level_share:.2f}")
        
        # Calculate admin's share
        admin_share = sum_others - user_distribution - level_distribution
        print(f"\nAdmin's Share: ${admin_share:.2f}")
        print(f"  (${sum_others:.2f} - ${user_distribution:.2f} - ${level_distribution:.2f})")
        
    else:
        print(f"\n✗ Distribution condition NOT satisfied: {sum_others:.2f} ≤ {smallest_total * 2:.2f}")
        print(f"All amount (${sum_others:.2f}) goes to admin.")
    
    # Show detailed comparison
    print("\n" + "=" * 80)
    print("DETAILED COMPARISON OF ALL NUMBERS")
    print("=" * 80)
    
    # Check which numbers satisfy the distribution condition individually
    print("\nChecking each number's distribution condition:")
    for i in range(11):
        current_total = all_totals[i]
        other_sum = sum(all_totals[j] for j in range(11) if j != i)
        
        if other_sum > (current_total * 2):
            print(f"  n{i}: ${current_total:.2f} - Condition SATISFIED (${other_sum:.2f} > ${current_total * 2:.2f})")
        else:
            print(f"  n{i}: ${current_total:.2f} - Condition NOT satisfied (${other_sum:.2f} ≤ ${current_total * 2:.2f})")

if __name__ == "__main__":
    main()
