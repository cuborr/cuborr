from .database import db

class User(db.Document):
    first_name = db.StringField()
    last_name = db.StringField()
