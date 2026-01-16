def number_prediction_system():
    """Number Prediction System (n0 to n10)"""
    # Percentage rates for each number (all 100% for user distribution)
    PERCENTAGE_MAP = {
        0: 100,   # 100%
        1: 100,   # 100%
        2: 100,   # 100%
        3: 100,   # 100%
        4: 100,   # 100%
        5: 100,   # 100%
        6: 100,   # 100%
        7: 100,   # 100%
        8: 100,   # 100%
        9: 100,   # 100%
        10: 100   # 100%
    }
    
    print("=" * 80)
    print("NUMBER PREDICTION SYSTEM (n0 to n10)")
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
        
        # Get the correct percentage for this number
        user_percentage = PERCENTAGE_MAP[smallest_num]
        
        # User distribution (100% of smallest total)
        user_distribution = (smallest_total * user_percentage) / 100
        print(f"\nUser Distribution ({user_percentage}% of ${smallest_total:.2f}): ${user_distribution:.2f}")
        
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


def nft_prediction_system():
    """NFT Prediction System (Red/Green/Violet)"""
    # Percentage distribution rates
    RED_RATE = 2  # 2%
    GREEN_RATE = 2  # 2%
    VIOLET_RATE = 3  # 3%
    
    print("=" * 80)
    print("NFT PREDICTION SYSTEM (Red/Green/Violet)")
    print("=" * 80)
    
    # Get number of users for each level
    red_count = int(input("Enter The Number of Red Users: "))
    green_count = int(input("Enter The Number of Green Users: "))
    violet_count = int(input("Enter The Number of Violet Users: "))
    
    # Lists to store individual user investments
    red_users = []
    green_users = []
    violet_users = []
    
    # Collect individual user investments for Red level
    print("\n--- Enter Red User Investments ---")
    total_red = 0
    for i in range(red_count):
        amount = float(input(f"Enter investment for Red User {i+1}: $"))
        red_users.append(amount)
        total_red += amount
    
    # Collect individual user investments for Green level
    print("\n--- Enter Green User Investments ---")
    total_green = 0
    for i in range(green_count):
        amount = float(input(f"Enter investment for Green User {i+1}: $"))
        green_users.append(amount)
        total_green += amount
    
    # Collect individual user investments for Violet level
    print("\n--- Enter Violet User Investments ---")
    total_violet = 0
    for i in range(violet_count):
        amount = float(input(f"Enter investment for Violet User {i+1}: $"))
        violet_users.append(amount)
        total_violet += amount
    
    print(f"\nTotal Red Value: ${total_red}")
    print(f"Total Green Value: ${total_green}")
    print(f"Total Violet Value: ${total_violet}")
    print("\nIndividual User Investments:")
    print(f"Red Users: {red_users}")
    print(f"Green Users: {green_users}")
    print(f"Violet Users: {violet_users}")
    
    # Calculate doubled values for comparison
    mul_green = total_green + total_green
    mul_violet = total_violet + total_violet
    mul_red = total_red + total_red
    
    print("\n" + "="*50 + "\n")
    
    # Check if red is the smallest
    if total_red < total_green and total_red < total_violet:
        sum_predication = total_green + total_violet
        print(f"Total of others (Green + Violet): ${sum_predication}")
        print("\nRed is smallest group")
        
        if sum_predication > mul_red:
            # Calculate user distribution (20% of total red)
            user_distribution = (total_red * 20) / 100
            print(f"\nTotal Distributed to all users: ${user_distribution}")
            
            # Distribute to individual red users based on their investment
            print("\n--- Individual Red User Distribution ---")
            red_user_share = []
            for i, investment in enumerate(red_users):
                user_share = (investment / total_red) * user_distribution
                red_user_share.append(user_share)
                print(f"Red User {i+1} (invested ${investment}): Receives ${user_share:.2f}")
            
            # Calculate level distribution (30% of total red)
            distributed_levels = (total_red * 30) / 100
            print(f"\nFund Collected for levels: ${distributed_levels}")
            
            # Distribute level funds to red users
            print("\n--- Level Distribution for Red Users ---")
            for i, investment in enumerate(red_users):
                level_share = (investment / total_red) * distributed_levels
                print(f"Red User {i+1} Level Distribution: ${level_share:.2f}")
            
            # Calculate admin's share
            sum_predication -= user_distribution
            sum_predication -= distributed_levels
            print(f"\nThe Rest amount for admin is: ${sum_predication:.2f}")
        
        else:
            print("Not enough funds for distribution. All amount goes to admin.")
    
    # Check if green is the smallest
    elif total_green < total_red and total_green < total_violet:
        sum_predication = total_red + total_violet
        print(f"Total of others (Red + Violet): ${sum_predication}")
        print("\nGreen is smallest group")
        
        if sum_predication > mul_green:
            # Calculate user distribution (20% of total green)
            user_distribution = (total_green * 20) / 100
            print(f"\nTotal Distributed to all users: ${user_distribution}")
            
            # Distribute to individual green users based on their investment
            print("\n--- Individual Green User Distribution ---")
            green_user_share = []
            for i, investment in enumerate(green_users):
                user_share = (investment / total_green) * user_distribution
                green_user_share.append(user_share)
                print(f"Green User {i+1} (invested ${investment}): Receives ${user_share:.2f}")
            
            # Calculate level distribution (30% of total green)
            distributed_levels = (total_green * 30) / 100
            print(f"\nFund Collected for levels: ${distributed_levels}")
            
            # Distribute level funds to green users
            print("\n--- Level Distribution for Green Users ---")
            for i, investment in enumerate(green_users):
                level_share = (investment / total_green) * distributed_levels
                print(f"Green User {i+1} Level Distribution: ${level_share:.2f}")
            
            # Calculate admin's share
            sum_predication -= user_distribution
            sum_predication -= distributed_levels
            print(f"\nThe Rest amount for admin is: ${sum_predication:.2f}")
        
        else:
            print("Not enough funds for distribution. All amount goes to admin.")
    
    # Check if violet is the smallest
    elif total_violet < total_red and total_violet < total_green:
        sum_predication = total_red + total_green
        print(f"Total of others (Red + Green): ${sum_predication}")
        print("\nViolet is smallest group")
        
        if sum_predication > mul_violet:
            # Calculate user distribution (30% of total violet - assuming different rate for violet)
            user_distribution = (total_violet * 30) / 100
            print(f"\nTotal Distributed to all users: ${user_distribution}")
            
            # Distribute to individual violet users based on their investment
            print("\n--- Individual Violet User Distribution ---")
            violet_user_share = []
            for i, investment in enumerate(violet_users):
                user_share = (investment / total_violet) * user_distribution
                violet_user_share.append(user_share)
                print(f"Violet User {i+1} (invested ${investment}): Receives ${user_share:.2f}")
            
            # Calculate level distribution (30% of total violet)
            distributed_levels = (total_violet * 30) / 100
            print(f"\nFund Collected for levels: ${distributed_levels}")
            
            # Distribute level funds to violet users
            print("\n--- Level Distribution for Violet Users ---")
            for i, investment in enumerate(violet_users):
                level_share = (investment / total_violet) * distributed_levels
                print(f"Violet User {i+1} Level Distribution: ${level_share:.2f}")
            
            # Calculate admin's share
            sum_predication -= user_distribution
            sum_predication -= distributed_levels
            print(f"\nThe Rest amount for admin is: ${sum_predication:.2f}")
        
        else:
            print("Not enough funds for distribution. All amount goes to admin.")
    
    else:
        print("All groups have equal or no clear smallest group. All amount goes to admin.")
    
    # Summary of percentage distributions
    print("\n" + "="*50)
    print("SUMMARY OF PERCENTAGE DISTRIBUTIONS:")
    print(f"Red Users get: {RED_RATE}% of their investment")
    print(f"Green Users get: {GREEN_RATE}% of their investment")  
    print(f"Violet Users get: {VIOLET_RATE}% of their investment")
    print("="*50)


def main():
    print("=" * 80)
    print("PREDICTION SYSTEM SELECTOR")
    print("=" * 80)
    print("\nChoose Prediction System:")
    print("1. Number Prediction (n0 to n10)")
    print("2. NFT Prediction (Red/Green/Violet)")
    print("3. Exit")
    
    while True:
        try:
            choice = int(input("\nEnter your choice (1-3): "))
            
            if choice == 1:
                number_prediction_system()
                break
            elif choice == 2:
                nft_prediction_system()
                break
            elif choice == 3:
                print("\nExiting program. Goodbye!")
                break
            else:
                print("Invalid choice! Please enter 1, 2, or 3.")
        except ValueError:
            print("Invalid input! Please enter a number.")


if __name__ == "__main__":
    main()