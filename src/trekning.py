import random
import json


def randomize():

    rom = ['Kjøkken, gang', 'Bad', 'Stue']
    søppel = ['Glass', 'Papp', 'Pant']

    random.shuffle(rom)
    random.shuffle(søppel)

    zipvask = list(zip(rom, søppel))
    vask = [zipvask[0][0] + " og " + zipvask[0][1], zipvask[1][0] +
            " og " + zipvask[1][1], zipvask[2][0] + " og " + zipvask[2][1]]
    return vask


json_data = {}


def add_data():
    for i in range(1, 53):
        vask = randomize()
        json_data[i] = vask


add_data()
json_ = json.dumps(json_data, indent=4)
with open('vaskeliste.json', 'w') as outfile:
    outfile.write(json_)
