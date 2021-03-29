from .database import db

class Assignment(db.Document):
    title = db.StringField()
    