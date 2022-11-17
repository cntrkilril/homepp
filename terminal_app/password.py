import string
import secrets

const_len = int(input())  ## длина пароля


def gen_rand_password(const_len):
    ## символы пароля (Нижний, верхний регистры, цифры, символы)
    symbols = string.ascii_lowercase + string.ascii_uppercase + string.digits + string.punctuation

    while True:

        ## составление пароля рандомом(secret)
        password = ''.join(secrets.choice(symbols) for i in range(const_len))

        ## проверка условий пароля
        if (any(c.islower() for c in password)  ## нижний регистр
            and any(c.isupper() for c in password)  ## верхний регистр
            and sum(c.isdigit() for c in password) >= 3  ## цифры
            and any(str.contains(string.punctuation)) for c in password):  ## пунктуация
            break
    ## вывод
    print(password)


gen_rand_password(const_len)