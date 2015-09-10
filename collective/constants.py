#coding=utf-8


class AbstractConstant(object):
    def __init__(self):
        self.ids = {}
        self.count = 0


    def set_ids(self, ids_dict):
        # check for duplicates
        if len(set(ids_dict.__values())) < len(ids_dict.__values()):
            raise ValueError('Duplicate id detected.')

        self.ids = ids_dict
        self.count = len(self.ids.__keys())


    # system functions
    def __records(self):
        return self.ids


    def __values(self):
        return self.ids.values()


    def __keys(self):
        return self.ids.keys()


class Enum(object):
    @classmethod
    def values(cls):
        return cls.__dict().values()


    @classmethod
    def keys(cls):
        return cls.__dict().keys()


    @classmethod
    def iteritems(cls):
        return cls.__dict().iteritems()


    @classmethod
    def __dict(cls):
        result = {}
        for k, v in vars(cls).iteritems():


            if not isinstance(k, basestring):
                if not isinstance(v, basestring):
                    result[k] = v

                elif not v[:2] == '__':
                    result[k] = v

            else:
                if not k[:2] == '__':
                    if not isinstance(v, basestring):
                        result[k] = v

                    elif not v[:2] == '__':
                        result[k] = v

        return result