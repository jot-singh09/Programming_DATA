# Percentage distribution rates
RED_RATE = 2  # 2%
GREEN_RATE = 2  # 2%
VIOLET_RATE = 3  # 3%

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
        user_distribution = (total_red * 100) / 100
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
        user_distribution = (total_green * 100) / 100
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
        user_distribution = (total_violet * 100) / 100
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