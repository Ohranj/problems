import requests;
import os;


def main():
    day = input('Provide the day to fetch...\n');
    try:
        if day.isnumeric() is False:
            raise Exception('Input must be a number');
        cookies = {'session': get_key('sessionId')}
        r = requests.get(f"https://adventofcode.com/2020/day/{day}/input", cookies=cookies);
        r.raise_for_status()
        write_to_file(day, r.text)
    except Exception as e:
        print(e);
        print('Error fetching')


def get_key(key) -> str:
    session = None;
    with open('config.txt', 'r') as config_file:
        for line in config_file:
            key_val = line.split('=');
            if key_val[0] == key:
                session = key_val[1];
                break;
    return session


def write_to_file(day, body):
    dir_path =f"day_{day}";
    if not os.path.exists(dir_path):
        os.mkdir(path=dir_path)
    f = open(f"{dir_path}/input.txt", "w")
    f.write(body);
    f.close();


main();