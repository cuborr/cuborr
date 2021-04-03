from .database import db

class User(db.Document):
    first_name = db.StringField()
    last_name = db.StringField()

    country = db.StringField()

    email = db.StringField()
    phone_number = db.StringField()

    meta = { 'allow_inheritance': True }
