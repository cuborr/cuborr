from .user import User
from .database import db

class Client(User):
    """
    Auftraggeber (GER)

    The person who creates a new assignemt for printing
    a 3D-Model and selects the client
    """
    street_address = db.StringField()
    city = db.StringField()
    postal_code = db.StringField()
