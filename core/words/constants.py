# coding=utf-8
from collective.constants import Enum


class Grammemes(object):
    class Post(Enum):
        """
        Частини мови
        """

        # самостійні
        NOUN = 0    # іменник
        ADJF = 1    # прикметник
        NUMR = 3    # числівник
        NPRO = 4    # займенник
        VERB = 2    # дієслово
        ADVB = 5    # прислівник

        # службові
        CONJ = 6    # сполучник
        PREP = 7    # прийменник
        PRCL = 8    # частка

        # окремі
        INTJ = 9    # вигук
        DSJT = 10   # модальник


    class ANim(Enum):
        anim = 0    # одухотворене
        inan = 1    # неодухотворене


    class Gender(Enum):
        masc = 0    # чоловічий
        femn = 1    # жіночий
        neut = 2    # середній
        Ms_f = 3    # не визначений

