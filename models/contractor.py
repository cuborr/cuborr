from .user import User
from .database import db

class Contractor(User):
    """
    Auftragnehmer (GER)

    The person who prints the 3D-Model
    """
    manufacturer = db.StringField()
    item_number = db.StringField()
    technology = db.StringField()
