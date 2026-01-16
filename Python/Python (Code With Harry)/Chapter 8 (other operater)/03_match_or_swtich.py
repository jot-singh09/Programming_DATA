def switch(status):
    match status:
        case 404:
            print("Error is coming")
        case _:
            print("Server Down \n Try Again!")

switch(404)

