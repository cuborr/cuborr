from .database import db

class User(db.Document):
    first_name = db.StringField(required=False)
    last_name = db.StringField(required=False)

    meta = { 'allow_inheritance': True }

    def to_json(self):
        return {
            "_id": str(self.pk),
            "first_name": self.first_name,
            "last_name": self.last_name,
        }