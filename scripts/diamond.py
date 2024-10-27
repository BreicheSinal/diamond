input = input("Enter a number: ")
num = int(input)

output = []

def palindrome(rows):
    for x in range(1, rows +1):
        for y in range(1, rows - x + 1):
            output.append(' ')
        for j in range(1, 2 * x):
            output.append('*')
        output.append('\n')
            
    for x in range(rows -1, 0, -1):
        for y in range(1, rows - x + 1):
            output.append(' ')
        for j in range(1, 2 * x):
            output.append('*')
        output.append('\n')
    return output

if(num > 0 | num != None):
    palindrome(num)
else:
    print('\n INVALID INPUT MATE ;)')

print(''.join(output))