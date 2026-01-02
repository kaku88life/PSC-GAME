import random

def get_computer_choice():
    """電腦隨機選擇"""
    return random.choice(['剪刀', '石頭', '布'])

def determine_winner(player, computer):
    """判斷勝負"""
    if player == computer:
        return '平手'

    winning_combinations = {
        '剪刀': '布',    # 剪刀贏布
        '石頭': '剪刀',  # 石頭贏剪刀
        '布': '石頭'     # 布贏石頭
    }

    if winning_combinations[player] == computer:
        return '你贏了！'
    else:
        return '你輸了！'

def play_game():
    """主遊戲迴圈"""
    choices = {'1': '剪刀', '2': '石頭', '3': '布'}
    score = {'wins': 0, 'losses': 0, 'ties': 0}

    print("=" * 30)
    print("   剪刀石頭布猜拳遊戲")
    print("=" * 30)

    while True:
        print("\n請選擇：")
        print("1. 剪刀 ✌️")
        print("2. 石頭 ✊")
        print("3. 布 🖐️")
        print("q. 結束遊戲")

        user_input = input("\n你的選擇: ").strip().lower()

        if user_input == 'q':
            print("\n" + "=" * 30)
            print("遊戲結束！")
            print(f"戰績：{score['wins']} 勝 / {score['losses']} 敗 / {score['ties']} 平手")
            print("=" * 30)
            break

        if user_input not in choices:
            print("無效的選擇，請輸入 1、2、3 或 q")
            continue

        player_choice = choices[user_input]
        computer_choice = get_computer_choice()

        print(f"\n你出：{player_choice}")
        print(f"電腦出：{computer_choice}")

        result = determine_winner(player_choice, computer_choice)
        print(f"結果：{result}")

        if '贏' in result:
            score['wins'] += 1
        elif '輸' in result:
            score['losses'] += 1
        else:
            score['ties'] += 1

        print(f"目前戰績：{score['wins']} 勝 / {score['losses']} 敗 / {score['ties']} 平手")

if __name__ == "__main__":
    play_game()
