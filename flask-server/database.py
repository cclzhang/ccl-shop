def dict_factory(cursor, row):
    """Changes tuple list to dict (key value pairs)"""
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d
