from .user import User
from .database import db
from .rating import Rating

class Contractor(User):
    """
    Auftragnehmer (GER)

    The person who prints the 3D-Model
    """
    printer_name = db.StringField()
    item_number = db.StringField()
    material = db.StringField()
    rating = db.ListField(db.EmbeddedDocumentField(Rating))

