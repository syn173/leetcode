from itertools import permutations, product

dMap = {
    'A': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
}
def cal24(s):
    if "joker" in s or 'JOKER' in s:
        return 'NONE'
    sArr = s.split(' ')

    allSeq = list(permutations(sArr))
    optSeq = list(product(['+', '-', '*', '/'], repeat=3))
    # print(optSeq)

    for seq in allSeq:
        for opt in optSeq:
            if can24(seq, opt):
                res = seq[0]
                for i in range(3):
                    res+= opt[i] + seq[i + 1]
                return res


    return 'NONE'

def can24(seq, opt):
    nums = list(map(lambda x: dMap[x], seq))
    res = nums[0]

    for i in range(3):
        res = eval(str(res) + opt[i] + str(nums[i + 1]))

    return int(res) == 24

s = input()
print(cal24(s))